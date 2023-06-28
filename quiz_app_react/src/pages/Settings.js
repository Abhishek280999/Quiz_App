
import React from 'react'
import SelectField from '../components/SelectField'
import { Box, Button, CircularProgress, Typography } from '@mui/material'
import TextFieldComp from '../components/TextFieldComp'
import useAxios from '../hooks/useAxios'
import { useHistory } from "react-router-dom";

const Settings = () => {
  const {response ,error ,loading} = useAxios({url: "/api_category.php"})
  // console.log(response)
  const history = useHistory();

   if(loading){
    return (
      <Box mt={20}>
      <CircularProgress/>

      </Box>
    )
   }
   if(error){
    return (
      <Typography mt={20} variant='h6' color={"red"}>
      Some went Wrong...
      </Typography>
    )
   }
const handleSubmit = (e) => {
  e.preventDefault()
  history.push("/questions");

}

const difficultyOptions =[
  {id : 'easy', name : 'Easy'},
  {id : 'medium', name : 'Medium'},
  {id : 'hard', name : 'Hard'},
]
const typeOptions = [
  { id: "multiple", name: "Multiple Choise" },
  { id: "boolean", name: "True/False" },
];
  return (
    <form onSubmit={handleSubmit}>
      <SelectField options={response.trivia_categories} label ="Category" />
      <SelectField options={difficultyOptions} label ="Difficulty" />
      <SelectField options={typeOptions} label ="Type" />
      <TextFieldComp/>
      <Box mt={3} width={"100%"}>
      <Button fullWidth variant='contained' type='submit'> Get Started </Button>

      </Box>


    </form>
  )
}

export default Settings