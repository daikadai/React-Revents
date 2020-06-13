const { INCREMENT_COUNTER, DECREMENT_COUNTER } = require("./testConstant");

export const incrementCounter = () => {
  return {
    type: INCREMENT_COUNTER
  }
}

export const decrementCounter = () => {
  return {
    type: DECREMENT_COUNTER
  }
}

