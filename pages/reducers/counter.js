import {INCREMENT, DECREMENT, RESET, TOTAL} from '../actions/index'

const INITIAL_STATE = {
  count: 0,
  history: [],
  total: 0
}

function handleChange(state, change) {
  const {count, history} = state;
  return ({
    count: count + change,
    history: [count + change, ...history]
  })
}

function handleChangeTotal(total){
  return({
    total: total
  })
}

export default function counter(state = INITIAL_STATE, action) {
  switch(action.type) {
    case INCREMENT:
      return handleChange(state, 1);
    case DECREMENT:
      return handleChange(state, -1);
    case TOTAL:
      return handleChangeTotal(total);
    case RESET:
      return (INITIAL_STATE)
    default:
      return state;
  }
}