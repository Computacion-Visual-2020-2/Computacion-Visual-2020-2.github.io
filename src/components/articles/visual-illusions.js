import React from 'react'
import ContrastGainControl from "../VisualIllusions/ContrastGainControl"
import Ebbinghaus from '../VisualIllusions/Ebbinghaus'
import LilacChaser from '../VisualIllusions/LilacChaser'
import ObliqueGrating from '../VisualIllusions/ObliqueGrating'

export default [
  { id: 'contrast-gain-control', title: 'Contrast Gain Control', body: () => <ContrastGainControl /> },
  { id: 'oblique-grating', title: 'Oblique Grating', body: () => <ObliqueGrating /> },
  { id: 'ebbinghaus', title: 'Ebbinghaus', body: () => <Ebbinghaus /> },
  { id: 'lilac-chaser', title: 'Lilac Chaser', body: () => <LilacChaser /> },
]
