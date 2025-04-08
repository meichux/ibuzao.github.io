var posts=["posts/cb6ed29f.html","posts/5634cdad.html","posts/269d3d81.html","posts/ccff787.html","posts/c27aca5d.html","posts/424a780e.html","posts/351ffcb9.html","posts/61622d0e.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };