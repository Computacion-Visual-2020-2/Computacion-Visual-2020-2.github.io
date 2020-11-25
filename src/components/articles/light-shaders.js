import React from 'react'

import Discussion from '../LightShaders/Discussion'
import AmbientLight from '../LightShaders/AmbientLight'
import AllLights from '../LightShaders/AllLights'

export default [
  { id: 'ambient-light', title: 'Ambient Light', body: () => <AmbientLight /> },
  {
    id: 'all-lights',
    title: 'Simple lighting models',
    body: () => <AllLights />,
  },
  { id: 'dicussion', title: 'Discussion', body: () => <Discussion /> },
]
