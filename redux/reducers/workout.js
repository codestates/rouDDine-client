export const initialState = [];

export const WORKOUT = 'WORKOUT'
export const CATEGORY1 = `CATEGORY1`
export const CATEGORY2 = `CATEGORY2`
export const CATEGORY3 = `CATEGORY3`


export const currentWorkout = (workout) => ({
  type: WORKOUT,
  payload: { data : workout }
})

export const category1 = (workout) => ({
  type: CATEGORY1,
  payload: { data : workout }
})

export const category2 = (workout) => ({
  type: CATEGORY2,
  payload: { data : workout }
})

export const category3 = (workout) => ({
  type: CATEGORY3,
  payload: { data : workout }
})
  
const reducer = ( state = initialState, action ) => {
  switch (action.type) {
    case WORKOUT:
      return Object.assign({}, state, action.payload)
    case CATEGORY1:
      return Object.assign({}, state, action.payload)
    case CATEGORY2:
      return Object.assign({}, state, action.payload)
    case CATEGORY3:
      return Object.assign({}, state, action.payload)
    default:
      return state;
  }
}

export default reducer;