import React from 'react'
import './Header.css';
import PetsIcon from '@material-ui/icons/Pets';
import PersonIcon from '@material-ui/icons/Person';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import IconButton from '@material-ui/core/IconButton';

function Header() {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon fontSize='large' className='header-icon'/>
            </IconButton>
            <IconButton>
                <PetsIcon fontSize='large' className='pets-icon' />
            </IconButton>
            <IconButton>
                <BookmarksIcon fontSize='large' className='bookmark-icon' />
            </IconButton>
        </div>
    )
}

export default Header
