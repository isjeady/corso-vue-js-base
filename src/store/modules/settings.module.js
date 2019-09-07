
const state = {
  nome : 'Admin'
};

const getters = {
  getName : state => {
    return state.nome;
  }
};

const actions = {
};

const mutations = {
  setName : (state,nome) => {
    state.nome = nome;
  }
};

export default {
  namespaced : true,
	state,
	mutations,
	getters,
	actions
}
