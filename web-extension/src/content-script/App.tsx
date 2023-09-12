import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Aside from './components/aside';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Aside />
    </QueryClientProvider>
  );
}

export default App;
