export default () => {
    const container = document.createElement('div');
  
    const template = `
      <section class="container-login">
        <div class="login">
    <div class="titulo">
    <h1>Busque Serviços</h1>

           <img src="logo.jpeg">
    </div>
    
  
        <section>
        <div class="boton">
           <input id="txtEmail" type="text" name="email" placeholder="Insira seu e-mail" autofocus>
           <input id="txtPassword" type="password" name="senha" placeholder="Insira sua senha">
           </div>
           <div class="button">
           <a href= "/#homepage"><input id="btnEntrar" type="submit" value="Entrar"></a>
           <a href= "/#"><input id="btnGoogle" type="submit" value="Login Google"></a>
           <a href= "/#signup"><input id="btnCadastro"type="submit" value="Clique para se cadastrar"></a>
           </div>
           </section>
      </section>
      `;container.innerHTML = template;
  
    return container;
  };