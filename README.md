# Coneixements previs

- SPA vs FC de Laravel
- Frontend only code -> no tenim accés a la base de dades sense passar pel backend (API)
- Vue router -> Aplicació SPA . Configurat per defecte amb ionic start
- Cada pàgina és una component Vue (fitxer .vue)
- Separation of Concerns

# Qüestions a tenir en compte

FrontEnd development -> es pot separar del backend amb tecniques com:
- Harcoded data en comptes de peticions axios
- Peticions axios però a una fake API

Tard o d'hora però cal fer testos d'integració i provar l'aplicació amb la backend/API real

De fet a vue mastery tenen dos cursos

INTRODUCCIó A VUE
- https://www.vuemastery.com/courses/intro-to-vue-3
- Curs sense API, no realista però exemples juguets per aprendre com funciona VUe
- Sense SPA -> no vue router
REAL WORLD VUE
- SPA vue router
- https://www.vuemastery.com/courses/real-world-vue3
- Més realista amb API, Vuex i altres

# AXIOS

El concepte de servei:
- Moure les peiticions a la api a un servei -> Reutilització de codi com autorització i similars
- Més fàcil el Testing o fins i tot TDD

# Ionic View 

- <template> de Vue Single File Component
- Custom components: ionic-card
- CSS 
- Declaració dades reactives
- Compte: no confondre tots els elements dinam̀ics d'una plantilla amb data reactive?
- El titol del vídeo i la descripció i la URL són constants

# API CALLS WITH AXIOS

https://www.vuemastery.com/courses/real-world-vue3/api-calls-with-axios/

# Ionic Script
- Codi Vue/Javascript
- Cicle de vide d'un component Vue
- Canvis a Vue3: https://escuelavue.es/series/curso-vue3-esencial-novedades/vue3-lifecycle-hooks/
- Hooks: https://escuelavue.es/series/curso-vue3-esencial-novedades/vue3-lifecycle-hooks/
- Axios: client HTTP per connexió amb la API
- Treball amb promises -> Callback hell
- https://www.vuemastery.com/courses/real-world-vue3/api-calls-with-axios/
- Async/Await an exceptions

Exemple API Call amb async/await:
- https://www.vuemastery.com/courses/unit-testing-vue-3/testing-api-calls-vue-3

# Vue

## COMPONENTS

https://www.vuemastery.com/courses/intro-to-vue-js/components

## Cicle de vida 

DIAGRAMA:
- https://v3.vuejs.org/guide/instance.html#lifecycle-diagram
NO CAL COMPOSITION API -> és opcional per a scalabilitat podem afegir més tard
- https://www.vuemastery.com/courses/vue-3-essentials/lifecycle-hooks/

## TDD
- TODO
- What to test: https://www.vuemastery.com/courses/unit-testing-vue-3/what-to-test-vue-3