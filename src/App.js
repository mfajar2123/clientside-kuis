import React from 'react';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom'

import Home from './components/home.js';
import QuestionList from './components/questionList.js';
import './style.css'


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/quiz' element={<QuestionList/>} />
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
