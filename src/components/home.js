import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css'

const Home = () => {
  return (
    <div className='home-container'>
      <h1 className='home-title'>Selamat Datang di Aplikasi Kuis!</h1>
      <h2>Kuis ini terdiri dari 10 pertanyaan.</h2>
      <br></br>
      <p className='pe'>Silahkan klik tombol di bawah untuk memulai kuis.</p>
      <Link to="/quiz">
        <button className='home-button'>Mulai Kuis</button>
      </Link>
    </div>
  );
}

export default Home;
