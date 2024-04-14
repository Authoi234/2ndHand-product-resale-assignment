import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './Router/Routes';
import { Toaster } from 'react-hot-toast';
import preloaderImg from './assets/images/2eVCvQ-LogoMakr.png';

function App() {


  window.addEventListener('load', () => {
    const loader = document.getElementById("preloader");
    setTimeout(() => {
      loader.style.display = "none";
    }, 2000)
  });


  return (
    <div className="App">
      <div id="preloader" className='flex justify-center items-center'>
        <div>
          <img className='animate-bounce' src={preloaderImg} alt="" />
          <div className="flex items-center justify-center">
            <span className="loading loading-dots w-10 bg-accent"></span>
            <span className="loading loading-dots w-10 bg-accent"></span>
            <span className="loading loading-dots w-10 bg-accent"></span>
          </div>
        </div>
      </div>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
