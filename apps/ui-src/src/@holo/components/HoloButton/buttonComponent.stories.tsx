import * as React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
// import { withNotes } from '@storybook/addon-notes'
import ButtonComponent from './buttonComponent'
// import { autoCompleteProfileFieldTests } from './exampleComponent.test'
import { specs } from 'storybook-addon-specifications'
import { somethingTests } from './buttonComponent.test'

storiesOf('ButtonComponent', module)
    .add('ButtonComponent', () => {
      const button = (
        <ButtonComponent ownStatus='ready'/>
      )

      specs(() => somethingTests)

      return button
    }
)
