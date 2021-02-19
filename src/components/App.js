import React from "react";
import './App.css';
import FolderList from "./sidebar";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const App = () =>{
    return( <div className="App"> 
        <div className="Header ui segment">
        <h1>Carlos Henrique</h1>  
        <div className="Icons">
        <GitHubIcon onClick={event =>  window.location.href='https://github.com/CHenrique97/'}  style={{cursor: "pointer"}} />   
        <LinkedInIcon onClick={event =>  window.location.href='https://www.linkedin.com/in/carloshcustodio/'}  style={{cursor: "pointer"}}/>
        </div>
        </div>
        <div className=" ui segment" style={{
          display: "flex",
          top: " 200px",
          alignItems: "center"
        }}>
        <FolderList style={{cursor: "pointer"}}/>
        
        </div>
        
    </div>);
};

export default App;