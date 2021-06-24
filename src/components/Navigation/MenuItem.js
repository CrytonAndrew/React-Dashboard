import React, { useState, useEffect } from 'react'
import { Icon, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import clsx from 'clsx'
import { Link, useLocation } from "react-router-dom"

import { useStyles } from '../Styles'

const MenuItem = ({ label, icon, activeIcon, path }) => {
    const classes = useStyles()

    const [active, setActive] = useState(true)

    const location = useLocation()

    useEffect(() => {
        if (path === "/sign-out") {
            setActive(true)
            return
        }
        setActive(location.pathname === path)
    }, [location, path])

    return (
        <ListItem
            button
            component={Link}
            to={path}
            className={clsx(classes.menuItem, active && classes.menuItemActive)}>
            <ListItemIcon>
                <Icon>
                    <img className={classes.menuItemIcon} src={active ? activeIcon : icon} alt={label} />
                </Icon>
            </ListItemIcon>
            <ListItemText
                primary={label}
                primaryTypographyProps={{ variant: "body2" }}
            />
        </ListItem>
    )
}

export default MenuItem
