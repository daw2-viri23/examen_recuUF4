(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();const u=[{nombre:"Stranger Things",año:2016,descripcion:"Un grupo de niños se enfrenta a fenómenos sobrenaturales en un pequeño pueblo de los años 80.",imagen_url:"https://upload.wikimedia.org/wikipedia/en/6/6e/Stranger_Things_characters.png"},{nombre:"La Casa de Papel",año:2017,descripcion:"Un enigmático personaje llamado 'El Profesor' recluta a ocho personas para llevar a cabo un ambicioso plan: atracar la Casa de la Moneda de España.",imagen_url:"https://i.blogs.es/7b5613/la-casa-de-papel-temporada-5/1366_2000.jpeg"},{nombre:"Black Mirror",año:2011,descripcion:"Una serie antológica que explora la relación entre la tecnología y la sociedad, presentando historias oscuras y distópicas.",imagen_url:"https://itpeers.com/wp-content/uploads/2020/10/backmirror-scaled.jpg"},{nombre:"Breaking Bad",año:2008,descripcion:"Un profesor de química diagnosticado con cáncer se convierte en un despiadado fabricante y vendedor de metanfetaminas para asegurar el futuro financiero de su familia.",imagen_url:"https://imagenes.20minutos.es/files/og_thumbnail/uploads/imagenes/2019/10/22/breakingBad.jpg"},{nombre:"The Crown",año:2016,descripcion:"La serie sigue la vida de la Reina Isabel II y los eventos históricos que tuvieron lugar durante su reinado.",imagen_url:"https://www.elindependiente.com/wp-content/uploads/2021/08/the-crown-serie-netflix.jpg"}],d={template:`
  <div class="row">
  <div class="col-12">
<p class="text-end">Bienvenido <span>usuario@email.com</span></p>
      <h1 class="text-center mt-3 ">Series famosas de todos los tiempos</h1>
<p class="text-center fs-4 p-3 bg-light border">Haz clic sobre cualquier ficha para mostrar toda la información en el panel derecho</p>
  </div>
  <div class="col-6">
<div class="row">
<!-- card -->
<div class="col-4">
<div class="card shadow mt-2">
  <img id="stranger2"
    src="https://upload.wikimedia.org/wikipedia/commons/3/38/Stranger_Things_logo.png"
    class="card-img-top"
    alt="..."
  />
  <div class="card-body">
    <h5 class="card-title text-center">Stranger Thinks</h5>
  </div>
</div>
</div>
<!-- card -->
<div class="col-4">
<div class="card shadow mt-2">
  <img id="casapapel"
    src="https://i.blogs.es/7b5613/la-casa-de-papel-temporada-5/1366_2000.jpeg"
    class="card-img-top"
    alt="..."
  />
  <div class="card-body">
    <h5 class="card-title text-center">La casa de papel</h5>
  </div>
</div>
</div>
<!-- card -->
<div class="col-4">
<div class="card shadow mt-2">
  <img
    src="https://itpeers.com/wp-content/uploads/2020/10/backmirror-scaled.jpg"
    class="card-img-top"
    alt="..."
  />
  <div class="card-body">
    <h5 class="card-title text-center">Black Mirrow</h5>
  </div>
</div>
</div>
<!-- card -->
<div class="col-4">
<div class="card shadow mt-2">
  <img
    src="https://imagenes.20minutos.es/files/og_thumbnail/uploads/imagenes/2019/10/22/breakingBad.jpg"
    class="card-img-top"
    alt="..."
  />
  <div class="card-body">
    <h5 class="card-title text-center">Breaking bad</h5>
  </div>
</div>
</div>
<!-- card -->
<div class="col-4">
<div class="card shadow mt-2">
  <img
    src="https://www.elindependiente.com/wp-content/uploads/2021/08/the-crown-serie-netflix.jpg"
    class="card-img-top"
    alt="..."
  />
  <div class="card-body">
    <h5 class="card-title text-center">The Crown</h5>
  </div>
</div>
</div>
</div>
      
  </div>
  <!-- ficha ampliada -->
  <div class="col-6">
      <div class="card shadow mt-2">
          <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/38/Stranger_Things_logo.png"
              class="card-img-top"
              alt="..."
          />
          <div class="card-body">
              <h3>Stranger Thinks</h3>
              <hr />
              <p><strong>Año: </strong><span>2017</span></p>
              <p>
                  <strong>Descripción: </strong>
                  <span>
                      Un grupo de niños se enfrenta a fenómenos sobrenaturales en un pequeño
                      pueblo de los años 80.
                  </span>
              </p>
          </div>
      </div>
  </div>
</div>
  `},m={template:`
    <div class="container-fluid">
    <span class="navbar-brand mb-0" id="home">2223 M6 UF3/UF4 - Examen extraordinaria - (Alumnno: Pepito Lospalotes)</span>
    <form  class="d-flex">
      <input class="form-control me-2" placeholder="email@email.com">
      <button class="btn btn-outline-success" id="login">Login</button>
      <button class="btn btn-link" id="registro">Regístrate</button>
    </form>
    `},p={template:`
  
  <div
  class=" d-flex align-items-center justify-content-center"
>
  <div class="col-12 col-md-4">
      <h1 class="text-center p-2">Login</h1>
      <form id="login" class="p-3" novalidate>
          <label class="mt-3 form-label" for="email">Email</label>
          <input id="emailL" type="email" class="form-control" required />
          <div class="invalid-feedback">Debes introducir un email valido</div>

          <label class="mt-3 form-label" for="nick">Contraseña: </label>
          <input id="passwordL" type="password" class="form-control" value="" required />
          <div class="invalid-feedback">Esta no es una contraseña correcta</div>

          <button
              id="btn_submit"
              type="submit"
              class="mt-4 btn btn-success w-100"
          >
              Enviar
          </button>
          <hr class="mt-5" />
      </form>
  </div>
</div>



  `,script:()=>{const e=document.querySelector("#login");e.addEventListener("submit",async a=>{if(a.preventDefault(),a.stopPropagation(),e.classList.add("was-validated"),!e.checkValidity())console.log("formulario no valido");else try{const s={email:document.querySelector("#emailL").value,password:document.querySelector("#passwordL").value},r=await User.login(s);header.script(),console.log("logeado con exito");const o=document.querySelectorAll("#emailUsuarioLogueado");o[0].innerHTML=r.email,window.location.href="/#/home"}catch(s){console.error("No se ha podido iniciar sesión",s),window.alert("No se ha podido iniciar sesión")}})}};var n,g=new Uint8Array(16);function v(){if(!n&&(n=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!n))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(g)}const f=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function h(e){return typeof e=="string"&&f.test(e)}var t=[];for(var c=0;c<256;++c)t.push((c+256).toString(16).substr(1));function b(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,s=(t[e[a+0]]+t[e[a+1]]+t[e[a+2]]+t[e[a+3]]+"-"+t[e[a+4]]+t[e[a+5]]+"-"+t[e[a+6]]+t[e[a+7]]+"-"+t[e[a+8]]+t[e[a+9]]+"-"+t[e[a+10]]+t[e[a+11]]+t[e[a+12]]+t[e[a+13]]+t[e[a+14]]+t[e[a+15]]).toLowerCase();if(!h(s))throw TypeError("Stringified UUID is invalid");return s}function y(e,a,s){e=e||{};var r=e.random||(e.rng||v)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,a){s=s||0;for(var o=0;o<16;++o)a[s+o]=r[o];return a}return b(r)}const w={template:`
    <div
    class=" d-flex align-items-center justify-content-center"
    style=""
  >
    <div class="col-12 col-md-4">
        <h1 class="text-center p-2">Registro</h1>
        <form id="form_registro" class="p-3" novalidate>
  
            <label class="mt-3 form-label" for="email">Email</label>
            <input
                type="email"
                class="form-control"
                id="email"
                value=""
                placeholder = "ychag@example.com"
                required
            />
            <div class="invalid-feedback">El email no es correcto</div>
  
            <label class="mt-3 form-label" for="password">Contraseña: </label>
            <input
                type="password"
                class="form-control"
                id="password"
                value=""
                placeholder = "Contraseña"
                required
            />
  
            <div class="invalid-feedback">
                La contraseña debe contener 8 letras o más que deben ser mayusculas y minusculas, no se aceptan signos ni números
            </div>
  
            <button type="submit" class="mt-5 btn btn-success w-100">
                Enviar
            </button>
            <hr class="mt-5" />
        </form>
    </div>
  </div>
      `,script:()=>{document.querySelector("#form_registro").addEventListener("submit",async function(e){e.preventDefault();try{const a={email:document.querySelector("#email").value,password:document.querySelector("#password").value},s=await User.create(a),r={user_id:y()};await Perfil.create(r),alert("Usuario creado con éxito"),window.location.href="/#/login"}catch(a){console.log(a),alert("Error al crear usuario")}})}};console.log("hola");console.log(u);document.querySelector("main").innerHTML=d.template;document.querySelector("header").innerHTML=m.template;document.querySelector("#registro").addEventListener("click",()=>{document.querySelector("main").innerHTML=w.template,console.log("Hola, esto funciona correctamente"),event.preventDefault()});document.querySelector("#login").addEventListener("click",()=>{document.querySelector("main").innerHTML=p.template,console.log("Hola, esto funciona correctamente"),event.preventDefault(),console.log("carga la vista login")});document.querySelector("#home").addEventListener("click",()=>{document.querySelector("main").innerHTML=d.template,console.log("Hola, esto funciona correctamente"),event.preventDefault(),console.log("carga la vista login")});
