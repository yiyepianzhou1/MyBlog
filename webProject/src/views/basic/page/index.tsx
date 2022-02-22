import React, { useState } from 'react';
import { List, ListItem } from '@mui/material';
import ContentItem from './components/listItem';
function clickHandel() {
  console.log(1212)
};
const dataList: Array<any> = [
  { name: 1 },
  { name: 2 },
];
export default function Page() {
  return (
    <div>
      <List>
        {
          dataList.map(v => 
            <ListItem key={ v.name } onClick={clickHandel} sx={{ cursor: 'pointer' }}>
              <ContentItem Item={ v } />
            </ListItem> 
            )
        }
      </List>
    </div>
  )
}
