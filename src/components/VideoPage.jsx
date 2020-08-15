import React from 'react';
import { useParams } from "react-router-dom";
import YouTube from 'react-youtube';

export default function Video() {
    const { videoId } = useParams();

    const playerOpts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

      function playerReady(event) {
        event.target.pauseVideo();
      }

      return <YouTube videoId={videoId} 
                        opts={playerOpts} 
                        onReady={playerReady} />;
}