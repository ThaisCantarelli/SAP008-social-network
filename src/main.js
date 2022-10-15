import ".firebase/config-firebase.js";
import login from "./pages/login/login.js";
import signup from "./pages/signup/signup.js";
import homepage from "./pages/homepage/homepage.js";
import post from "./pages/post/post.js";
import dev from "./pages/dev/dev.js";


const main = document.querySelector("#root");

const init = () => {
  window.addEventListener("hashchange", () => {
    main.innerHTML = "";
    switch (window.location.hash) {
      case " ":
        main.appendChild(login());
        break;
      case "#signup":
        main.appendChild(signup());
        break;
      case "#homepage":
        main.appendChild(homepage());
        break;
      case "#post":
        main.appendChild(post());
        break;
      case "#dev":
        main.appendChild(dev());
        break;
      default:
        main.innerHTML = "";
        main.appendChild(login());
    }
  });
};

window.addEventListener("load", () => {
  main.appendChild(login());
  init();
});