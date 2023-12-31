import './ChartSection.css';
import Chart from 'chart.js/auto';
import { useEffect } from "react";
import {Button} from 'antd'
import { Link } from 'react-router-dom';
import { RightOutlined} from '@ant-design/icons';
import { useLocation } from 'react-router-dom';

let chart1 = null;
let chart2 = null;
let chart3 = null;

const ChartSection = () => {
  const {state} = useLocation();

      const images_distance = parseFloat(state.all_data.images_distance)
      const tweets_distance = parseFloat(state.all_data.tweets_distance)
      const tweet_image_dist = parseFloat(state.all_data.images_tweets_distance)

    useEffect(() => {

      const image_sentiments = state.all_data.images_sentiments.split('#').map(str => {
        return parseFloat(str);
      });
      const tweet_sentiments = state.all_data.tweets_sentiments.split('#').map(str => {
        return parseFloat(str, 10);
      });
      const friends_sentiments = state.all_data.friends_sentiments.split('#').map(str => {
        return parseFloat(str);
      });

      if (chart1 != null){
        chart1.destroy()
        chart1 = loadChart('Tweets', tweet_sentiments);
      }
      
      else{
        chart1 = loadChart('Tweets', tweet_sentiments);
      }

      if (chart2 != null){
        chart2.destroy()
        chart2 = loadChart('Images', image_sentiments);
      }

      else{
          chart2 = loadChart('Images', image_sentiments);
      }

      if (chart3 != null){
        chart3.destroy()
        chart3 = loadChart('Friends', friends_sentiments)
      }

      else{
        chart3 = loadChart('Friends', friends_sentiments)
      }
    });

    const loadChart = (id, data) => {
      const ctx = document.getElementById(id);
    
      return new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Happy', 'Sad', 'Angry', 'Neutral', 'Passion/Surprise/Nostalgia'],
          datasets: [{
            label: `% of ${id}`,
            data: data,
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }

    return (
      <>
        <div className='header-box'>
        <h3>How Much Similarity Do You Have in The Real-World with Your Characteristics in Social Media?</h3>
        <hr />    
      </div>
      <div className='box-con'>
      <div className='top-container' style={{marginTop: 0, marginRight: 10}}>

      <div className='sentiment-container'>

      <div className='pie-chart'>
        <canvas id="Tweets"></canvas>
        <p>Your Tweets</p>
      </div>

      <div className='pie-chart'>
        <canvas id="Images"></canvas>
        <p>Your Images</p>

      </div>

      <div className='pie-chart'>
        <canvas id="Friends"></canvas>
        <p>Your Friends</p>

      </div>
      <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

    </div >

      <div className="task-progress">
        <p>How much similarity exists between your <b style={{color: 'red'}}>real-world personality</b> and your <b style={{color: 'red'}}>tweets</b>? 
        <span>{tweets_distance}/100</span>
        </p>
        <progress className="progress progress--task3" max="100" value={tweets_distance}></progress>
      </div>

      <div className="task-progress">
        <p>How much similarity exists between your <b style={{color: 'red'}}>real-world personality</b> and your <b style={{color: 'red'}}>images</b>? 
        <span>{images_distance}/100</span></p>
        <progress className="progress progress--task4" max="100" value={images_distance}></progress>
      </div>

      <div className="task-progress">
        <p>How much similarity exists between your <b style={{color: 'red'}}>tweets</b> and your <b style={{color: 'red'}}>images</b>? 
        <span>{tweet_image_dist}/100</span>
        </p>
        <progress className="progress progress--task2" max="100" value={tweet_image_dist}></progress>
      </div>

    </div>
          <Link to='/topics' state={state}>
          <Button icon={<RightOutlined />} size='large' dir='rtl' style={{marginLeft: 40}} danger ghost>Next</Button>
          </Link>
    </div>
    </>

    );
}

export default ChartSection;
