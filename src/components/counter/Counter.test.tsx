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

})