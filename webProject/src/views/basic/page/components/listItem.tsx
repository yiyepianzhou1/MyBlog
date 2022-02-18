import React, { useState } from "react"
import { Card, Typography, Grid } from '@mui/material';


export default function ListItem(props = {}) {
  return (
    <Card sx={
      {
        width: '100%',
        minHeight: '100px',
        padding: '10px'
      }
    }>
      <Grid container direction="row" justifyContent="space-between" alignItems="center">
        <div>
          <Typography variant="h6" component="div"  gutterBottom>h6. Heading</Typography>
          <Typography variant="subtitle1" gutterBottom>时间信息</Typography>
          <Typography variant="subtitle2" gutterBottom>内容主题</Typography>
        </div>
        <Typography variant="subtitle2" gutterBottom>内容主题1</Typography>
      </Grid>
    </Card>
  )
};
