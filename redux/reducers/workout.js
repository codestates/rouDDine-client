export const initialState = {workout:[]};

export const WORKOUT = 'WORKOUT'
export const DELETE_WORKOUT = 'DELETE_WORKOUT'


export const currentWorkout = (workout) => ({
  type: WORKOUT,
  payload: { workout }
})
export const deleteWorkout = (id) => ({
  type: DELETE_WORKOUT,
  id
})

const reducer = ( state = initialState, action ) => {
  switch (action.type) {
    case WORKOUT:
      return Object.assign({}, state, {
        workout: [...state.workout, action.payload]
      })
    case DELETE_WORKOUT:
      return Object.assign({}, state, { workout: state.workout.workout.filter((target) => (
        target.id === action.id
      ))
    })
    default:
      return state;
  }
}


export default reducer;