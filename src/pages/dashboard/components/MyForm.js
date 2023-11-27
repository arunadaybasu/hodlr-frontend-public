import React, { useState } from 'react';
import { socket } from '../socket';

import { Box, TextField, Button } from '@mui/material';

export function MyForm() {
  const [value, setValue] = useState('');
  // const [isLoading, setIsLoading] = useState(false);

  function onSubmit(event) {
    event.preventDefault();
    // setIsLoading(true);
    console.log("Message - " + value);

    socket.emit('create-something', value, () => {
      // setIsLoading(false);
      console.log("Emitted - " + value);
    });
  }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="send-btn-1"
        label="Message"
        variant="outlined"
        onChange={ e => setValue(e.target.value) }
      />
      <Button variant="contained" onClick={ onSubmit }>Send</Button>
    </Box>
  );
}