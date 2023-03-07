import { render,screen } from "@testing-library/react";
import { Greet } from "./greet";

describe('Greet',()=>{
    test('Greet render correctly',()=>{
        render(<Greet />)
        const textElement = screen.getByText(/hello/i)
        expect(textElement).toBeInTheDocument()
    })
    describe('Nested',()=>{
        test('Greet renders with a name',()=>{
            render(<Greet name="Chandan" />)
            const textElement = screen.getByText(/hello Chandan/i)
            expect(textElement).toBeInTheDocument()
        })
    })
 
})


