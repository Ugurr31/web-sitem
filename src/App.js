import "./App.css"
import {youtube, instagram, discord, website } from "./config.roman";
//yaptım?
const App = () => {
  return (
    <div className="App">
     <div className="topnav">
      <a target="_blank" href={`https://youtube.com/${youtube}`}> <i className="fa fa-fw fa-youtube" /> Youtube</a>
      <a href="javascript:void(0);" className="icon">
        <i className="fa fa-bars" onClick={(e) => alert("Coming soon") }>
        </i>
      </a>
     </div>

<!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/6401f82331ebfa0fe7f07a6d/1gqjr2jud';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->

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
        <a target="_blank" href={`https://www.instagram.com/${instagram}`} className="button-ig">
          <i className="fa fa-instagram"></i> Instagram
        </a>
      </div>
    </div>
  )
}


export default App;
