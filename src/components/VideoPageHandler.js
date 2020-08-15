import { connect } from 'react-redux';
import VideoPage from './VideoPage';

function mapStateToProps(state) {
  return {
    video: state.video,
    isLoading: state.isLoading
  };
}

function mapDispatchToProps(dispatch) {
  return { }
}

const VideoPageHandler = connect(mapStateToProps, mapDispatchToProps)(VideoPage);

export default VideoPageHandler;