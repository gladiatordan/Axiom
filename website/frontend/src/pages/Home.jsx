const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <h1 className="refinement-text">A GALAXY REFINED</h1>
        <p>Experience a vision of Star Wars Galaxies you've never seen before.</p>
        <div className="cta-container">
          <button className="vacuum-flare-btn">Discord SSO Login</button>
        </div>
      </section>

      <section className="pillars">
        <div className="card">
          <h3>Vocation System</h3>
          <p>Go beyond combat. Master the roles of Pilot, Merchant, and Relic Hunter.</p>
        </div>
        <div className="card">
          <h3>Trial of Peers</h3>
          <p>A transparent, high-stakes justice system driven by the community.</p>
        </div>
        <div className="card">
          <h3>Mythic+ Scaling</h3>
          <p>Infinite endgame progression through adapted keystone mechanics.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;