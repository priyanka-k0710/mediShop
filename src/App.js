import React from 'react';
import Tesseract from 'tesseract.js';
import './App.css';

const loadData = async () => {
const result = await Tesseract.recognize(
  "https://tesseract.projectnaptha.com/img/eng_bw.png",
  "eng",
  { logger: m => console.log(m) }
);
console.log(result);
};
loadData();
 
function App() {
  return (
    <div className="App">
    <h1> Priyanka </h1>
    </div>
  );
}

export default App;
