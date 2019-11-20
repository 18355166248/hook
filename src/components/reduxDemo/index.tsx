import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createActions } from 'redux-actions'

const { increment, decrement } = createActions('INCREMENT', 'DECREMENT')

class reduxDemo extends Component {
  render() {
    // const { counter } = this.props
    return (
      <div>
        <div>reduxDemo</div>
        <div>{JSON.stringify(this.props)}</div>
        {/* <div>{this.props.counter}</div> */}
      </div>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    counter: state.counter
  }
}

const matchDdipatchToProps = (dispatch: any) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  }
}

export default connect(mapStateToProps, matchDdipatchToProps)(reduxDemo)
// export default reduxDemo
