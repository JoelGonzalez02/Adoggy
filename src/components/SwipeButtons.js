import React from 'react'
import './SwipeButtons.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
// import IconButton from '@material-ui/core/IconButton';
import PageviewIcon from '@material-ui/icons/Pageview';
// import RefreshIcon from '@material-ui/icons/Refresh';
import { Button } from '@material-ui/core';


const SwipeButtons = (props) => {
    
   

    return (
        <div className='swipe-buttons'>
            <Button  className='page' startIcon={<PageviewIcon/>} style={{color: 'rgb(38, 64, 179)'}} href={`${props.url}`} target='_blank'>
                View Profile
            </Button>
            {/* <div className='tooltip'>
                <IconButton href={`${props.url}`}  target="_blank">
                    <span className='tooltiptext'>See my profile!</span>
                    <PageviewIcon fontSize='large' className='thumbs-down'/>
                   
                </IconButton>
            </div> */}
           


            {/* <IconButton>
                <RefreshIcon fontSize='large' className='refresh' />
            </IconButton> */}
                
            <Button className='fav' startIcon={<FavoriteIcon/>} style={{color: '#ef32d9'}} href={`${props.url}`}>
                    Like
            </Button>
           {/* <div className='tooltip2'>
            <IconButton>
                <span className='tooltiptext2'>Like me!</span>
               <FavoriteIcon fontSize='large' className='thumbs-up'/>
            </IconButton>
            </div>  */}
          
        </div>
    )
}

export default SwipeButtons;
