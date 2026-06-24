# 🔍 Buscador de Usuários do GitHub

Um aplicativo web simples e elegante desenvolvido em JavaScript puro (Vanilla JS) que consome a API oficial do GitHub para buscar e exibir informações de perfis públicos em tempo real.

## 🚀 Funcionalidades

- **Busca em Tempo Real**: Digite o nome de usuário do GitHub e clique em buscar ou aperte a tecla **Enter**.
- **Tratamento de Erros Eficiente**: Sistema protegido contra campos vazios, usuários não encontrados e falhas de conexão.
- **Card de Perfil Customizado**: Exibe as informações organizadas à esquerda com um layout limpo.
- **Proteção contra Valores Nulos**: Tratamento via código para caso o usuário não possua nome público ou localização cadastrada.
- **Foto de Perfil Estilizada**: Imagem redonda com borda personalizada, efeito de sombra e preenchimento inteligente (`object-fit: cover`).
- **Link Direto**: O nome de usuário gerado é um link direto e seguro (`target="_blank"`) que abre o perfil real do GitHub em uma nova aba.

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estruturação dos elementos da página.
- **CSS3 (In-line)**: Estilização do card, imagem e efeitos visuais.
- **JavaScript (ES6+)**:
  - Manipulação de DOM (`document.getElementById`).
  - Consumo de API Assíncrona (`async/await` e `fetch`).
  - Operadores modernos de proteção (`Optional Chaining ?.` e `Nullish Coalescing ??`).
  - Escuta de eventos globais (`click` e `keypress`).

## 🌍 Como Hospedar este Projeto de Graça (GitHub Pages)

Para colocar o seu site no ar e compartilhar com qualquer pessoa usando o GitHub Pages, siga estes passos:

1. Suba os arquivos do seu projeto (`index.html`, `script.js`, etc.) para um repositório **público** no seu GitHub.
2. No topo do repositório, clique na aba **Settings** (Configurações ⚙️).
3. No menu lateral esquerdo, vá até a seção **Code and automation** e clique em **Pages**.
4. Em **Build and deployment**, localize a opção **Source** e certifique-se de que está selecionado *Deploy from a branch*.
5. Logo abaixo, em **Branch**, mude de *None* para **`main`** (ou `master`) e mantenha a pasta como `/ (root)`.
6. Clique no botão **Save**.
7. Aguarde cerca de 1 a 2 minutos. Atualize a página e um link azul com a mensagem *"Your site is live at..."* aparecerá no topo da página de configuração. Pronto, seu site está online!

## 📦 Como Executar Localmente

1. Baixe os arquivos de código.
2. Certifique-se de que os arquivos `index.html` e `script.js` estejam na mesma pasta.
3. Abra o arquivo `index.html` diretamente no seu navegador.

## 👤 Autor

Desenvolvido com dedicação por **Alex Lobato** para fins de estudo, prática de manipulação de DOM e consumo de APIs assíncronas em JavaScript.
