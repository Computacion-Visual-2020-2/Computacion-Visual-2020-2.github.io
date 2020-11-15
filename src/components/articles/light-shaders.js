import React from 'react'

import Discussion from '../LightShaders/Discussion'
import AmbientLight from '../LightShaders/AmbientLight'

export default [
  { id: 'ambient-light', title: 'Ambient Light', body: () => <AmbientLight /> },
  { id: 'dicussion', title: 'Discussion', body: () => <Discussion /> },
]
