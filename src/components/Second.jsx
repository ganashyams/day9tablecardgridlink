import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Second = () => {
    var data = [{name:"ganashyam",age:20,place:"thrissur"},
                {name:"shyam",age:21,place:"eranamkulam"},
                {name:"james",age:22,place:"koratty"},
                {name:"thomas",age:23,place:"palakkad"}

    ]
  return (
    <div>
   <TableContainer>
    <Table>
<TableHead>
    <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>Age</TableCell>
        <TableCell>Place</TableCell>

    </TableRow>
</TableHead>
<TableBody>

    {data.map((v,i)=>{
        return(
        <TableRow key={i}>
        <TableCell>{v.name}</TableCell>
        <TableCell>{v.age}</TableCell>
        <TableCell>{v.place}</TableCell>
        </TableRow>
        )
    })}
</TableBody>
    </Table>
   </TableContainer>
    </div>
  )
}
export default Second