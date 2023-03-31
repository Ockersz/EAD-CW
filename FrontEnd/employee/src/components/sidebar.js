import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListIcon from '@mui/icons-material/List';
import CreateIcon from '@mui/icons-material/Create';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useNavigate } from 'react-router-dom';

export default function TemporaryDrawer({state, setState, toggleDrawer}) {
  const navigate = useNavigate()

  const navigateTab = (index) => {
    if (index === 0){
      navigate('/laptoplist')
    }
    else if (index === 1) {
      navigate('/addlaptop')
    }
    else if (index === 2) {
      navigate('/returnlaptop')
    }
    else {
      navigate('/allocatelaptop')
    }
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Laptop List', 'Add Laptop', 'Return Laptop', 'Allocate Laptop'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => navigateTab(index)}>
            <ListItemIcon>
              {(() => {
                switch (index % 4) {
                  case 0:
                    return <ListIcon/>;
                  case 1:
                    return <CreateIcon/>;
                  case 2:
                    return <AssignmentReturnIcon/>;
                  case 3:
                    return <AssignmentIcon />;
                  default:
                    return null;
                }
              })()}
            </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}