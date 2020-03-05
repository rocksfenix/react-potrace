import React from 'react'
import ReactPotrace from 'react-potrace'

import './App.css'

function App () {
  return (
    <div className='App'>
      <h1>React Potrace</h1>
      <div style={{ width: 300 }}>
        <ReactPotrace
          small='https://res.cloudinary.com/demo/image/fetch/q_10,f_jpg,w_150/https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/cklen/cklen430391071b/cklen430391071b_q6_2-1._UX357_QL90_.jpg'
          big='https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/cklen/cklen430391071b/cklen430391071b_q6_2-1._UX357_QL90_.jpg'
          width={700}
          forceWait={3000}
        />
      </div>
    </div>
  )
}

export default App
