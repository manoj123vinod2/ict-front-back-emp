import { Button, TextField, Typography, inputClasses } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Add = (props) => {
  var[inputs,setInputs]=useState(props.data)
  const navigate = useNavigate()
const inputHandler=(e)=>{
  const {name,value}=e.target
  setInputs((prev)=>({...prev,[name]:value}))
  console.log(inputs)
}

const addHandler=(e)=>{
  console.log("btn cliked")
  if (props.method==="post"){
    axios.post("http://localhost:3006/create",inputs)
    .then((response)=>{
      console.log(response)
      alert(response.data)
      navigate('/view')
    })
    .catch((err)=>console.log(err))
  }
  if(props.method==="put"){
    axios.put("http://localhost:3006/edit/"+inputs._id,inputs)
    alert("data updated")
    navigate('/add')
  setTimeout(()=>{
    navigate('/view')
  },10);
  }
}

  return (
    <div>
        <Typography variant='h2'>Add Employee Name</Typography>
<TextField id="outlined-basic" label="empoyeename" variant="outlined" name='ename' value={inputs.ename} onChange={inputHandler}/><br/><br/>
<TextField id="outlined-basic" label="employee salary" variant="outlined"  name='esalary'value={inputs.esalary} onChange={inputHandler} /><br/><br/>
<TextField id="outlined-basic" label="employee position" variant="outlined"  name='eposition'value={inputs.eposition} onChange={inputHandler} /><br/><br/>
<TextField id="outlined-basic" label="employee age" variant="outlined"  name='eage'value={inputs.eage} onChange={inputHandler} /><br/><br/>

<Button variant="contained" color="success" onClick={addHandler}>
  Success
</Button> 

    </div>
  )
}

export default Add