import React from 'react'

import ReactMarkdown from 'react-markdown'
import MathJax from 'react-mathjax2'
import RemarkMathPlugin from 'remark-math'

function MarkdownRender(props) {
  const newProps = {
    ...props,
    plugins: [RemarkMathPlugin],
    renderers: {
      ...props.renderers,
      text: props => <MathJax.Text text={props.value} />,
      html: props => <div dangerouslySetInnerHTML={{ __html: props.value }} />,
      // math: props => <MathJax.Node>{props.value}</MathJax.Node>,
      // inlineMath: props => <MathJax.Node inline>{props.value}</MathJax.Node>,
    },
  }

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

export default MarkdownRender
