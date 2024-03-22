import React, { useEffect, useMemo } from 'react'
import {Box, Typography} from '@mui/material'
import {DataGrid} from '@mui/x-data-grid'
import { useSelector, useDispatch } from "react-redux";
import { fetchusers } from '../../../store/UserInfo';


const EditUser =({setSelectedLink, link }) =>{
  const users = useSelector((state) => state.userSlice.users.items);
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(fetchusers());
  }, [dispatch]);
  const columns = useMemo(()=>[
    {field: 'firstName', headerName:'FirstName', with:60},
    {field: 'lastName', headerName:'LastName', with:60},
    {field: 'email', headerName:'Email', with:60},
    {field: 'phone', headerName:'Phone', with:60},
    {field: 'address', headerName:'Address', with:60},
    {field: 'role', headerName:'Role', with:60},

    
  ],[] )



  return (
   
    <Box 
    sx={{
      height:400,
      width:'100'
    }}>
<Typography
variant='h3'
component='h3'
sx={{textAlign:'center',mt:3, mb:3}}>
  LMS users
</Typography>
<DataGrid 
 columns={columns}
 rows={users} />
  </Box>
  
  )
};
export default EditUser;