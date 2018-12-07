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

  it('Can do the thing we want it to do', () => {
    buttonComponent().simulate('click')
    expect(false) // this isn't causing a failure :-(
  })

  it('Should have the buttonComponent text "Primary"', () => {
    let wrapper = mount(<SomeThing {...props}/>)
    expect(wrapper.text()).toContain('Primary')
  })

})
