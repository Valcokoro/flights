import React, {useState} from 'react';



const SearchBar = () => {
    const [term, setTerm] = useState('');
    return (
    <div className="search-bar ui segment">
        <form className='ui form'>
            <div className='field'>
                <label>Search Flight</label>
                <input
                 type='text'
                 value={term}
                 onChange={(event)=> setTerm(event.target.value)}
                ></input>
            </div>

        </form>
      
    </div>

    )
}


export default SearchBar;