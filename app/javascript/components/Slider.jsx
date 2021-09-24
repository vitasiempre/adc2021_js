import React, { PureComponent } from 'react'

export default class Slider extends PureComponent {
  constructor(props) {
    super(props)
    this.input = React.createRef();
  }

  handleChange = () => {
    const { handleChange } = this.props
    const value = this.input.current.valueAsNumber;
    handleChange(value)
  }

  render() {
    const { min, max, value } = this.props
    return <input
      type='range'
      min={min}
      max={max}
      value={value}
      onInput={handleChange}
      ref={this.myRef}
    />
  }
}
