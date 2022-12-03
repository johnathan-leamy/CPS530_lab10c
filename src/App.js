import logo from './logo.svg';
import './App.css';
import vercel from './vercel.png';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <CustomHeader/>
      <p>Since react is a very widely used front end framework it was very easy to find a web hosting service which supports react.</p>
      <p>When it comes to installing react that was also very easy as all it took was going to the react website then type the given commands into the terminal</p>
      <p>By using vercel the prosses of setting up the webpage involved upload the project to my personal github page then selecting it in the vercel website</p> 
      <p>The hardest part of setting up react was finding a good webhosting site as I originally tried to use the moons server but due to not being able to 
        use the create-react app comand with npm. To solve this issue I searched for webhosting sites that work specificly with react, found a top ten list and clicked the site that was number one.
      </p>
    </div>
  );
}
function CustomHeader(){
  return(
  <div>
    <div className = "headerDiv">React in Vercel</div>
    <img className = "headerImg" src = {vercel} alt = "vercel image" width="30%"></img>
  </div>
  );
}

export default App;
