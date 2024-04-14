import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StarRating from './StarRating';
import AppV2 from './AppV2'
const root = ReactDOM.createRoot(document.getElementById('root'));

function Test() {
  const [movieRating, setMovieRating] = useState(0)

  return (
    <div>
      <StarRating maxRating={10} color='red' onSetRating={setMovieRating} />
      <p>{movieRating}</p>
    </div>
  )
}

root.render(
  <React.StrictMode>
    <AppV2 />

    {/*     <StarRating maxRating={5} messeges={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']} />
    <StarRating maxRating={5} color='red' defaultRating={3} />
    <Test /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
