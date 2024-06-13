"use client";
import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { alpha, styled } from "@mui/material/styles";
import theme from "../../assets/styles/global/_variables.jsx";
import StyledComponentsRegistry from "../../registry.jsx";

const SuccessButton = styled(Button)(({ theme }) => ({
    borderLeft: "solid",
    fontFamily: "Alegre Sans Regular NC",
    fontSize: "1.0625rem",
    height: "100%",
    padding: "0",

    // color: theme.palette.success.main,
    // '& .MuiSlider-thumb': {
    //   '&:hover, &.Mui-focusVisible': {
    //     boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
    //   },
    //   '&.Mui-active': {
    //     boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
    //   },
    // },
}));

// const style = {
//     back: {
//         background: green
//     }
// };

const NavMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <div>
                <StyledComponentsRegistry>
                    <SuccessButton
                        color="abbey"
                        id="demo-positioned-button"
                        aria-controls={
                            open ? "demo-positioned-menu" : undefined
                        }
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onMouseEnter={handleClick}
                    >
                        ABOUT
                    </SuccessButton>
                    <Menu
                        id="demo-positioned-menu"
                        aria-labelledby="demo-positioned-button"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                        }}
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                        }}
                    >
                        <MenuItem onClick={handleClose}>who we are</MenuItem>
                    </Menu>
                </StyledComponentsRegistry>
            </div>
        </>
    );
};

export default NavMenu;
