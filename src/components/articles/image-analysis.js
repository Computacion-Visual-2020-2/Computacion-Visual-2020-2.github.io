import React from 'react'

import Convolution from '../ImageAnalysis/Convolution'
import Histogram from '../ImageAnalysis/Histogram'
import BlackAndWhite from '../ImageAnalysis/BlackAndWhite'
import Discussion from '../ImageAnalysis/Discussion'

export default [
    { id: 'histogram', title: 'Histogram', body: () => <Histogram /> },
    { id: 'black-and-white', title: 'Black and White', body: () => <BlackAndWhite /> },
    { id: 'convolution', title: 'Convolution', body: () => <Convolution /> },
    { id: 'dicussion', title: 'Discussion', body: () => <Discussion /> },
]
