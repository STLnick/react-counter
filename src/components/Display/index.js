import React from 'react';
import { Button } from './Button'

import './Display.css'

export class Display extends React.Component {
  state = {
    currentCount: 0
  }

  updateCount = () => {
    this.setState(prevState => ({
      currentCount: prevState.currentCount + 1
    }))
  }

  render() {
    return (
      <div>
        <p>{this.state.currentCount}</p>
        <Button buttonHandler={this.updateCount} buttonText="Add 1" />
      </div>
    )
  }
}
