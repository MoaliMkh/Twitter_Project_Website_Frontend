import { Input, Button } from 'antd';

const InputComponent = (props) => {

    const twitterID = props.twitterID;
    const setTwitterID = props.setTwitterID;
    const submitCallback = props.submitCallback;

    return(
        <div style={{width: '25%', alignSelf: 'center', marginLeft: '37.5%'}}>
            <p></p>
            <Input addonBefore="@" placeholder='Your Twitter ID' value={twitterID} onChange={(e) => {setTwitterID(e.target.value)}} />
            <Button style={{marginTop: 10}} type="primary" onClick={submitCallback} ghost>Submit</Button>
        </div>

    )
}

export default InputComponent;