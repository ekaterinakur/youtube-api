import React, { useEffect } from 'react';
import { useQueryParam, StringParam } from 'use-query-params';
import SearchHandler from './SearchHandler';
import VideoList from './VideoList';

import { 
  CircularProgress, 
 } from '@material-ui/core';

export default function SearchPage({ videos, isLoading, nextPageToken, getVideoList }) {
  
  const [searchQuery] = useQueryParam('search', StringParam);

  useEffect(() => { 
      getVideoList(searchQuery)
  }, [searchQuery, getVideoList]);

  return <>
      <SearchHandler />

      {
        isLoading
          ? <CircularProgress />
          : videos.length === 0
          ? <b>No results.</b>
          : <VideoList 
                  videos={videos} 
                  nextPageToken={nextPageToken} 
                  getVideoList={getVideoList}
                  searchQuery={searchQuery} />
      }
  </>
}

