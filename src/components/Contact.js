import React from 'react';
import {AnimatePresence, motion} from "framer-motion";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
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
        margin: '50px auto 50px auto'
      },
  }));

const Contact = (props) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

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
        
</motion.div>
</div>
    );
}

export default Contact