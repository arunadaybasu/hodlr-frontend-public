import React from 'react';

import { List, ListItem, ListItemText } from '@mui/material';

export function Events({ events }) {
  return (
    <List>
    {
      events.map((event, index) =>
        <ListItem key={ index }>
            <ListItemText primary={ event } />
        </ListItem>
      )
    }
    </List>
  );
}