import * as React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
// import { withNotes } from '@storybook/addon-notes'
import ButtonComponent from './buttonComponent'
// import { autoCompleteProfileFieldTests } from './exampleComponent.test'
import { specs, describe, it } from 'storybook-addon-specifications'
import { mount } from 'enzyme'
import { expect } from 'expect'

storiesOf('ButtonComponent', module)
    .add('ButtonComponent', () => {
      const button = (
        <ButtonComponent ownStatus='ready'/>
      )

      specs(() => describe('ButtonComponent', function () {
        it('Should have the buttonComponent text', function () {
          let output = mount(button)
          expect(output.text()).toContain('buttonComponent')
        })
      }))

      return button
    }
)
