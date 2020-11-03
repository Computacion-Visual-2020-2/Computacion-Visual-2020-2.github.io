import React from 'react'
import ContrastGainControl from '../VisualIllusions/ContrastGainControl'
import Discussion from '../VisualIllusions/Discussion'
import Ebbinghaus from '../VisualIllusions/Ebbinghaus'
import Stars from '../VisualIllusions/Stars'
import LilacChaser from '../VisualIllusions/LilacChaser'
import ObliqueGrating from '../VisualIllusions/ObliqueGrating'
import MotionArteffact from '../VisualIllusions/MotionArteffact'
import Stars from '../VisualIllusions/Stars'


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
  { id: 'Motion_aftereffect', title: 'Motion aftereffect', body: () => <MotionArteffact /> },
  // { id: 'stars', title: 'Stars', body: () => <Stars /> },
  { id: 'discussion', title: 'Discusión', body: () => <Discussion /> },
]
