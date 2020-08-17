import React from 'react';
import { Link } from 'react-router-dom';

import { 
  GridList, 
  GridListTile, 
  GridListTileBar,
  Button
 } from '@material-ui/core';
import useStyles from './../styles/';

export default function VideoList({ videos, searchQuery, nextPageToken, getVideoList }) {

  const classes = useStyles();

  function getId(id) {
    return (typeof id === 'object' && id !== null) 
            ? id.videoId 
            : id
  }

  const listItems = videos.map((video) => (
    <GridListTile key={getId(video.id)} >
      <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
  
      <GridListTileBar
          title={video.snippet.title}
          subtitle={<span>{video.snippet.description}</span>}
      />

      <Link to={'/videos/' + getId(video.id)} className={classes.listLink} />
    </GridListTile>
  ));

  return <>
          <GridList cellHeight={160} cols={2} className={classes.list} >
            {listItems}
          </GridList>

          <Button onClick={() => getVideoList(searchQuery, nextPageToken)} 
                  variant="contained" color="default" >
            Load more
          </Button>
        </>
}

