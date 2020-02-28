import React, { useEffect, useState } from 'react'
import potrace from './potrace'

const containerStyles = {
  width: 300,
  minHeight: 300,
  position: 'relative'
}

const svgContainerStyles = {
  width: '100%',
  position: 'absolute',
  top: 0,
  left: 0
}

const getFullImageStyles = (isLoaded) => ({
  width: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 10,
  opacity: isLoaded ? '1' : '0',
  transition: 'opacity 800ms ease'
})

const Trace = ({ small, big, alt, shadowColor }) => {
  const [svg, setSvg] = useState({})
  const [isLoaded, setLoaded] = useState(false)

  useEffect(() => {
    potrace.img.crossOrigin = 'Anonymous'
    potrace.loadImageFromUrl(small)
    potrace.process(() => {
      setSvg(
        potrace.getSVG(300 / 150)
      )
    })
  }, [small])

  useEffect(() => {
    var img = new window.Image()
    img.src = big

    img.onload = function () {
      setLoaded(true)
    }
  }, [small])

  return (
    <div style={containerStyles}>
      <svg
        width={svg.width}
        height={svg.height}
        style={svgContainerStyles}
        fill={shadowColor}
      >
        <path d={svg.path} />
      </svg>
      <img
        src={big}
        alt={alt}
        style={getFullImageStyles(isLoaded)}
      />
    </div>
  )
}

export default Trace
