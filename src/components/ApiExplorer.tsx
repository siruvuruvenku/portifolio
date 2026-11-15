import { useMemo, useState } from 'react';
import { Check, ChevronDown, ChevronUp, Clipboard, Search, ShieldCheck } from 'lucide-react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsonLanguage from 'react-syntax-highlighter/dist/esm/languages/prism/json';
import oneDark from 'react-syntax-highlighter/dist/esm/styles/prism/one-dark';
import type { ApiEndpoint, ApiMethod } from '../types';

interface ApiExplorerProps {
  endpoints: ApiEndpoint[];
}

const methods: Array<'ALL' | ApiMethod> = ['ALL', 'GET', 'POST', 'PUT', 'DELETE'];
const json = (value: unknown) => JSON.stringify(value, null, 2);
SyntaxHighlighter.registerLanguage('json', jsonLanguage);

export default function ApiExplorer({ endpoints }: ApiExplorerProps) {
  const [method, setMethod] = useState<'ALL' | ApiMethod>('ALL');
  const [query, setQuery] = useState('');
  const [expanded, setExpanded] = useState<string | null>(endpoints[0]?.id ?? null);
  const [copied, setCopied] = useState<string | null>(null);

  const visibleEndpoints = useMemo(() => endpoints.filter((endpoint) => {
    const matchesMethod = method === 'ALL' || endpoint.method === method;
    const text = `${endpoint.path} ${endpoint.description} ${endpoint.purpose}`.toLowerCase();
    return matchesMethod && text.includes(query.toLowerCase().trim());
  }), [endpoints, method, query]);

  async function copyText(key: string, value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(key);
      window.setTimeout(() => setCopied((current) => current === key ? null : current), 1600);
    } catch (error) {
      console.error('Clipboard copy failed:', error);
      window.prompt('Copy this example:', value);
    }
  }

  return (
    <div className="api-explorer">
      <div className="api-notice"><ShieldCheck size={16} /><div><b>Illustrative API documentation</b><span>These examples describe a project design. They are not live endpoints and no requests are sent.</span></div><span className="api-demo-badge">DEMO ONLY</span></div>
      <div className="api-toolbar">
        <div className="api-filters" role="group" aria-label="Filter endpoints by method">{methods.map((item) => <button key={item} className={method === item ? 'active' : ''} onClick={() => setMethod(item)}>{item}</button>)}</div>
        <label className="api-search"><Search size={15} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search endpoints..." aria-label="Search API endpoints" />{query && <button onClick={() => setQuery('')} aria-label="Clear search">×</button>}</label>
      </div>
      <div className="endpoint-list">
        {visibleEndpoints.map((endpoint) => {
          const isOpen = expanded === endpoint.id;
          return (
            <article className={`endpoint-card ${isOpen ? 'endpoint-open' : ''}`} key={endpoint.id}>
              <button className="endpoint-summary" onClick={() => setExpanded(isOpen ? null : endpoint.id)} aria-expanded={isOpen}>
                <span className={`http-method method-${endpoint.method.toLowerCase()}`}>{endpoint.method}</span><code>{endpoint.path}</code><span className="endpoint-description">{endpoint.description}</span>
                {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {isOpen && <div className="endpoint-detail">
                <div className="endpoint-meta"><p><b>Authentication</b><span>{endpoint.auth}</span></p><p><b>Business purpose</b><span>{endpoint.purpose}</span></p></div>
                <div className="api-code-grid">
                  {endpoint.request !== undefined && <div className="api-code-block"><div className="api-code-title"><span>REQUEST EXAMPLE</span><button onClick={() => void copyText(`${endpoint.id}-request`, json(endpoint.request))}>{copied === `${endpoint.id}-request` ? <Check size={13} /> : <Clipboard size={13} />}{copied === `${endpoint.id}-request` ? 'Copied' : 'Copy JSON'}</button></div><SyntaxHighlighter language="json" style={oneDark} customStyle={{ margin: 0, padding: '15px', background: 'transparent', fontSize: '12px' }}>{json(endpoint.request)}</SyntaxHighlighter></div>}
                  <div className="api-code-block"><div className="api-code-title"><span>RESPONSE EXAMPLE</span><button onClick={() => void copyText(`${endpoint.id}-response`, json(endpoint.response))}>{copied === `${endpoint.id}-response` ? <Check size={13} /> : <Clipboard size={13} />}{copied === `${endpoint.id}-response` ? 'Copied' : 'Copy JSON'}</button></div><SyntaxHighlighter language="json" style={oneDark} customStyle={{ margin: 0, padding: '15px', background: 'transparent', fontSize: '12px' }}>{json(endpoint.response)}</SyntaxHighlighter></div>
                </div>
                <button className="copy-endpoint" onClick={() => void copyText(`${endpoint.id}-endpoint`, `${endpoint.method} ${endpoint.path}`)}>{copied === `${endpoint.id}-endpoint` ? <Check size={14} /> : <Clipboard size={14} />}{copied === `${endpoint.id}-endpoint` ? 'Endpoint copied' : 'Copy endpoint'}</button>
              </div>}
            </article>
          );
        })}
        {visibleEndpoints.length === 0 && <div className="api-empty">No illustrative endpoints match “{query}”. Try another search or method.</div>}
      </div>
    </div>
  );
}
