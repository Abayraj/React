import { useState } from 'react'
import FaqsData from './FaqData'
import Faq from './components/Faqq'
import Slider from "./components/Slide"
import "./App.css";

function App() {
  return (
    
    <>

    <Slider/>
    <h1>asked questions</h1>
    <Faq FaqsData={FaqsData}/>
    </>
  )
}

export default App;
