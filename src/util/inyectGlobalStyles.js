// Inyect global style with loading animations

export default function inyectGlobalStyles () {
  const globalStyles = document.getElementById('react-potrace-styles')

  if (!globalStyles) {
    const globalStyles = document.createElement('style')
    globalStyles.type = 'text/css'
    globalStyles.id = 'react-potrace-styles'
    document.head.appendChild(globalStyles)
    // Webkit Hack
    globalStyles.appendChild(document.createTextNode(''))

    globalStyles.innerHTML = `

    @keyframes react-potrace-animation {
      0% {
        background-position: -200px 0;
      }
      100% {
        background-position: calc(200px + 100%) 0;
      }
    }

    @-webkit-keyframes react-potrace-animation {
      0% {
        background-position: -200px 0;
      }
      100% {
        background-position: calc(200px + 100%) 0;
      }
    }

    @-moz-keyframes react-potrace-animation {
      0% {
        background-position: -200px 0;
      }
      100% {
        background-position: calc(200px + 100%) 0;
      }
    }

    .def-potrace-loading-animation {
      width: 100%;
      height: 100%;
      background-color: transparent;
      background-image: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.42), transparent);
      background-size: 200px 100%;
      background-repeat: no-repeat;
      animation: react-potrace-animation 1.5s ease-in-out infinite;
      position: absolute;
      top: 0;
    }
    `
  }
}
