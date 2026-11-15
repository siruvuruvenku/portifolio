import type { ArchitectureDiagramData, ArchitectureNode, ArchitectureNodeKind } from '../types';

interface ArchitectureDiagramProps {
  diagram: ArchitectureDiagramData;
  projectName: string;
}

interface PositionedNode {
  node: ArchitectureNode;
  x: number;
  y: number;
  layerIndex: number;
}

const canvasWidth = 1000;
const layerHeight = 112;
const cardWidth = 184;
const cardHeight = 64;
const nodeAreaLeft = 165;
const nodeAreaWidth = 810;

const kindLabels: Record<ArchitectureNodeKind, string> = {
  client: 'CLIENT',
  gateway: 'GATEWAY',
  service: 'SERVICE',
  database: 'DATABASE',
  cache: 'CACHE',
  queue: 'MESSAGE QUEUE',
  external: 'EXTERNAL',
  monitoring: 'OBSERVABILITY',
  storage: 'OBJECT STORAGE',
  test: 'TESTS',
};

function wrapLabel(label: string) {
  const words = label.split(' ');
  const lines: string[] = [];
  let line = '';

  words.forEach((word) => {
    const candidate = line ? `${line} ${word}` : word;
    if (candidate.length > 23 && line) {
      lines.push(line);
      line = word;
    } else {
      line = candidate;
    }
  });

  if (line) lines.push(line);
  return lines.length > 2 ? [`${lines[0]}...`, lines[1]] : lines;
}

function positionNodes(diagram: ArchitectureDiagramData) {
  const positions = new Map<string, PositionedNode>();

  diagram.layers.forEach((layer, layerIndex) => {
    const count = layer.nodes.length;
    const gap = count > 1 ? Math.min(34, (nodeAreaWidth - count * cardWidth) / (count - 1)) : 0;
    const rowWidth = count * cardWidth + Math.max(0, count - 1) * gap;
    const startX = nodeAreaLeft + (nodeAreaWidth - rowWidth) / 2;

    layer.nodes.forEach((node, nodeIndex) => {
      positions.set(node.id, {
        node,
        x: startX + nodeIndex * (cardWidth + gap),
        y: layerIndex * layerHeight + 34,
        layerIndex,
      });
    });
  });

  return positions;
}

export default function ArchitectureDiagram({ diagram, projectName }: ArchitectureDiagramProps) {
  const positions = positionNodes(diagram);
  const height = diagram.layers.length * layerHeight + 12;

  return (
    <div className="architecture-panel">
      <div className="architecture-heading">
        <div><span className="section-index">ARCHITECTURE OVERVIEW</span><h3>{projectName} · service map</h3></div>
        <span className="diagram-label">ILLUSTRATIVE · NOT CONNECTED</span>
      </div>
      <div className="architecture-canvas">
        <svg
          className="architecture-diagram"
          viewBox={`0 0 ${canvasWidth} ${height}`}
          role="img"
          aria-label={`${projectName} connected service architecture`}
        >
          <defs>
            <marker id="architecture-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M0 0 8 4 0 8z" fill="context-stroke" />
            </marker>
          </defs>
          {diagram.layers.map((layer, index) => {
            const y = index * layerHeight + 12;
            return (
              <g className="architecture-layer" key={layer.name}>
                <rect x="10" y={y} width={canvasWidth - 20} height="94" rx="12" />
                <text x="25" y={y + 22} className="architecture-layer-label">{layer.name.toUpperCase()}</text>
              </g>
            );
          })}
          <g className="architecture-connections">
            {diagram.connections.map((connection, index) => {
              const from = positions.get(connection.from);
              const to = positions.get(connection.to);
              if (!from || !to) return null;

              const sameLayer = from.layerIndex === to.layerIndex;
              const sourceX = sameLayer
                ? (from.x < to.x ? from.x + cardWidth : from.x)
                : from.x + cardWidth / 2;
              const sourceY = sameLayer ? from.y + cardHeight / 2 : from.y + cardHeight;
              const targetX = sameLayer
                ? (from.x < to.x ? to.x : to.x + cardWidth)
                : to.x + cardWidth / 2;
              const targetY = sameLayer ? to.y + cardHeight / 2 : to.y;
              const curveY = sourceY + (targetY - sourceY) / 2;
              const path = sameLayer
                ? `M ${sourceX} ${sourceY} C ${sourceX + (targetX - sourceX) / 2} ${sourceY - 18}, ${targetX - (targetX - sourceX) / 2} ${targetY - 18}, ${targetX} ${targetY}`
                : `M ${sourceX} ${sourceY} C ${sourceX} ${curveY}, ${targetX} ${curveY}, ${targetX} ${targetY}`;
              return (
                <g className={`architecture-edge${connection.asynchronous ? ' is-async' : ''}`} key={`${connection.from}-${connection.to}-${index}`}>
                  <title>{connection.label}</title>
                  <path d={path} markerEnd="url(#architecture-arrow)" />
                </g>
              );
            })}
          </g>
          <g className="architecture-nodes">
            {diagram.layers.flatMap((layer) => layer.nodes).map((node) => {
              const position = positions.get(node.id);
              if (!position) return null;
              const lines = wrapLabel(node.label);
              const labelY = lines.length > 1 ? position.y + 43 : position.y + 47;

              return (
                <g className="architecture-card" data-kind={node.kind} key={node.id}>
                  <title>{`${kindLabels[node.kind]}: ${node.label}`}</title>
                  <rect x={position.x} y={position.y} width={cardWidth} height={cardHeight} rx="10" />
                  <circle cx={position.x + 16} cy={position.y + 17} r="4" />
                  <text className="architecture-kind" x={position.x + 27} y={position.y + 20}>{kindLabels[node.kind]}</text>
                  <text className="architecture-node-label" x={position.x + 13} y={labelY}>
                    {lines.map((line, index) => <tspan x={position.x + 13} dy={index === 0 ? 0 : 13} key={line}>{line}</tspan>)}
                  </text>
                </g>
              );
            })}
          </g>
        </svg>
      </div>
      <div className="architecture-legend" aria-label="Connection types">
        <span><i /> Synchronous request</span>
        <span><i className="async-line" /> Asynchronous event</span>
      </div>
      <p className="architecture-note">Conceptual service relationships for this case study. This portfolio does not connect to these services.</p>
    </div>
  );
}
