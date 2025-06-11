"use client";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import Image from "next/image";
import freshcartLogo from "../assests/freshcart-logo-CC9Ez4_E (2).svg";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";
import Link from "next/link";
import Avatar from "@mui/material/Avatar";

import Tooltip from "@mui/material/Tooltip";

function Navbar() {
  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const pages = ["Home", "Products", "CartWishlist", "Categories", "Brands"];

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ background: "white" }}>
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="a"
          className="text-main text-2xl"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 900,
            textDecoration: "none",
            
          }}
        >
          <Image src={freshcartLogo} alt="freshcart-Logo" />
        </Typography>

        {typeof window !== "undefined" && localStorage.getItem("token")
            ? <Box sx={{  display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    sx={{ textAlign: "center", textTransform: "capitalize" }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "2px",
                  gap: "4px",
                }}
              >
                <Box
                  sx={{
                    flexGrow: 0,
                    display: "flex",
                    gap: {
                      xs: "5px",
                      sm: "10px",
                    },
                    alignItems: "center",
                    paddingInline: "10px",
                  }}
                >
                  <FacebookIcon sx={{ color: "blue" }} />
                  <InstagramIcon sx={{ color: "red" }} />
                  <TwitterIcon sx={{ color: "black" }} />
                  <LinkedInIcon sx={{ color: "blue" }} />
                  <YouTubeIcon sx={{ color: "red" }} />
                </Box>
                
              </Box>
            </Menu>
          </Box>
            : ""}
            
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="/"
          className="text-main text-lg"
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            textDecoration: "none",
            justifyContent:"center",
            alignItems:"center"
          }}
        >
          <Image src={freshcartLogo} alt="freshcart-Logo" />
        </Typography>
        {typeof window !== "undefined" && localStorage.getItem("token") ? (
          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
              <MenuItem
                onClick={() => {
                  handleCloseUserMenu;
                  localStorage.removeItem("token");
                  location.replace("/signin");
                }}
              >
                <Typography sx={{ textAlign: "center" }}>LogOut</Typography>
              </MenuItem>
            </Menu>
          </Box>
        ) : (
          ""
        )}
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          // full screen
          {typeof window !== "undefined" && localStorage.getItem("token")
            ? pages.map((page) => (
                <Link style={{ textDecoration: "none" }} href={`/${page}`}>
                  <Button
                    className="text-background text-sm font-semibold"
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      display: "block",
                      textTransform: "capitalize",
                      color: "black",
                      textDecoration: "none",
                    }}
                  >
                    {page}
                  </Button>
                </Link>
              ))
            : ""}
        </Box>
        <Box
          sx={{
            flexGrow: 0,
            display: { xs: "none", md: "flex" },
            gap: {
              xs: "5px",
              sm: "10px",
            },
            alignItems: "center",
          }}
        >
          <FacebookIcon sx={{ color: "blue" }} />
          <InstagramIcon sx={{ color: "red" }} />
          <TwitterIcon sx={{ color: "black" }} />
          <LinkedInIcon sx={{ color: "blue" }} />
          <YouTubeIcon sx={{ color: "red" }} />
          {typeof window !== "undefined" && localStorage.getItem("token") ? (
            <Box sx={{ flexGrow: 0, mx: "10px" }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography sx={{ textAlign: "center" }}>
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
                <MenuItem
                  onClick={() => {
                    handleCloseUserMenu;
                    localStorage.removeItem("token");
                    location.replace("/signin");
                  }}
                >
                  <Typography sx={{ textAlign: "center" }}>LogOut</Typography>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <>
              <Link href="/signin">
                <Button
                  sx={{
                    background: "white",
                    color: "black",
                    marginBlock: {
                      xs: "5px",
                      md: "0px",
                    },
                    marginInline: {
                      xs: "0px",
                      md: "10px",
                    },
                  }}
                  variant="contained"
                >
                  <LoginIcon sx={{ paddingRight: "5px" }} />
                  Login
                </Button>
              </Link>
              <Link href="/signup">
                <Button
                  sx={{
                    background: "black",
                    color: "white",
                    marginBlock: {
                      xs: "5px",
                      md: "0px",
                    },
                    marginInline: {
                      xs: "0px",
                      md: "10px",
                    },
                  }}
                  variant="contained"
                >
                  <PersonAddAlt1Icon sx={{ paddingRight: "5px" }} />
                  Signup
                </Button>
              </Link>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
