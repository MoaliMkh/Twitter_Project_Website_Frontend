import './App.css';
import { ProgressBarComponent } from '@syncfusion/ej2-react-progressbar';


const TweetsTopicsProgressBars = (props) => {
    const obj = props.progressData;
    const len = props.len;
    return (
        <>
        <p>{Object.keys(obj)[0]}</p>
        <div className="task-progress-2" >
          <ProgressBarComponent cornerRadius='100%' id="lineardeterminate" type='Linear' showProgressValue={true} progressColor="#ff6b6b" innerRadius='80%' trackThickness={10} progressThickness={10} width='75%' maximum={len} value={Object.values(obj)[0]} animation={{
          enable: true,
          duration: 1000,
          delay: 0
            }}>
         </ProgressBarComponent>
        </div>
        <br></br>


        <p>{Object.keys(obj)[1]}</p>
        <div className="task-progress-2" >
          <ProgressBarComponent id="lineardeterminate1" type='Linear' showProgressValue={true} progressColor="#feca57" innerRadius='80%' trackThickness={10} progressThickness={10} width='75%' value={Object.values(obj)[1]} maximum={len} animation={{
          enable: true,
          duration: 1000,
          delay: 0
            }}>
        </ProgressBarComponent>
        </div>
        <br></br>

        <p>{Object.keys(obj)[2]}</p>
        <div className="task-progress-2" >
          <ProgressBarComponent id="lineardeterminate2" type='Linear' showProgressValue={true} progressColor="#46bd84" innerRadius='80%' trackThickness={10} progressThickness={10} width='75%' value={Object.values(obj)[2]} maximum={len} animation={{
          enable: true,
          duration: 1000,
          delay: 0
            }}>
        </ProgressBarComponent>
        </div>
        <br></br>

        <p>{Object.keys(obj)[3]}</p>
        <div className="task-progress-2">
          <ProgressBarComponent id="lineardeterminate3" type='Linear' showProgressValue={true} progressColor="#08a0f7" innerRadius='80%' trackThickness={10} progressThickness={10} width='75%' value={Object.values(obj)[3]} maximum={len} animation={{
          enable: true,
          duration: 1000,
          delay: 0
            }}>
         </ProgressBarComponent>
        </div>
        <br></br>


        <p>{Object.keys(obj)[4]}</p>
        <div className="task-progress-2">
          <ProgressBarComponent id="lineardeterminate4" type='Linear' showProgressValue={true} progressColor="#ff6b6b" innerRadius='80%' trackThickness={10} progressThickness={10} width='75%' value={Object.values(obj)[4]} maximum={len} animation={{
          enable: true,
          duration: 1000,
          delay: 0
            }}>
         </ProgressBarComponent>
        </div>
        <br></br>

        <p>{Object.keys(obj)[5]}</p>
        <div className="task-progress-2">
          <ProgressBarComponent id="lineardeterminate5" type='Linear' showProgressValue={true} progressColor="#feca57" innerRadius='80%' trackThickness={10} progressThickness={10} width='75%' value={Object.values(obj)[5]} maximum={len} animation={{
          enable: true,
          duration: 1000,
          delay: 0
            }}>
         </ProgressBarComponent>
        </div>
        <br></br>

        <p>{Object.keys(obj)[6]}</p>
        <div className="task-progress-2">
          <ProgressBarComponent id="lineardeterminate6" type='Linear' showProgressValue={true} progressColor="#46bd84" innerRadius='80%' trackThickness={10} progressThickness={10} width='75%' value={Object.values(obj)[6]} maximum={len} animation={{
          enable: true,
          duration: 1000,
          delay: 0
            }}>
         </ProgressBarComponent>
        </div>
        <br></br>

        <p>{Object.keys(obj)[7]}</p>
        <div className="task-progress-2">
          <ProgressBarComponent id="lineardeterminate7" type='Linear' showProgressValue={true} progressColor="#ff6b6b" innerRadius='80%' trackThickness={10} progressThickness={10} width='75%' value={Object.values(obj)[7]} maximum={len} animation={{
          enable: true,
          duration: 1000,
          delay: 0
            }}>
         </ProgressBarComponent>
        </div>
        </>

    // </div>
    
    );
    
}

export default TweetsTopicsProgressBars;