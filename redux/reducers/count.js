export const initialState = {
  count : null,
}

export const COUNT_PLUS = 'COUNT_PLUS'

export const countPlus = (routineId) => ({
  type: COUNT_PLUS,
  payload: {
    count: routineId,
  }
})

const reducer = ( state = initialState, action ) => {
  switch (action.type) {
    case COUNT_PLUS:
      return {...state, count: action.payload}
      default:
          return initialState;
  }
}

export default reducer;