import React from 'react';
import Logo from '../logo-mihai.svg';
import {AnimatePresence, motion} from "framer-motion";


const Home = (props) => {
    return(
    <motion.div
    initial="initial"
    animate="in"
    exit="out"
    transition={props.pageTransition}
variants={props.pageVariants}
className="page"
style={{position:'absolute', marginTop: '40px'}}
>
        <img src={Logo} className="App-logo" alt="logo" />
        <p>Project Portfolio</p>
    </motion.div>
    );
}

export default Home