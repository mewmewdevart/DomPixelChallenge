const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(express.json());
app.use(cors());

let posts = [
  {
    id: 1,
    image: "https://htmlcolorcodes.com/assets/images/colors/steel-gray-color-solid-background-1920x1080.png",
    date: '1999-10-17',
    title: "Lorem ipsum dolor sit amet1",
    author: "Larissa",
    shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at tortor metus. Mauris imperdiet porttitor nisl, non viverra justo. Fusce vitae ex varius, lobortis lectus ut, tempus ante.",
    tagContent: [
      { emoji: "⚙️", label: "Lorem" },
      { emoji: "🛠️", label: "Ipsum" },
      { emoji: "🔋", label: "Lorem ipsum" },
      { emoji: "🌐", label: "Ipsum Lorem" }
    ],
    url: "",
  },
];

const generateSlug = (title) => {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
};

app.get('/', (req, res) => {
  const documentation = {
    message: 'Welcome to the NodeJS API for the DomPixel Tech Challenge!',
    routes: {
      postInfo: '/api/post-info',
      createPost: '/api/create-post'
    }
  };

  const htmlResponse = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>API Documentation</title>
      </head>
      <body>
        <h1>${documentation.message}</h1>
        <h2>Available Routes:</h2>
        <ul>
          <li><strong>Posts Info:</strong> <a href="${documentation.routes.postInfo}" target="_blank">${documentation.routes.postInfo}</a></li>
          <li><strong>Create Post:</strong> <a href="${documentation.routes.createPost}" target="_blank">${documentation.routes.createPost}</a></li>
        </ul>
      </body>
    </html>
  `;

  res.send(htmlResponse);
});

app.get('/api/post-info', (req, res) => {
  const updatedPosts = posts.map(post => ({
    ...post,
    url: `/page/post/${post.id}`
  }));
  res.json(updatedPosts);
});

app.post('/api/create-post', (req, res) => {
  try {
    const { id, image, date, title, author, shortDescription, content, tagContent } = req.body;

    if (!title || typeof title !== 'string') {
      return res.status(400).json({ message: 'Title is required and must be a string.' });
    }
    if (!content || typeof content !== 'string') {
      return res.status(400).json({ message: 'Content is required and must be a string.' });
    }
    if (!image || typeof image !== 'string') {
      return res.status(400).json({ message: 'Image is required and must be a string.' });
    }
    if (!date || !/\d{4}-\d{2}-\d{2}/.test(date)) {
      return res.status(400).json({ message: 'Date is required and must be in the format YYYY-MM-DD.' });
    }
    if (!shortDescription || typeof shortDescription !== 'string') {
      return res.status(400).json({ message: 'Short description is required and must be a string.' });
    }
    if (!Array.isArray(tagContent) || !tagContent.length) {
      return res.status(400).json({ message: 'Tag content is required and must be a non-empty array.' });
    }

    if (id && posts.some(post => post.id === id)) {
      return res.status(400).json({ message: 'Post ID already exists.' });
    }

    const newPost = {
      id: id || uuidv4(),
      image,
      date,
      title,
      author: author || 'Anonymous',
      shortDescription,
      content,
      tagContent,
      url: `/page/post/${id || uuidv4()}`,
    };

    posts.push(newPost);
    res.status(201).json(newPost);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.get('/api', (req, res) => {
  res.send('API is up and running!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}`);
});

module.exports = app;
