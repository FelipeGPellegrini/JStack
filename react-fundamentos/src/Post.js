import React from 'react'
import PropTypes from 'prop-types'

export default function Post(props){
 return (
    <>
        <article>
            <strong>{props.post.title}</strong>
            <button onClick={() => props.onRemove(props.post.id)}>Remover</button>
            <br/>
            <small>{props.post.subtitle}</small>
        </article>
        Media: {props.likes / 2}
        <br/>
        <br />
        
    </>
 )
}

Post.propTypes = {
   post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired
    }).isRequired, 
    likes: PropTypes.number.isRequired,
    onRemove: PropTypes.func.isRequired
}