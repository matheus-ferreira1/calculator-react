import React from 'react'
import './Display.css'

export function Display(props) {
  let display = props.value

  return (
    <div className='display'>{props.value == '' ? 0 : props.value}</div>
  )
}
