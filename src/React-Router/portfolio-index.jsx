import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import { EMICalculator } from "../components/keyboard-element-demo/emi-calculator"
import { FakeStoreDemo } from "../components/api-demo/fakestore"


export function PortfolioIndex(){
    return(
        <div className="container-fluid">
            <BrowserRouter>
            <header className="text-center">
                <div className="fs-2">John</div>
                <div className="fs-5">React Developer</div>
                <div className="fs-5">My Project</div>

                <nav>
                    <span><Link to="/">Home</Link></span>
                    <span children className="mx-4"><Link to="/emi">EMI Calculater</Link></span>
                     <span children className="mx-4"><Link to="/fakestore">fakestore</Link></span>
                      
                </nav>
            </header>

            <section>
                <Routes>
                    <Route path="/" element= {<div>Hello! I am React Developer</div>}></Route>
                    <Route path="/emi" element= {<EMICalculator/>}></Route>
                    <Route path="/fakestore" element= {<FakeStoreDemo/>}></Route>
                </Routes>
            </section>
            </BrowserRouter>

        </div>
    )
}