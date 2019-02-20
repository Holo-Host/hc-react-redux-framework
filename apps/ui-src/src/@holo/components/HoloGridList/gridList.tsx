import * as React from 'react';
import GridList from '@material-ui/core/GridList';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import BaseCard from '../HoloCard/baseCard';

class GridList extends Component {
  render() {
    const { movies, loading, error } = this.props;

    if (loading) {
      return <LinearProgress />;
    }
    if (error) {
      return <Typography color="error">{error.message}</Typography>;
    }
    return (
      <GridList>
        {movies.map(movie => <BaseCard key={movie.id} {...movie} />)}
      </GridList>
    );
  }
}

export default GridList;
