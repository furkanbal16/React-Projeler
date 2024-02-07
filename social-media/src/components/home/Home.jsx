import React from 'react'
import Post from '../post/Post'
import ProfileCard from '../profileCard/ProfileCard'
import Rightside from '../rightside/Rightside'
import SuggestedUsers from '../suggestedUsers/SuggestedUsers'
import classes from './home.module.css'

const Home = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <ProfileCard />
        <SuggestedUsers />
      </div>
      <Post />
      <Rightside />
    </div>
  )
}

export default Home