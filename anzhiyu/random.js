var posts=["posts/5634cdad","posts/351ffcb9","posts/61622d0e","posts/269d3d81","posts/c27aca5d"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };