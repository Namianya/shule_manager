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

import componentStyles from "assets/theme/views/admin/tables.js";
import LibaryHeader from "../../../components/Headers/LibaryHeader";

const useStyles = makeStyles(componentStyles);

const Library = () => {
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
            <LibaryHeader/>
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
                        title="Library Inventory List"
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
                                        Title
                                    </TableCell>
                                    <TableCell
                                        classes={{
                                            root:
                                                classes.tableCellRoot + " " + classes.tableCellRootHead,
                                        }}
                                    >
                                        Serial No.
                                    </TableCell>
                                    <TableCell
                                        classes={{
                                            root:
                                                classes.tableCellRoot + " " + classes.tableCellRootHead,
                                        }}
                                    >
                                        Subject
                                    </TableCell>
                                    <TableCell
                                        classes={{
                                            root:
                                                classes.tableCellRoot + " " + classes.tableCellRootHead,
                                        }}
                                    >
                                        Total
                                    </TableCell>
                                    <TableCell
                                        classes={{
                                            root:
                                                classes.tableCellRoot + " " + classes.tableCellRootHead,
                                        }}
                                    >
                                        Availability
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
                                                src={require("assets/img/theme/book.jpg").default}
                                            />
                                            <Box display="flex" alignItems="flex-start">
                                                <Box fontSize=".875rem" component="span">
                                                    KLB Mathematics F3
                                                </Box>
                                            </Box>
                                        </Box>
                                    </TableCell>
                                    <TableCell classes={{root: classes.tableCellRoot}}>
                                        349932
                                    </TableCell>
                                    <TableCell classes={{root: classes.tableCellRoot}}>
                                        Mathematics
                                    </TableCell>
                                    <TableCell classes={{root: classes.tableCellRoot}}>
                                        100
                                    </TableCell>
                                    <TableCell classes={{root: classes.tableCellRoot}}>
                                        <Box display="flex" alignItems="center">
                                            <Box component="span" marginRight=".5rem">
                                                60%
                                            </Box>
                                            <Box width="100%">
                                                <LinearProgress
                                                    variant="determinate"
                                                    value={60}
                                                    classes={{
                                                        root: classes.linearProgressRoot,
                                                        bar: classes.bgGradientError,
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

export default Library;
