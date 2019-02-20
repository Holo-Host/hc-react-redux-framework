import * as React from 'react';
import { storiesOf } from '@storybook/react';
import GridList from './gridList';

const movies = [
  {
    id: 238,
    title: 'The Godfather',
    vote_average: 8.6,
    popularity: 26.898,
    backdrop_path: '/6xKCYgH16UuwEGAyroLU6p8HLIn.jpg',
    overview:
      'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
    release_date: '1972-03-14'
  },
  {
    id: 680,
    title: 'Pulp Fiction',
    vote_average: 8.4,
    backdrop_path: '/4cDFJr4HnXN5AdPw4AKrmLlMWdO.jpg',
    overview:
      "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
    release_date: '1994-09-10'
  },
  {
    id: 240,
    title: 'The Godfather: Part II',
    vote_average: 8.5,
    backdrop_path: '/gLbBRyS7MBrmVUNce91Hmx9vzqI.jpg',
    overview:
      'In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.',
    release_date: '1974-12-20'
  },
  {
    id: 311,
    title: 'Once Upon a Time in America',
    vote_average: 8.4,
    popularity: 13.334,
    backdrop_path: '/vnT6HzjLSDrAweHn9xWykb8Ii6T.jpg',
    overview:
      'A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan over thirty years later, where he once again must confront the ghosts and regrets of his old life.',
    release_date: '1984-05-23'
  },
  {
    id: 550,
    title: 'Fight Club',
    vote_average: 8.4,
    backdrop_path: '/87hTDiay2N2qWyX4Ds7ybXi9h8I.jpg',
    overview:
      'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
    release_date: '1999-10-15'
  }
];

storiesOf('GridList', module)
  .add('default', () => <GridList movies={[]} />)
  .add('With movies', () => <GridList movies={movies} />)
  .add('When loading', () => <GridList loading />)
  .add('With error', () => (
    <GridList error={{ message: 'Some error message' }} />
  ));
