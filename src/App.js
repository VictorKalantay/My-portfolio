import './App.css';
import Header from "./components/header/Header";
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
                        <Route path=" " element={<About/>}/>
                        <Route path="/skills" element={<Skills/>}/>
                        <Route path="/portfolio" element={<Portfolio/>}/>
                        <Route path="/education" element={<Education/>}/>
                    </Routes>
                </main>
            </div>



        </BrowserRouter>
    );
}

export default App;
