import * as React from 'react'
// import classnames from 'classnames';
import { StyleRulesCallback } from '@material-ui/core/'
import { withStyles, Theme } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const styles: StyleRulesCallback = (theme: Theme) => ({
  card: {
    minWidth: 275,
    width: 300,
    margin: 10,
  },
  title: {
    fontSize: 14,
  },
  cardImage{
    height: 169
  }
})

export interface OwnProps {
   classes: any,
   title:string,
   backdrop_path: any,
   overview: any,
   onLearnMore: any
}
export interface StateProps {}
export interface DispatchProps {}
export type Props = OwnProps & StateProps & DispatchProps
export interface State {}

class BaseCard extends React.Component<Props, State> {
  render () {
    const { title, backdrop_path, overview, onLearnMore, classes } = this.props;
    return (
      <Card className={classes.card}>
        {backdrop_path && (
          <CardMedia
            className={classes.cardImage}
            image={`//image.tmdb.org/t/p/w300${backdrop_path}`}
            title={title}
          />
        )}
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2" className={classes.title}>
            {title}
          </Typography>
          <Typography component="p">{overview}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={onLearnMore}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(BaseCard)
