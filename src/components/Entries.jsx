import React from 'react'
import { useSelector } from 'react-redux'
import Entry from './Entry'

const Entries = () => {
    const entries = useSelector((state) => state.miles)
    return (
        <div className='list-group mt-4'>
            {entries.map((entry) => 
            {return <Entry key={entry.id} {...entry}/>})}
        </div>
    )
}

export default Entries