import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css'

const Result = ({ selectedAnswers }) => {
  const numCorrectAnswers = selectedAnswers.filter(answer => answer.answer).length;
  const resultMessage = numCorrectAnswers > 5 ? 'Selamat Kamu Berhasil!' : 'Mohon Maaf Kamu Gagal :(';

  return (
    <div className="result-container">
      {/* <h1 className='result-title'>HASIL</h1> */}
      <h2 className='result-title'>{resultMessage}</h2>
      <h3 className='result-score'>Kamu mendapatkan nilai {numCorrectAnswers} dari total 10 pertanyaan.</h3>
     
  

      <Link to="/">
        <button className='result-button'>Kembali</button>
      </Link>
    </div>
  );
};

export default Result;
