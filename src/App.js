import Profile from "./profile/Profile";
import image from "./profile/logo.jpg";
import './App.css';
import { Component } from "react";

class App extends Component {
  
  render (){
    const showAlert = (name) => alert(name);
  const user = {
    fullNAME: "kahloul sami",
    bio: "Full-stack Web Developer",
    profession: `I design and code beautifully simple things,and I love what I do.In
    addition to my engineering training in communications and networks, I
    wanted to enhance my skills and knowledge by full-stack formation
    within Go my code.`,
  }

    return (
      <div className="App">
        <Profile user={user}
         showname={showAlert}>
          <img src={image} alt="myPhoto" />
        </Profile>
      </div>
    )
  };
}

export default App;
