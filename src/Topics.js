import './App.css';
import { Link } from 'react-router-dom';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import {Button} from 'antd'
import { useLocation } from 'react-router-dom';
import TweetsTopicsProgressBars from './TweetsTopicsProgressBars';
import ImagesTopicsProgressBars from './ImagesTopicsProgressBars';


const Topics = () => {

      const {state} = useLocation();
      const images_distance = parseInt(state.all_data.images_distance)
      const tweets_distance = parseInt(state.all_data.tweets_distance)
      const tweet_image_dist = parseInt(state.all_data.images_tweets_distance)
      const images_topics = state.all_data.images_topics.split('#').map(str => {
        return parseInt(str, 10);
      });
      const tweets_topics = state.all_data.tweets_topics.split('#').map(str => {
        return parseInt(str, 10);
      });

      let sum_of_tweet_topics = 0
      let tweets_topic_dict = {}
      let tweets_topic_names = ['Economics', 'International', 'Political', 'Science/Technology', 'Cultural Art', 'Sport', 'Medical', 'Social']
      for (let i = 0; i < tweets_topics.length; i++){
        tweets_topic_dict[tweets_topic_names[i]] = tweets_topics[i]
        sum_of_tweet_topics = sum_of_tweet_topics + tweets_topics[i];
      }

      const sortedObjectTweetTopic = Object.entries(tweets_topic_dict).sort((x, y) => y[1] - x[1]);
      const sortedTweetTopics = Object.fromEntries(sortedObjectTweetTopic)
      console.log(sortedTweetTopics)




      let images_topic_names = ['Animal', 'Landscape', 'Sport', 'Text', 'Art', 'Object', 'Food', 'People', 'Movie', 'Music', 'Shop']
      let images_topic_dict = {}
      let sum_of_image_topics = 0
      for (let i = 0; i < images_topics.length; i++){
        images_topic_dict[images_topic_names[i]] = images_topics[i]
        sum_of_image_topics = sum_of_image_topics + images_topics[i];
      }
      const sortedObjectImageTopic = Object.entries(images_topic_dict).sort((x, y) => y[1] - x[1]);
      const sortedImageTopics = Object.fromEntries(sortedObjectImageTopic)
      console.log(sortedImageTopics)


    return (
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', alignContent: 'center', paddingRight: 10}} >
        
        <Link to='/newcharts' state={state}>
        <Button icon={<LeftOutlined />} size='large' style={{marginLeft: 40}} danger ghost>Prev</Button>
        </Link>

        <div className='bottom-container'>
        <div className='topics'>

            <h3>Topics of Your Tweets</h3>
            <hr />
        <TweetsTopicsProgressBars progressData={sortedTweetTopics} len={tweets_topics.length} />

        </div>

        <div className='topics'>

        <h3>Topics of Your Media Images</h3>
        <hr />

        <ImagesTopicsProgressBars progressData={sortedImageTopics} len={images_topics.length}/>

        </div>
            </div>
                <Button icon={<RightOutlined />} disabled dir='rtl' size='large' style={{marginRight: 35}} danger ghost>Next</Button>
            </div>

            )
        }

export default Topics;