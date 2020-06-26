import React from 'react';
import Counter from '../components/Counter';

const Home = () => (
  <div className="home">
    <main className="container-fluid">
      <div className="row">
        <h1 className="col-12">
          Start your project!
        </h1>

        <Counter />
      </div>
    </main>
  </div>
);

export default Home;
