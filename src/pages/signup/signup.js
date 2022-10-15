export default () => {
    const container = document.createElement('div');
  
    const template = `    
    <section class="container-signup">    
       <div class="signup2">        
       <img src="logo2.jpeg" class="logo2-signup">   
       <h1 class='titulo-signup'>Cadastre-se</h1>
       
       <section class="form-signup">
       <label for="name">
       <p>Nome:</p>
       <input type="text" id="name" name="Nome" placeholder="Insira seu nome">

       <label for="email">
       <p>E-mail:</p>
       <input type="email" id="email" name="email" placeholder="Insira seu email">

       <label for="password">
       <p>Senha:</p>
       <input type="password" id="password" name="password" placeholder="Insira sua senha">

       <label for="confirm-password">
       <p>Confirme sua senha:</p>
       <input type="confirm-password" id="confirm-password" name="confirm-password" placeholder="Confirme sua senha">
        </section>

       <section class='buttons-signup'>
       <a href= "/#homepage"><input id="btnCadastrar" type="submit" value="Cadastrar"></a>
       <a href= "/#login"><input id="btnGoogle" type="submit" value="Login Google"></a>
       </div>
       </section>

   `;
 container.innerHTML = template;
    return container;
  };