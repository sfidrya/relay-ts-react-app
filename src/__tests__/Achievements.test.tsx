import React from 'react'
import {toBeInTheDocument} from '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Achievements from '../components/Achievements'
test('renders achievements section', () => {
  render(<Achievements />)
  const headerElement = screen.getByText(/Achievements/i)
  const imageElement = screen.getByRole('img')
  expect(headerElement).toBeInTheDocument()
  expect(imageElement).toBeInTheDocument()
  screen.debug()
  //expect(linkElement).toBeInTheDocument()
})