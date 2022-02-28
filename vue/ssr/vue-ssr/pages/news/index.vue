<template>
  <div>
    <h2>News Index Page</h2>
    <p>NewsId: {{$route.params.newsId}}</p>
    <ul>
      <li><a href="/">HOME</a></li>
      <li><a href="/news/123">news-1</a></li>
      <li><a href="/news/abc">news-2</a></li>
    </ul>
  </div>
</template>
