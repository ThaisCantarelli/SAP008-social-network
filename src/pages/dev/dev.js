export default () => {
    const container = document.createElement('div');
  
    const template = `
      <section class="container-dev">
        <header>
          <nav>
            <ul>
                <a href="/#homepage">Profissionais</a>
              </li>
              <li>
                <a href="/#post">Postar serviço</a>
              </li>
            </ul>
          </nav>
        </header>
        
        <body>
         <div class="text"
         <h1>Desenvoveldora</h1>
          <h2>Thais Cantarelli</h2>
          <div class="div">
          <img src="fotodev.jpeg" class="img" alt="imagem dev">
          </div>
          <div class="container-info"
          <p>
          <br>
          Linkedin
          <br>
          GitHub
          <br>
          Instagram
          <br>
          </p>
          </div>
          </figure>
        </body>
        
        <footer>
          <nav>
            <ul>
              <li>
                <a href="/#dev">Criadora</a>
              </li>
              <li>
                <a href="/#homepage">Início</a>
              </li>
              <button>Topo</button>
              <li>
                <a href="/#login">Sair</a>
              </li>
            </ul>
          </nav>
        </footer>
      </section>`;
    container.innerHTML = template;
    return container;
  };