/* globals test expect */
import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders react potrace link', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/react potrace/i)
  expect(linkElement).toBeInTheDocument()
})
