import './App.css';
import {useState , uesEffect, useEffect } from "react"
import Button from './components/Button';

function App() {
  const [showLoader , setLoader] = useState(true);
  const [qoute , SetQuote] = useState({});
   const print = () =>{
      setLoader(true);
      fetch(`https://quote-garden.herokuapp.com/api/v3/quotes`) 
      .then((res) => res.json())
      .then(data => {
        if(data.statusCode === 200){
          console.log(data.data[Math.floor(Math.random()*data.data.length-1)]);
          SetQuote(data.data[Math.floor(Math.random()*data.data.length-1)]);
          setLoader(false);
        }
      })
   }
  // print();
  useEffect(print , [SetQuote])
  return (
    <div className="App">
       <h1 className="heading"> Randon qoute Generator</h1>
        { showLoader ? (
          <h2>Fetching a new qoute !!!</h2>
        ):(
          <div className="App">
                 <q>{qoute?.quoteText}</q>
                {/* {console.log(qoute?.qouteText)} */}
                 <h4>- {qoute?.quoteAuthor}</h4>
          </div>
         
        )}
        <Button name={"get a qoute"} onPress={print}></Button>
    </div>
  );
}

export default App;
