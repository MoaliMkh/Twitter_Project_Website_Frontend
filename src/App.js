import './App.css';
import { useState } from "react";
import { ProgressBarComponent } from '@syncfusion/ej2-react-progressbar';
import axios from 'axios';
import IsLoadingComponent from './IsLoadingComponent';
import ChartSection from './ChartSection';
import Topics from './Topics';
import InputComponent from './InputComponent'

function App() {

  const [twitterID, setTwitterID] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [resultReady, setResultReady] = useState(false)

  const getResponse = async (username) => {
    const response = await axios.get('http://127.0.0.1:8000/user/', {
      params: {username: username }
    });
    console.log(response)
  }

  const submitID = () => {
    setIsLoading(true)
    setTimeout(function() {
      //your code to be executed after 1 second
      getResponse(twitterID)
      setIsLoading(false)
      setResultReady(true)
    }, 1500);
  
  }

  return (
    <div className="App">

    <div className='header-box'>
      <h3>How Much Similarity Do You Have in The Real-World with Your Characteristics in Social Media?</h3>
      <hr />    
    </div>
    {isLoading? 
    <div style={{ marginTop: 300}}><IsLoadingComponent /></div>: 
    resultReady? <div><ChartSection /><Topics/></div> : <InputComponent twitterId={twitterID} setTwitterID={setTwitterID} submitCallback={submitID} />}

    </div>
  );
}

export default App;
