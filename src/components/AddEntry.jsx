import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addEntry } from '../actions'

const AddEntry = () => {
    const dispatch = useDispatch()
    const [description,setDescription] = useState('')
    const [miles,setMiles] = useState(0)
    const handleDescription = (e) => {
        setDescription(e.target.value)
    }
    const handleMiles = (e) => {
        setMiles(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addEntry({description,miles}))
        setDescription('')
        setMiles(0)
    }
  return (
    <div className='d-flex justify-content-center mt-4'>
        <form onSubmit={handleSubmit} action="">
            <div className="form-group row align-items-center">
                <div className="col-auto">
                    <input onChange={handleDescription} placeholder='description' value={description} type="text" className="form-control mb-2" />
                </div>
                <div className="col-auto">
                    <input onChange={handleMiles} placeholder='miles' value={miles} type="number" className="form-control mb-2" />
                </div>
                <div className="col-auto">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default AddEntry