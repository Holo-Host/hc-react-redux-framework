
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import ExampleComponent, { StateProps, DispatchProps } from '../@holo/components/HoloExample/exampleComponent'

import { State } from '../store/reducers/reducer'
import { ExampleHolochainAction } from '../store/actions/actions'

const mapStateToProps = (state: State): StateProps => {
  return {
    ownStatus: state.status
  }
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    takeAction: ExampleHolochainAction.create
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExampleComponent)
