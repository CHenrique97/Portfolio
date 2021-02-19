

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import WorkIcon from '@material-ui/icons/Work';
import VideocamIcon from '@material-ui/icons/Videocam';
import ImgMediaCard from "./display";
import Musifier from "./icons/Musifier.png";
import VideoPlayer from "./icons/Video Player.png";
import Portfolio from "./icons/Portfolio.png";
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default class FolderList extends React.Component  {
  constructor() {
    super();

    this.state = {
      project: 'Musifier'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log()
    this.setState({
      clicked: true
    });
  }
 render(){
  return (
    <div style={{
      display: "flex",
      
      alignItems: "right"
    }}>
    <List className="SideBar" style={{cursor: "pointer"}}>
      <ListItem onClick={() => this.setState({
      project: 'Musifier'
    })} >
        <ListItemAvatar>
          <Avatar>
            <MusicNoteIcon  />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Musifier" secondary="https://github.com/CHenrique97/Musifier" />
      </ListItem>
      <ListItem onClick={() => {this.setState({
      project: 'Video Player'
    });
    }
    }>
        <ListItemAvatar>
          <Avatar>
            <VideocamIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Video Player" secondary="https://github.com/CHenrique97/VideoPlayer" />
      </ListItem>
      <ListItem onClick={() => {this.setState({
      project: 'Portfolio'
    });
    }}>
        <ListItemAvatar>
          <Avatar>
          <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Portfolio" secondary="https://github.com/CHenrique97/Portfolio" />
      </ListItem>
    </List>
    {this.state.project==="Musifier" ?  <ImgMediaCard image={Musifier} title="Musifier" description= "Um projeto fullstack que envolve um front end simples, um servidor de que recebe chamadas REST e uma rede neural que gera música automaticamente  " /> : null}
    {this.state.project==="Video Player" ?  <ImgMediaCard image={VideoPlayer} title="Video Player" description= "Um projeto front end que o busca um termo no youtube, gera um mural com cinco vídeos e quando um é selecionado ele é maximizado e reproduzido" /> : null}
    {this.state.project==="Portfolio" ?  <ImgMediaCard image={Portfolio} title="Portfolio" description= "Um projeto front end de um portifólio minimalista" /> : null}
    
    </div>
    
  );
}}

