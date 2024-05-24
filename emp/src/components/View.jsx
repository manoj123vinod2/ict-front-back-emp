import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Add from './Add'

const View = () => {
var[users,setusers]=useState([])
var[update,setUpdate]=useState(false)
var[Singlevalue,setsingleValue]=useState([])

useEffect(()=>{
  axios.get('http://localhost:3006/view')

   .then((res)=>{
    console.log(res.data)
    setusers(res.data)
   })
  },[])
const deleteValue=(id)=>{
  console.log(id)
  axios.delete("http://localhost:3006/remove/"+id)
  .then((response)=>{
    alert(response.data)
    window.location.reload(true)
  }).catch((err)=>{console.log(err)})
}
const updateValue=(val)=>{
  console.log("update")
  setUpdate(true)
  setsingleValue(val)
}

  
    
var finalJSX=<TableContainer component={Paper}>
<Table sx={{ minWidth: 650 }} aria-label="simple table">

<TableHead>
    <TableRow    sx={{ backgroundColor: 'orange' }}>
    <TableCell sx={{fontWeight: 'bold'}}>Name</TableCell>
    <TableCell   sx={{fontWeight: 'bold'}}    >Age</TableCell>
    <TableCell sx={{fontWeight: 'bold'}} >Salary</TableCell>
    <TableCell sx={{fontWeight: 'bold'}}>Position</TableCell>

    </TableRow>
</TableHead>

<TableBody>
  {users.map((val,i)=>{
    return(
    <TableRow>

    <TableCell >{val.ename}</TableCell>
    <TableCell >{val.eage}</TableCell>
    <TableCell >{val.esalary}</TableCell>
    <TableCell >{val.eposition}</TableCell>
    <TableCell>
  <Button style={{ color: 'white', backgroundColor: 'orange' }}variant='contained' color='primary' onClick={()=>updateValue(val)}>update</Button>
  </TableCell>
  <TableCell>
  <Button style={{ color: 'white', backgroundColor: 'orange' }}variant='contained' color='primary' onClick={()=>deleteValue(val._id)}>delete</Button>
  </TableCell>

    </TableRow>
    )
  })}
</TableBody>
</Table>

</TableContainer>






if(update) finalJSX =<Add data={Singlevalue} method='put'/>
return  finalJSX
}
export default View