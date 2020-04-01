import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {WrapperToolbar,Search} from '../style/headerStyle'

const token = window.localStorage.getItem('token')


const Header = (props) => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    window.localStorage.clear();
    props.goToLoginPage();
  }


  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );
  return (

    <div>
      <AppBar position="static">
        <WrapperToolbar>
          <Typography variant="h6" noWrap>
            4Eddit
          </Typography>
          <Search>
            <InputBase
              onChange={props.handleChangeInput}
              placeholder="Pesquisar…"
              inputProps={{ 'aria-label': 'pesquisa' }}
              name='filterPosts'
              value={props.filterPosts}
            />
            <SearchIcon
              onClick={props.handleFilterPost}
            />
          </Search>
          {token === null ? <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            color="inherit">
            <AccountCircle />
          </IconButton>
            : <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit">
              <AccountCircle />
            </IconButton>
          }

        </WrapperToolbar>
      </AppBar>
      {renderMenu}
    </div>
  )
}

export default Header;