'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function PostPage() {
  const [post, setPost] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`/api/posts/${params.id}`);
      const data = await response.json();
      setPost(data);
    };

    fetchPost();
  }, [params.id]);

  if (!post) return <div>로딩 중...</div>;

  return (
    <main>
      <h1>{post.title}</h1>
      <div>{post.content}</div>
      <div>
        <Link href="/list">목록으로</Link>
        <Link href={`/post/${post.id}/edit`}>수정</Link>
      </div>
    </main>
  );
}
