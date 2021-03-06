import React from 'react'

import Jobs from 'components/Jobs';
import Employees from 'components/Employees';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  toolbarTop: {
    marginTop: '50px'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Jobs />
      <main className={classes.content}>
        <div className={classes.toolbar && classes.toolbarTop}>
          <Employees />
        </div>
      </main>
    </div>
  );
}

export default App;
