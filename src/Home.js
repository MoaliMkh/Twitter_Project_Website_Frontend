import axios from "axios";
import "./App.css";
import { useState } from "react";
import InputComponent from "./InputComponent";
import IsLoadingComponent from "./IsLoadingComponent";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [twitterID, setTwitterID] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [resultReady, setResultReady] = useState(false);

  const submitID = async () => {
    setIsLoading(true);
    const response = await axios.get("http://5.34.201.153:8000/user/", {
      params: { username: twitterID },
    });
    console.log(response.data)
    if (response.data.data === "USER_NOT_FOUND" || (parseInt(response.data.id) + 100).toString() !== secretKey){
      alert('Username or key is not valid!')
      setIsLoading(false);

    }
    else{
    setTimeout(function () {
      setIsLoading(false);
      setResultReady(true);
      navigate("/newcharts", { state: { all_data: response.data } });
    }, 1500);
    }
  };

  return (
    <div>
      {isLoading ? (
        <>
          <div className="header-box">
            <h3>
              How Much Similarity Do You Have in The Real-World with Your
              Characteristics in Social Media?
            </h3>
            <hr />
          </div>

          <div style={{ marginTop: 300 }}>
            <IsLoadingComponent />
          </div>
        </>
      ) : resultReady ? null : (
        <>
          <div className="header-box">
            <h3>
              How Much Similarity Do You Have in The Real-World with Your
              Characteristics in Social Media?
            </h3>
            <hr />
          </div>
          <InputComponent
            twitterId={twitterID}
            setTwitterID={setTwitterID}
            submitCallback={submitID}
            secretKey={secretKey}
            setSecretKey={setSecretKey}
          />
        </>
      )}
    </div>
  );
};

export default Home;
