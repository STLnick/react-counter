import React from 'react';
import { Button } from './Button'

import './Display.css'

const root = document.documentElement // For setting CSS custom properties
const styles = getComputedStyle(root) // For retrieving current CSS custom properties

export class Display extends React.Component {
  state = {
    currentCount: 0
  }

  buttons = [
    {
      buttonClass: 'add-btn',
      buttonText: 'Add 1',
      op: '+',
      qty: 1
    },
    {
      buttonClass: 'add-btn',
      buttonText: 'Add 2',
      op: '+',
      qty: 2
    },
    {
      buttonClass: 'add-btn',
      buttonText: 'Add 5',
      op: '+',
      qty: 5
    },
    {
      buttonClass: 'subtract-btn',
      buttonText: 'Subtract 1',
      op: '-',
      qty: 1
    },
    {
      buttonClass: 'subtract-btn',
      buttonText: 'Subtract 10',
      op: '-',
      qty: 10
    },
    {
      buttonClass: 'reset-btn',
      buttonText: 'Reset',
      op: '',
      qty: 0
    }
  ]

  renderBtns = () => this.buttons.map((btn, index) => {
    return (
      <Button
        buttonHandler={this.updateCount}
        buttonClass={btn.buttonClass}
        buttonText={btn.buttonText}
        key={index}
        op={btn.op}
        qty={btn.qty}
      />
    )
  })

  updateFontSize = (amount, operator) => {
    const pxIndex = styles.getPropertyValue('--p-font-size').trim().indexOf('p')
    const currentFontSize = styles.getPropertyValue('--p-font-size').trim().slice(0, pxIndex)
    let newFontSize

    console.log(currentFontSize)

    if (operator === '+') {
      newFontSize = Number(currentFontSize) + Number(amount)
    } else if (operator === '-') {
      newFontSize = Number(currentFontSize) - Number(amount)
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
        if (this.state.currentCount - Number(qty) >= 0) { /* If subtraction won't result in negative */
          // Set State
          this.setState(prevState => ({
            currentCount: prevState.currentCount - Number(qty)
          }))
          // Set new font size
          this.updateFontSize(qty, op)

        } else { /* If subtraction will result in negative just set to 0 */
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
        {this.renderBtns()}
      </div >
    )
  }
}
