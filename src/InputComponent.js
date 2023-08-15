import { Input, Button } from 'antd';

const InputComponent = (props) => {

    const twitterID = props.twitterID;
    const setTwitterID = props.setTwitterID;
    const submitCallback = props.submitCallback;
    const secretKey = props.secretKey;
    const setSecretKey = props.setSecretKey;

    return(
        <div style={{width: '25%', alignSelf: 'center', marginLeft: '37.5%'}}>
            <p></p>
            <Input addonBefore="@" placeholder='Your Twitter ID' value={twitterID} onChange={(e) => {setTwitterID(e.target.value)}} />
            <Input.Password style={{marginTop: 10}} placeholder='Your Secret Key' value={secretKey} onChange={(e) => {setSecretKey(e.target.value)}} />

            <Button style={{marginTop: 10}} type="primary" onClick={submitCallback} ghost>Submit</Button>
        </div>

    )
}

export default InputComponent;