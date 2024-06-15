import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';

import { ThemeProvider } from '@material-tailwind/react';
import { Toaster } from 'sonner';

import App from './App';
import './index.css';
import { theme } from '@services/provider/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider value={theme}>
      <App />
      <Toaster richColors expand position="top-right" />
    </ThemeProvider>
  </StrictMode>,
);
