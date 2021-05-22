import types from '../types'

const { SET_CHARACTERS, REMOVE_CHARACTER } = types

// export default function characters(state=[], {type: "SET_CHARACTERS", characters: []}){

export default function characters(state=[], action){
  switch(action.type){
    case SET_CHARACTERS:
      return action.characters
    case REMOVE_CHARACTER:
      return state.filter(character => character.id !== action.id)
    default:
      return state
  }
}