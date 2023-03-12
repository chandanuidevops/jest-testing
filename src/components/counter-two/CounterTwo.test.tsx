import { render, screen } from '@testing-library/react'
import { CounterTwo } from './CounterTwo'
import user from '@testing-library/user-event'
describe('CounterTwo', () => {
  test('renders correctly', () => {
    render(<CounterTwo count={0} />)
    const textElement = screen.getByText('Counter Two')
    expect(textElement).toBeInTheDocument()
  })
  test('handlers are aclled', async () => {
    user.setup()
    const increamentHandler = jest.fn()
    const decreamentHandler = jest.fn()
    render(
      <CounterTwo
        count={0}
        handleIncrement={increamentHandler}
        handleDecrement={decreamentHandler}
      />
    )
    const incrementbutton = screen.getByRole('button', { name: 'Increment' })
    const decrementbutton = screen.getByRole('button', { name: 'Decrement' })
    await user.click(incrementbutton)
    await user.click(decrementbutton)
    expect(increamentHandler).toHaveBeenCalledTimes(1)
    expect(decreamentHandler).toHaveBeenCalledTimes(1)
  })
})
