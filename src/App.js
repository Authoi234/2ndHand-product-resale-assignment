import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './Router/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
