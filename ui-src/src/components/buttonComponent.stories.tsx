import * as React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
import { specs } from 'storybook-addon-specifications'
// import { withNotes } from '@storybook/addon-notes'
import ButtonComponent from './exampleComponent'
// import { autoCompleteProfileFieldTests } from './exampleComponent.test'

storiesOf('ButtonComponent', module)
    .add('ButtonComponent', () => {
      return (<ButtonComponent ownStatus='ready'/>)
    })
