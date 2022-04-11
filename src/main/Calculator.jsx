import React, { useState } from 'react'
import { Keypad } from '../components/Keypad/Keypad'
import { Display } from '../components/Display/Display'
import './Calculator.css'

export function Calculator() {

   let [display, setDisplay] = useState('')

   function manageInput(button) {
      if (button === "=") {
         setDisplay(eval(display))
         console.log(display)
      } else if (button === "AC") {
         setDisplay('')
      } else if (button === "+" || button === "-" || button === "*" || button === "/" || button === ".") {
         let lastChar = display.toString();

         if (lastChar.slice(-1) === '+' || lastChar.slice(-1) === '-' || lastChar.slice(-1) === '*' || lastChar.slice(-1) === '/' || lastChar.slice(-1) === '.') {
            button = ''
          } else {
            setDisplay(display + button)
          }
      } else {
         setDisplay(display + button)
      }
   }
   
  return (
    <div className='calculator'>
       <Display value={display} />
       <Keypad onClick={manageInput} />
    </div>
  )
}
