import { handleActions } from 'redux-actions'

const add = handleActions(
  {
    INCREMENT: (state, action: any) => ({
      counter: state.counter + action.payload
    }),

    DECREMENT: (state, action: any) => ({
      counter: state.counter - action.payload
    })
  },
  { counter: 0 }
)

export default add
