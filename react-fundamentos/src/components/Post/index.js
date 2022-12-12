import React from 'react'
import PropTypes from 'prop-types'

import PostHeader from './PostHeader'

import styles from './Post.scss'

import { Subtitle, Rate } from './styles'

export default function Post(props){

    return (
    <>
        <article className={props.post.removed 
            ? styles.postDeleted 
            : styles.post
            }
            >
            <PostHeader
                onRemove={props.onRemove}
                post={{
                    id: props.post.id,
                    title: props.post.title,
                    read: props.post.read
                }}
            />
            <br/>
            <Subtitle>{props.post.subtitle}</Subtitle>
            <br />
            <Rate>Media: {props.post.likes / 2}</Rate>
        </article>
        
        
    </>
 )
}

Post.propTypes = {
    post: PropTypes.shape({
        removed: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,likes: PropTypes.number.isRequired,
        read: PropTypes.bool.isRequired
    }).isRequired, 
    
    onRemove: PropTypes.func.isRequired
}