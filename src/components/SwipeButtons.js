import React from 'react'
import './SwipeButtons.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PageviewIcon from '@material-ui/icons/Pageview';
// import { Button } from '@material-ui/core';


const SwipeButtons = (props) => {
    
    return (
        <div className='swipe-buttons'>
            {/* <Button  className='page' startIcon={<PageviewIcon/>} style={{color: 'rgb(38, 64, 179)'}} >
                <a href={`${props.url}`} target='_blank' rel="noreferrer" style={{textDecoration: 'none'}}>View Profile</a>
            </Button> */}

            <button className='page'  style={{color: 'rgb(38, 64, 179)'}}>
                <div className='inButtons'>
                     
                     <a href={`${props.url}`} target='_blank' rel="noreferrer" style={{textDecoration: 'none'}}><PageviewIcon className='pIcon' />Profile</a>
                </div>
               
            </button>


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
