import React from 'react'
import './SwipeButtons.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PageviewIcon from '@material-ui/icons/Pageview';
// import { Button } from '@material-ui/core';
import ReactTouchEvents from "react-touch-events";


const SwipeButtons = (props) => {
    
    return (
        <div className='swipe-buttons'>
            {/* <Button  className='page' startIcon={<PageviewIcon/>} style={{color: 'rgb(38, 64, 179)'}} >
                <a href={`${props.url}`} target='_blank' rel="noreferrer" style={{textDecoration: 'none'}}>View Profile</a>
            </Button> */}
            <ReactTouchEvents onTap={() => window.open(`${props.url}`)} >
                <button type='button' className='page' style={{color: 'rgb(38, 64, 179)', cursor: 'pointer', zIndex: '999'}}>
                <div className='inButtons'>
                     
                     <a href={`${props.url}`} target='_blank' rel="noreferrer" style={{textDecoration: 'none'}}><PageviewIcon className='pIcon' />Profile</a>
                </div>
               
            </button>
            </ReactTouchEvents>
            


            <button className='fav' style={{color: '#ef32d9'}}>
                <div className='inButtons'>
                   <FavoriteIcon className='pIcon2' />
                    <p className='likeB'>Like</p> 
                </div>
                
            </button>


   
                
            {/* <Button className='fav' startIcon={<FavoriteIcon/>} style={{color: '#ef32d9'}}>
                    Like
            </Button> */}
          
        </div>
    )
}

export default SwipeButtons;
