import React from 'react';
import Link from 'react-router/lib/Link';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';

function SidebarItems() {
  return (
    <div>
      <Link to="/schedule">
        <ListItem button style={{ textAlign: 'right' }}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="מערכת שעות" />
        </ListItem>
      </Link>

      <Link to="/students">
        <ListItem button style={{ textAlign: 'right' }}>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="חניכים" />
        </ListItem>
      </Link>

      <Link to="/mentors">
        <ListItem button style={{ textAlign: 'right' }}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="חונכים" />
        </ListItem>
      </Link>

      <Link to="/coordinators">
        <ListItem button style={{ textAlign: 'right' }}>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="רכזים" />
        </ListItem>
      </Link>

      <Link to="/admins">
        <ListItem button style={{ textAlign: 'right' }}>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="ניהול" />
        </ListItem>
      </Link>
    </div>
  );
}

export default SidebarItems;
