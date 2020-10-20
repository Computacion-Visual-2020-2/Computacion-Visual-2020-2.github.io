import React from 'react'
import ContrastGainControl from "../VisualIllusions/ContrastGainControl"
import ObliqueGrating from '../VisualIllusions/ObliqueGrating'

export default [
  { id: 'contrast-gain-control', title: 'Contrast Gain Control', body: () => <ContrastGainControl /> },
  { id: 'oblique-grating', title: 'Oblique Grating', body: () => <ObliqueGrating /> },
]
