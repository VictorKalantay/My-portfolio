import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {Route, BrowserRouter, Routes, useParams} from "react-router-dom";
import About from "./components/main/About";
import Skills from "./components/main/Skills";
import Portfolio from "./components/main/Portfolio";
import useThemeChange from "./hooks/useThemeChange";
import Contacts from "./components/main/Contacts";


function App() {
    const {handleThemeChangeFromStorage, handleColorChangeFromStorage} = useThemeChange()

    handleColorChangeFromStorage()
    handleThemeChangeFromStorage()
    const urlParam = useParams()

    return (

        <BrowserRouter>
            <div className="App">
                <Header/>
                <main>
                    <Routes>
                        <Route exact path="/My-portfolio" element={<About/>}/>
                        <Route path="/skills" element={<Skills/>}/>
                        <Route path="/repositories" element={<Portfolio/>}/>
                        <Route path="/contacts" element={<Contacts/>}/>
                    </Routes>
                </main>
                <Footer/>
            </div>


        </BrowserRouter>
    );
}

export default App;
