import PropTypes from 'prop-types'
import React from 'react';

export const Button = (props) => {
  const handleClick = () => {
    props.buttonHandler()
  }

  return (
    <button onClick={handleClick}>{props.buttonText}</button>
  )
}

Button.propTypes = { buttonHandler: PropTypes.func, buttonText: PropTypes.string.isRequired }
