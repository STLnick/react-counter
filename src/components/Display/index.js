import React, { Fragment } from 'react';
import { Button } from './Button'

export class Display extends React.Component {
  state = {
    currentCount: 0
  }


  render() {
    return (
      <Fragment>
        <p>{this.state.currentCount}</p>
        <Button buttonHandler={this.updateCount} buttonText="+1" />
      </Fragment>
    )
  }
}
