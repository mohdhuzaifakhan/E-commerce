import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { DataProvider } from '../App';
import { Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { AccountCircle } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from '../MUI_style/search_bar_style'

function Navbar({setSearchItem}) {
  const { userData, setUserData } = useContext(DataProvider)
  const navigate = useNavigate()
  const [name, setName] = useState("Admin");
  const user = JSON.parse(localStorage.getItem("user"));
  const [numberOfCartItems, setCartItemsNumber] = useState(0)
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const [searchItem,setSearchItem] = useState()

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const state = useSelector((state) => {
    return state.ChangeData
  })

  // console.log(userData);

  useEffect(() => {
    if (user) {
      setName(user.name)
      setCartItemsNumber(user.cartItems.length)
    }
  }, [name, numberOfCartItems, user])

  const handleLogout = () => {
    localStorage.removeItem("user")
    setUserData(null);
    navigate('/')
    window.location.reload();
  }

  return (
    <nav className="navbar navbar-expand-lg m-1 shadow  navbar-light bg-light position-sticky top-0">
      <div className="container-fluid">
        {
          user == null ? <Link className="navbar-brand p-1  mx-2" to="#"><h3>E-commerce</h3></Link> :
            <><Avatar
              onClick={handleClick}
              size="small"
              sx={{ mr: 1 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >{name[0].toUpperCase()}</Avatar>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <AccountCircle fontSize="small" />
                  </ListItemIcon>
                  Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem onClick={() => {
                  handleClose()
                  handleLogout()
                }}>
                  <ListItemIcon >
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu></>
        }
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item my-auto py-auto listItem">
              <Link className="nav-link active py-auto  mx-2 " aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item my-auto py-auto listItem">
              <Link className="nav-link active py-auto  mx-2 " to="/product">Products</Link>
            </li>
            <li className="nav-item my-auto py-auto listItem">
              <Link className="nav-link active py-auto mx-2 " to="/about">About</Link>
            </li>
          </ul>

          <div>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                onChange={(e)=>{setSearchItem(e.target.value)}}
              />
            </Search>
          </div>
          {
            user == null ? <>
              <Link className="nav-link p-0 d-grid my-1 mx-1" to="/login"><Button variant="contained" startIcon={<LoginIcon />}>Login</Button></Link>
              <Link className="nav-link p-0 d-grid my-1 mx-1" to="/signup"><Button variant="contained" startIcon={<PersonIcon />}>SignUp</Button></Link></>
              :
              null
          }

          {
            user != null ? <Link className="nav-link p-0 d-grid my-1  mx-1" to="/cart"><Button variant="contained" startIcon={<ShoppingCartIcon />}>Cart({numberOfCartItems})</Button></Link>:null
          }
        </div>
      </div>
    </nav >
  )
}

export default Navbar