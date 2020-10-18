import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import imageAnalysis from 'file-loader!../markdown/image_analysis.md'
import Markdown from './Markdown'

const Taller1 = props => {
  const [markdown, setMarkdown] = useState()
  useEffect(() => {
    fetch(imageAnalysis)
      .then(txt => txt.text())
      .then(txt => setMarkdown(txt))
  })

  return (
    <>
      <header id="header">
        <nav>
          <ul>
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
                  props.onOpenArticle('BlackAndWhite')
                }}
              >
                B/N
              </button>
            </li>

            <li>
              <button
                onClick={() => {
                  props.onOpenArticle('histogram')
                }}
              >
                Histograma
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <Markdown source={markdown} />
    </>
  )
}
Taller1.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Taller1
