import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createActions } from 'redux-actions'

const { increment, decrement } = createActions('INCREMENT', 'DECREMENT')

interface reduxDemoProps {
  counter: number
  increment: Function
  decrement: Function
}

class reduxDemo extends Component<reduxDemoProps> {
  constructor(props: reduxDemoProps) {
    super(props)
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <div>reduxDemo</div>
        <div>{JSON.stringify(this.props)}</div>
        <span
          onClick={() => this.props.increment(1)}
          style={{
            fontSize: '25px',
            color: 'red',
            cursor: 'pointer',
            fontWeight: 700,
            userSelect: 'none'
          }}
        >
          +
        </span>
        <span
          onClick={() => this.props.decrement(1)}
          style={{
            fontSize: '25px',
            color: 'red',
            cursor: 'pointer',
            fontWeight: 700,
            userSelect: 'none'
          }}
        >
          -
        </span>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    counter: state.add.counter
  }
}

const matchDdipatchToProps = (dispatch: any) => {
  return {
    increment: (value: number) => dispatch(increment(value)),
    decrement: (value: number) => dispatch(decrement(value))
  }
}

export default connect(mapStateToProps, matchDdipatchToProps)(reduxDemo)
