import React, { PureComponent } from 'react'
import Button from './Button'

export default class SynthContainer extends PureComponent {
  constructor(props) {
    super(props)

    const { audioContext, oscillatorNode, frequency, detune } = props


    audioContext.frequency.setValueAtTime(
      frequency,
      audioContext.currentTime
    );

    audioContext.type = 'square';

    this.state = {
      started: false,
      frequency: frequency,
      detune: detune
    };

    console.log(oscillatorNodeß);
  }

    hadleStart = () => {
      const { audioContext, oscillatorNode } = this.props
      const { started } = this.state

      oscillatorNode.connect(audioContext.destination)

      if (started === false) {
        oscillatorNode.start()
        this.setState({
          started: true
        });
      }
    }

    hadleStop = () => {
      const { audioContext, oscillatorNode } = this.props
      oscillatorNode.disconect(audioContext.destination)
    }

    handleFrequencyChange = (frequency) => {
      const { audioContext, oscillatorNode } = this.props
      oscillatorNode.frequency.setValueAtTime(frequency, audioContext.currentTime);
      this.setState({
        frequency
      })
    }

    handleDetuneChange = (frequency) => {
      const { audioContext, oscillatorNode } = this.props
      oscillatorNode.detune.setValueAtTime(detune, audioContext.currentTime);
      this.setState({
        frequency
      })
    }
  }

render() {
  const { oscillatorNode } = this.props
  const { frequency, detune } = this.state

  return <div>
    <Button
      text="Start"
      handleClick={this.hadleStart}
    />
    <Button
      text="Stop"
      handleClick={this.hadleStop}
    />
    <Slider
      min="1"
      max="5000"
      value={oscillatorNode.frequency.value}
      handleChange={this.handleFrequencyChange}
    />
    <Slider
      min="-100"
      max="100"
      value={oscillatorNode.detune.value}
      handleChange={this.handleDetuneChange}
    />
  </div>
}
