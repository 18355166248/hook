import { handleActions } from 'redux-actions'

// export INCREMENT
// export DECREMENT

// const add = handleAction(
//   'ADD',
//   (state: any, action: any) => state + 2,
//   0
// )

const add = handleActions(
  {
    'INCREMENT': (state, action: any) => ({
      counter: state.counter + action.payload
    }),

    'DECREMENT': (state, action: any) => ({
      counter: state.counter - action.payload
    })
  },
  { counter: 0 }
)

export default add
