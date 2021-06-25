import React from 'react'
import './SwipeButtons.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import IconButton from '@material-ui/core/IconButton';

function SwipeButtons() {
    return (
        <div className='swipe-buttons'>
            <IconButton>
                <ThumbUpIcon fontSize='large'/>
            </IconButton>
            <IconButton>
                <ThumbDownIcon fontSize='large'/>
            </IconButton>
        </div>
    )
}

export default SwipeButtons;
