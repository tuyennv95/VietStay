import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Header from '@Pages/ShowHome/node_modules/@components/Header/Header'
import FullWidthTabs from './FullWidthTabs';
import Footer from '@Pages/ShowHome/node_modules/@components/Footer/Footer';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        marginTop: 85,
    },
});

function About(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Header />
            <FullWidthTabs />
            <Footer />
        </>
    )
}

export default About