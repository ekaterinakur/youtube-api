import { makeStyles } from '@material-ui/core/styles';

 const useStyles = makeStyles((theme) => ({
   container: {
      paddingTop: 40,
      paddingBottom: 40,
      textAlign: 'center'
   },
  textField: {
    marginBottom: 40
  },
  listLink: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
}));

export default useStyles;
