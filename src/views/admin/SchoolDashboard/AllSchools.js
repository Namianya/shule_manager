import React from "react";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import LinearProgress from "@material-ui/core/LinearProgress";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Pagination from "@material-ui/lab/Pagination";
import MoreVert from "@material-ui/icons/MoreVert";
import Header from "components/Headers/Header.js";

import componentStyles from "assets/theme/views/admin/tables.js";
import {connect} from "react-redux";
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";

const useStyles = makeStyles(componentStyles);

const AllSchools = (props) => {
    const {schools} = props

    const classes = useStyles();
    const theme = useTheme();
    const [anchorEl1, setAnchorEl1] = React.useState(null);
    const handleClick = (event) => {
        switch (event.currentTarget.getAttribute("aria-controls")) {
            case "simple-menu-1":
                setAnchorEl1(event.currentTarget);
                break;
            default:
        }
    };
    const handleClose = () => {
        setAnchorEl1(null);
    };
    return (
        <>
            <Header/>
            {/* Page content */}
            <Container
                maxWidth={false}
                component={Box}
                marginTop="-6rem"
                classes={{root: classes.containerRoot}}
            >
                <Card classes={{root: classes.cardRoot}}>
                    <CardHeader
                        className={classes.cardHeader}
                        title="Card Tables"
                        titleTypographyProps={{
                            component: Box,
                            marginBottom: "0!important",
                            variant: "h3",
                        }}
                    />
                    <TableContainer>
                        <Box
                            component={Table}
                            alignItems="center"
                            marginBottom="0!important"
                        >
                            <TableHead>
                                <TableRow>
                                    <TableCell
                                        classes={{
                                            root:
                                                classes.tableCellRoot + " " + classes.tableCellRootHead,
                                        }}
                                    >
                                        School Name
                                    </TableCell>
                                    <TableCell
                                        classes={{
                                            root:
                                                classes.tableCellRoot + " " + classes.tableCellRootHead,
                                        }}
                                    >
                                        Reg No.
                                    </TableCell>
                                    <TableCell
                                        classes={{
                                            root:
                                                classes.tableCellRoot + " " + classes.tableCellRootHead,
                                        }}
                                    >
                                        Status
                                    </TableCell>
                                    <TableCell
                                        classes={{
                                            root:
                                                classes.tableCellRoot + " " + classes.tableCellRootHead,
                                        }}
                                    >
                                        population
                                    </TableCell>
                                    <TableCell
                                        classes={{
                                            root:
                                                classes.tableCellRoot + " " + classes.tableCellRootHead,
                                        }}
                                    >
                                        Payment Completion
                                    </TableCell>
                                    <TableCell
                                        classes={{
                                            root:
                                                classes.tableCellRoot + " " + classes.tableCellRootHead,
                                        }}
                                    />
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {schools && schools.map(school => {
                                    return (
                                        <TableRow>
                                            <TableCell
                                                classes={{
                                                    root:
                                                        classes.tableCellRoot +
                                                        " " +
                                                        classes.tableCellRootBodyHead,
                                                }}
                                                component="th"
                                                variant="head"
                                                scope="row"
                                            >
                                                <Box alignItems="center" display="flex">
                                                    <Box
                                                        component={Avatar}
                                                        marginRight="1rem"
                                                        alt="..."
                                                        src={require("assets/img/theme/team-1-800x800.jpg").default}
                                                    />
                                                    <Box display="flex" alignItems="flex-start">
                                                        <Box fontSize=".875rem" component="span">
                                                            {school.name}
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </TableCell>
                                            <TableCell classes={{root: classes.tableCellRoot}}>
                                                {school.id}
                                            </TableCell>
                                            <TableCell classes={{root: classes.tableCellRoot}}>
                                                <Box paddingTop=".35rem" paddingBottom=".35rem">
                                                    <Box
                                                        marginRight="10px"
                                                        component="i"
                                                        width=".375rem"
                                                        height=".375rem"
                                                        borderRadius="50%"
                                                        display="inline-block"
                                                        className={
                                                             (school.payments!==100) ? classes.verticalAlignMiddle + " " + classes.bgWarning : classes.verticalAlignMiddle + " " + classes.bgSuccess
                                                        }
                                                    />
                                                    {(school.payments!==100) ? 'pending' : 'completed'}
                                                </Box>
                                            </TableCell>
                                            <TableCell classes={{root: classes.tableCellRoot}}>
                                                {school.population}
                                            </TableCell>
                                            <TableCell classes={{root: classes.tableCellRoot}}>
                                                <Box display="flex" alignItems="center">
                                                    <Box component="span" marginRight=".5rem">
                                                        {school.payments}%
                                                    </Box>
                                                    <Box width="100%">
                                                        <LinearProgress
                                                            variant="determinate"
                                                            value={school.payments}
                                                            classes={{
                                                                root: classes.linearProgressRoot,
                                                                bar: (school.payments!==100) ? classes.bgWarning : classes.bgSuccess,
                                                            }}
                                                        />
                                                    </Box>
                                                </Box>
                                            </TableCell>
                                            <TableCell
                                                classes={{root: classes.tableCellRoot}}
                                                align="right"
                                            >
                                                <Box
                                                    aria-controls="simple-menu-1"
                                                    aria-haspopup="true"
                                                    onClick={handleClick}
                                                    size="small"
                                                    component={Button}
                                                    width="2rem!important"
                                                    height="2rem!important"
                                                    minWidth="2rem!important"
                                                    minHeight="2rem!important"
                                                >
                                                    <Box
                                                        component={MoreVert}
                                                        width="1.25rem!important"
                                                        height="1.25rem!important"
                                                        position="relative"
                                                        top="2px"
                                                        color={theme.palette.gray[500]}
                                                    />
                                                </Box>
                                                <Menu
                                                    id="simple-menu-1"
                                                    anchorEl={anchorEl1}
                                                    keepMounted
                                                    open={Boolean(anchorEl1)}
                                                    onClose={handleClose}
                                                >
                                                    <MenuItem onClick={handleClose}>View Student</MenuItem>
                                                    <MenuItem onClick={handleClose}>Edit</MenuItem>
                                                    <MenuItem onClick={handleClose}>
                                                        Academics
                                                    </MenuItem>
                                                </Menu>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Box>
                    </TableContainer>
                    <Box
                        classes={{root: classes.cardActionsRoot}}
                        component={CardActions}
                        justifyContent="flex-end"
                    >
                        <Pagination count={10} color="primary" variant="outlined"/>
                    </Box>
                </Card>

            </Container>
        </>
    );
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        schools: state.school.schools
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'schools'}
    ])
)(AllSchools);
