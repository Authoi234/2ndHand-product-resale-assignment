import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './Router/Routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {

  const queryClient = new QueryClient()

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes}></RouterProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
