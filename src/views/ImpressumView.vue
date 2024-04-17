<script setup>

</script>

<template>
   
  <div class="impressum">
      <div class="title">Impressum</div>
        <div class="text">
            <strong>Angaben gemäß § 5 TMG</strong>
            <br><br>Michelle Raschke
            <br>Von-Steinau-Straße 16a
            <br>97502 Euerbach
            <br><br>Kontakt:
            <br>Telefon: 0176 41691483
            <br>Mail: hello@michelleraschke.de
            <br><br><strong>Haftungsausschluss:</strong>
            <br><br>Haftung für InhalteDie Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            <br><br><strong>Haftung für Links</strong>
            <br><br>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            <br><br><strong>Urheberrecht</strong>
            <br><br>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            <br><br><strong>Datenschutz</strong>
            <br><br>Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.
        </div>
  </div>
    
</template>



<style lang="scss" scoped>

  .impressum {
      margin: 8rem 1.5rem 2rem 1.5rem;
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 0.6vw 50px;
  }

  .title {
      font-family: var(--copy-text-font-family);
      font-size: var(--info-text-font-size);
      font-weight: 600;
      text-align: right;
      
  }

  .text {
      font-family: var(--copy-text-font-family);
      font-size: var(--info-text-font-size);
      color: var(--color1);
      strong {
          font-weight: 600;
      }
  }

  @media (max-width: 840px) {
      :root {
          --logo-font-size: 24px;
          --nav-text-font-size: 20px;
          --copy-text-font-size: 16px;
          --info-text-font-size: 12px;
          --footer-text-font-size: 10px;
      }

      .impressum {
          display: grid;
          grid-template-columns: 1fr;
      }

      .title {
          font-size: var(--nav-font-size);
          text-align: left;
          margin-bottom: 20px
      } 
  }

</style>