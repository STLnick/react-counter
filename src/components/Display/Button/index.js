import PropTypes from 'prop-types'
import React from 'react'

import './Button.css'

export const Button = (props) => {
  const handleClick = (e, qty) => {
    props.buttonHandler(e, qty)
  }

  return (
    <button
      onClick={(e) => handleClick(e, props.qty)}
      data-op={props.op}
      data-qty={props.qty}
      className={props.buttonClass}
    >
      {props.buttonText}
    </button>
  )
}

Button.propTypes = {
  buttonHandler: PropTypes.func,
  buttonText: PropTypes.string.isRequired,
  buttonClass: PropTypes.string.isRequired,
  op: PropTypes.string.isRequired,
  qty: PropTypes.string.isRequired
}
