import { connect } from 'react-redux';
import { getVideo } from '../redux/actions';
import VideoPage from './VideoPage';

function mapStateToProps(state) {
  return {
    video: state.video,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getVideo: (id) => dispatch(getVideo(id))
  }
}

const VideoPageHandler = connect(mapStateToProps, mapDispatchToProps)(VideoPage);

export default VideoPageHandler;