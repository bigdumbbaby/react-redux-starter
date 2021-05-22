import React from 'react'
import { useDispatch } from 'react-redux'
import types from '../Redux/types'

const { REMOVE_CHARACTER } = types

export default function CharacterCard(props) {
  const dispatch = useDispatch()
  const handleClick = (event) => {
    dispatch({type: REMOVE_CHARACTER, id: props.id })
  }
  return (
    <li className="character-card">
      <div className="character-card-image">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="character-card-content">
        <h3 className="character-card-name">{props.name}</h3>
        <p className="character-card-status">
          <span className={props.status === "Alive" ? "green" : "red"}></span>
          {props.status} - {props.species}
        </p>
        <p className="text-gray">Last known location:</p>
        <p className="character-card-location">{props.location.name}</p>
        <button onClick={handleClick} className="remove-button">Remove</button>
      </div>
    </li>
  )
}
