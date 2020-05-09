import React from 'react';
import {AnimatePresence, motion} from "framer-motion";

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

    }));

const Products = (props) => {

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

      const addDelay = (delay) => {
        return{
            transitionDelay: delay +'ms'
        }
      };

    const classes = useStyles();
    const products = props.productList.map(
        product => {
            let delay =+ 100;
            return (
                        <Zoom in onClick={()=>handleClickOpen(product.imageLink)} key={product.id} style={addDelay(delay)}>
          <Paper elevation={4} className={classes.paper}>
                    <img src={product.imageLink} alt={product.title} />
                    </Paper></Zoom>
            )
        }
    )
    return(
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            transition={props.pageTransition}
            variants={props.pageVariants}
            className="page"
            style={{position:'absolute', width: '80vw', margin: '0px auto'}}
        >
            <div className="root">
            <div className={classes.container}>
                    {products}
                    </div>
                <Dialog
                    open={state.open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <img src={state.currentImg}/>
                </Dialog>
            </div>
        </motion.div>
        )
}

export default Products