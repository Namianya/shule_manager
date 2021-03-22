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
import LocationOn from "@material-ui/icons/LocationOn";
import School from "@material-ui/icons/School";

// core components

import componentStyles from "assets/theme/views/admin/profile.js";
import boxShadows from "assets/theme/box-shadow.js";
import {ButtonGroup} from "@material-ui/core";
import AdmissionHeader from "../../../components/Headers/AdmissionHeader";

const useStyles = makeStyles(componentStyles);

function Admission() {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <>
            <AdmissionHeader/>
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
                                                My Account
                                            </Box>
                                        </Grid>
                                        <Grid item xs="auto">
                                            <Box
                                                justifyContent="flex-end"
                                                display="flex"
                                                flexWrap="wrap"
                                            >
                                                <ButtonGroup variant="text"  aria-label="contained button group">
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
                    <Grid
                        item
                        xs={12}
                        xl={4}
                        component={Box}
                        marginBottom="3rem!important"
                        classes={{root: classes.order1 + " " + classes.marginBottomXl0}}
                    >
                        <Card classes={{root: classes.cardRoot}}>
                            <Box component={Grid} container justifyContent="center">
                                <Grid item xs={12} lg={3}>
                                    <Box position="relative">
                                        <Box
                                            component="img"
                                            src={
                                                require("assets/img/theme/team-1-800x800.jpg").default
                                            }
                                            alt="..."
                                            maxWidth="180px"
                                            borderRadius="5%"
                                            position="absolute"
                                            left="50%"
                                            boxShadow={boxShadows.boxShadow + "!important"}
                                            className={classes.profileImage}
                                        />
                                    </Box>
                                </Grid>
                            </Box>
                            <Box
                                component={CardHeader}
                                border="0!important"
                                textAlign="center"
                                paddingBottom="0!important"
                                paddingTop="8rem!important"
                                classes={{root: classes.cardHeaderRootProfile}}

                            />
                            <Box
                                component={CardContent}
                                classes={{root: classes.ptMd4}}
                                paddingTop="0!important"
                            >
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Box
                                            padding="1rem 0"
                                            justifyContent="center"
                                            display="flex"
                                            className={classes.mtMd5}
                                        >
                                            <Box
                                                textAlign="center"
                                                marginRight="1rem"
                                                padding=".875rem"
                                            >
                                                <Box
                                                    component="span"
                                                    fontSize="1.1rem"
                                                    fontWeight="700"
                                                    display="block"
                                                    letterSpacing=".025em"
                                                    className={classes.typographyRootH6}
                                                >
                                                    4
                                                </Box>
                                                <Box
                                                    component="span"
                                                    fontSize=".875rem"
                                                    color={theme.palette.grey[500]}
                                                >
                                                    Form/Class
                                                </Box>
                                            </Box>
                                            <Box
                                                textAlign="center"
                                                marginRight="1rem"
                                                padding=".875rem"
                                            >
                                                <Box
                                                    component="span"
                                                    fontSize="1.1rem"
                                                    fontWeight="700"
                                                    display="block"
                                                    letterSpacing=".025em"
                                                    className={classes.typographyRootH6}
                                                >
                                                    A
                                                </Box>
                                                <Box
                                                    component="span"
                                                    fontSize=".875rem"
                                                    color={theme.palette.grey[500]}
                                                >
                                                    Stream
                                                </Box>
                                            </Box>
                                            <Box textAlign="center" padding=".875rem">
                                                <Box
                                                    component="span"
                                                    fontSize="1.1rem"
                                                    fontWeight="700"
                                                    display="block"
                                                    letterSpacing=".025em"
                                                    className={classes.typographyRootH6}
                                                >
                                                    23455
                                                </Box>
                                                <Box
                                                    component="span"
                                                    fontSize=".875rem"
                                                    color={theme.palette.gray[500]}
                                                >
                                                    Admission No.
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Box textAlign="center">
                                    <Typography variant="h3">
                                        Joe Doe
                                    </Typography>
                                    <Box
                                        component={Typography}
                                        variant="h5"
                                        fontWeight="300!important"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                    >
                                        <Box
                                            component={LocationOn}
                                            width="1.25rem!important"
                                            height="1.25rem!important"
                                        />
                                        Bungoma, Kenya
                                    </Box>
                                    <Box
                                        component={Typography}
                                        variant="h5"
                                        marginTop="3rem!important"
                                    >
                                        Student
                                    </Box>
                                    <Box
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                        fontSize="1rem"
                                    >
                                        <Box
                                            component={School}
                                            width="1.25rem!important"
                                            height="1.25rem!important"
                                            marginRight=".5rem"
                                        />
                                        School Name
                                    </Box>
                                    <Box
                                        component={Divider}
                                        marginTop="1.5rem!important"
                                        marginBottom="1.5rem!important"
                                    />
                                    <Box
                                        component="p"
                                        fontWeight="300"
                                        lineHeight="1.7"
                                        marginBottom="1rem"
                                        fontSize="1rem"
                                    >
                                        download student Id
                                    </Box>
                                    <a
                                        href="#mui"
                                        className={classes.cardProfileLink}
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        Download
                                    </a>
                                </Box>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default Admission;
