import React from 'react'
import classes from './Profile.module.css'
export default function Profile() {
    return (
        <main className="content">
        <div>
          <img
            src="https://jooinn.com/images/beach-194.jpg"
            alt=""
            height="400px"
          />
        </div>
        <div>ava + description</div>
        <div>
          my post
          <div>new post</div>
        </div>
        <div className="posts">
          <div className="post">post1</div>
          <div className="post">post3</div>
        </div>
      </main>
    )
}
