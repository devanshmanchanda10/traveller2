import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';

import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Advisor
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore new Places
          </Typography>
          {/* <Autocomplete> */}
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search..."
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
              />
            </div>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
// import React from 'react';
// import { Autocomplete } from '@react-google-maps/api';
// import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material';
// // import SearchIcon from '@mui/icons-material/Search';
// import { makeStyles } from '@mui/styles';

// import SearchIcon from "@mui/icons-material/Search";

// const StyledToolbar = styled(Toolbar)(({ theme }) => ({
//   display: "flex",
//   justifyContent: "space-between",
//   [theme.breakpoints.down("sm")]: {
//     flexDirection: "column",
//   },
// }));
// const useStyles = makeStyles((theme) => ({
//   toolbar: {
//     display: 'flex',
//     justifyContent: 'space-between',
//   },
//   title: {
//     flexGrow: 1,
//     display: 'none',
//     [theme.breakpoints.up('sm')]: {
//       display: 'block',
//     },
//   },
//   search: {
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: theme.palette.common.white,
//     '&:hover': {
//       backgroundColor: theme.palette.common.white,
//     },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(3),
//       width: 'auto',
//     },
//   },
//   searchIcon: {
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   inputRoot: {
//     color: 'inherit',
//   },
//   inputInput: {
//     padding: theme.spacing(1, 1, 1, 0),
//     paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
// }));

// const Header = () => {
//   const classes = useStyles();
//   return (
//     <AppBar position="static">
//       <Toolbar className={classes.toolbar}>
//         <Typography variant="h5" className={classes.title}>
//           Travel Advisor
//         </Typography>
//         <Box display="flex">
//           <Typography variant="h6" className={classes.title}>
//             Explore new Places
//           </Typography>
//           {/* <Autocomplete> */}
//           <div className={classes.search}>
//             <div className={classes.searchIcon}>
//               <SearchIcon />
//             </div>
//             <InputBase
//               placeholder="Search..."
//               classes={{ root: classes.inputRoot, input: classes.inputInput }}
//             />
//           </div>
//           {/* </Autocomplete> */}
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;

// import React from "react";
// import { Autocomplete } from "@react-google-maps/api";
// import { AppBar, Toolbar, Typography, InputBase, Box, styled } from "@mui/material";
// // import SearchIcon from "@mui/icons-material/Search";

// const StyledToolbar = styled(Toolbar)(({ theme }) => ({
//   display: "flex",
//   justifyContent: "space-between",
//   [theme.breakpoints.down("sm")]: {
//     flexDirection: "column",
//   },
// }));


