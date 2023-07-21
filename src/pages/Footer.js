import React from "react";
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import ShareIcon from "@mui/icons-material/Share";
import LoopOutlinedIcon from "@mui/icons-material/LoopOutlined";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
/*import PauseCircleOutlinedIcon from "@mui/icons-material/PauseCircleOutlined";*/
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import "./Footer.css";
import { Grid, Slider } from "@material-ui/core";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <img className="footer_songLogo" src="" alt="" />
        <div className="footer_songInfo">
          <h4>I ain't worried</h4>
          <p>Vignesh</p>
        </div>
      </div>
      <div className="footer_center">
        <ShuffleIcon className="footer_green" />
        <SkipPreviousIcon className="footer_icon" />
        <PlayCircleOutlinedIcon fontSize="large" className="footer_icon" />
        <SkipNextIcon className="footer_icon" />
        <LoopOutlinedIcon className="footer_green" />
        <ShareIcon className="footer_green" />
      </div>
      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <QueueMusicIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider color="secondary" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
