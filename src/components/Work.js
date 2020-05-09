import React, {useState, useRef} from 'react';
import {render} from 'react-dom';
import { useTransition, useSpring, useChain, config, animated } from 'react-spring'
import { Global, itemContainer, Item } from '../styles'


import styled, { createGlobalStyle } from 'styled-components'

import {AnimatePresence, motion} from "framer-motion";
import Canvas from "./Canvas";

import Typography from '@material-ui/core/Typography';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Paper from '@material-ui/core/Paper';
import Zoom from '@material-ui/core/Zoom';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme)=>({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    titleBar: {
        background:
          'linear-gradient(to top, rgba(255,255,255,0.7) 0%, ' +
          'rgba(255,255,255,0.3) 70%, rgba(255,255,255,0) 100%)',
      },
    gridList: {
        width: 'auto',
        height: 'auto',
      },
      icon: {
        color: 'black',
      },
      container: {
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
        marginTop: '40px'
      },
      paper: {
        margin: theme.spacing(1),
        width: '80px',
        height: '80px',
        overflow:'hidden'
      },
      workList:{
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, minmax(100px, 1fr))',
        gridGap: '25px',
        padding: '25px',
        background: 'white',
        borderRadius: '5px',
        cursor: 'pointer',
        boxShadow: '0px 10px 10px -5px rgba(0, 0, 0, 0.05)',
        willChange: 'width, height'
      },

    }));

const Work = (props) => {

    const [state, setState] = React.useState({
        open: false,
        currentImg:''
      });

      const handleClickOpen = img => {
        setState({ open: true, currentImg:img })
      };
    
      const handleClose = () => {
        setState({ open: false })
      };



    const classes = useStyles();
    const creations = props.creations;


    const Item = styled(animated.div)`
    width: 100%;
    height: 100%;
    background: white;
    border-radius: 5px;
    will-change: transform, opacity;
  `


    const [open, set] = useState(false)
state.open=true;
    const springRef = useRef()
    const { size, opacity, ...rest } = useSpring({
      ref: springRef,
      config: config.stiff,
      from: { size: '20%', background: 'hotpink' },
      to: { size: '100%', background: 'white'}
    })
  
    const transRef = useRef()
    const transitions = useTransition(creations, item => item.name, {
      ref: transRef,
      unique: true,
      trail: 400 / creations.length,
      from: { opacity: 0, transform: 'scale(0)' },
      enter: { opacity: 1, transform: 'scale(1)' },
      leave: { opacity: 0, transform: 'scale(0)' }
    })
  
    // This will orchestrate the two animations above, comment the last arg and it creates a sequence
    useChain([springRef, transRef], [0, 0.1])



    return(
      <div>      <Canvas/>

        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            transition={props.pageTransition}
            variants={props.pageVariants}
            className="page"
            style={{position:'absolute', width: '80vw', margin: '0px auto'}}
        >
          <div className={classes.workList}>
        {transitions.map(({ item, key, props }) => (
          <Item key={key} style={{ ...props, background: item.css }}><img src={item.imageLink} alt={item.title}/>
          </Item>
        ))}
                  </div>
        </motion.div>
        </div>
        )
}

export default Work