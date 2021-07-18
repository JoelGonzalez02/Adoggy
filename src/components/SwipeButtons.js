import React from 'react'
import './SwipeButtons.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PageviewIcon from '@material-ui/icons/Pageview';
import { Button } from '@material-ui/core';


const SwipeButtons = (props) => {
    
    return (
        <div className='swipe-buttons'>
            <Button  className='page' startIcon={<PageviewIcon/>} style={{color: 'rgb(38, 64, 179)', cursor: 'pointer'}} href={`${props.url}`} target='_blank'>
                View Profile
            </Button>
   
                
            <Button className='fav' startIcon={<FavoriteIcon/>} style={{color: '#ef32d9', cursor: 'pointer'}}>
                    Like
            </Button>
          
        </div>
    )
}

export default SwipeButtons;
