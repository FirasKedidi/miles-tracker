import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteEntry } from '../actions'

const Entry = ({description,miles,id}) => {
  const dispatch = useDispatch()
  const handleDelete = (id) => {
    dispatch(deleteEntry(id))
  }
  return (
    <div className='list-group-item list-group-item-action d-flex justify-content-between align-item-center'>
        <div>{description}</div>
        <div>{miles}</div>
        <button onClick={()=>handleDelete(id)} className="btn btn-danger">Delete</button>
    </div>
  )
}

export default Entry