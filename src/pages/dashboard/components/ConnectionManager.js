import React from 'react';
import { socket } from '../socket';

import { Button } from '@mui/material';

export function ConnectionManager() {
  function connect() {
    socket.connect();
  }

  function disconnect() {
    socket.disconnect();
  }

  return (
    <>
      <Button variant="contained" onClick={ connect }>Connect</Button>
      <Button variant="contained" onClick={ disconnect }>Disconnect</Button>
    </>
  );
}