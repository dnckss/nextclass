'use client';

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ListPage() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch('/api/posts');
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    await fetch(`/api/posts/${id}`, { method: 'DELETE' });
    fetchPosts();
  };

  return (
    <main>
      <h1>게시물 목록</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>{post.title}</Link>
            <div>{post.content}</div>
            <button onClick={() => handleDelete(post.id)}>삭제</button>
            <Link href={`/post/${post.id}/edit`}>수정</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}