import React from 'react'
import lightShaders from 'file-loader!../../markdown/light_shaders.md'
import Markdown from '../Markdown'

export default () => <Markdown source={lightShaders} />
