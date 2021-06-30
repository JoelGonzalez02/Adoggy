import React from 'react'
import './SwipeButtons.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import IconButton from '@material-ui/core/IconButton';

function SwipeButtons() {
    return (
        <div className='swipe-buttons'>
            <IconButton>
                <ThumbDownIcon fontSize='large' className='thumbs-down'/>
            </IconButton>
            <IconButton>
               <ThumbUpIcon fontSize='large' className='thumbs-up'/>
            </IconButton>
        </div>
    )
}

export default SwipeButtons;
