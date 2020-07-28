import React from 'react';
import { Button } from './Button'

import './Display.css'

const styles = getComputedStyle(document.documentElement)

export class Display extends React.Component {
  state = {
    currentCount: 0
  }

  updateCount = (e, qty) => {
    // Operator
    const op = e.target.dataset.op

    if (op === '+') { // Add
      this.setState(prevState => ({
        currentCount: prevState.currentCount + Number(qty)
      }))
    } else if (op === '-') { // Subtract
      if (this.state.currentCount > 0) {
        if (this.state.currentCount - Number(qty) >= 0) {
          this.setState(prevState => ({
            currentCount: prevState.currentCount - Number(qty)
          }))
        } else { // If subtraction will result in negative just set to 0
          this.setState(prevState => ({
            currentCount: 0
          }))
        }
      }
    } else { // Reset
      this.setState(prevState => ({
        currentCount: 0
      }))
    }
    // const newFontSize = Number(styles.getPropertyValue('--p-font-size').slice(0, 3)) + 2
    // console.log(newFontSize)
    // styles.setProperty('--p-font-size', newFontSize + "px")
  }

  resetCount = () => {
    this.setState(() => ({
      currentCount: 0
    }))
  }

  render() {
    return (
      <div>
        <p>{this.state.currentCount}</p>
        <Button buttonHandler={this.updateCount} buttonText="Add 1" op="+" qty="1" />
        <Button buttonHandler={this.updateCount} buttonText="Add 2" op="+" qty="2" />
        <Button buttonHandler={this.updateCount} buttonText="Add 5" op="+" qty="5" />
        <Button buttonHandler={this.updateCount} buttonText="Subtract 1" op="-" qty="1" />
        <Button buttonHandler={this.updateCount} buttonText="Subtract 10" op="-" qty="10" />
        <Button buttonHandler={this.updateCount} buttonText="Reset" op="" qty="0" />
      </div>
    )
  }
}
