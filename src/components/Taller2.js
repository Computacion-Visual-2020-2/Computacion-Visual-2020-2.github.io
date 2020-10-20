import PropTypes from 'prop-types'
import React from 'react'

const Taller2 = props => {
  return (
    <>
      <header id="header">
        <nav>
          <ul>
            <li>
              <button
                onClick={() => {
                  props.onOpenArticle('contrast-gain-control')
                }}
              >
                Contrast Gain Control
              </button>
            </li>

            <li>
              <button
                onClick={() => {
                  props.onOpenArticle('oblique-grating')
                }}
              >
                Oblique Grating
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

Taller2.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Taller2
