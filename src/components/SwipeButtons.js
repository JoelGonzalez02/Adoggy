import React from 'react'
import './SwipeButtons.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PageviewIcon from '@material-ui/icons/Pageview';
import ReactTouchEvents from "react-touch-events";


const SwipeButtons = (props) => {
    
    return (
        <div className='swipe-buttons'>
        
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

          
        </div>
    )
}

export default SwipeButtons;
