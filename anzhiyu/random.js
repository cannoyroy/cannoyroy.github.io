var posts=["2024/10/26/Python入门/","2024/07/06/钱/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };