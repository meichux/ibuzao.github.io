var posts=["posts/5634cdad.html","posts/269d3d81.html","posts/351ffcb9.html","posts/61622d0e.html","posts/c27aca5d.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };