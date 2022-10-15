export default () => {
    const container = document.createElement('div');
  
    const template = `
      <section class="container-home">
        <header>
          <nav>
            <ul>
                <a href="/#homepage">Profissonais</a>
              </li>
              <li>
                <a href="/#post">Postar serviço</a>
              </li>
            </ul>
          </nav>
        </header>
        
        <body>
            <form>
                <p>Nome do usuário:</p>
                <textarea>
                    Clique aqui para inserir seu texto
                </textarea>
                <button type="submit">Publicar</button>
            </form>
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