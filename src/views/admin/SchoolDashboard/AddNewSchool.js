import React, {useState} from "react";
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
import RegestrationHeader from "../../../components/Headers/RegestrationHeader";
import {CardActions} from "@material-ui/core";
import {createSchool} from "../../../backend/redux/actions/schoolAction";
import {connect} from "react-redux";

const useStyles = makeStyles(componentStyles);

function AddNewSchool(props) {
    const [state, setState] = useState({
        userName: '',
        email: '',
        firstName: '',
        lastName: '',
        schoolName: '',
        schoolAddress: '',
        county: '',
        country: '',
        postalAddress: '',
    })
    console.log(state)
    const handleChange = (e) => {
        setState({
            [e.target.id]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        props.createSchool(state);

        props.history.push('/');
    }

    const classes = useStyles();
    const theme = useTheme();
    return (
        <>
            <RegestrationHeader/>
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
                            <form onSubmit={handleSubmit}>
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
                                                    Add a School
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
                                                        size="small"
                                                    >
                                                        Settings
                                                    </Button>
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
                                        Admin Information
                                    </Box>
                                    <div className={classes.plLg4}>
                                        <Grid container>
                                            <Grid item xs={12} lg={6}>
                                                <FormGroup>
                                                    <FormLabel>Username</FormLabel>
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
                                                            onChange={handleChange}
                                                            id={'userName'}
                                                            placeholder={'Enter user name here'}
                                                        />
                                                    </FormControl>
                                                </FormGroup>
                                            </Grid>
                                            <Grid item xs={12} lg={6}>
                                                <FormGroup>
                                                    <FormLabel>Email</FormLabel>
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
                                                            type="email"
                                                            onChange={handleChange}
                                                            id={'email'}
                                                            placeholder="example@example.com"
                                                        />
                                                    </FormControl>
                                                </FormGroup>
                                            </Grid>
                                        </Grid>
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
                                                            onChange={handleChange}
                                                            id={'firstName'}
                                                            placeholder={'first name'}
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
                                                            onChange={handleChange}
                                                            id={'lastName'}
                                                            placeholder={'Last name'}
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
                                        School and contact Information
                                    </Box>
                                    <div className={classes.plLg4}>
                                        <Grid container>
                                            <Grid item xs={12} md={6}>
                                                <FormGroup>
                                                    <FormLabel>Name</FormLabel>
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
                                                            onChange={handleChange}
                                                            id={'schoolAddress'}
                                                            placeholder="School name"
                                                        />
                                                    </FormControl>
                                                </FormGroup>
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <FormGroup>
                                                    <FormLabel>Address</FormLabel>
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
                                                            onChange={handleChange}
                                                            id={"schoolAddress"}
                                                            placeholder="My Address"
                                                        />
                                                    </FormControl>
                                                </FormGroup>
                                            </Grid>
                                        </Grid>
                                        <Grid container>
                                            <Grid item xs={12} lg={4}>
                                                <FormGroup>
                                                    <FormLabel>County</FormLabel>
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
                                                            onChange={handleChange}
                                                            id={"county"}
                                                            placeholder="Nairobi"
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
                                                            onChange={handleChange}
                                                            id={'country'}
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
                                                            onChange={handleChange}
                                                            id={'postalAddress'}
                                                            placeholder="Postal code"
                                                        />
                                                    </FormControl>
                                                </FormGroup>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </CardContent>
                                <CardActions
                                    classes={{root: classes.cardHeaderRoot}}
                                >
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
                                                Submit Infomation
                                            </Box>
                                        </Grid>
                                        <Grid item xs="auto">
                                            <Box
                                                justifyContent="flex-end"
                                                display="flex"
                                                flexWrap="wrap"
                                            >
                                                <Button
                                                    type={'submit'}
                                                    variant="contained"
                                                    color="primary"
                                                    size="small"
                                                >
                                                    Submit
                                                </Button>
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
                                                    size="small"
                                                >
                                                    Cancel
                                                </Button>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </CardActions>
                            </form>
                        </Card>
                    </Grid>

                </Grid>
            </Container>
        </>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        createSchool: (school) => dispatch(createSchool(school))
    }
}

export default connect(null, mapDispatchToProps)(AddNewSchool);
