import { createStore } from 'vuex'

export default createStore({
  state: {
    bands: [],
    bansFilter: [],
    loading: false
  },
  getters: {
  },
  mutations: {
    setBands(state, payload){
      state.bands = payload
    },
    setBansFilter(state, payload){
      state.bansFilter = payload
    },
  },
  actions: {
    async getBands({ commit }) {
      try {
        const res = await fetch('http://localhost:3000/api/bandas')
        const data = await res.json()
        console.log(data)
        commit('setBands',  data)
        commit('setBansFilter',  data)
      } catch (error) {
        console.log(error)
      }
    },
    filterName({commit, state}, search){
      const textSearch = search.toLowerCase()
      const filtro = state.bands.filter(band => {
      const textApi = band.nombre_banda.toLowerCase()
      if (textApi.includes(textSearch)) {
        return band;
      }
      })
      commit('setBansFilter', filtro)
    },
  },
    
      
  modules: {
  }
})
