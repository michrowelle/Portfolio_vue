<script setup>

  import { RouterLink, RouterView } from 'vue-router'
  import { onMounted, onBeforeUnmount } from 'vue';

    const handleMouseMove = (event) => {
      const cursor = document.querySelector(".custom-cursor");
      cursor.style.top = event.clientY - 10 + "px";
      cursor.style.left = event.clientX - 10 + "px";
    };

    onMounted(() => {
      document.addEventListener("mousemove", handleMouseMove);
    });

    onBeforeUnmount(() => {
      document.removeEventListener("mousemove", handleMouseMove);
    });

</script>

<template>
 
  <span class="logo"><RouterLink to="/">Michelle Raschke</RouterLink></span>
  <span class="nav-items">
      <ul>
          <li><RouterLink to="/homeorder">Projects</RouterLink></li>
          <li><RouterLink to="/about">About</RouterLink></li>
      </ul>
  </span>

  <body>

    <RouterView />

  </body>

  <footer>

    <div class="footer">
        <p>©2024 Michelle Raschke <span class="tab"><RouterLink to="/impressum">Impressum</RouterLink></span></p>
    </div>

  </footer>

  <div class="custom-cursor"></div>

</template>


<style scoped>

  body {
      background-color: #fff;
      display: flex;
      cursor: none; 
      padding: 5px;
      margin: 0;
  }

  .custom-cursor {
      width: 20px;
      height: 20px;
      background-color: var(--color3);
      border-radius: 50%;
      position: fixed;
      pointer-events: none; 
      z-index: 9999;
      mix-blend-mode: difference; 
  }

  .logo, .nav-items {
      position: fixed;
      color: var(--color1);
      mix-blend-mode: difference;
      z-index: 9997;
      cursor: none;
      display: flex;
      position: fixed;
      top: 2rem;
      left: 2rem;
      text-align: left;
  }


  .logo {
      font-family: var(--logo-font-family);
      font-size: var(--logo-font-size);
      font-weight: 400;
      
  }

  ul {
      font-family: var(--nav-text-font-family);
      font-size: var(--nav-text-font-size);
      text-align: right;
      list-style: none;
      position: fixed;
      top: 2.1rem;
      right: 2rem;
      margin: 0;
      padding: 0
  } 

  a {
      color: var(--color3);
      text-decoration: none;
  }

  a:hover {
      color: var(--color4);
      cursor: none;
  }

  footer {
      font-family: var(--footer-text-font-family);
      font-size: var(--footer-text-font-size);
      font-weight: var(--footer-text-weight);
      color: var(--color3);
      position: fixed;
      bottom: 0.1rem;
      left: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      mix-blend-mode: difference;
  }

  footer a {
      color: var(--color3);
  }

  footer .tab {
      margin: 20px;
  }

  @media (max-width: 800px) {
      :root {
          --logo-font-size: 24px;
          --nav-text-font-size: 20px;
          --copy-text-font-size: 16px;
          --info-text-font-size: 12px;
          --footer-text-font-size: 10px;
      }
  }

  @media (max-width: 600px) {

    body{
        padding: 0
    }

    .logo, .nav-items {
        left: 1rem;
    }

    ul {
        right: 1rem;
    }

    .row {
          display: grid;
          grid-template-columns: 1fr;
          min-height: 400vw;
      }

    
  }

</style>