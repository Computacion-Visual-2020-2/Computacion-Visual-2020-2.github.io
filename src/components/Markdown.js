import React, { useEffect, useState } from 'react'

import ReactMarkdown from 'react-markdown'
import MathJax from 'react-mathjax2'
import RemarkMathPlugin from 'remark-math'

const MarkdownWrapper = props => {
  const [markdown, setMarkdown] = useState(null)
  useEffect(() => {
    fetch(props.source)
      .then(txt => txt.text())
      .then(txt => setMarkdown(txt))
  })

  return <MarkdownRender source={markdown} />
}

const MarkdownRender = props => {
  const newProps = {
    ...props,
    plugins: [RemarkMathPlugin],
    renderers: {
      ...props.renderers,
      html: props => <span dangerouslySetInnerHTML={{ __html: props.value }} />,
      // text: props => <MathJax.Text text={props.value} />,
    },
  }
  console.log('Source ', props.source)

  return (
    <MathJax.Context
      input="tex"
      onLoad={() => console.log('Loaded MathJax script!')}
      options={{
        asciimath2jax: {
          useMathMLspacing: true,
          delimiters: [['$', '$']],
          preview: 'none',
        },
      }}
    >
      <ReactMarkdown {...newProps} />
    </MathJax.Context>
  )
}

export default MarkdownWrapper
