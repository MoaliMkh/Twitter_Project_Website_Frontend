import axios from "axios";
import "./App.css";
import { useState } from "react";
import InputComponent from "./InputComponent";
import IsLoadingComponent from "./IsLoadingComponent";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [twitterID, setTwitterID] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [resultReady, setResultReady] = useState(false);

  const submitID = async () => {
    setIsLoading(true);
    const response = await axios.get("http://127.0.0.1:8000/user/", {
      params: { username: twitterID },
    });
    setTimeout(function () {
      setIsLoading(false);
      setResultReady(true);
      navigate("/newcharts", { state: { all_data: response.data } });
    }, 1500);
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
          />
        </>
      )}
    </div>
  );
};

export default Home;
