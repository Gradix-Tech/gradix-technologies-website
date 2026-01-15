import { useEffect } from 'react';
import './App.css'
import MainRoutes from './Pages/Routes/MainRoutes'
import Lenis from 'lenis';

function App() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <MainRoutes />
    </>
  )
}

export default App
