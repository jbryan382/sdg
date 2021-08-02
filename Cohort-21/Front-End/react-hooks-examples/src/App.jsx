import React, { useEffect, useState } from 'react'
import { Helloworld } from './components/Helloworld'

export function App() {
  const [unicorn, setUnicorn] = useState(0)

  function clickOnButton() {
    setUnicorn(unicorn + 1)
    console.log('You clicked this Button')
  }
  return (
    <div>
      <button onClick={clickOnButton}>
        This is my button with the number: {unicorn}
      </button>
      <Helloworld name={'Susan'} />
    </div>
  )
}
