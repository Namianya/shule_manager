import React from "react";
import Chart from "chart.js";
import {Bar, Line} from "react-chartjs-2";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";


import Header from "components/Headers/Header.js";

import {chartExample1, chartExample2, chartOptions, parseOptions,} from "variables/charts.js";

import componentStyles from "assets/theme/views/admin/dashboard.js";

const useStyles = makeStyles(componentStyles);

function AdminDashboard() {
    const classes = useStyles();
    const theme = useTheme();
    const [activeNav, setActiveNav] = React.useState(1);
    const [chartExample1Data, setChartExample1Data] = React.useState("data1");

    if (window.Chart) {
        parseOptions(Chart, chartOptions());
    }

    const toggleNavs = (index) => {
        setActiveNav(index);
        setChartExample1Data("data" + index);
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
                <Grid container>
                    <Grid
                        item
                        xs={12}
                        xl={8}
                        component={Box}
                        marginBottom="3rem!important"
                        classes={{root: classes.gridItemRoot}}
                    >
                        <Card
                            classes={{
                                root: classes.cardRoot + " " + classes.cardRootBgGradient,
                            }}
                        >
                            <CardHeader
                                subheader={
                                    <Grid
                                        container
                                        component={Box}
                                        alignItems="center"
                                        justifyContent="space-between"
                                    >
                                        <Grid item xs="auto">
                                            <Box
                                                component={Typography}
                                                variant="h6"
                                                letterSpacing=".0625rem"
                                                marginBottom=".25rem!important"
                                                className={classes.textUppercase}
                                            >
                                                <Box component="span" color={theme.palette.gray[400]}>
                                                    Overview
                                                </Box>
                                            </Box>
                                            <Box
                                                component={Typography}
                                                variant="h2"
                                                marginBottom="0!important"
                                            >
                                                <Box component="span" color={theme.palette.white.main}>
                                                    Fees Income
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs="auto">
                                            <Box
                                                justifyContent="flex-end"
                                                display="flex"
                                                flexWrap="wrap"
                                            >
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    component={Box}
                                                    marginRight="1rem!important"
                                                    onClick={() => toggleNavs(1)}
                                                    classes={{
                                                        root:
                                                            activeNav === 1
                                                                ? ""
                                                                : classes.buttonRootUnselected,
                                                    }}
                                                >
                                                    Month
                                                </Button>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={() => toggleNavs(2)}
                                                    classes={{
                                                        root:
                                                            activeNav === 2
                                                                ? ""
                                                                : classes.buttonRootUnselected,
                                                    }}
                                                >
                                                    Week
                                                </Button>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                }
                                classes={{root: classes.cardHeaderRoot}}
                            />
                            <CardContent>
                                <Box position="relative" height="350px">
                                    <Line
                                        data={chartExample1[chartExample1Data]}
                                        options={chartExample1.options}
                                        getDatasetAtEvent={(e) => console.log(e)}
                                    />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} xl={4}>
                        <Card classes={{root: classes.cardRoot}}>
                            <CardHeader
                                title={
                                    <Box component="span" color={theme.palette.grey[600]}>
                                        Performance
                                    </Box>
                                }
                                subheader="Average Student performance"
                                classes={{root: classes.cardHeaderRoot}}
                                titleTypographyProps={{
                                    component: Box,
                                    variant: "h6",
                                    letterSpacing: ".0625rem",
                                    marginBottom: ".25rem!important",
                                    classes: {
                                        root: classes.textUppercase,
                                    },
                                }}
                                subheaderTypographyProps={{
                                    component: Box,
                                    variant: "h2",
                                    marginBottom: "0!important",
                                    color: "initial",
                                }}
                            />
                            <CardContent>
                                <Box position="relative" height="350px">
                                    <Bar
                                        data={chartExample2.data}
                                        options={chartExample2.options}
                                    />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container component={Box} marginTop="3rem">
                    <Grid
                        item
                        xs={12}
                        xl={8}
                        component={Box}
                        marginBottom="3rem!important"
                        classes={{root: classes.gridItemRoot}}
                    >
                        <Card
                            classes={{
                                root: classes.cardRoot,
                            }}
                        >

                            
                        </Card>
                    </Grid>
                    <Grid item xs={12} xl={4}>

                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default AdminDashboard;
