import React from 'react'

import Discussion from '../LightShaders/Discussion'
import AmbientLight from '../LightShaders/AmbientLight'
import AllLights from '../LightShaders/AllLights'
import LightAttenuation from '../LightAttenuation/light-attenuation'
import Fog from '../Fog/fog'

export default [
  { id: 'ambient-light', title: 'Ambient Light', body: () => <AmbientLight /> },
  {
    id: 'all-lights',
    title: 'Simple lighting models',
    body: () => <AllLights />,
  },
  { id: 'light-attenuation', title: 'Light Attenuation', body: () => <LightAttenuation /> },
  { id: 'fog', title: 'Fog', body: () => <Fog /> },
  { id: 'dicussion', title: 'Discussion', body: () => <Discussion /> },
]
