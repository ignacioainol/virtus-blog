import { createRoot } from 'react-dom/client';
import { BlogApp } from './BlogApp';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<BlogApp />);