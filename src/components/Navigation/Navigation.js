import React, { useState } from 'react'
import Drawer from '@material-ui/core/Drawer';


import { IconButton, List } from '@material-ui/core';

import { useStyles } from "../Styles"
import MenuItem from './MenuItem';

import Logo1 from "../../Assets/logo1.svg"
import Logo2 from "../../Assets/logo2.svg"


import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import MenuIcon from "@material-ui/icons/Menu"
import clsx from 'clsx';

import routes from "../../routes";


const Navigation = () => {
    const classes = useStyles()

    const [open, setOpen] = useState(true)

    const toggleNavigation = () => {
        setOpen(!open)
    }

    return (
        <div>
            <Drawer
                classes={{ paper: clsx(classes.navigationDrawer, !open && classes.navigationDrawerCollapse) }}
                variant='permanent'
                open={false}>

                <div className={clsx(classes.navigationToolBar, !open && classes.navigationToolBarCollapse)}>
                    <IconButton onClick={toggleNavigation}>
                        {open ? <ChevronLeftIcon /> : <MenuIcon />}
                    </IconButton>
                </div>
                <div className={classes.navigationLogoContainer}>
                    {open
                        ? <img src={Logo1} className={classes.navigationLogo} alt="company logo" />
                        : <img src={Logo2} className={classes.navigationLogo} alt="company logo" />}
                </div>
                <List className={classes.navigationList}>
                    {routes.map((route, index) => {
                        return (
                            <React.Fragment key={index}>
                                {route.path === "sign-out" && (
                                    <div className={classes.navigationSpacer}></div>
                                )}
                                <MenuItem
                                    label={route.label}
                                    icon={route.icon}
                                    activeIcon={route.activeIcon}
                                    path={route.path}
                                // onClick={closeNavigation}
                                />
                            </React.Fragment>
                        )
                    })}
                </List>
            </Drawer>
        </div>
    )
}

export default Navigation
