import { render,screen  } from '@testing-library/react' 
import { Counter } from './Counter'
import user from '@testing-library/user-event'
describe("Counter",()=>{
    test('renders correctly',()=>{
        render(<Counter />);
        const countElement = screen.getByRole('heading');
        expect(countElement).toBeInTheDocument();
        const increamentButton = screen.getByRole('button',{
            name:'Increment'
        });
        expect(increamentButton).toBeInTheDocument()
    })    
    test('renders a count of 1 after click the increament button',async()=>{
        user.setup();
        render(<Counter />);
        const increamentButton = screen.getByRole('button',{
            name:'Increment'
        });
        await user.click(increamentButton);
        const countElement = screen.getByRole('heading');
        expect(countElement).toHaveTextContent('1')
    })

    test('renders a count of 10 after click the set buttons',async()=>{
        user.setup();
        render(<Counter />);
        const amountInput = screen.getByRole('spinbutton');
        await user.type(amountInput,'10')
        const settButton = screen.getByRole('button',{
            name:'Set'
        });
        await user.click(settButton);
        const countElement = screen.getByRole('heading');
        expect(countElement).toHaveTextContent('10')
    })
    test('elements are focused in the right order',async()=>{
        user.setup();
        render(<Counter />);
        const amountInput = screen.getByRole('spinbutton');
        const setButton = screen.getByRole('button',{
            name:'Set'
        });
        const increamentButton = screen.getByRole('button',{
            name:'Increment'
        });
        await user.tab()
        expect(increamentButton).toHaveFocus()
        await user.tab()
        expect(amountInput).toHaveFocus()
        await user.tab()
        expect(setButton).toHaveFocus()
    })

})