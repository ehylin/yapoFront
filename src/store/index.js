import { createStore } from 'vuex'

export default createStore({
  state: {
    bansFilter: [],
    loading: false
  },
  getters: {
  },
  mutations: {
    setBansFilter(state, payload){
      state.bansFilter = payload
    },
  },
  actions: {
    async getBansFilter({ commit }, name ) {
     
      
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const data = await res.json()
    
        commit('setBansFilter',  data)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
      
      
    },
  },
  modules: {
  }
})
