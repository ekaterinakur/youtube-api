import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import YouTube from 'react-youtube';

import useStyles from './../styles/';
import { 
  CircularProgress, 
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Collapse
 } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

export default function Video({ video, getVideo }) {
    const { videoId } = useParams();
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    useEffect(() => { 
      getVideo(videoId)
    }, [videoId, getVideo]);

    const playerOpts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

      function playerReady(event) {
        console.log(videoId);
        // event.target.pauseVideo();
      }

      return (
        <Card className={classes.videoCard}>
          <CardMedia>
            <YouTube videoId={videoId} 
                    opts={playerOpts} 
                    onReady={playerReady} />
          </CardMedia>

          {!video
            ? <CircularProgress />
            : <CardContent className={classes.videoInfo}>
                <h2>
                  { video.snippet.title }      
                  <IconButton
                  onClick={() => setExpanded(!expanded)}
                  aria-expanded={expanded}
                  aria-label="show more"
                  >
                    <ExpandMore />
                  </IconButton>
                </h2>

                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <p>{ video.snippet.description }</p>
                </Collapse>
              </CardContent>    
          }
        </Card>
      )
}