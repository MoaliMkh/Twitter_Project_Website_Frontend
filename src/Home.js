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

    const [image_sentiments, setImageSentiments] = useState('')

  
    const getResponse = async (username) => {
      const response = await axios.get('http://127.0.0.1:8000/user/', {
        params: {username: username }
      });
      setImageSentiments('1#2#3#5#9')
      const tweets_sentiments = response.data.tweets_sentiments

      const friends_sentiments = response.data.friends_sentiments

      const images_distance = response.data.images_distance

      const tweets_distance = response.data.tweets_distance
      const images_topics = response.data.images_topics
      const tweets_topics = response.data.tweets_topics

      const raw_data = JSON.stringify(response.data).replace("\\", "")
    //   console.log(JSON.parse(raw_data))

    //   console.log({\"id\":\"1\",\"tweeter_id\":\"SElahimanesh\",\"images_sentiments\":\"1#3#5#6#5\",\"tweets_sentiments\":\"1#3#5#6#5\",\"friends_sentiments\":\"1#3#5#6#5\",\"images_distance\":\"20\",\"tweets_distance\":\"40\",\"images_topics\":\"1#3#5#6#1#3#5#6#5#5#5\",\"tweets_topics\":\"1#3#5#6#1#3#5#6\"})
    //   )))
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
        resultReady?<ChartSection images={image_sentiments} /> : <InputComponent twitterId={twitterID} setTwitterID={setTwitterID} submitCallback={submitID} />}
    
    </div>
    )
}

export default Home;