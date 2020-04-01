import React from 'react';
import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';

const WrapperToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`

const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 30vw;
  }
`

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
              placeholder="Pesquisar…"
              inputProps={{ 'aria-label': 'pesquisa' }}
            />
            <SearchIcon />
          </Search>
          <IconButton 
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit">
            <AccountCircle />
          </IconButton>
        </WrapperToolbar>
      </AppBar>
      {renderMenu}
    </div>
  )
}

export default Header;