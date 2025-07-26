import React from 'react'
import { Link } from 'react-router-dom'

function PostCard({ post } ) {
  return (

    <div className="bg-white rounded-xl shadow hover:shadow-lg transition duration-200 overflow-hidden">
    <img
      src={post.photo_url}
      alt={post.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
      <p className="text-sm text-gray-500 mb-2">{new Date(post.created_at).toDateString()}</p>
      <p className="text-gray-600 text-sm mb-4">
        {post.description.length > 100
          ? post.description.substring(0, 100) + '...'
          : post.description}
      </p>
      <Link
        to={`/post/${post.id}`}
        className="text-blue-600 hover:underline font-medium"
      >
        Read More →
      </Link>
    </div>
  </div>


  )
}

export default PostCard;