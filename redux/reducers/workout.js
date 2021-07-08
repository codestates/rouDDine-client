export const initialState = {};

export const WORKOUT = 'WORKOUT'
export const WORKOUT_DND = 'WORKOUT_DND'
export const ADD_WORKOUT = 'ADD_WORKOUT'


export const currentWorkout = (workout) => ({
  type: WORKOUT,
  payload: { data : workout }
})

export const workoutDnd = (newState) => ({
  type: WORKOUT_DND,
  payload: newState
})

export const addWorkout = (newState) => ({
  type: ADD_WORKOUT,
  payload: newState
})


// export const addRoutine = (routine) => ({
//   type: ADD_ROUTINE,
//   payload: { result : routine }
// })

const reducer = ( state = initialState, action ) => {
  switch (action.type) {
    case WORKOUT:
      return Object.assign({}, state, action.payload)
    case WORKOUT_DND:
      return Object.assign({}, state, action.payload)      
    case ADD_WORKOUT:
      return Object.assign({}, state, action.payload)  
    default:
      return state;
  }
}

export default reducer;