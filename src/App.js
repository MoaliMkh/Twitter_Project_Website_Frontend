import './App.css';
import Topics from './Topics';
import Home from './Home'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { registerLicense } from '@syncfusion/ej2-base';
import ChartResultsAfterTopics from './ChartResultsAfterTopics';
import ChartSection from './ChartSection';

// Registering Syncfusion license key
registerLicense('ORg4AjUWIQA/Gnt2V1hiQlRPf0BDX3xLflF1VWZTflZ6cFRWESFaRnZdQV1rSH1Tc0ZjXHxccHFX');


function App() {

  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="topics" element={<Topics />} />
      <Route path="newcharts" element={<ChartSection />} />
      <Route path="charts" element={<ChartResultsAfterTopics />} />
    </Routes>
  </div>
  );
}

export default App;
