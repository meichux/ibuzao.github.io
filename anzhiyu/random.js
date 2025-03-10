var posts=["2025/03/09/写给迷茫的自己/","2025/03/08/关于行动力不足的思考/","2025/03/08/大脑记忆能力减弱/","2025/03/08/笔记/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };