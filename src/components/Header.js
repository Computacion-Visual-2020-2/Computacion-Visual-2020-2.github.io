import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-code"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Computación Visual</h1>
        <h3>Bienvenid@</h3>
        <p>
          En este sitio encontrarás las actividades de la asignatura{' '}
          <a href="https://visualcomputing.github.io/">computación visual</a>
          <br />
          desarrolladas por el equipo de estudiantes que se presentan a
          continuación.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('valentina-castano')
            }}
          >
            Valentina Castaño
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('julio-ovalle')
            }}
          >
            Julio Ovalle
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('fabio-tovar')
            }}
          >
            Fabio Tovar
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('brandon-avilan')
            }}
          >
            Brandon Avilán
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('convolution')
            }}
          >
            Convolución
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
