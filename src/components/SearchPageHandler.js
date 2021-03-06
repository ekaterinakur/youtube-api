import { connect } from 'react-redux';
import { getVideoList } from '../redux/actions';
import SearchPage from './SearchPage';

function mapStateToProps(state) {
  return {
    videos: state.videos,
    isLoading: state.isLoading,
    nextPageToken: state.nextPageToken
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getVideoList: (searchString, nextPageToken) => dispatch(getVideoList(searchString, nextPageToken)),
  }
}

const SearchPageHandler = connect(mapStateToProps, mapDispatchToProps)(SearchPage);

export default SearchPageHandler;