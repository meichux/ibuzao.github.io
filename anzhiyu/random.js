var posts=["posts/5634cdad","posts/269d3d81","posts/351ffcb9","posts/c27aca5d","posts/61622d0e"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };