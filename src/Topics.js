import './App.css';

const Topics = () => {

    return (
        <div className='bottom-container'>
        <div className='topics'>

            <h3>Topics of Your Tweets</h3>
            <hr />

            <p>Political</p>
            <div className="task-progress-2" >
              <progress className="progress-2 progress--task1" max="100" value="40"></progress>
            </div>
            <br></br>


            {/* <ProgressBarComponent id="lineardeterminate" color='red' type='Linear' trackThickness={10} progressThickness={10} width='50%' value={60} animation={{
              enable: true,
              duration: 1000,
              delay: 0
                }}>
            </ProgressBarComponent> */}

            <p>Social</p>
            <div className="task-progress-2" >
              <progress className="progress-2 progress--task2" max="100" value="40"></progress>
            </div>
            <br></br>

            <p>International</p>
            <div className="task-progress-2" >
              <progress className="progress-2 progress--task3" max="100" value="40"></progress>
            </div>
            <br></br>

            <p>Economics</p>
            <div className="task-progress-2">
              <progress className="progress-2 progress--task4" max="100" value="40"></progress>
            </div>
            <br></br>


            <p>Science/Technology</p>
            <div className="task-progress-2">
              <progress className="progress-2 progress--task1" max="100" value="40"></progress>
            </div>
            <br></br>

            <p>Cultural Art</p>
            <div className="task-progress-2">
              <progress className="progress-2 progress--task2" max="100" value="40"></progress>
            </div>
            <br></br>

            <p>Sport</p>
            <div className="task-progress-2">
              <progress className="progress-2 progress--task3" max="100" value="40"></progress>
            </div>
            <br></br>

            <p>Medical</p>
            <div className="task-progress-2">
              <progress className="progress-2 progress--task4" max="100" value="40"></progress>
            </div>

        </div>

        <div className='topics'>

<h3>Topics of Your Media Images</h3>
<hr />

<p>Animal</p>
<div className="task-progress-2">
  <progress className="progress-2 progress--task1" max="100" value="40"></progress>
</div>
<br></br>

<p>Landscape</p>
<div className="task-progress-2">
  <progress className="progress-2 progress--task2" max="100" value="40"></progress>
</div>
<br></br>


<p>Sport</p>
<div className="task-progress-2">
  <progress className="progress-2 progress--task3" max="100" value="40"></progress>
</div>
<br></br>


<p>Text</p>
<div className="task-progress-2">
  <progress className="progress-2 progress--task4" max="100" value="40"></progress>
</div>
<br></br>


<p>Art</p>
<div className="task-progress-2">
  <progress className="progress-2 progress--task1" max="100" value="40"></progress>
</div>
<br></br>


<p>Object</p>
<div className="task-progress-2">
  <progress className="progress-2 progress--task2" max="100" value="40"></progress>
</div>
<br></br>


<p>Food</p>
<div className="task-progress-2">
  <progress className="progress-2 progress--task3" max="100" value="40"></progress>
</div>
<br></br>


<p>People</p>
<div className="task-progress-2">
  <progress className="progress-2 progress--task4" max="100" value="40"></progress>
</div>
<br></br>


<p>Movie</p>
<div className="task-progress-2">
  <progress className="progress-2 progress--task4" max="100" value="40"></progress>
</div>
<br></br>


<p>Shop</p>
<div className="task-progress-2">
  <progress className="progress-2 progress--task4" max="100" value="40"></progress>
</div>
<br></br>


<p>Music</p>
<div className="task-progress-2">
  <progress className="progress-2 progress--task4" max="100" value="40"></progress>
</div>

</div>
      </div>
    )
}

export default Topics;