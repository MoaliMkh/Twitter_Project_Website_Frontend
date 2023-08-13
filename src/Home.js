import axios from 'axios';
import './App.css';
import { useState } from 'react';
import InputComponent from './InputComponent'
import IsLoadingComponent from './IsLoadingComponent'
import ChartSection from './ChartSection'


const Home = () => {

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
        getResponse(twitterID)
        setIsLoading(false)
        setResultReady(true)
      }, 1500);
    
    }


    return (
    <div>
        <div className='header-box'>
          <h3>How Much Similarity Do You Have in The Real-World with Your Characteristics in Social Media?</h3>
          <hr />    
        </div>
        {isLoading? 
        <div style={{ marginTop: 300}}><IsLoadingComponent /></div>: 
        resultReady?<ChartSection /> : <InputComponent twitterId={twitterID} setTwitterID={setTwitterID} submitCallback={submitID} />}
    
    </div>
    )
}

export default Home;