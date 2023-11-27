import React from 'react';

import { Typography } from '@mui/material';

export function ConnectionState({ isConnected }) {
  return <Typography variant="h4" component="h4">{ '' + isConnected }</Typography>;
}