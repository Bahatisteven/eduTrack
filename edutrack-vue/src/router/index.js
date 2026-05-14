import { createRouter, createWebHistory } from "vue-router";
import SubjectView from '../views/Subject.vue'
//import HomeView from '../views/...'
//import CalculatorView from '../views/...'
//import NotesView from '../views/...'


const routes = [
  { path: '/',  component: SubjectView, name: 'subjects' },
  //{ path: '/', component: HomeView, name: 'home'}
]

export default createRouter({
  history: createWebHistory(), // uses real URL paths (not #/hash)
  routes,
  scrollBehavior() {
    return { top: 0 }                                                                                                                                                                                                                                                                                                           n every navigation 
  }
})
