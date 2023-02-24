import "./App.css"
import { instagram, discord, youtube, website } from "./config.roman";
//yaptım?
const App = () => {
  return (
    <div className="App">
     <div className="topnav">
      <a target="_blank" href={`}`}> <i className="fa fa-fw fa-" /> </a>
      <a href="javascript:void(0);" className="icon">
        <i className="fa fa-bars" onClick={(e) => alert("Coming soon") }>
        </i>
      </a>
     </div>
      <div className="Logo">
        <img className="App-logo" src={discord.avatarURL} alt="logo"/>
      </div>

      <div className="description">
        <h1> {discord.username} </h1>
        <p>{website.description}</p>
      </div>

      <div className="profile">
        <a target="_blank" href={`https://discord.com/users/${discord.id}`} className="button-dc">
            My Discord address
          </a>
        <a target="_blank" href={`https://www.youtube.com/${youtube}`} className="button-yt">
          <i className="fa fa-youtube"></i> Youtube
        </a>
        <a target="_blank" href={`https://www.instagram.com/${instagram}`} className="button-ig">
          <i className="fa fa-instagram"></i> Instagram
        </a>
      </div>
    </div>
  )
}

export default App;
