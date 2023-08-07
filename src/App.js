import logo from './logo.svg';
import './App.css';
import Chart from 'chart.js/auto';
import { useState, useEffect } from "react";
import axios from 'axios';


function App() {

  const getResponse = async (username) => {
    const response = await axios.get('http://127.0.0.1:8000/user/', {
      params: {username: username }
    });
    console.log(response)
  }

  useEffect(() => {
    // code to run after render goes here
    loadChart('Tweets', [12, 19, 3, 5, 2])
    loadChart('Images', [3, 4, 3, 4, 3])
    loadChart('Friends', [4, 5, 8, 3, 2])
    getResponse('SElahimanesh')
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

  // loadChart()

  return (
    <div className="App">

    <div className='header-box'>
      <h3>How Much Similarity Do You Have in The Real-World with Your Characteristics in Social Media?</h3>
      <hr />    
    </div>

      <div className='top-container'>

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

        <div className="task-progress">
          <p>How much similar are you in the real-world similar to your tweets?
          <span>20/3-0</span>
          </p>
          <progress className="progress progress--task3" max="100" value="20"></progress>
        </div>

        <div className="task-progress">
          <p>How much similar are you in the real-world similar to your images?
          <span>20/3-0</span>
          </p>
          <progress className="progress progress--task4" max="100" value="40"></progress>
        </div>
      </div>
     

      
 
      <div className='bottom-container'>
        <div className='topics'>

            <h3>Topics of Your Tweets</h3>
            <hr />
            <div className="task-progress-2">
              <p>Politics
              </p>
              <progress className="progress-2 progress--task1" max="100" value="40"></progress>
            </div>

            <div className="task-progress-2">
              <p>Social
              </p>
              <progress className="progress-2 progress--task2" max="100" value="40"></progress>
            </div>

            <div className="task-progress-2">
              <p>Social
              </p>
              <progress className="progress-2 progress--task3" max="100" value="40"></progress>
            </div>

            <div className="task-progress-2">
              <p>Social
              </p>
              <progress className="progress-2 progress--task4" max="100" value="40"></progress>
            </div>

            <div className="task-progress-2">
              <p>Social
              </p>
              <progress className="progress-2 progress--task1" max="100" value="40"></progress>
            </div>

            <div className="task-progress-2">
              <p>Social
              </p>
              <progress className="progress-2 progress--task2" max="100" value="40"></progress>
            </div>

            <div className="task-progress-2">
              <p>Social
              </p>
              <progress className="progress-2 progress--task3" max="100" value="40"></progress>
            </div>

            <div className="task-progress-2">
              <p>Social
              </p>
              <progress className="progress-2 progress--task4" max="100" value="40"></progress>
            </div>

        </div>

        <div className='topics'>

<h3>Topics of Your Media Images</h3>
<hr />
<div className="task-progress-2">
  <p>Politics
  </p>
  <progress className="progress-2 progress--task1" max="100" value="40"></progress>
</div>

<div className="task-progress-2">
  <p>Social
  </p>
  <progress className="progress-2 progress--task2" max="100" value="40"></progress>
</div>

<div className="task-progress-2">
  <p>Social
  </p>
  <progress className="progress-2 progress--task3" max="100" value="40"></progress>
</div>

<div className="task-progress-2">
  <p>Social
  </p>
  <progress className="progress-2 progress--task4" max="100" value="40"></progress>
</div>

<div className="task-progress-2">
  <p>Social
  </p>
  <progress className="progress-2 progress--task1" max="100" value="40"></progress>
</div>

<div className="task-progress-2">
  <p>Social
  </p>
  <progress className="progress-2 progress--task2" max="100" value="40"></progress>
</div>

<div className="task-progress-2">
  <p>Social
  </p>
  <progress className="progress-2 progress--task3" max="100" value="40"></progress>
</div>

<div className="task-progress-2">
  <p>Social
  </p>
  <progress className="progress-2 progress--task4" max="100" value="40"></progress>
</div>

<div className="task-progress-2">
  <p>Social
  </p>
  <progress className="progress-2 progress--task4" max="100" value="40"></progress>
</div>

<div className="task-progress-2">
  <p>Social
  </p>
  <progress className="progress-2 progress--task4" max="100" value="40"></progress>
</div>

<div className="task-progress-2">
  <p>Social
  </p>
  <progress className="progress-2 progress--task4" max="100" value="40"></progress>
</div>

</div>
      </div>
    </div>
  );
}

export default App;
