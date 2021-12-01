# Casteaching

Casteaching és una aplicació desenvolupada per Sergi Tur Badenas. Es tracta d'una web app i REST API per a ensenyar utilitzant screencasts.

L'aplicació està desenvolupada amb Laravel i utilitzant TDD (Test Driven Development). Podeu veure com s'ha realitzat aquesta aplicació a la sèrie de vídeos:

https://tubeme.acacha.org/tdd

# Coneixements Previs

- API REST que utilitzem -> Videos 124 i 15 de https://tubeme.acacha.org
- Coneixements bàsics de vue. Recomano haver fet la sèrie: https://www.vuemastery.com/courses/intro-to-vue-3/intro-to-vue3
- Coneixement Vue real world: https://www.vuemastery.com/courses/real-world-vue3/rwv3-orientation
- Opcional (paquet casteaching javascript): TODO

## TODO

- Casteaching Landing Page -> Descarrega app a Google Play

## Casteaching Ionic

Aquest repositori conté el codi de la versió per a Ionic/Mòbils de casteaching. Es tracta d'una versió de la web app casteaching adaptada a mòbils i creada amb Ioni i VueJs.
L'aplicació Ionic és una aplicació Frontend que utilitza Axios per comunicar-se amb el backend (REST API de l'aplicació casteaching) 

# Autor

- Sergi Tur Badenas: https://acacha.github.io
- Instagram: https://instagram.com/acacha_dev
- Github: https://github.com/acacha

![image](https://user-images.githubusercontent.com/4015406/140644527-e186bf90-e556-4970-98ed-3f00c5f1af11.png)

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