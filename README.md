https://tubeme.acacha.org/ionic_real | https://tubeme.acacha.org/ionic_realworld | https://tubeme.acacha.org/ionic_real_world

![IonicRealWorldApp](https://user-images.githubusercontent.com/4015406/144209735-7ba351cf-c145-4d21-a5c1-a9350c33b9fa.png)


# Casteaching

Casteaching és una aplicació desenvolupada per Sergi Tur Badenas. Es tracta d'una web app i REST API per a ensenyar utilitzant screencasts.

L'aplicació està desenvolupada amb Laravel i utilitzant TDD (Test Driven Development). Podeu veure com s'ha realitzat aquesta aplicació a la sèrie de vídeos:

https://tubeme.acacha.org/tdd

## TODO

- Casteaching Landing Page -> Descarrega app a Google Play

# Coneixements Previs

- API REST que utilitzem -> Videos 124 i 15 de https://tubeme.acacha.org
- Coneixements bàsics de vue. Recomano haver fet la sèrie: https://www.vuemastery.com/courses/intro-to-vue-3/intro-to-vue3
- Coneixement Vue real world: https://www.vuemastery.com/courses/real-world-vue3/rwv3-orientation
- Opcional (paquet casteaching javascript): TODO

## Vue

Si no coneixeu les bases de Vue us recomano el curs:

https://www.vuemastery.com/courses/intro-to-vue-3


## Casteaching Ionic

Aquest repositori conté el codi de la versió per a Ionic/Mòbils de casteaching. Es tracta d'una versió de la web app casteaching adaptada a mòbils i creada amb Ioni i VueJs.
L'aplicació Ionic és una aplicació Frontend que utilitza Axios per comunicar-se amb el backend (REST API de l'aplicació casteaching) 

# Autor

- Sergi Tur Badenas: https://acacha.github.io
- Instagram: https://instagram.com/acacha_dev
- Github: https://github.com/acacha

![image](https://user-images.githubusercontent.com/4015406/140644527-e186bf90-e556-4970-98ed-3f00c5f1af11.png)

# Codi font dels alumnes

- Audí Bielsa, Daniel: https://github.com/daudi44/casteaching-ionic
- Avante Caballé, Marc: https://github.com/AvanteCaballe/TODO
- Brusca Manchón, Albert: https://github.com/Albert-Brusca/TODO
- Goncear, Tudor: https://github.com/tgoncear/TODO
- Moreno Giraldo, Jhon: Jhon1348: https://github.com/Jhon1348/TODO
- Muñoz Zafra, Ferran | https://github.com/Fmunozzafra/casteachingIonic
- Pont Lopez, David: Palanka777: https://github.com/Palanka777/TODO.git
- Rius Rivas, Alba: AlbaRiius: https://github.com/AlbaRiius/TODO
- Tomas Altadill, Axel: AxelTomas99: https://github.com/AxelTomas99/TODO
- Gabriel Urs. Gabriel: l3lackJack https://github.com/l3lackJack/casteachingIonic
- Tur Badenas, Sergi: Alumne DAM Prova: https://github.com/AlumneDAMPRova/TODO

# Com publicar els projectes?

Similar a com vam fer amb el projecte ionic-comptador: https://www.youtube.com/watch?v=e03ea9TQ6lg&list=PLyasg1A0hpk0Z60Jg0kMpjP_Nw5ZTA7My&index=8

Curs de vue mastery: https://www.vuemastery.com/courses/real-world-vue3/deploying-with-render/

Aneu a render.com i entreu amb el vostre usuari de Github:

- Feu click a botó New.
- Escolliu new static
- Poseu la URL de vostre projecte Github (és posible que tingueu que donar permisos o fer el projecte public)
- Nom del projecte: CasteachingIonic (o quelcom similar identificatiu, per exemple el vostre nom)
- branch: production
- comanda: npm run build
- carpeta: dist

Captura exemple:

![image](https://user-images.githubusercontent.com/4015406/150368269-3d107053-6378-49ab-bc07-67f00bc66ba1.png)

Feu click a create new service.

# Projectes en explotació dels alumnes

- Audí Bielsa, Daniel: http://TODO.danielaudibielsa.codes/
- Avante Caballé, Marc: http://TODO.marcavante.codes/
- Brusca Manchón, Albert: http://TODO.albertbrusca.me/
- Goncear, Tudor: http://TODO.tudorgoncear.me/ 
- Moreno Giraldo, Jhon: Jhon1348: http://TODO.jhonmoreno.codes
- Pont Lopez, David: Palanka777: http://TODO.davidpont.me/
- Rius Rivas, Alba: http://TODO.albarius.codes/
- Tomas Altadill, Axel: AxelTomas99: http://TODO.axeltomas.codes/
- Muñoz Zafra, Ferran | http://TODO.ferranmunozzafra.me/
- Urs, Gabriel: l3lackJack: http://TODO.gabriel.alumnedam.me/
- Tur Badenas, Sergi: Alumne DAM Prova: https://casteachingionicstatic.onrender.com

# Sèries

https://tubeme.acacha.org/ionic_real | https://tubeme.acacha.org/ionic_realworld | https://tubeme.acacha.org/ionic_real_world

# Coneixements previs

- NodeJs i NPM i Ionic 101: https://tubeme.acacha.org/ionic
- Casteaching REST API: https://tubeme.acacha.org/tdd vídeos 124 i 125

# Vídeo 101

Explicació:

- Versió per a mòbils casteaching
- Comunicació amb el frontend via XHR/Fetch/Axios. REST API casteaching és un coneixement previ
- Utilitzarem la llibreria npm casteaching -> https://www.npmjs.com/package/casteaching -> Servei que connecta el frontend amb el backend.
- Utilitzem una plantilla Github com a inici de l'aplicació Ionic en comptes de ionic start -> Us proporciono una versió sense Typescript
- Plantilles Github vs Forks
- Vue Router. Client Side Routing Vs Server Side Routing -> SPA -> https://www.vuemastery.com/courses/real-world-vue3/vue-router-essentials

## Esborrar typescript

Veieu els commits:

- Eliminació de typescript: https://github.com/acacha/casteachingIonic/commit/12639bcc0a0c4ff28aa8e0ee20023c60d11bcd9b
- Eliminació de Typescript als testos: https://github.com/acacha/casteachingIonic/commit/d9ccc28cfe200de451b008843745535fffd84253

La documentació de ionic no explica com arreglar els testos, la poseu trobar a:

https://ionicframework.com/docs/vue/quickstart

Secció:

https://ionicframework.com/docs/vue/quickstart#build-your-way-with-typescript-or-javascript

# Vídeo 104

- Intro amb exemples User Experience:
- Feedback que es proporciona als usuaris. Tailwind UI té un apartat feedback: Alerts / Empty states
- Empty States | Skeletons | Placeholders: llista buida de vídeos | que mostrar quan la llista encara s'està carregant
  - Tailwind UI: https://tailwindui.com/components/application-ui/feedback/empty-states
  - Ionic: https://ionicframework.com/docs/api/skeleton-text
- Progress indicators: molt relacionats amb la programació concurrent/asincrona i processos que a priori no sabem quan poden tardar
  - Spinners| Barras de progrés:https://ionicframework.com/docs/api/loading | https://ionicframework.com/docs/api/progress-bar
  - Placeholders texts: https://ionicframework.com/docs/api/skeleton-text

Llistes:
- Simples ion-list: https://ionicframework.com/docs/api/list
- Pull to refresh: especific de mòbils: ion-refresher
- Llistes infinites | infinite-scroll: relacionades amb la paginació

Casos ús:
- Llista de vídeos: tots
- Pull to refresh al show del video
- Un cop la api tingui paginació podem implementar llista infinita
- Mostrar un truc per omplir amb dades inventades la Api

# 106. Auth amb backend Laravel

Vídeos Previs:
- Un de casteaching com a backend explicant que és Laravel Sanctum
- Recordar que de moment hem fet una "xapuza" a nivel authenticació i seguretat que és Token Hardcoded  https://github.com/acacha/casteaching_package/blob/main/index.js#L10
- Al reiniciar amb fresh la base de dades el token s'esborrar i ja no va Videos per Vue
- Funciona amb Laravel Sanctum?

TODO:
- Afegir Formulari de login a aplicació Ionic
- Link a registre al backend Laravel: no cal/bo farem fer registre Ionic

Casteaching package:
- Ara té hardcoded un valor de api token: https://github.com/acacha/casteaching_package/blob/main/index.js#L10
- S'ha de poder indicar aquest valor al crear la llibreria

Aquest valor s'ha d'obtenir amb:

Laravel Sanctum: 
- SPA: al mateix domini o subdomini: Utilitzant cookies, no calen tokens
- Mobile apps: https://laravel.com/docs/8.x/sanctum#mobile-application-authentication
- 
