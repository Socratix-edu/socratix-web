import React from 'react';

const Landing = () => {
  return (
    <header id="landing" className="jumbotron d-flex flex-column">
      <div className="flex-1">
        <h1>Everything you've ever wanted to ask</h1>
        <h2>But were too afraid to</h2>
        <button type="button" className="btn btn-primary btn-lg m-3">
          Browse Courses
        </button>
        <button type="button" className="btn btn-primary btn-lg m-3">
          Ask a Question
        </button>
      </div>
    </header>
  );
};

export default Landing;
