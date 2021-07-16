import React from 'react'
import './SwipeButtons.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import PageviewIcon from '@material-ui/icons/Pageview';
// import RefreshIcon from '@material-ui/icons/Refresh';



const SwipeButtons = (props) => {
    
   

    return (
        <div className='swipe-buttons'>
            <div className='tooltip'>
                <IconButton onClick={() => window.open(`${props.url}`)}>
                    <span className='tooltiptext'>See my profile!</span>
                    <PageviewIcon fontSize='large' className='thumbs-down'/>
                </IconButton>
            </div>


            {/* <IconButton>
                <RefreshIcon fontSize='large' className='refresh' />
            </IconButton> */}
                
    
           <div className='tooltip2'>
            <IconButton>
                <span className='tooltiptext2'>Like me!</span>
               <FavoriteIcon fontSize='large' className='thumbs-up'/>
            </IconButton>
            </div> 
          
        </div>
    )
}

export default SwipeButtons;
