import PropTypes from 'prop-types'
import React from 'react'
import articles from './articles'

const Taller2 = props => {
  return (
    <>
      <header id="header">
        <nav>
          <ul>
            {articles['visual-illusions'].slice(0, 4).map(article => (
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

        <nav>
          <ul>
            {articles['visual-illusions'].slice(4, articles['visual-illusions'].length - 1).map(article => (
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

        <nav>
          <ul>
            {articles['visual-illusions'].slice(articles['visual-illusions'].length - 1, articles['visual-illusions'].length).map(article => (
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

Taller2.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Taller2
