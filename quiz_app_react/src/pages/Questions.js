import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const Questions = () => {
  return (
    <Box>
      <Typography variant='h4'>Questions 1</Typography>
      <Typography mt={5}> This is the Que</Typography>
      <Box mt={2}>
       <Button variant='contained'>AnsWer 1</Button>
      </Box>
      <Box mt={2}>
       <Button variant='contained'>AnsWer 2</Button>
      </Box>
      <Box mt={5}>
            Score  2/6
      </Box>

    </Box>
  )
}

export default Questions