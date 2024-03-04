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

function Navbar({ setSearchItem }) {
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
    <>
      <nav className="navbar navbar-expand-lg m-1 shadow  navbar-light bg-light position-sticky top-0">
        <div className="container-fluid">
          {
            user == null ? <Link className="navbar-brand p-1  mx-2" to="#"><h1 class="text-primary display-6">Fruitables</h1></Link> :
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
            <div class="navbar-nav mx-auto">
              <a href="/" class="nav-item nav-link active">Home</a>
              <a href="/product" class="nav-item nav-link">Products</a>
              <a href="#" class="nav-item nav-link">Shop Detail</a>
              <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                <div class="dropdown-menu m-0 bg-secondary rounded-0">
                  <a href="#" class="dropdown-item">Cart</a>
                  <a href="#" class="dropdown-item">Chackout</a>
                  <a href="#" class="dropdown-item">Testimonial</a>
                  <a href="#" class="dropdown-item">404 Page</a>
                </div>
              </div>
              <a href="/about" class="nav-item nav-link">Contact</a>
            </div>

            <div>
              <Search>
                <SearchIconWrapper>
                  {/* <SearchIcon /> */}
                  <button class="btn-search btn border border-secondary btn-md-square px-3 rounded-circle bg-white me-4" data-bs-toggle="modal" data-bs-target="#searchModal"><i class="fas fa-search text-primary"></i></button>
                </SearchIconWrapper>
                <StyledInputBase
                  className='mx-3'
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                  onChange={(e) => { setSearchItem(e.target.value) }}
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
              user != null ? <Link className="nav-link p-0 d-grid my-1  mx-1" to="/cart"><Button variant="contained" startIcon={<ShoppingCartIcon />}>Cart({numberOfCartItems})</Button></Link> : null
            }
          </div>
        </div>
      </nav >
      {/* < div className="container-fluid fixed-top" >
        <div class="container px-0">
          <nav class="navbar navbar-light bg-white navbar-expand-xl">
            <a href="index.html" class="navbar-brand"><h1 class="text-primary display-6">Fruitables</h1></a>
            <button class="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span class="fa fa-bars text-primary"></span>
            </button>
            <div class="collapse navbar-collapse bg-white" id="navbarCollapse">
              <div class="navbar-nav mx-auto">
                <a href="index.html" class="nav-item nav-link active">Home</a>
                <a href="shop.html" class="nav-item nav-link">Shop</a>
                <a href="shop-detail.html" class="nav-item nav-link">Shop Detail</a>
                <div class="nav-item dropdown">
                  <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                  <div class="dropdown-menu m-0 bg-secondary rounded-0">
                    <a href="cart.html" class="dropdown-item">Cart</a>
                    <a href="chackout.html" class="dropdown-item">Chackout</a>
                    <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                    <a href="404.html" class="dropdown-item">404 Page</a>
                  </div>
                </div>
                <a href="contact.html" class="nav-item nav-link">Contact</a>
              </div>
              <div class="d-flex m-3 me-0">
                <button class="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4" data-bs-toggle="modal" data-bs-target="#searchModal"><i class="fas fa-search text-primary"></i></button>
                <a href="#" class="position-relative me-4 my-auto">
                  <i class="fa fa-shopping-bag fa-2x"></i>
                  <span class="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1" style="top: -5px; left: 15px; height: 20px; min-width: 20px;">3</span>
                </a>
                <a href="#" class="my-auto">
                  {
                    user == null ? <Link className="navbar-brand p-1  mx-2" to="#"> <i class="fas fa-user fa-2x"></i></Link> :
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
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div > */}
    </>
  )
}

export default Navbar
