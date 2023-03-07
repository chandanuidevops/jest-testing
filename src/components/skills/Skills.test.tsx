import { render, screen } from "@testing-library/react"
import { Skills } from "./Skills"
describe('Skills',()=>{
    const skills = ['HTML','CSS','JAVASCRIPT']
    test('renders correctly',()=>{
        render(<Skills skills={skills} />)
        const listElement = screen.getByRole('list')
        expect(listElement).toBeInTheDocument()
    })
    test("renders a list of skills",()=>{
        render(<Skills skills={skills} />)
        const listItemElement = screen.getAllByRole('listitem')
        expect(listItemElement).toHaveLength(skills.length)
    })
    test('renders Login button',()=>{
        render(<Skills skills={skills} />)
        const loginButton = screen.getByRole('button',{
            name:'Login'
        })
        expect(loginButton).toBeInTheDocument()
    })
})