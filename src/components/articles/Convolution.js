import React, { Suspense } from 'react'
const ConvolutionVideo = React.lazy(() => import('./ConvolutionVideo'))
const ConvolutionImage = React.lazy(() => import('./ConvolutionImage'))

class Convolution extends React.Component {
  render() {
    return (
      <>
        {/* <Suspense fallback={<div>Cargando...</div>}>
          <ConvolutionImage />
        </Suspense> */}

        <Suspense fallback={<div>Cargando...</div>}>
          <ConvolutionVideo />
        </Suspense>
      </>
    )
  }
}

export default Convolution
