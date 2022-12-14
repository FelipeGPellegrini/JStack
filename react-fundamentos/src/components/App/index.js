import React, { useState } from 'react'

import Post from '../Post'
import Header from '../Header'
import { ThemeProvider } from '../../context/ThemeContext'

import styles from './App.scss'


// Props -> Propriedades
function App () {


  const [posts, setPosts] = useState([
    {id: Math.random(), title: "Title#01", subtitle: "Sub#01", likes: 20, read: false,removed: true},
    {id: Math.random(), title: "Title#02", subtitle: "Sub#02", likes: 18, read: true,removed: false},
    {id: Math.random(), title: "Title#03", subtitle: "Sub#03", likes: 50, read: false,removed: false},
    {id: Math.random(), title: "Title#04", subtitle: "Sub#04", likes: 50, read: true,removed: false}
  ])


  function handleRefresh() {

  
      
      setPosts((prevStates) => [
        ...prevStates,
        {
          id: Math.random(), 
          title: `Title#0${prevStates.length + 1}`, 
          subtitle: `Sub#0${prevStates.length + 1}`, 
          likes: 50
       } ]);

  }

  function handleRemovePost(postId) {
    setPosts((prevStates) => prevStates.map(
      post => (
        post.id == postId 
        ? { ...post, removed: true }
        : post
        )
        ))
  }

  return (
    <ThemeProvider>
      
    <Header>
      <h2 className={styles.title}>Posts da semana
        <button onClick={handleRefresh}>Atualizar</button>
      </h2>
    </Header>

      <hr />

      {posts.map(post => (
        <Post
          key={post.id}
          onRemove={handleRemovePost}
          post={post}
        />
      ))}

    </ThemeProvider>
  )
};

export default App