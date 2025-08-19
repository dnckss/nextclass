'use client';

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function EditPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`/api/posts/${params.id}`);
      const post = await response.json();
      setTitle(post.title);
      setContent(post.content);
    };

    fetchPost();
  }, [params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`/api/posts/${params.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    });
    
    router.push('/list');
  };

  return (
    <main>
      <h1>글 수정</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="제목"
          required
        />
        <textarea
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="내용"
          required
        />
        <button type="submit">수정</button>
      </form>
    </main>
  );
}
