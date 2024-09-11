import './App.css';

function App() {
  return (
    <div className="profile-container">
      <div className="profile-image">
        <img src="src/assets/jerry.PNG" alt="Profile" />
      </div>
      <div className="profile-details">
        <h2>박세준</h2>
        <ul>
          <li>컴퓨터공학부 21학번</li>
          <li>INFP</li>
          <li>뭘 하고 싶은지 방황중</li>
          <li>다들 건강하시고 행복하세요~</li>
        </ul>
      </div>
    </div>
  );
}

export default App;