import { render, screen } from '@testing-library/react'

import { Skills } from './Skills'
describe('Skills', () => {
  const skills = ['HTML', 'CSS', 'JAVASCRIPT']
  test('renders correctly', () => {
    render(<Skills skills={skills} />)
    const listElement = screen.getByRole('list')
    expect(listElement).toBeInTheDocument()
  })
  test('renders a list of skills', () => {
    render(<Skills skills={skills} />)
    const listItemElement = screen.getAllByRole('listitem')
    expect(listItemElement).toHaveLength(skills.length)
  })
  test('renders Login button', () => {
    render(<Skills skills={skills} />)
    const loginButton = screen.getByRole('button', {
      name: 'Login',
    })
    expect(loginButton).toBeInTheDocument()
  })
  test('Start learning button is not present', () => {
    render(<Skills skills={skills} />)
    const startLearningButton = screen.queryByRole('button', {
      name: 'Start learning',
    })
    expect(startLearningButton).not.toBeInTheDocument()
  })
  test('Start learning button is eventually displayed', async () => {
    render(<Skills skills={skills} />)
    // screen.debug()
    const startLearningButton = await screen.findByRole(
      'button',
      { name: 'Start learning' },
      { timeout: 2000 }
    )
    // screen.debug()
    expect(startLearningButton).toBeInTheDocument()
  })
})
