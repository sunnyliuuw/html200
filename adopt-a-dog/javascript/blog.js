const post0 = {
  src: 'images/patrick-hendry-221863-unsplash.jpg',
  alt: 'human sits with a dog',
  title: 'Traveling With Your Dog',
  post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
};
const post1 = {
  src: 'images/matt-nelson-259365-unsplash.jpg',
  alt: 'human sits with a dog',
  title: 'How To Walk Multiple Dogs',
  post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
};
const post2 = {
  src: 'images/wyatt-ryan-367017-unsplash.jpg',
  alt: 'human sits with a dog',
  title: 'Teach Your Dog To Fetch!',
  post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
};

const blogContainer = document.getElementById('blog-post');
const postList = [post0, post1, post2];

for (let i = 0; i < postList.length; i++) {
  const blog = document.createElement('article');
  blog.setAttribute('class', 'blog');
  const artBox = document.createElement('div');
  const image = document.createElement('img');
  const bodyBox = document.createElement('div');
  const title = document.createElement('h3');
  const para = document.createElement('p');
  blog.appendChild(artBox);
  artBox.appendChild(image);
  blog.appendChild(bodyBox);
  bodyBox.appendChild(title);
  bodyBox.appendChild(para);
  image.setAttribute('src', postList[i].src);
  image.setAttribute('alt', postList[i].alt);
  title.textContent = postList[i].title;
  para.textContent = postList[i].post;
  blogContainer.appendChild(blog);
}

console.log(blogContainer);
