// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// import { test } from 'dot-ui';
import React from 'react';
import { createRoot } from 'react-dom/client';
// import { RecoilRoot } from 'recoil';

// import { GlobalStyle } from '@/styles/globalStyle';

// import { App } from './App';
// import '@/styles/index.css';

// if (process.env.NODE_ENV === 'development') {
//   const { worker } = require('./mocks/browser');
//   worker.start();
// }

const container = document.getElementById('root');
const root = createRoot(container as Element);
// const a = test();
root.render(
  <React.StrictMode>
    <div>hello world</div>
    {/* <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen />
        <GlobalStyle />
        <App />
      </QueryClientProvider>
    </RecoilRoot> */}
  </React.StrictMode>,
);
