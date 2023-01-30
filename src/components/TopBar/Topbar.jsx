import React from 'react';
import classes from './Topbar.module.css'

const Topbar = () => {
  return (
    <div>
        <nav className={classes.Topbar}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNTcRa2JlXkTzlOqO9TKFaSkB3GvX79jNm9u5pBd99&s' alt='amazon logo'/>
        </nav>
    </div>
  )
}

export default Topbar;