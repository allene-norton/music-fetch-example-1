// Searchbar.js
import { useState } from 'react'

function Searchbar(props) {
    // let [searchTerm, setSearchTerm] = useState('')
    let setSearch = props.setSearch

    return (
        <form onSubmit={(e) => {e.preventDefault() 
        setSearch(e.target[0].value)}}>
            <input type="text" placeholder="Enter a search term here" />
            <input type="submit" />
        </form>
    )
}

export default Searchbar