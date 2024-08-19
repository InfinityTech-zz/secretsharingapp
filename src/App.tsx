import React from 'react';
import logo from './logo.svg';
import AddSecret from './AddSecret';
import ShowSecret from './ShowSecret';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';

const queryClient = new QueryClient();

function App() {
  console.log(process.env.REACT_APP_API_BASE_URL);
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <AddSecret />
      </QueryClientProvider>
    </div>
  );
}

export default App;
