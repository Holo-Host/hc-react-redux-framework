import * as React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


export interface OwnProps {}
export interface StateProps {}
export interface DispatchProps {}
export type Props = OwnProps & StateProps & DispatchProps
export interface State {}

class TopNav extends React.Component<Props, State>  {
  render() {
    return (
      <header>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Holo UI
            </Typography>
            <img src="/" alt="Holo Logo" />
          </Toolbar>
        </AppBar>
      </header>
    );
  }
}
export default withStyles(styles)(TopNav);
