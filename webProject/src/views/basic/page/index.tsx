import React, { useState } from 'react';
import { Card, List, ListItem, Typography, Grid } from '@mui/material';

export default function Page() {
  return (
    <div>
      <List>
        <ListItem>
          <Card sx={
            {
              width: '100%',
              minHeight: '100px',
              padding: '10px'
            }
          }>
            {/* <Grid container>
              <Grid item xs={}></Grid>
            </Grid> */}
            <Typography variant="h6" component="div"  gutterBottom>h6. Heading</Typography>
            <Typography variant="subtitle1" gutterBottom>时间信息</Typography>
            <Typography variant="subtitle2" gutterBottom>内容主题</Typography>
          </Card>
        </ListItem> 
      </List>
    </div>
  )
}
