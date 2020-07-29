import React from 'react';
import { Button } from './Button'

import './Display.css'

const root = document.documentElement // For setting CSS custom properties
const styles = getComputedStyle(root) // For retrieving current CSS custom properties

export class Display extends React.Component {
  state = {
    currentCount: 0
  }

  updateFontSize = (amount, operator) => {
    let newFontSize

    if (operator === '+') {
      newFontSize = Number(styles.getPropertyValue('--p-font-size').trim().slice(0, 2)) + Number(amount)
    } else if (operator === '-') {
      newFontSize = Number(styles.getPropertyValue('--p-font-size').trim().slice(0, 2)) - Number(amount)
    } else {
      newFontSize = 24
    }
    root.style.setProperty('--p-font-size', newFontSize + 'px')
  }

  updateCount = (e, qty) => {
    // Operator
    const op = e.target.dataset.op

    if (op === '+') { /* Add */
      // Set State
      this.setState(prevState => ({
        currentCount: prevState.currentCount + Number(qty)
      }))

      // Set new font size
      this.updateFontSize(qty, op)

    } else if (op === '-') { /* Subtract */
      if (this.state.currentCount > 0) {
        if (this.state.currentCount - Number(qty) >= 0) {
          // Set State
          this.setState(prevState => ({
            currentCount: prevState.currentCount - Number(qty)
          }))
          // Set new font size
          this.updateFontSize(qty, op)

        } else { // If subtraction will result in negative just set to 0
          // Set State
          this.setState(() => ({
            currentCount: 0
          }))
          // Set new font size
          this.updateFontSize()
        }
      }
    } else { /* Reset */
      // Set State
      this.setState(() => ({
        currentCount: 0
      }))
      // Set new font size
      this.updateFontSize()
    }
  }

  render() {
    return (
      <div>
        <p className="count">{this.state.currentCount}</p>
        <Button buttonHandler={this.updateCount} buttonClass='add-btn' buttonText="Add 1" op="+" qty="1" />
        <Button buttonHandler={this.updateCount} buttonClass='add-btn' buttonText="Add 2" op="+" qty="2" />
        <Button buttonHandler={this.updateCount} buttonClass='add-btn' buttonText="Add 5" op="+" qty="5" />
        <Button buttonHandler={this.updateCount} buttonClass='subtract-btn' buttonText="Subtract 1" op="-" qty="1" />
        <Button buttonHandler={this.updateCount} buttonClass='subtract-btn' buttonText="Subtract 10" op="-" qty="10" />
        <Button buttonHandler={this.updateCount} buttonClass='reset-btn' buttonText="Reset" op="" qty="0" />
      </div>
    )
  }
}
