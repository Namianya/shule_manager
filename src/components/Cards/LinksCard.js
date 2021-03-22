import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// core components
import componentStyles from "assets/theme/components/card-stats.js";

const useStyles = makeStyles(componentStyles);

function LinksCard({subtitle, title, footer, icon, color}) {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <>
            <Card classes={{root: classes.cardRoot}} elevation={0}>
                <CardContent classes={{root: classes.cardContentRoot}}>
                    <Grid container component={Box} justifyContent="space-between">
                        <Grid item xs="auto">
                            <Box
                                component={Typography}
                                variant="h5"
                                color={theme.palette.grey[600] + "!important"}
                                marginBottom="0!important"
                                marginTop="0!important"
                                className={classes.textUppercase}
                            >
                                {subtitle}
                            </Box>
                            <Box
                                component={Typography}
                                variant="h2"
                                fontWeight="600!important"
                                marginBottom="0!important"
                                marginTop="0!important"
                            >
                                {title}
                            </Box>
                        </Grid>
                    </Grid>
                    {footer ? (
                        <Box
                            component="div"
                            fontSize=".875rem"
                            marginTop="0"
                            marginBottom="0"
                            display="flex"
                            alignItems="center"
                            flexWrap="wrap"
                        >
                            {footer}
                        </Box>
                    ) : null}
                </CardContent>
            </Card>
        </>
    );
}

LinksCard.defaultProps = {
    color: "bgPrimaryLight",
};

LinksCard.propTypes = {

    footer: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

    color: PropTypes.oneOf([
        "bgPrimary",
        "bgPrimaryLight",
        "bgError",
        "bgErrorLight",
        "bgWarning",
        "bgWarningLight",
        "bgInfo",
        "bgInfoLight",
    ]),
};

export default LinksCard;
