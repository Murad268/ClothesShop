import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import './reset.scss'
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
    

);

