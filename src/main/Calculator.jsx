import React from 'react'
import { Keypad } from '../components/Keypad/Keypad'
import { Display } from '../components/Display/Display'
import './Calculator.css'

export function Calculator() {
   function manageInput(button) {
      if (button === "=") {
         console.log('=')
      } else if (button === "AC") {
         console.log('ac')
      } else if (button === "+") {
         console.log('+')
      } else if (button === "-") {
         console.log('-')
      }
   }
   
  return (
    <div className='calculator'>
       <Display value={100} />
       <Keypad onClick={manageInput} />
    </div>
  )
}
