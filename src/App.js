import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {Route, BrowserRouter, Routes, HashRouter} from "react-router-dom";
import About from "./components/main/About";
import Skills from "./components/main/Skills";
import Portfolio from "./components/main/Portfolio";
import useThemeChange from "./hooks/useThemeChange";
import Contacts from "./components/main/Contacts";




function App() {
    const { handleThemeChangeFromStorage, handleColorChangeFromStorage} = useThemeChange()

    handleColorChangeFromStorage()
    handleThemeChangeFromStorage()


       return (

        <HashRouter>
            <div className="App">
                <Header/>
                <main>
                    <Routes>
                        <Route exact path="/" element={<About/>}/>
                        <Route exact path="/skills" element={<Skills/>}/>
                        <Route exact path="/portfolio" element={<Portfolio />} />
                        <Route exact path="/contacts" element={<Contacts />}/>
                    </Routes>
                </main>
                <Footer />
            </div>



        </HashRouter>
    );
}

export default App;
