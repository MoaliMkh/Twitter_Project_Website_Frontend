import './ChartSection.css';
import Chart from 'chart.js/auto';
import { useEffect } from "react";
import {Button} from 'antd'
import { Link } from 'react-router-dom';
import { RightOutlined} from '@ant-design/icons';



const ChartSection = () => {

    useEffect(() => {
      loadChart('Tweets', [12, 19, 3, 5, 2])
      loadChart('Images', [3, 4, 3, 4, 3])
      loadChart('Friends', [4, 5, 8, 3, 2])
    });

    const loadChart = (id, data) => {
      const ctx = document.getElementById(id);
    
      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Angry', 'Sad', 'Neutral', 'Joy/Happy', 'Surprise/Emotional'],
          datasets: [{
            label: '# of Votes',
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
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', alignContent: 'center', paddingRight: 10}}>
      <div className='top-container' style={{marginTop: 0, marginRight: 10}}>

      <div className='sentiment-container'>

      <div className='pie-chart'>
        <canvas id="Tweets"></canvas>
      </div>

      <div className='pie-chart'>
        <canvas id="Images"></canvas>
      </div>

      <div className='pie-chart'>
        <canvas id="Friends"></canvas>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

    </div>

      <div className="task-progress" style={{marginTop: 80}}>
        <p>How much similar are you in the <b style={{color: 'red'}}>real-world</b> compared to your <b style={{color: 'red'}}>tweets</b>?
        <span>20/3-0</span>
        </p>
        <progress className="progress progress--task3" max="100" value="20"></progress>
      </div>

      <div className="task-progress" style={{marginTop: 50}}>
        <p>How much similar are you in the <b style={{color: 'red'}}>real-world</b> compared to your <b style={{color: 'red'}}>images</b>?
        <span>20/3-0</span>
        </p>
        <progress className="progress progress--task4" max="100" value="40"></progress>
      </div>
    </div>
          <Link to='/topics'>
          <Button icon={<RightOutlined />} size='large' dir='rtl' style={{marginLeft: 40}} danger ghost>Next</Button>
          </Link>
    </div>

    );
}



export default ChartSection;