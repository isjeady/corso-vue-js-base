
const state = {
  nome : 'Leandro',
  cognome : '',
  email : '',
};

const getters = {
  getName : (state,getters,rootState,rootGetters) => {
    return state.nome + " -" + rootGetters['settings/getName'];
  },
  getEmail : state => {
    return state.email;
  }
};

const actions = {
  actionProfile : (context,profile) => {
    setTimeout(() => {
      context.commit('setName',profile.nome + " -" + context.rootGetters['settings/getName']);
      context.commit('setCognome',profile.cognome);
      context.commit('setEmail',profile.email);
    },100);
  }

};

const mutations = {
  setName : (state,nome) => {
    state.nome = nome;
  },
  setCognome : (state,cognome) => {
    state.cognome = cognome;
  },
  setEmail : (state,email) => {
    state.email = email;
  }
};

export default {
  namespaced : true,
	state,
	mutations,
	getters,
	actions
}
