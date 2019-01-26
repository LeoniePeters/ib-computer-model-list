import { ADD_MODEL } from './actions/Models'

export default (state = [], action = {}) => {
  console.log(state, action.payload)
    switch (action.type) {
    case ADD_MODEL:
      return [...state, action.payload]
        
    default:
      return state
    }
  }
  
