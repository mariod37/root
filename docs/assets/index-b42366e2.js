(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const e of a)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const e={};return a.integrity&&(e.integrity=a.integrity),a.referrerPolicy&&(e.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?e.credentials="include":a.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(a){if(a.ep)return;a.ep=!0;const e=r(a);fetch(a.href,e)}})();const c=()=>{document.querySelector(".navegacion").innerHTML=`
  <nav class="navbar fixed-top">
  <div class="container-fluid">
    <img src="./img/ADAGIO-SUR-NEGRO-160x59.png"class="navbar-brand logo-adagio">
    <div class="social">
    <img src="./img/facebook.svg">
    <img src="./img/instagram.svg">
    <img src="./img/envelope.svg">
    <img src="./img/whatsapp.svg">

    </div>
    <button class="navbar-toggler boton-nav" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
        <button type="button" class="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contacto</a>
          </li>
         
        </ul>
        
      </div>
    </div>
  </div>
</nav>
 `},n=()=>{document.querySelector(".header").innerHTML=`

    <div class="caontainer-fluid" >
<img class=" container-fluid img-header" src="./img/header-hero.jpg">

<div class="card-img-overlay container-fluid ">
<h1 class="text-center">Distribuidora Artistica <br>
<span> Integral</span></h1>
<p class="text-center">Más de 15 años distribuyendo insumos<br>
de calidad a todo el país.</p>
<div class="btn-catalogo">
<button class="boton">Catalogos</button>
</div>

</div>

<p class="contenido-p  ">En Adagio Sur Distribuidora podés encontrar la tranquilidad de estar asesorado personalmente por nuestro equipo profesional todo el año. Sin automatizaciones ni robots, somos una empresa que crece junto a nuestros clientes y estamos disponibles para cumplir con tus necesidades de la mejor manera. Un equipo con más de 15 años de experiencia, radicado en Mar del Plata, pero acercando a toda la Argentina productos de artística a precios y calidad excelentes para el mercado, sobresaliendo por nuestra calidez y la confianza que caracteriza la gran familia que somos junto a las marcas de prestigio que representamos!</p>


`},t=()=>{document.querySelector(".section").innerHTML=`
    <div class="container-fluid marcas">

    <div>
    <div class="logo">
    <img class="img-logo" src="./img/images (1).png">
    </div>

    <h3 container-fluid text-center>Varias formas  de pago</h3>
    </div>
    <div>

    <div class="logo">
    <img class="img-logo" src="./img/person.svg">
    </div>

    <h3 container-fluid text-center>Atencion personalizada</h3>
    </div>
    <div>

    <div class="logo">
    <img  src="./img/megaphone.svg" class=" bi bi-megaphone img-logo">
    </div>

    <h3 container-fluid text-center>Promociones increibles</h3>
    </div>

    
    </div>
    
    
    
    
    `},l=()=>{document.querySelector(".section-marcas").innerHTML=`
    <div class=" container-fluid "> 
    <div >
    <div class="img-marcas">
    <img class="img-fluid" src="./img/marcas.jpg">
    </div>

    <div class="img-marcas">
    <img class="img-fluid" src="./img/marcas-2.jpg">
    
    </div>

    <div class="img-marcas">
    <img class="img-fluid" src="./img/marcas-3.jpg">
    </div>

    <div class="img-marcas">
    <img class="img-fluid" src="./img/Marcas-nicron.jpg">
    </div>
</div>
    </div>
    
    
    `},d=()=>{document.querySelector(".footer").innerHTML=`
    <div class="container-fluid social-footer"">
    <div>
    <img src="./img/ADAGIO-SUR-NEGRO-160x59.png"class="navbar-brand logo-adagio">
    </div>
    <div class="social">
    <img src="./img/facebook.svg">
    <img src="./img/instagram.svg">
    <img src="./img/envelope.svg">
    <img src="./img/whatsapp.svg">
    </div>
    <p class="prestigio">By prestigio</p>
    

    
    </div>
    `};document.querySelector("#app").innerHTML=`

<div class="container-fluid">
<div class=" conteiner-fluid navegacion">
  </div>  
  
  <div class="header">
  
  </div>
    
  <div class="section">
  </div>

<div class="section-marcas">

</div>
<div class="footer">
</div>
  </div>
`
