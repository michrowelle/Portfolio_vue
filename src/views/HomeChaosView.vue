<script setup>

    import { ref, computed } from 'vue'
    import getPortfolio from '@/modules/getPortfolio'

    const { portfolioItems } = getPortfolio()
    const { cardId } = 'card-{{ portfolioItems.id }}'

    let selectedCategory = ref('')

    const filteredPortfolioItems = computed(() => {
        if (selectedCategory.value == '') {
        return portfolioItems.value
        }
        else {
        return portfolioItems.value.filter(item => item.category.includes(selectedCategory.value))
        }
    })

</script>

<template>
   
   <header>

        <div class="state">
            <router-link to="/" class="chaos">chaos</router-link>
            <div class="state-arrow">→</div>
            <router-link to="/homeorder" class="order">order</router-link>
        </div>

    </header>

    <main>

      <div class="projects">
        <span class="filter" @click="selectedCategory = ''"> all </span>
        <span class="filter" @click="selectedCategory = 'graphic'"> graphic </span>
        <span class="filter" @click="selectedCategory = 'print'"> print </span>
        <span class="filter" @click="selectedCategory = 'motion'"> motion </span>
        <span class="filter" @click="selectedCategory = 'interaction'"> interaction </span>
  
        <div class="row">
        
          <div v-for="portfolioItem in filteredPortfolioItems" :key="portfolioItem" class="card" :card="portfolioItem.id">
            
            <h2>{{ portfolioItem.title }}</h2>
            <p>{{ portfolioItem.shortdescription }}</p>
            <p>{{ portfolioItem.year }}</p>
  
            <router-link :to="`/portfoliodetail/${portfolioItem.id}`"> 
                <img :src="portfolioItem.image" alt="">
            </router-link>

          </div>

        </div>

      </div>

    </main>

  </template>
  

  
<style lang="scss" scoped>
  
    header {
        color: var(--color3);
        mix-blend-mode: difference;
        z-index: 9998;
    }

    .state {
      text-align: center;
      display: flex;
      position: fixed;
      justify-content: center;
      top: 2rem;
      left: 23rem;
      right: 23rem;
      color: var(--color3);
      mix-blend-mode: difference;
      z-index: 9998;
      font-family: var(--nav-text-font-family);
      font-size: var(--nav-text-font-size);
    }
  
    .state-arrow {
        font-family: var(--nav-text-font-family);
        font-size: var(--nav-text-font-size);
        margin: 0 10px;
        transform: scaleX(-1)
    }

    .chaos {
        color: var(--color4);
    }
 
    a {
        text-decoration: none;
        color: var(--color3);
    }

    a:hover {
        color: var(--color4);
        cursor: none;
    }

    .filter {
        font-family: var(--footer-text-font-family);
        font-size: var(--footer-text-font-size);
        margin: 0.3rem  0.3rem  1rem 0;
        color: var(--color1);
        position: relative;
        top: 4.4rem;
        left: 0.8rem
    }
  
    .filter:hover {
        color: var(--color2);
    }
  
    main {
        height: 100%;
        width: 100%;
        display: flex;
    }
  
    .row {
        min-height: 96vh;
    }
  
    .card {   
        overflow: hidden;
        background: var(--color1);
        position: fixed;
    }

    .card p, .card h2{
        margin-left: 10px;
        padding: 5px;
        opacity: 0;
        color: var(--color1);
        position: relative;
        z-index: 9;
    }

    .card h2 {
        margin-top: 10px;
        margin-bottom: 0;
        font-family: var(--nav-text-font-family);
        font-size: var(--nav-text-font-size);
        font-weight: 450;
    }

    .card p {
        font-family: var(--footer-text-font-family);
        font-size: var(--footer-text-font-size);
        font-weight: var(--footer-text-weight);
        font-weight: 100;
        margin: 0 10px 0 10px;
        
    }

    .card:hover h2, .card:hover p {
        opacity: 1;
    }

    .card::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--color3); 
        z-index: -1; 
        
    }

    /* CIBTM */
    .card[card="1"] { 
        top: 38vh;
        left: 25vw;
        height: 45vh;
        width: 45vw;
        z-index: 6;
        mix-blend-mode: difference;
    }

    /* AMORE */
    .card[card="2"] {
        top: 58vh;
        left: 73vw;
        height: 40vh;
        width: 20vw; 
        z-index: 5;
        mix-blend-mode: difference;
    }

    /* product videos */
    .card[card="3"] {
        top: 63vh;
        left: 1vw;
        height: 35vh;
        width: 40vw; 
        z-index: 4;
        mix-blend-mode: difference;
    }

    /* unPERFEKT */
    .card[card="4"] {
        top: 20vh;
        left: 64vw;
        height: 41vh;
        width: 34vw; 
        z-index: 3;
        mix-blend-mode: difference;
    }

    /* New Ways */
    .card[card="5"] {
        top: 13vh;
        left: 6vw;
        height: 48vh;
        width: 26vw; 
        z-index: 2;
        mix-blend-mode: difference;
    }

    /* Intentio */
    .card[card="6"] {
        top: 8vh;
        left: 45vw;
        height: 35vh;
        width: 20vw; 
        z-index: 1;
        mix-blend-mode: difference;
    }

    .card img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(1);
        mix-blend-mode: difference;
        position: absolute;
        top:0;

    }

    .card:hover img {
        filter: brightness(0);
    }

  
    @media (max-width: 900px) {
        :root {
            --logo-font-size: 24px;
            --nav-text-font-size: 20px;
            --copy-text-font-size: 16px;
            --info-text-font-size: 12px;
            --footer-text-font-size: 10px;
        }
    }

    @media (max-width: 850px) {

        /* CIBTM */
        .card[card="1"] { 
            top: 38vh;
            left: 5vw;
            height: 30vh;
            width: 73vw;
            z-index: 6;
            mix-blend-mode: difference;
        }

        /* AMORE */
        .card[card="2"] {
            top: 65vh;
            left: 58vw;
            height: 30vh;
            width: 40vw; 
            z-index: 5;
            mix-blend-mode: difference;
        }

        /* product videos */
        .card[card="3"]{
            top: 63vh;
            left: -40vw;
            height: 34vh;
            width: 90vw; 
            z-index: 4;
            mix-blend-mode: difference;
        }

        /* unPERFEKT */
        .card[card="4"] {
            top: 30vh;
            left: 64vw;
            height: 20vh;
            width: 38vw; 
            z-index: 3;
            mix-blend-mode: difference;
        }

        /* New Ways */
        .card[card="5"] {
            top: 15vh;
            left: 3vw;
            height: 28vh;
            width: 49vw; 
            z-index: 2;
            mix-blend-mode: difference;
        }

        /* Intentio */
        .card[card="6"] {
            top: 13vh;
            left: 45vw;
            height: 20vh;
            width: 40vw; 
            z-index: 1;
            mix-blend-mode: difference;
        }
    }
    
    @media (max-width: 600px) {
        .state {
            text-align: left;
            display: flex;
            position: fixed;
            justify-content: left;
            top: 4rem;
            left: 1rem;
            right: 0;  
        }

        .filter {
        top: 5.5rem;
        left: 0.8rem
        }
  }
  
</style>