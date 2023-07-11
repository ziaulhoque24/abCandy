import { useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  useEffect(() => {
    document.title = `abCandy`;
  }, []);
  return (
    <main className='flex flex-col min-h-screen'>
      <Header />
      <div className='flex-grow'>
        <LandingPage />
      </div>
      <Footer />
    </main>
  );
}

export default App;
