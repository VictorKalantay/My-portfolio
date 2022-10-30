import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import About from "./components/main/About";
import Skills from "./components/main/Skills";
import Portfolio from "./components/main/Portfolio";
import Education from "./components/main/Education";




function App() {

   return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <main>
                    <Routes>
                        <Route exact path="/My-portfolio/" element={<About/>}/>
                        <Route exact path="/My-portfolio/skills" element={<Skills/>}/>
                        <Route exact path="/My-portfolio/portfolio" element={<Portfolio />} />
                        <Route exact path="/My-portfolio/education" element={<Education/>}/>
                    </Routes>
                </main>
                <Footer />
            </div>



        </BrowserRouter>
    );
}

export default App;
