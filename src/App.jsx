import { useState } from 'react'
import './App.css'
import './index.css';
import { IfxSlider, IfxCheckbox } from '@infineon/infineon-design-system-react'

function App() {
  return (
    <div className='wrapper flex w-full flex-col gap-12'>
      <IfxSlider value="30" min="0" max="100" step="1" min-value-handle="undefined" max-value-handle="undefined" type="single"></IfxSlider>

      <IfxCheckbox
        error="false"
        disabled="false"
        checked="false"
        size="s"
        indeterminate="false"
        name="checkbox"
        className='flex' // works like expected
        >
        Text
      </IfxCheckbox>

      <IfxCheckbox
        error="false"
        disabled="false"
        checked="false"
        size="s"
        indeterminate="false"
        name="checkbox"
        className='block' // there is the problem
        >
        Text
      </IfxCheckbox>

      <IfxSlider value="70" min="0" max="100" step="1" min-value-handle="undefined" max-value-handle="undefined" type="single"></IfxSlider>
    </div>
  )
}

export default App
