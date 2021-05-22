import charactersReducer from './characters'
import { combineReducers } from 'redux'

export default combineReducers({
  characters: charactersReducer
})