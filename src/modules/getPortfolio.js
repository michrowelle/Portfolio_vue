import { ref } from 'vue'

const getPortfolio = () => {
  const portfolioItems = ref([
    {
      id: 1,
      title: 'Can I Be That Man - Lubes',
      shortdescription: 'music video',
      category: 'motion',
      image: '../src/assets/img/CIBTM3_2480.jpg',
      year: '2023',
      team: 'Team:<br>Lena Lazaridis<br>Michelle Raschke<br>Yasmin Rademann',
      displayed: 'Displayed at:<br>Trial&Error - DIY Music Conference 2023<br>Berlin Music Video Awards 2024 - Silver Screening',
      iframe: 'https://www.youtube.com/embed/iO1PnyzsOD0?si=dIfV7GaATP_Hn7Hr&mute=1&loop=1&autoplay=1&modestbranding=1&rel=0',
      videos: ['../src/assets/mp4/230924_Final_Cut_1920x1080.mp4'],
      visuals: '../src/assets/img/CIBTM_projectpage.png',
      german: '“Can I Be That Man” untersucht das zutiefst menschliche Thema des Endes von Beziehungen und stellt dabei die Frage, ob eine Freundschaft nach einer solchen Trennung möglich ist. Das Video ist in Abschnitte unterteilt, die metaphorisch die Phasen einer Trennung und einen damit verbundenen Umzug darstellen. Es entsteht eine faszinierende Verbindung zwischen der 3D-Welt und der Realität durch die Verwendung von Photogrammetrie-Szenen und realen Studioszenen.',
      english: '„Can I Be That Man“ explores the deeply human topic of the end of relationships and poses the question of whether a friendship is possible after such a separation. The video is divided into several sections that metaphorically represent the phases of a breakup and the associated relocation. The result is a connection between the 3D world and reality through the use of photogrammetry scenes and real studio scenes.',
      info1: '4. Semester<br>Hauptprojekt Motion Design<br>DHBW Ravensburg',
      info2: 'music video<br>3:19 min<br>real, photogrammetry, data mosh'
  },
  {
      id: 2,
      title: 'AMORE Festival',
      shortdescription: 'branding,  visual system',
      category: ['graphic', 'print'],
      image: '../src/assets/img/P9180514.jpg',
      year: '2023',
      visuals: '../src/assets/img/AMORE_projectpage.png',
      german: 'Das visuelle System des deutschen fiktiven Indie-Festivals „AMORE“ basiert auf einem Kreisraster, das vielfältige Strukturen zulässt. Das Logo und die Farbpalette wurden daraus abgeleitet. Der Styleguide bietet ein begrenztes Repertoire an grafischen Elementen und deren Gestaltungsregeln. Anhand der gezeigten Beispiele wird das Potenzial des Systems in Form, Inhalt und spielerischer Varianz demonstriert. Jede Anwendung zeigt eindeutige proportionale Verhältnisse und verdeutlicht das konsistente Erscheinungsbild des Festivals.',
      english: 'The visual system of the fictitious German indie festival „AMORE“ is based on a circular grid that allows for a variety of structures. The logo and the colour palette were derived from this. The style guide shows a limited repertoire of graphic elements and their design rules. The application examples shown demonstrate the potential of the system in terms of form, content and playful variance. Each application shows clear proportional relationships and illustrates the consistent appearance of the festival.',
      info1: '4. Semester<br>Visuelle Systeme<br>DHBW Ravensburg',
      info2: 'Print<br>Styleguide + Poster<br>594 x 841 mm / 198 x 280 mm',
  },
  {
      id: 3,
      title: 'product videos - MEDION AG',
      shortdescription: 'videos',
      category: 'motion',
      image: '../src/assets/img/product videos.png',
      year: '2022-2024',
      team: 'Team:<br>Lucas König<br>Michelle Raschke',
      iframe: 'https://www.youtube.com/embed/Aw39OhlqE6E?si=S4-HHHGVr9Sojdwe&mute=1&loop=1&autoplay=1&modestbranding=1&rel=0',
      iframe2: 'https://www.youtube.com/embed/O_HScon8Ccw?si=AqDtkNgc9wAZcKqo&mute=1&loop=1&autoplay=1&modestbranding=1&rel=0',
      iframe3: 'https://www.youtube.com/embed/8Xj3j9NhNbA?si=eQagOccB8wIkqPoa&mute=1&loop=1&autoplay=1&modestbranding=1&rel=0',
      german: 'Die Medion AG ist ein internationaler Anbieter von Elektronikprodukten mit Fokus auf Qualität und Innovation. Im Rahmen meines dualen Studiums habe ich im Social Media Team hochwertige Videos für den Webshop und die Social Media Kanäle produziert. Dieser interne Ansatz ermöglichte nicht nur eine enge Abstimmung mit den Produktteams, sondern bot auch die Chance, den gesamten Produktionsprozess von der Konzeption über die Dreharbeiten bis hin zum Schnitt mitzuerleben. Die Videos dienen nicht nur der Kundenansprache, sondern ermöglichen auch eine authentische Darstellung des Unternehmens und seiner Produkte.',
      english: 'Medion AG is an international provider of electronic products with a focus on quality and innovation. As part of my dual study programme, I produced high-quality videos for the web shop and social media channels as part of the social media team. This internal approach not only enabled close coordination with the product teams, but also gave me the opportunity to experience the entire production process from conception to filming and editing. The videos not only serve to address customers, but also enable an authentic presentation of the company and its products.',
      info1: 'MEDION AG<br>Interne Produktion',
      info2: 'Various Product Videos'
  },
  {
      id: 4,
      title: 'unPERFEKT',
      shortdescription: 'video, short film',
      category: 'motion',
      image: '../src/assets/img/02_1.1.3.png',
      year: '2022',
      team: 'Team:<br>Lucas König<br>Michelle Raschke',
      iframe: 'https://www.youtube.com/embed/8_HI2TsbWgc?si=Xr8hJl4gXuANnA98&mute=1&loop=1&autoplay=1&modestbranding=1&rel=0',
      visuals: '../src/assets/img/unPERFEKT_projectpage.png',
      german: 'Der Weihnachtsfilm „unPERFEKT“ der Medion AG wurde als internes Projekt initiiert und später extern veröffentlicht. In einem ganzheitlichen Prozess wurde das Projekt von der Recherche über die Konzeption bis zur Umsetzung geplant und realisiert. Interne Castings mit Mitarbeitenden ermöglichten eine authentische Besetzung der Rollen. Die Dreharbeiten fanden an verschiedenen Orten auf dem Medion Campus statt und wurden sorgfältig inszeniert und umgesetzt. Regie und Requisite wurden intern geführt, um die Vision des Films vollständig umzusetzen.',
      english: 'The Medion AG Christmas film „unPERFEKT“ was initiated as an internal project and later published externally. The project was planned and realised in a holistic process, from research and conception to implementation. Internal castings with employees made it possible to cast the roles authentically. The filming took place at various locations on the Medion campus and was carefully staged and realised. Direction and props were managed internally in order to fully realise the vision of the film.',
      info1: 'MEDION AG<br>Interne Produktion',
      info2: 'Kurzfilm<br>5:22 min'
  },
  {
      id: 5,
      title: 'New Ways',
      shortdescription: 'print, magazine',
      category: ['graphic', 'print'],
      image: '../src/assets/img/94C4DC14-1490-4C33-ABC8-0A4381FC8C28_1_105_c.jpeg',
      year: '2022',
      visuals: '../src/assets/img/NewWays_projectpage.png',
      german: 'Das Magazin „New Ways“ zielt darauf ab, die Komplexität der Zerrissenheit in verschiedenen Bereichen zu erforschen und gleichzeitig das Konzept des Scheiterns als Privileg zu beleuchten. Als Luxusobjekt konzipiert, vermittelt es diese Botschaft bereits durch seinen ersten Eindruck: Der aufgerissene Umschlag suggeriert eine gewisse Perfektion, die Betrachter:innen dazu einlädt, das Magazin selbst aufzureißen. Durch die Kombination von Text, Bildern und einem beiliegenden Bildband entsteht ein Gesamtwerk, das die Vielschichtigkeit des Themas auf einzigartige Weise vermittelt und die Betrachter:innen dazu anregt, über ihre eigenen Erfahrungen mit dem Scheitern nachzudenken.',
      english: 'The magazine „New Ways“ aims to explore the complexity of brokenness in different areas and at the same time shed light on the concept of failure as a privilege. Designed as a luxury object, it already conveys this message through its first impression: the torn cover suggests a certain perfection that invites viewers to tear open and explore the magazine for themselves. The combination of text, images and an accompanying illustrated book creates a total work of art that conveys the complexity of the topic in a unique way and encourages viewers to reflect on their own experiences of failure.',
      info1: '2. Semester<br>Hauptprojekt - Print<br>DHBW Ravensburg',
      info2: 'Print<br>Magazin (44 Seiten)<br>178 x 247 mm'
  },
  {
      id: 6,
      title: 'Intentio',
      shortdescription: 'interaction, app',
      category: ['graphic', 'interaction'],
      image: '../src/assets/img/iPhone B06.png',
      year: '2023',
      team: 'Team:<br>Lena Lazaridis<br>Michelle Raschke<br>Lukas Rudolph',
      iframe: 'https://www.youtube.com/embed/wtVQ-ppluV4?si=-srIsRmJ9wXqAcvP&mute=1&loop=1&autoplay=1&modestbranding=1&rel=0',
      visuals: '../src/assets/img/Intentio_projectpage.png',
      german: 'Die Ausgangsprämisse lautete: „Der Medienkonsum beim Essen beeinflusst unser Essverhalten!“. Durch die Auswahl bestimmter Inhalte können wir also das Sättigungsgefühl und die Geschwindigkeit des Essens bis zu einem gewissen Grad steuern. Intentio ist eine App, die die Nutzer über die Auswirkungen des Medienkonsums beim Essen aufklären und sensibilisieren soll. Die App versucht, Menschen zu erreichen, die sich der Auswirkungen des Medienkonsums beim Essen noch nicht bewusst sind, um einen bewussteren Medienkonsum beim Essen zu erreichen.',
      english: 'The initial premise was „Media consumption while eating influences our eating behaviour!“ Therefore by selecting certain content, we can control the feeling of satiety and the speed of eating to a certain extent. Intentio is an app designed to educate and sensitise users about the effects of media consumption while eating. The app is trying to reach people who are not yet aware of the effects of media consumption during meals in order to achieve more conscious media consumption during meals.',
      info1: '3. Semester<br>Hauptprojekt - Systeme<br>DHBW Ravensburg',
      info2: 'Interaktion<br>App + Website'
  }, 
  ])

  return { portfolioItems }
}

export default getPortfolio
