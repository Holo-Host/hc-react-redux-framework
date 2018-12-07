import * as React from 'react'
import SomeThing, { State, Props } from './buttonComponent'
import { mount, ReactWrapper, configure } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

export const somethingTests = describe('describe something', () => {

  let props: Props
  let mountedButtonComponent: ReactWrapper<Props, State> | undefined

  const buttonComponent = () => {
    if (!mountedButtonComponent) {
      mountedButtonComponent = mount(<SomeThing {...props}/>)
    }
    return mountedButtonComponent
  }

  beforeEach(() => {
    mountedButtonComponent = undefined
  })

  it('Can do the thing we want it do do', () => {
    buttonComponent().simulate('click')
    expect(true)
  })
})
