import React from 'react'
import ContrastGainControl from '../VisualIllusions/ContrastGainControl'
import Discussion from '../VisualIllusions/Discussion'
import Ebbinghaus from '../VisualIllusions/Ebbinghaus'
import LilacChaser from '../VisualIllusions/LilacChaser'
import ObliqueGrating from '../VisualIllusions/ObliqueGrating'
import MotionArteffact from '../VisualIllusions/MotionArteffact'

export default [
  {
    id: 'contrast-gain-control',
    title: 'Contrast Gain Control',
    body: () => <ContrastGainControl />,
  },
  {
    id: 'oblique-grating',
    title: 'Oblique Grating',
    body: () => <ObliqueGrating />,
  },
  { id: 'ebbinghaus', title: 'Ebbinghaus', body: () => <Ebbinghaus /> },
  { id: 'lilac-chaser', title: 'Lilac Chaser', body: () => <LilacChaser /> },
  { id: 'motion_arteffact', title: 'Motion Arteffact', body: () => <MotionArteffact /> },
  { id: 'discussion', title: 'Discución', body: () => <Discussion /> },
]
