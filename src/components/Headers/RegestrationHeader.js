import React from "react";
// @material-ui/core components
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
// @material-ui/icons components
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import InsertChartOutlined from "@material-ui/icons/InsertChartOutlined";

// core components
import CardStats from "components/Cards/CardStats.js";

import componentStyles from "assets/theme/components/header.js";
import {BookmarkBorderTwoTone, WarningTwoTone} from "@material-ui/icons";

const useStyles = makeStyles(componentStyles);

const RegestrationHeader = () => {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <>
            <div className={classes.header}>
                <Container
                    maxWidth={false}
                    component={Box}
                    classes={{root: classes.containerRoot}}
                >
                    <div>
                        <Grid container>
                            <Grid item xl={3} lg={6} xs={12}>
                                <CardStats
                                    subtitle="All Records"
                                    title="2,560"
                                    icon={InsertChartOutlined}
                                    color="bgError"
                                    footer={
                                        <>
                                            <Box
                                                component="span"
                                                fontSize=".875rem"
                                                color={theme.palette.success.main}
                                                marginRight=".5rem"
                                                display="flex"
                                                alignItems="center"
                                            >
                                                <Box
                                                    component={ArrowUpward}
                                                    width="1.5rem!important"
                                                    height="1.5rem!important"
                                                />{" "}
                                                0.01%
                                            </Box>
                                            <Box component="span" whiteSpace="nowrap">
                                                Since last month
                                            </Box>
                                        </>
                                    }
                                />
                            </Grid>
                            <Grid item xl={3} lg={6} xs={12}>
                                <CardStats
                                    subtitle="New Students"
                                    title="233"
                                    icon={BookmarkBorderTwoTone}
                                    color="bgWarning"
                                    footer={
                                        <>
                                            <Box
                                                component="span"
                                                fontSize=".875rem"
                                                color={theme.palette.error.main}
                                                marginRight=".5rem"
                                                display="flex"
                                                alignItems="center"
                                            >
                                                <Box
                                                    component={ArrowDownward}
                                                    width="1.5rem!important"
                                                    height="1.5rem!important"
                                                />{" "}
                                                2.1%
                                            </Box>
                                            <Box component="span" whiteSpace="nowrap">
                                                Since last week
                                            </Box>
                                        </>
                                    }
                                />
                            </Grid>
                            <Grid item xl={3} lg={6} xs={12}>
                                <CardStats
                                    subtitle="defaulters"
                                    title="24"
                                    icon={WarningTwoTone}
                                    color="bgWarningLight"
                                    footer={
                                        <>
                                            <Box
                                                component="span"
                                                fontSize=".875rem"
                                                color={theme.palette.warning.main}
                                                marginRight=".5rem"
                                                display="flex"
                                                alignItems="center"
                                            >
                                                <Box
                                                    component={ArrowDownward}
                                                    width="1.5rem!important"
                                                    height="1.5rem!important"
                                                />{" "}
                                                1.10%
                                            </Box>
                                            <Box component="span" whiteSpace="nowrap">
                                                Since last month
                                            </Box>
                                        </>
                                    }
                                />
                            </Grid>
                            <Grid item xl={3} lg={6} xs={12}>

                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default RegestrationHeader;
