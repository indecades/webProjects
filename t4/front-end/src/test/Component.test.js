import SearchResults from "../components/SearchResults";
import {render, screen} from '@testing-library/react'

it('renders the search results component', ()=> {
    render(<SearchResults/>)
    const searchElement = screen.getByTestId('searchTest')
    expect(searchElement).toBeInTheDocument()
})