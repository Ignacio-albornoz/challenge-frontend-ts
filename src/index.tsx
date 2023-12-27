import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SearchProvider } from './context/search';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <SearchProvider>
      <App />
    </SearchProvider>
  );
}
