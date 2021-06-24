import { makeStyles } from '@material-ui/core/styles';

// This is a hook
export const useStyles = makeStyles((theme) => ({
    appRoot: {
        display: "flex",
        margin: 0,
        width: "80%",
    },
    navigationLogo: {
        width: '50%',
        cursor: "pointer",
    },
    navigationLogoContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: theme.spacing(6)
    },
    navigationDrawer: {
        width: 240,
        border: "none",
        whiteSpace: "nowrap",
        overflowX: "hidden",
        position: "relative",
        height: "100vh",
    },
    navigationToolBar: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingRight: theme.spacing(1),
        ...theme.mixins.toolbar,
    },
    navigationDrawerCollapse: {
        width: theme.spacing(9),
    },
    navigationToolBarCollapse: {
        justifyContent: "center",
        paddingRight: "0",
    },
    menuItemIcon: {
        width: '100%',
    },
    menuItem: {
        width: "80%",
        borderRadius: 8,
        marginBottom: 8,
    },
    menuItemActive: {
        backgroundColor: "#EBEBEC"
    },
    navigationList: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flex: 1
    },
    navigationSpacer: {
        flex: 1,
    }
}))