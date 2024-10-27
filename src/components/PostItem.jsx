import React from 'react'

export default function PostItem(props) {
  return (
    <div className="post">
    <div className="post__content">
      <strong>{props.post.id}{props.post.title}</strong>
      <div>
      {props.post.body}
      </div>
      <div className="post__btns">
        <button>Delete</button>
      </div>
    </div>
    </div>
  )
}
