import React, { useEffect, useState, useRef } from 'react'
import types from 'prop-types'
import potrace from './potrace'
import inyectGlobalStyles from './util/inyectGlobalStyles'

const propTypes = {
  small: types.string.isRequired,
  big: types.string.isRequired,
  alt: types.string,
  traceColor: types.string,
  bgColor: types.string,
  style: types.object,
  forceWait: types.number
}

const defaultProps = {
  traceColor: '#d7d9e0',
  bgColor: '#f2f2f4',
  forceWait: 1000
}

const containerStyles = {
  width: '100%',
  position: 'relative',
  display: 'inline-block'
}

const svgContainerStyles = {
  width: '100%',
  position: 'relative',
  top: 0,
  left: 0
}

const bgStyles = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  zIndex: -1
}

const getFullImageStyles = (isLoaded) => ({
  width: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 100,
  opacity: isLoaded ? '1' : '0',
  transition: 'opacity 800ms ease'
})

const ReactPotrace = ({ small, big, alt, traceColor, bgColor, style, forceWait }) => {
  const [svg, setSvg] = useState({})
  const [isLoaded, setLoaded] = useState(false)
  const containterRef = useRef()

  useEffect(() => {
    potrace.img.crossOrigin = 'Anonymous'
    potrace.loadImageFromUrl(small)
    potrace.process(() => {
      setSvg(
        // TODO: Check this adjust
        potrace.getSVG((containterRef.current.clientWidth - 4) / 150)
      )
    })

    // Inyect global style with loading animations
    inyectGlobalStyles()
  }, [small])

  useEffect(() => {
    var img = new window.Image()
    img.src = big

    img.onload = function () {
      if (forceWait) {
        window.setTimeout(
          () => setLoaded(true),
          forceWait
        )
      }
    }
  }, [small])

  return (
    <div
      style={{ ...style, ...containerStyles }}
      ref={containterRef}
    >
      <svg
        width={svg.width}
        height={svg.height}
        fill={traceColor}
        style={svgContainerStyles}
      >
        <path d={svg.path} />
      </svg>
      <img
        src={big}
        alt={alt}
        style={getFullImageStyles(isLoaded)}
      />
      {!isLoaded && <div className='def-potrace-loading-animation' />}
      <div style={{
        ...bgStyles,
        backgroundColor: bgColor
      }}
      />
    </div>
  )
}

ReactPotrace.propTypes = propTypes
ReactPotrace.defaultProps = defaultProps

export default ReactPotrace
