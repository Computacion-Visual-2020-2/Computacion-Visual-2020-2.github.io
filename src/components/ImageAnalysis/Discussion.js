import React, { useEffect, useState } from 'react'
import imageAnalysis from 'file-loader!../../markdown/image_analysis.md'
import Markdown from '../Markdown'

export default () => {
  const [markdown, setMarkdown] = useState()
  useEffect(() => {
    fetch(imageAnalysis)
      .then(txt => txt.text())
      .then(txt => setMarkdown(txt))
  })

  return <Markdown source={markdown} />
}
