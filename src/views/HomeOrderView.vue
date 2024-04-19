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
    }

    .order {
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
        margin: 0.3rem  0.3rem  1rem 0.4rem;
        color: var(--color1);
    }

    .filter:hover {
        color: var(--color2);
    }

    main {
    height: 120%;
    width: 100%;
    display: flex;
    }

    .projects {
        margin: 5rem 0.5rem 2rem 0.5rem;
        height: 100vh;
        width: 100vw;
    }

    .row {
        display: grid;
        grid-template-columns: repeat(2, 1fr); 
        grid-auto-rows: 40vw; 
        grid-gap: 0.3rem;
        
    }

    .card {   
        overflow: hidden;
        background: var(--color1);
        position: relative;
        
    }

    .card p, .card h2{
        margin-left: 10px;
        padding: 5px;
        opacity: 0;
        color: var(--color3);
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
        .row {
            display: grid;
            grid-template-columns: 1fr;
            min-height: 240vw;
        }

        .state {
            text-align: left;
            display: flex;
            position: fixed;
            justify-content: left;
            top: 4rem;
            left: 1rem;
            right: 0;
        }

        .projects {
        margin: 6rem 0.5rem 2rem 0.5rem;
    }
    }

</style>