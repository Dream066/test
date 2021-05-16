import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchValue: '',
    autocomplete: [
      'Eukene Halfdan',
      'Brigita Varvara',
      'Khajag Jules',
      'Emilia Tara',
      'Zenzi Ottone',
      'Maksimilijan Ireland',
      'Septimus Lindsay',
      'Vayu Almast',
      'Kei Tomaž',
      'Marcus Věnceslava',
      'Gayatri Huld'
    ].map((item, i) => ({
      id: i,
      text: item
    }))
  },
  getters: {
    autocomplete: state => {
      const searchValue = state.searchValue.toLowerCase()
      return state.autocomplete.filter(item => item.text.toLowerCase().includes(searchValue))
    }
  },
  mutations: {
    setSearchValue(state, val) {
      state.searchValue = val
    }
  },
  actions: {},
  modules: {},
});
