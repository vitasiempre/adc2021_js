import React from 'react'
import ReactDOM from 'react-dom'
import SynthContainer from '../containers/SynthContainer'

document.addEventListener('DOMContentLoaded', () => {
  const body = document.body
  console.log('hey');

  ReactDOM.render(
    <SynthContainer />,
    body.appendChild(document.createElement('div'))
  )
})
