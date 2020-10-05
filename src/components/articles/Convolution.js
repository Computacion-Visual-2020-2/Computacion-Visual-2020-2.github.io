import React, { Suspense, useEffect, useState } from 'react'
import kernels from '../../sketches/convolution/kernels'
import Slider from 'react-rangeslider'

const ConvolutionVideo = React.lazy(() => import('./ConvolutionVideo'))
const ConvolutionImage = React.lazy(() => import('./ConvolutionImage'))

const Convolution = () => {
  const [kernel, setKernel] = useState(kernels[0])
  const [tmp, setTmp] = useState(3)
  const [kernelSize, setKernelSize] = useState(3)

  const onChangeComplete = () => {
    setKernelSize(tmp)
  }

  return (
    <>
      <h1>{kernel.name}</h1>

      <div style={{ textAlign: 'center', marginBottom: 20 }}>
        {kernels.map((kernel, index) => (
          <button
            key={`btn_${index}`}
            onClick={() => setKernel(kernels[index])}
            style={{ margin: '0px 5px' }}
          >
            {kernel.name}
          </button>
        ))}
      </div>

      {kernel.id === 'gaussian' && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 15,
          }}
        >
          <div style={{ width: 400 }}>
            <h5>Kernel size: </h5>
            <Slider
              min={3}
              max={17}
              step={2}
              width={250}
              value={tmp}
              onChangeComplete={onChangeComplete}
              onChange={setTmp}
            />
          </div>
        </div>
      )}

      <Suspense fallback={<div>Cargando...</div>}>
        <ConvolutionImage kernel={kernel} kernelSize={kernelSize} />
      </Suspense>

      <Suspense fallback={<div>Cargando...</div>}>
        <ConvolutionVideo kernel={kernel} kernelSize={kernelSize} />
      </Suspense>
    </>
  )
}

export default Convolution
