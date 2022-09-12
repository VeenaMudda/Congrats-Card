const element = (
  // Write your code here.
  <div className="bg-container">
    <h1 className="heading">Congratulations</h1>
    <div className="card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="profile"
      />
      <h2 className="name">Kiran V</h2>
      <p className="name">
        Vishnu Institute of Computer Education and Technology,
        <br />
        Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="watch"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
