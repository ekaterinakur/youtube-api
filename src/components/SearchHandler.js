import { connect } from 'react-redux';
import { getVideoList } from '../redux/actions';
import Search from './Search';

function mapStateToProps(state) {
  return { };
}

function mapDispatchToProps(dispatch) {
  return {
    getVideoList: (searchString) => dispatch(getVideoList(searchString))
  }
}

const SearchHandler = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchHandler;
