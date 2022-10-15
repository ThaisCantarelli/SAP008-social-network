export default () => {
    const container = document.createElement('div');
  
    const template = `
      <section class="container-home">
        <header>
          <nav>
            <ul>
              <li>
                <a href="/#homepage">Profissionais</a>
              </li>
              <li>
                <a href="/#post">Postar serviço</a>
              </li>
            </ul>
          </nav>
        </header>       
        <body>
          <p>Nome do usuário</p>
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