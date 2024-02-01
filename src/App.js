import React from "react";
import MyForm from "./containers/Form";
import AudioForm from "./containers/AudioForm";
import LandingPage from "./containers/LandingPage";
import { Router } from "@reach/router"

import './styles/style.css'

const Home = () => ( <div>
                        <MyForm path="/" />
                        <AudioForm />
                        <LandingPage />
                    </div>)

const ContactUs = () => (<div>
                        <div>Contact us page</div>
                        <LandingPage />
                        </div>)

function App() {
    return (
        <Router>
            <Home path="/" />
            <ContactUs path="/contact" />
        </Router>
    )
}
export default App