import React from 'react'
import segmentation from 'file-loader!../../markdown/segmentation.md'
import Markdown from '../Markdown'

export default () =>  <Markdown source={segmentation} />

