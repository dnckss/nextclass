'use client';

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ListPage() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    //fetch('/api/posts') 작성
    fetch('/api/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
    //posts변경 
  };

  useEffect(() => {
   //fetchPosts 실행
   fetchPosts();
  }, []);

  const handleDelete = (id) => {
    //delete api실행
    fetch(`/api/posts/${id}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (response.ok) {
        fetchPosts(); // 목록 새로고침
      }
    })
    .catch(error => console.error('Error deleting post:', error));
  };

  return (
    <main>
      <h1>게시물 목록</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>{post.title}</Link>
            <div>{post.content}</div>
            <button className="button" onClick={() => handleDelete(post.id)}>삭제</button>
            <span className="button"><Link href={`/edit/${post.id}`}>수정</Link></span>
          </li>
        ))}
      </ul>
    </main>
  );
}