import React from 'react';
import {AnimatePresence, motion} from "framer-motion";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Portrait from '../img/mn.jpg';
import Divider from '@material-ui/core/Divider';
import Canvas from "./Canvas";

const useStyles = makeStyles((theme)=>({
    cardRoot: {
      minWidth: 275,
      textAlign:'center'
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        margin: '10px auto 20px auto'
      },
  }));
const About = (props) => {
    const classes = useStyles();

    return(
      <div> <Canvas/>
        <motion.div
        initial="initial"
        animate="in"
        exit="out"
        transition={props.pageTransition}
    variants={props.pageVariants}
        className="page"
        style={{position:'absolute'}}

    >
                  <Container style={{maxWidth:'80vw', margin:'20px auto'}}>
        <Avatar alt="Remy Sharp" src={Portrait} className={classes.large} />
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        Mihai Niculescu
        </Typography>
        <Typography variant="h5" component="h2">
        Hello, my name is Mihai. I was born in Gent on August 23rd 1981
        </Typography>
        <Divider style={{margin: '20px 10px 20px 10px'}}/>
        <Typography variant="body2" component="p">
        Graphic Designer, Web Designer, Webmaster, Integrator<br/><br/>
        A pencil and a sketchbook, my most important tools since I was a kid.<br/>Sint-Lukas School of Arts made my toolbox get bigger.<br/>After four years experience as graphic designer and five years as webdesigner, the toolbox still keeps expanding.
        </Typography>
        </Container>
</motion.div>
</div>
    );
}

export default About