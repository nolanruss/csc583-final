import * as types from './mutation-types'
import axios from 'axios'

// Send visitor info to the backend
export const signinVisitor = ({commit}, visitorPayload) => {
  return new Promise((resolve, reject) => {
    fetch(`/visitors/signin`, {
      method: 'POST',
      redirect: 'follow',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(visitorPayload)
    })
    .then(res => {
      resolve(res)
    })
    .then(err => {
      reject(err)
    })
  })
}

export const getVisitors = ({commit}) => {
  return new Promise((resolve, reject) => {
    fetch(`/visitors/list/all`, {
      method: 'GET'
    })
    .then(res => {
      resolve(res)
    })
    //.then(response => response.json())
    .then(json => commit(types.GET_VISITORS, json))
  })
}