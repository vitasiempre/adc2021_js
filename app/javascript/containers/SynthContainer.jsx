import React, { PureComponent } from 'react'
import Oscillator from '../components/Oscillator'

export default class SynthContainer extends PureComponent {
  constructor(props) {
    super(props)
  }

  renderOscillators = () => {
    const { oscillators, audioContext, synth, drums } = this.props
    const oscillatorElements = []

    oscillators.forEach((oscillator, i) => {
      const oscillatorNode = audioContext.createOscillator();
      oscillator.key= i
      oscillator.detune = 0

      oscillatorElements.push(
        <Oscillator
          audioContext={audioContext}
          oscillatorNode={oscillatorNode}
          {...oscillator}
        />
      )
    });

    return oscillatorElements
  }

  render() {
    return <div>{this.renderOscillator()}<div/>
  }

}
