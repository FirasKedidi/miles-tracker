import React from 'react'
import AddEntry from './components/AddEntry'
import Entries from './components/Entries'
import TotalMiles from './components/TotalMiles'
const App = () => {
  return (
    <div className='container'>
    <TotalMiles/>
     <AddEntry/>
     <Entries/>
    </div>
  )
}

export default App