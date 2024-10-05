const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

let posts = [];

app.get('/', (req, res) => {
  const documentation = {
    message: 'Bem-vindo(a) a API NodeJS do Desafio Tecnico da DomPixel!',
    routes: {
      cardsInfo: '/api/cards-info',
      createPost: '/api/create-post'
    }
  };

  const htmlResponse = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Documentação da API</title>
      </head>
      <body>
        <h1>${documentation.message}</h1>
        <h2>Rotas Disponíveis:</h2>
        <ul>
          <li><strong>Cards Info:</strong> <a href="${documentation.routes.cardsInfo}" target="_blank">${documentation.routes.cardsInfo}</a></li>
          <li><strong>Criar Post:</strong> <a href="${documentation.routes.createPost}" target="_blank">${documentation.routes.createPost}</a></li>
        </ul>
      </body>
    </html>
  `;

  res.send(htmlResponse);
});

app.get('/api', (req, res) => {
  res.send('API is up and running!');
});

app.get('/api/cards-info', (req, res) => {
  const cardsInfo = [
    {
      id: 1,
      image: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/02/beyonce-produtos-capilares.jpg",
      date: 17101999,
      title: "Lorem ipsum dolor sit amet1",
      author: "Larissa",
      shortDescription: "Assaaaaorem ipsum dolor sit amet, consectetur adipiscing elitAssaaaaorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at tortor metus. Mauris imperdiet porttitor nisl, non viverra justo. Fusce vitae ex varius, lobortis lectus ut, tempus ante.",
      tagContent: [
        { emoji: "⚙️", label: "Lorem" },
        { emoji: "🛠️", label: "Ipsum" },
        { emoji: "🔋", label: "Lorem ipsum" },
        { emoji: "🌐", label: "Ipsum Lorem" }
      ],
      url: "pages/post/postagem-1",
    },
  ];
  res.json(cardsInfo);
});

app.post('/api/create-post', (req, res) => {
  const newPost = req.body;

  if (!newPost || !newPost.title || !newPost.content) {
    return res.status(400).json({ message: 'Dados do post inválidos.' });
  }

  posts.push(newPost);
  res.status(201).json(newPost);
});

const server = app.listen(0, () => {
  const port = server.address().port;
  console.log(`API listening on port ${port}`);
});

module.exports = app;
