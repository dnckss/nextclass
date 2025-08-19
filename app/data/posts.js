let posts = [
    { id: 1, title: "첫 번째 글", content: "이것은 첫 번째 게시글입니다." },
    { id: 2, title: "두 번째 글", content: "이것은 두 번째 게시글입니다." },
    { id: 3, title: "세 번째 글", content: "이것은 세 번째 게시글입니다." }
  ];
  
  export function getPosts() {
    return posts;
  }
  
  export function getPost(id) {
    //id가 일치하는 post 가져오기
    const numId = parseInt(id);
    if (isNaN(numId)) return null;
    return posts.find(p => p.id === numId);
  }
  
  export function addPost(title, content) {
     //삽입
    const newPost = {
      id: posts.length ? posts[posts.length - 1].id + 1 : 1,
      title: title,
      content
    };
    posts.push(newPost);
    return newPost;
  }
  
  export function updatePost(id, title, content) {
    const numId = parseInt(id);
    if (isNaN(numId)) return null;
    const idx = posts.findIndex(p => p.id === numId);
    if (idx === -1) return null;
   //update
    posts[idx] = { ...posts[idx], title, content };
    return posts[idx];
  }
  
  export function deletePost(id) {
    const numId = parseInt(id);
    if (isNaN(numId)) return false;
    const idx = posts.findIndex(p => p.id === numId);
    if (idx === -1) return false;
   //slice로 삭제처리
    posts = posts.slice(0, idx).concat(posts.slice(idx + 1));
    return true;
  }