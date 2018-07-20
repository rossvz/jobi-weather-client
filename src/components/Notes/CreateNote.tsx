import React from 'react'
import { TextField } from '@material-ui/core'
const CreateNote = () => {
  return (
    <div>
      <h4>Create new entry</h4>
      <TextField helperText={'Type some text'} />
    </div>
  )
}

export default CreateNote
