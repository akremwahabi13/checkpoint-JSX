
import './App.css';
import './style.css';
import myWonderfulImage from "./imageInSrc .jpg"
import FullName from './Components/Profile/FullName';

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <div style={{border:"solid 1px black",maxWidth:"1000vw"}}>

<FullName/>

<br />
<div className="red">
<img  src="/imageInPublic.jpg" alt="profile1" />



<img  src={myWonderfulImage} alt ='myImage' />
</div>
</div>

<video width="700" height="400" controls>

<source src={"myVideo.mp4"} type="video/mp4" />

</video>
 </header></div>     
  );
}

export default App;
