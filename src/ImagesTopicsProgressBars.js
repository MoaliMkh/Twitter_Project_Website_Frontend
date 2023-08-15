import { ProgressBarComponent } from '@syncfusion/ej2-react-progressbar';


const ImagesTopicsProgressBars = (props) => {
    const obj = props.progressData;
    const len = props.len;
    return (
        <>
        <p>{Object.keys(obj)[0]}</p>
        <div className="task-progress-2">
        <ProgressBarComponent id="lineardeterminate8" type='Linear' showProgressValue={true} progressColor="#ff6b6b" innerRadius='80%' trackThickness={10} progressThickness={10} width='75%' value={(Object.values(obj)[0] / len) * 100} animation={{
              enable: true,
              duration: 1000,
              delay: 0
                }}>
             </ProgressBarComponent>
        </div>
        <br></br>

        <p>{Object.keys(obj)[1]}</p>
        <div className="task-progress-2">
        <ProgressBarComponent id="lineardeterminate9" type='Linear' showProgressValue={true} progressColor="#feca57" innerRadius='80%' trackThickness={10} progressThickness={10} width='75%' value={(Object.values(obj)[1] / len) * 100} animation={{
              enable: true,
              duration: 1000,
              delay: 0
                }}>
             </ProgressBarComponent>
        </div>
        <br></br>


        <p>{Object.keys(obj)[2]}</p>
        <div className="task-progress-2">
        <ProgressBarComponent id="lineardeterminate10" type='Linear' showProgressValue={true} progressColor="#46bd84" innerRadius='80%' trackThickness={10} progressThickness={10} width='75%' value={(Object.values(obj)[2] / len) * 100} animation={{
              enable: true,
              duration: 1000,
              delay: 0
                }}>
             </ProgressBarComponent>
        </div>
        <br></br>


        <p>{Object.keys(obj)[3]}</p>
        <div className="task-progress-2">
        <ProgressBarComponent id="lineardeterminate11" type='Linear' showProgressValue={true} progressColor="#08a0f7" innerRadius='80%' trackThickness={10} progressThickness={10} width='75%' value={(Object.values(obj)[3] / len) * 100} animation={{
              enable: true,
              duration: 1000,
              delay: 0
                }}>
             </ProgressBarComponent>
        </div>
        <br></br>


        <p>{Object.keys(obj)[4]}</p>
        <div className="task-progress-2">
        <ProgressBarComponent id="lineardeterminate12" type='Linear' showProgressValue={true} progressColor="#ff6b6b" innerRadius='80%' trackThickness={10} progressThickness={10} width='75%' value={(Object.values(obj)[4] / len) * 100} animation={{
              enable: true,
              duration: 1000,
              delay: 0
                }}>
             </ProgressBarComponent>
        </div>
        <br></br>


        <p>{Object.keys(obj)[5]}</p>
        <div className="task-progress-2">
        <ProgressBarComponent id="lineardeterminate13" type='Linear' showProgressValue={true} progressColor="#feca57" innerRadius='80%' trackThickness={10} progressThickness={10} width='75%' value={(Object.values(obj)[5] / len) * 100} animation={{
              enable: true,
              duration: 1000,
              delay: 0
                }}>
             </ProgressBarComponent>
        </div>
        <br></br>


        <p>{Object.keys(obj)[6]}</p>
        <div className="task-progress-2">
        <ProgressBarComponent id="lineardeterminate14" type='Linear' showProgressValue={true} progressColor="#46bd84" innerRadius='80%' trackThickness={10} progressThickness={10} width='75%' value={(Object.values(obj)[6] / len) * 100} animation={{
              enable: true,
              duration: 1000,
              delay: 0
                }}>
             </ProgressBarComponent>
        </div>
        <br></br>


        <p>{Object.keys(obj)[7]}</p>
        <div className="task-progress-2">
        <ProgressBarComponent id="lineardeterminate15" type='Linear' showProgressValue={true} progressColor="#08a0f7" innerRadius='80%' trackThickness={10} progressThickness={10} width='75%' value={(Object.values(obj)[7] / len) * 100} animation={{
              enable: true,
              duration: 1000,
              delay: 0
                }}>
             </ProgressBarComponent>
        </div>
        <br></br>


        <p>{Object.keys(obj)[8]}</p>
        <div className="task-progress-2">
        <ProgressBarComponent id="lineardeterminate16" type='Linear' showProgressValue={true} progressColor="#ff6b6b" innerRadius='80%' trackThickness={10} progressThickness={10} width='75%' value={(Object.values(obj)[8] / len) * 100} animation={{
              enable: true,
              duration: 1000,
              delay: 0
                }}>
             </ProgressBarComponent>
        </div>
        <br></br>


        <p>{Object.keys(obj)[9]}</p>
        <div className="task-progress-2">
        <ProgressBarComponent id="lineardeterminate17" type='Linear' showProgressValue={true} progressColor="#feca57" innerRadius='80%' trackThickness={10} progressThickness={10} width='75%' value={(Object.values(obj)[9] / len) * 100} animation={{
              enable: true,
              duration: 1000,
              delay: 0
                }}>
             </ProgressBarComponent>
        </div>
        <br></br>


        <p>{Object.keys(obj)[10]}</p>
        <div className="task-progress-2">
        <ProgressBarComponent id="lineardeterminate18" type='Linear' showProgressValue={true} progressColor="#46bd84" innerRadius='80%' trackThickness={10} progressThickness={10} width='75%' value={(Object.values(obj)[10] / len) * 100} animation={{
              enable: true,
              duration: 1000,
              delay: 0
                }}>
             </ProgressBarComponent>
        </div>
        </>
    );
}

export default ImagesTopicsProgressBars;