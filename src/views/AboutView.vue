<script>

</script>

<template>

    <div class="about">
        
        <div class="profilepic">
          <video loop autoplay src="../assets/mp4/round.mp4"></video>
        </div>

        <div class="my-infos">
            <img src="../assets/img/emojiwavinghand.png" alt="">
            <img src="../assets/img/emojiawkwardsmile.png" alt="">
            <div class="me-text">
                Hi, I’m Michelle Raschke, born in 1998, and current media design student. Grounded in a scientific background, I approach my designs with meticulous research, aiming for depth in my projects. With a rapid learning pace and a commitment to detail, I strive to craft designs that are both memorable and functional. My goal is simple: to keep learning, creating practical yet captivating designs.
            </div>
            <a class="video-cv" href="https://youtu.be/bLiTbdXpZck?si=xjjfrgVlGHqq1WQg">→ Video CV</a>
            <a class="linkedin" href="mailto:hello@michelleraschke.de">→ Contact me</a>
            <a class="contact" href="https://www.linkedin.com/in/michelleraschke">→ Linkedin</a>

            <div class="event-row">
                <div class="time">02/2024 - 06/2024</div>
                <div class="job"><strong>ERASMUS: Multimedia Design</strong>
                    <br><a href="https://www.easv.dk/en/">→ Erhvervsakademi SydVest</a>
                    <br>Esbjerg, Denmark
                </div>
            </div>

            <div class="event-row">
                <div class="time">08/2021 - 09/2024</div>
                <div class="job"><strong>Dual Student Media Design </strong>
                    <br><a href="https://www.mediendesign-ravensburg.de/">→ DHBW Ravensburg</a>
                    <br>Bachelor of Arts
                    <br>Ravensburg, Germany
                </div>
            </div>

            <div class="event-row">
                <div class="time">08/2021 - 09/2024</div>
                <div class="job"><strong>Dual Student Media Design </strong>
                    <br><a href="https://www.medion.com/de/shop">→ MEDION AG</a>
                    <br>Creation & Video Production 
                    <br>Social Media Team
                    <br>Essen, Germany
                </div>
            </div>

            <div class="event-row">
                <div class="time">10/2019 - 08/2021</div>
                <div class="job"><strong>Working Student</strong>
                    <br><a href="https://www.radioprimaton.de/">→ Radio Primaton</a>, <a href="https://www.radiohashtagplus.de/">→ radiohashtag+</a>
                    <br>Editorial Office & Social Media Team
                    <br>Schweinfurt, Germany
                </div>
            </div>

            <div class="event-row">
                <div class="time">01/2021 - 03/2021</div>
                <div class="job"><strong>Internship Video</strong>
                    <br><a href="https://www.infranken.de/">→ inFranken.de</a>
                    <br>Editorial Office (Video)
                    <br>Bamberg, Germany
                </div>
            </div>

            <div class="event-row">
                <div class="time">10/2017 - 09/2020</div>
                <div class="job"><strong>Student Media Communication</strong>
                    <br><a href="https://www.hw.uni-wuerzburg.de/mk/">→ Julius-Maximilians-Universität Würzburg</a>
                    <br>Bachelor of Science
                    <br>Würzburg, Germany
                </div>
            </div>

        </div>

    </div>
    
</template>



<style>

  .about {
      margin: 35rem 1.5rem 2rem 1.5rem;
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 10px 15px;
  }

  .profilepic video{
      grid-column: 1 / 2;
      width: 35vw;
      position: fixed;
      bottom: 10rem;
  }

  .my-infos {
      grid-column: 2 / 3;
      position: static;
      bottom: 0rem;
      
  }

  .me-text, .video-cv, .contact, .linkedin {
      font-family: var(--copy-text-font-family);
      font-size: var(--copy-text-font-size);
      margin: 20px 0 20px 0;
      color: var(--color1);
      width: 90%
  }

  .video-cv, .contact , .linkedin{
      margin: 0 2rem 0 0
  }

  .event-row {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 10px;
      margin: 20px 0 20px 0;
  }

  a {
    text-decoration: none;
    color: var(--color1);
  }

  a:hover {
    color: var(--color2);
    cursor: none;
  }

  .time {
      font-family: var(--info-text-font-family);
      font-size: 32px;
      font-weight: 600;
      width: 20rem;
      color: var(--color1);
      
  }

  .job {
      font-family: var(--info-text-font-family);
      font-size: 16px;
      font-weight: 400;
      color: var(--color1);
      position: relative;
      left: 1rem;
      top: 0.3rem
      
  }

  @media (max-width: 1200px) {
      .job {
          left: 1rem;
      }
      
  }
  @media (max-width: 900px) {
      :root {
          --logo-font-size: 24px;
          --nav-text-font-size: 20px;
          --copy-text-font-size: 16px;
          --info-text-font-size: 12px;
          --footer-text-font-size: 10px;
      }

      .about {
          display: inline;
          margin: 10rem 1.5rem 2rem 1.5rem;
      }

      .profilepic video {
          position: static;
          width: 85vw;
          
      }

      .my-infos img {
          width: 1rem;
          height: auto;
      }

      .my-infos {
          position: static;
          margin: 2rem 0 0 0 
      }
  }

  @media (max-width: 600px) {
      .event-row {
          display: grid;
          grid-template-columns: 2fr 3fr;
          gap: 10px;
          margin: 20px 0 20px 0;
      }

      .time {
          font-family: var(--info-text-font-family);
          font-size: var(--copy-text-font-size);
          font-weight: 600;
          width: 10rem;
          color: var(--color1);
          
      }
      
      .job {
          font-family: var(--info-text-font-family);
          font-size: var(--info-text-font-size);
          font-weight: 400;
          color: var(--color1);
          position: relative;
          left: 0rem;
          top: 0.1rem
          
      }

      .video-cv, .contact , .linkedin {
          margin: 0 1rem 0 0
      }
  }

</style>
