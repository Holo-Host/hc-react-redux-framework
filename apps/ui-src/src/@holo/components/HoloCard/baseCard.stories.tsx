import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import BaseCard from './baseCard';

const pulpFiction = {
  id: 680,
  title: 'Pulp Fiction',
  vote_average: 8.4,
  backdrop_path: '/4cDFJr4HnXN5AdPw4AKrmLlMWdO.jpg',
  overview:
    "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
  release_date: '1994-09-10'
};

storiesOf('BaseCard', module)
  .addDecorator(story => (
    <div>
      <div style={{ backgroundColor: 'lightblue' }}>Above</div>
      {story()}
      <div style={{ backgroundColor: 'lightblue' }}>Below</div>
    </div>
  ))
  .addDecorator(withKnobs)
  .add('default', () => (
    <BaseCard {...pulpFiction} onLearnMore={action('Learn more')} />
  ))
  .add('No image', () => (
    <BaseCard
      {...pulpFiction}
      backdrop_path=""
      onLearnMore={action('Learn more')}
    />
  ))
  .add('With Knobs', () => {
    const title = text('Title:', pulpFiction.title);
    const overview = text('Overview:', pulpFiction.overview);
    const backdrop_path = text('Image:', pulpFiction.backdrop_path);

    return (
      <BaseCard
        title={title}
        overview={overview}
        backdrop_path={backdrop_path}
        onLearnMore={action('Learn more')}
      />
    );
  });
