import * as types from './mutation-types'

export const mutations = {
  [types.SIGNIN] (state, visitor_payload) {
    state.visitor = visitor_payload
  },
  [types.GET_VISITORS] (state, visitor_payload) {
    state.visitors = visitor_payload
  }
}
