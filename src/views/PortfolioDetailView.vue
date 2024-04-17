<script setup>

  import { ref, computed } from 'vue'
  import { useRoute } from 'vue-router'
  import getPortfolio from '@/modules/getPortfolio'

  const { portfolioItems } = getPortfolio()

  const route = useRoute()

  const id = ref(route.params.id)

  const specificPortfolioItem = portfolioItems.value.find(item => item.id == id.value)
  //console.log(specificPortfolioItem)

</script>

<template>

  <div>

    <div v-if="!specificPortfolioItem">
      portfolio item not found
    </div>

    <div v-else>

      <div class="projects">

        <div class="page">

            <div class="visual">

              <div v-if="specificPortfolioItem.iframe">
                <iframe :src="specificPortfolioItem.iframe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div v-if="specificPortfolioItem.iframe2">
                <iframe :src="specificPortfolioItem.iframe2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div v-if="specificPortfolioItem.iframe3">
                <iframe :src="specificPortfolioItem.iframe3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>

              <img :src="specificPortfolioItem.visuals" alt="" width="100%">

            </div>

            <div class="infos">

                <div class="year">{{specificPortfolioItem.year}}</div>
                <div class="team" v-html="specificPortfolioItem.team"></div><br>
                <div class="displayed" v-html="specificPortfolioItem.displayed"></div>
                <div class="german">{{specificPortfolioItem.german}}</div>
                <div class="english">{{specificPortfolioItem.english}}</div>
                <div class="info1" v-html="specificPortfolioItem.info1"></div>
                <div class="info2" v-html="specificPortfolioItem.info2"></div>

            </div>

        </div>

      </div>

    </div>

  </div>

</template>



<style lang="scss" scoped>

  .page {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 2vw 6vw;
      margin: 8rem 0.3rem 2rem 2rem;
  }

  .infos {
      grid-column: 1 / 2;
      position: fixed;
      width: 37vw;
      bottom: 2rem;
  }


  .info1, .info2, .year, .team, .displayed {
      font-family: var(--footer-text-font-family);
      font-size: var(--footer-text-font-size);
      font-weight: var(--footer-text-weight);
      color: var(--color1);
      
  }

  .english, .german {
      font-family: var(--copy-text-font-family);
      font-size: 12;
      margin: 2rem 0 ;
  }

  .german {
      font-weight: 550;
  }

  .year {
      position: fixed;
      top: 8rem;
  }

  .team {
      position: fixed;
      top: 8rem;
      right: 60%;
      text-align: right;
  }

  .displayed {
      position: fixed;
      top: 14rem;
      right: 60%;
      text-align: right;
  }

  .info2 {
      position: fixed;
      bottom: 2rem;
      text-align: right;
      right: 60%;
  }

  .visual {
      grid-column: 2 / 3;
      position: relative;
      top: -0.5rem;
      right: 1rem;
      width: 55vw
  }

  img, video, iframe {
      width: 100%;
      margin: 0 0 0.2rem 0 
  }

  iframe {
      height: 31vw;
  }

  @media (max-width: 1200px) {
    .visual {
      width: 54vw
    }
  }

  @media (max-width: 840px) {
    
      .page {
          display:inline-block;
          margin: 6rem 0rem 2rem 2rem;
      }
      
      .infos {
          position: relative;
          width: 100%;
          top: 20px
      }
      
      .english, .german {
          margin: 1rem 2.5rem 1rem 0;
      }
      
      .year {
          position: relative;
          top: 0.8rem;
      }
      
      .team {
          position: relative;
          top: 0;
          right: 2rem;
      }
      
      .displayed {
          position: relative;
          top: 0;
          right: 2rem;
      }
      
      .info2 {
          position: relative;
          right: 2rem;
          bottom: 2.4rem;
      }

      .visual {
        width: auto
     }
      
      img, iframe, video {
          width: 100%;
      }

      iframe {
          height: 50vw;
      }
  }

</style>