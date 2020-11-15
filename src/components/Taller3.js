import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import articles from './articles'

const Taller1 = props => {
  return (
    <>
      <header id="header">
        <nav>
          <ul>
            {articles['light-shaders'].map(article => (
              <li key={`li_${article.id}`}>
                <button
                  onClick={() => {
                    props.onOpenArticle(article.id)
                  }}
                >
                  {article.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}
Taller1.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Taller1
