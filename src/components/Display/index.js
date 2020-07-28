import React from 'react';
import { Button } from './Button'

import './Display.css'

const root = document.documentElement
const styles = getComputedStyle(root)

export class Display extends React.Component {
  state = {
    currentCount: 0
  }

  updateCount = (e, qty) => {
    // Operator
    const op = e.target.dataset.op

    if (op === '+') { // Add
      // Set State
      this.setState(prevState => ({
        currentCount: prevState.currentCount + Number(qty)
      }))

      // Set new font size
      const newFontSize = Number(styles.getPropertyValue('--p-font-size').trim().slice(0, 2)) + Number(qty)
      root.style.setProperty('--p-font-size', newFontSize + 'px')

    } else if (op === '-') { // Subtract
      if (this.state.currentCount > 0) {
        if (this.state.currentCount - Number(qty) >= 0) {
          this.setState(prevState => ({
            currentCount: prevState.currentCount - Number(qty)
          }))

          // Set new font size
          const newFontSize = Number(styles.getPropertyValue('--p-font-size').trim().slice(0, 2)) - Number(qty)
          root.style.setProperty('--p-font-size', newFontSize + 'px')

        } else { // If subtraction will result in negative just set to 0
          this.setState(() => ({
            currentCount: 0
          }))
          // Set new font size
          root.style.setProperty('--p-font-size', '24px')
        }
      }

    } else { // Reset
      this.setState(prevState => ({
        currentCount: 0
      }))

      // Set new font size
      root.style.setProperty('--p-font-size', '24px')
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
