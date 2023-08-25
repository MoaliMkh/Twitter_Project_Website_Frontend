import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';

const Info = ({data}) => {
  const navigate = useNavigate();  
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    showModal()
  }, [])

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    //navigate("/newcharts", { state: { all_data: data } });
  };

  return (
    <>
      <Modal title="Explaining the Experiment" open={isModalOpen}      footer={[
          <Button key="submit" type="text" onClick={handleOk}>
            OK
          </Button>,
        ]}>
        <h1>What have we done during this experiment?</h1>
        <ul>
        <li>Obtaining 50 tweets from your latest tweets and feeding them to a <strong>Text Sentiment Analyzer Model</strong>.</li>
        <li>Obtaining 20 pictures from your latest media and your profile avatar on twitter and feeding them to a pipeline of <strong>Facial Expression and Face Recognition Models</strong>.</li>
        <li>Putting the results from the last two parts beside you friends' opinions about you. </li>
        <li>Calculating distances between <strong>Your Tweets</strong>, <strong>Your Media</strong> and <strong>Your Friends' Opinions</strong></li>
        </ul>
      </Modal>
    </>
  );
};

export default Info;
