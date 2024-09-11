import './App.css';

function App() {
  return (
    <div className="profile-container">
      <div className="profile-image">
        <img 
          src="src/assets/jerry.PNG" 
          alt="Profile" 
          className="profile-picture" 
        />
      </div>
      <div className="profile-details">
        <h1 className="profile-name">박세준</h1>
        <ul className="profile-info">
          <li>컴퓨터공학부 21학번</li>
          <li>현재는 저널리즘, 정치 관심 많음</li>
          <li>요즘 뭘 하고 싶은지 방황중</li>
          <li>다들 건강하고 행복하시길~</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
