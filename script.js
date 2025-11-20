// Título
const titulo = document.createElement('h1');
titulo.id = 'titulo';
titulo.textContent = 'Bem-vindo à nossa Loja Virtual!';
document.body.appendChild(titulo);

// Container para os produtos
const container = document.createElement('div');
container.className = 'container-produtos';
document.body.appendChild(container);

// Lista de produtos
const produtos = [
  {
    nome: 'Smartphone X200',
    descricao: 'Câmera de alta resolução e bateria de longa duração.',
    preco: 'R$ 2.499,00',
    imagem: 'https://via.placeholder.com/200x200.png?text=Smartphone+X200'
  },
  {
    nome: 'Notebook Pro 15',
    descricao: 'Tela Full HD, SSD de 512GB e 16GB de RAM.',
    preco: 'R$ 5.799,00',
    imagem: 'https://via.placeholder.com/200x200.png?text=Notebook+Pro+15'
  },
  {
    nome: 'Fone Bluetooth',
    descricao: 'Som estéreo, cancelamento de ruído e bateria de 24h.',
    preco: 'R$ 399,00',
    imagem: 'https://via.placeholder.com/200x200.png?text=Fone+Bluetooth'
  }
];

// Função para criar um produto
function criarProduto(produto) {
  const card = document.createElement('div');
  card.className = 'produto';

  const nome = document.createElement('h2');
  nome.textContent = produto.nome;

  const descricao = document.createElement('p');
  descricao.textContent = produto.descricao;

  const preco = document.createElement('p');
  preco.textContent = `Preço: ${produto.preco}`;

  const imagem = document.createElement('img');
  imagem.src = produto.imagem;
  imagem.alt = `Imagem de ${produto.nome}`;

  const botao = document.createElement('button');
  botao.className = 'botao-comprar';
  botao.textContent = 'Comprar';
  botao.onclick = () => alert(`Você comprou: ${produto.nome}`);

  card.appendChild(nome);
  card.appendChild(descricao);
  card.appendChild(preco);
  card.appendChild(imagem);
  card.appendChild(botao);

  container.appendChild(card);
}

// Adiciona todos os produtos
produtos.forEach(criarProduto);