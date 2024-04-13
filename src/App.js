import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './Router/Routes';
import { Toaster } from 'react-hot-toast';

function App() {


  window.addEventListener('load', () => {
    const loader = document.getElementById("preloader");
    loader.style.display = "none";
  });

  
  return (
    <div className="App">
      <div id="preloader"></div>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
