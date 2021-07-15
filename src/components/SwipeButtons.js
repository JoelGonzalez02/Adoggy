import React from 'react'
import './SwipeButtons.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import IconButton from '@material-ui/core/IconButton';
import PageviewIcon from '@material-ui/icons/Pageview';



const SwipeButtons = (props) => {
    
   

    return (
        <div className='swipe-buttons'>
            
                <IconButton onClick={() => window.open(`${props.curr.url}`)}>
                    <PageviewIcon fontSize='large' className='thumbs-down'/>
                </IconButton>
    
            
            <IconButton>
               <ThumbUpIcon fontSize='large' className='thumbs-up'/>
            </IconButton>
        </div>
    )
}

export default SwipeButtons;
