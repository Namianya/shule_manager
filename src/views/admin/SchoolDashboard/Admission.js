import React from "react";
// @material-ui/core components
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// @material-ui/icons components
// core components
import componentStyles from "assets/theme/views/admin/profile.js";
import {ButtonGroup} from "@material-ui/core";
import {connect} from "react-redux";
import {createStudent} from "../../../backend/redux/actions/studentActions";
import AuthHeader from "../../../components/Headers/AuthHeader";

const useStyles = makeStyles(componentStyles);

function Admission() {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <>
            <AuthHeader/>
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
                        component={Box}
                        marginBottom="3rem"
                        classes={{root: classes.gridItemRoot + " " + classes.order2}}
                    >
                        <Card
                            classes={{
                                root: classes.cardRoot + " " + classes.cardRootSecondary,
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
                                                variant="h3"
                                                marginBottom="0!important"
                                            >
                                                Admit a student
                                            </Box>
                                        </Grid>
                                        <Grid item xs="auto">
                                            <Box
                                                justifyContent="flex-end"
                                                display="flex"
                                                flexWrap="wrap"
                                            >
                                                <ButtonGroup variant="text" aria-label="contained button group">
                                                    <Button color="primary">Up load CSV</Button>
                                                    <Button color="primary">Set Registration Dates</Button>
                                                    <Button color="primary">End Registration</Button>
                                                </ButtonGroup>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                }
                                classes={{root: classes.cardHeaderRoot}}
                            />
                            <CardContent>
                                <Box
                                    component={Typography}
                                    variant="h6"
                                    color={theme.palette.gray[600] + "!important"}
                                    paddingTop=".25rem"
                                    paddingBottom=".25rem"
                                    fontSize=".75rem!important"
                                    letterSpacing=".04em"
                                    marginBottom="1.5rem!important"
                                    classes={{root: classes.typographyRootH6}}
                                >
                                    User Information
                                </Box>
                                <div className={classes.plLg4}>
                                    <Grid container>
                                        <Grid item xs={12} lg={6}>
                                            <FormGroup>
                                                <FormLabel>First name</FormLabel>
                                                <FormControl
                                                    variant="filled"
                                                    component={Box}
                                                    width="100%"
                                                    marginBottom="1rem!important"
                                                >
                                                    <Box
                                                        paddingLeft="0.75rem"
                                                        paddingRight="0.75rem"
                                                        component={FilledInput}
                                                        autoComplete="off"
                                                        type="text"
                                                        placeholder={'First name'}
                                                    />
                                                </FormControl>
                                            </FormGroup>
                                        </Grid>
                                        <Grid item xs={12} lg={6}>
                                            <FormGroup>
                                                <FormLabel>Last Name</FormLabel>
                                                <FormControl
                                                    variant="filled"
                                                    component={Box}
                                                    width="100%"
                                                    marginBottom="1rem!important"
                                                >
                                                    <Box
                                                        paddingLeft="0.75rem"
                                                        paddingRight="0.75rem"
                                                        component={FilledInput}
                                                        autoComplete="off"
                                                        type="text"
                                                        placeholder={'Last name'}
                                                    />
                                                </FormControl>
                                            </FormGroup>
                                        </Grid>
                                    </Grid>
                                    <Grid container>
                                        <Grid item xs={12} lg={6}>
                                            <FormGroup>
                                                <FormLabel>UPI Number</FormLabel>
                                                <FormControl
                                                    variant="filled"
                                                    component={Box}
                                                    width="100%"
                                                    marginBottom="1rem!important"
                                                >
                                                    <Box
                                                        paddingLeft="0.75rem"
                                                        paddingRight="0.75rem"
                                                        component={FilledInput}
                                                        autoComplete="off"
                                                        type="text"
                                                        placeholder={"AB234GJ34"}
                                                    />
                                                </FormControl>
                                            </FormGroup>
                                        </Grid>
                                        <Grid item xs={12} lg={6}>
                                            <FormGroup>
                                                <FormLabel>Admission No. (Auto generate)</FormLabel>
                                                <FormControl
                                                    variant="filled"
                                                    component={Box}
                                                    width="100%"
                                                    marginBottom="1rem!important"
                                                >
                                                    <Box
                                                        paddingLeft="0.75rem"
                                                        paddingRight="0.75rem"
                                                        component={FilledInput}
                                                        autoComplete="off"
                                                        type="text"
                                                        placeholder="AB/NB/2020"
                                                    />
                                                </FormControl>
                                            </FormGroup>
                                        </Grid>
                                    </Grid>
                                </div>
                                <Box
                                    component={Divider}
                                    marginBottom="1.5rem!important"
                                    marginTop="1.5rem!important"
                                />
                                <Box
                                    component={Typography}
                                    variant="h6"
                                    color={theme.palette.gray[600] + "!important"}
                                    paddingTop=".25rem"
                                    paddingBottom=".25rem"
                                    fontSize=".75rem!important"
                                    letterSpacing=".04em"
                                    marginBottom="1.5rem!important"
                                    classes={{root: classes.typographyRootH6}}
                                >
                                    Parent/Guardian Contact Information
                                </Box>
                                <div className={classes.plLg4}>
                                    <Grid container>
                                        <Grid item xs={12} lg={4}>
                                            <FormGroup>
                                                <FormLabel>First name</FormLabel>
                                                <FormControl
                                                    variant="filled"
                                                    component={Box}
                                                    width="100%"
                                                    marginBottom="1rem!important"
                                                >
                                                    <Box
                                                        paddingLeft="0.75rem"
                                                        paddingRight="0.75rem"
                                                        component={FilledInput}
                                                        autoComplete="off"
                                                        type="text"
                                                        placeholder={'Name'}
                                                    />
                                                </FormControl>
                                            </FormGroup>
                                        </Grid>
                                        <Grid item xs={12} lg={4}>
                                            <FormGroup>
                                                <FormLabel>Second name</FormLabel>
                                                <FormControl
                                                    variant="filled"
                                                    component={Box}
                                                    width="100%"
                                                    marginBottom="1rem!important"
                                                >
                                                    <Box
                                                        paddingLeft="0.75rem"
                                                        paddingRight="0.75rem"
                                                        component={FilledInput}
                                                        autoComplete="off"
                                                        type="text"
                                                        placeholder={'Name'}
                                                    />
                                                </FormControl>
                                            </FormGroup>
                                        </Grid>
                                        <Grid item xs={12} lg={4}>
                                            <FormGroup>
                                                <FormLabel>Phone No.</FormLabel>
                                                <FormControl
                                                    variant="filled"
                                                    component={Box}
                                                    width="100%"
                                                    marginBottom="1rem!important"
                                                >
                                                    <Box
                                                        paddingLeft="0.75rem"
                                                        paddingRight="0.75rem"
                                                        component={FilledInput}
                                                        autoComplete="off"
                                                        type="tel"
                                                        placeholder="+254 7XX XXX XXX"
                                                    />
                                                </FormControl>
                                            </FormGroup>
                                        </Grid>
                                    </Grid>

                                    <Grid container>
                                        <Grid item xs={12} lg={4}>
                                            <FormGroup>
                                                <FormLabel>City</FormLabel>
                                                <FormControl
                                                    variant="filled"
                                                    component={Box}
                                                    width="100%"
                                                    marginBottom="1rem!important"
                                                >
                                                    <Box
                                                        paddingLeft="0.75rem"
                                                        paddingRight="0.75rem"
                                                        component={FilledInput}
                                                        autoComplete="off"
                                                        type="text"
                                                        defaultValue="Nairobi"
                                                    />
                                                </FormControl>
                                            </FormGroup>
                                        </Grid>
                                        <Grid item xs={12} lg={4}>
                                            <FormGroup>
                                                <FormLabel>Country</FormLabel>
                                                <FormControl
                                                    variant="filled"
                                                    component={Box}
                                                    width="100%"
                                                    marginBottom="1rem!important"
                                                >
                                                    <Box
                                                        paddingLeft="0.75rem"
                                                        paddingRight="0.75rem"
                                                        component={FilledInput}
                                                        autoComplete="off"
                                                        type="text"
                                                        defaultValue="Kenya"
                                                    />
                                                </FormControl>
                                            </FormGroup>
                                        </Grid>
                                        <Grid item xs={12} lg={4}>
                                            <FormGroup>
                                                <FormLabel>Postal code</FormLabel>
                                                <FormControl
                                                    variant="filled"
                                                    component={Box}
                                                    width="100%"
                                                    marginBottom="1rem!important"
                                                >
                                                    <Box
                                                        paddingLeft="0.75rem"
                                                        paddingRight="0.75rem"
                                                        component={FilledInput}
                                                        autoComplete="off"
                                                        type="text"
                                                        placeholder="Postal code"
                                                    />
                                                </FormControl>
                                            </FormGroup>
                                        </Grid>
                                    </Grid>
                                </div>


                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
            </Container>
        </>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        createStudent: (student) => dispatch(createStudent(student))
    }
}

export default connect(null, mapDispatchToProps)(Admission);
