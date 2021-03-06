'use strict'

/**
 * Dependencies
 */

const axios = require('axios')
const helpers = require('./helpers/index')

/**
 * Constants
 */

const SIGNUP_START = 'SIGNUP_START'
const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
const SIGNUP_ERROR = 'SIGNUP_ERROR'
const SIGNIN_START = 'SIGNIN_START'
const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS'
const SIGNIN_ERROR = 'SIGNIN_ERROR'
const FETCH_PRIORITY_LINKS_START = 'FETCH_PRIORITY_LINKS_START'
const FETCH_PRIORITY_LINKS_SUCCESS = 'FETCH_PRIORITY_LINKS_SUCCESS'
const FETCH_PRIORITY_LINKS_ERROR = 'FETCH_PRIORITY_LINKS_ERROR'
const FETCH_MAIN_LINKS_START = 'FETCH_MAIN_LINKS_START'
const FETCH_MAIN_LINKS_SUCCESS = 'FETCH_MAIN_LINKS_SUCCESS'
const FETCH_MAIN_LINKS_ERROR = 'FETCH_MAIN_LINKS_ERROR'
const TOGGLE_LINK_PRIORITY_START = 'TOGGLE_LINK_PRIORITY_START'
const TOGGLE_LINK_PRIORITY_SUCCESS = 'TOGGLE_LINK_PRIORITY_SUCCESS'
const TOGGLE_LINK_PRIORITY_ERROR = 'TOGGLE_LINK_PRIORITY_ERROR'
const FETCH_CATEGORIES_START = 'FETCH_CATEGORIES_START'
const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS'
const FETCH_CATEGORIES_ERROR = 'FETCH_CATEGORIES_ERROR'
const CREATE_CATEGORY_START = 'CREATE_CATEGORY_START'
const CREATE_CATEGORY_SUCCESS = 'CREATE_CATEGORY_SUCCESS'
const CREATE_CATEGORY_ERROR = 'CREATE_CATEGORY_ERROR'
const FILTER_BY_CATEGORY_START = 'FILTER_BY_CATEGORY_START'
const FILTER_BY_CATEGORY_SUCCESS = 'FILTER_BY_CATEGORY_SUCCESS'
const FILTER_BY_CATEGORY_ERROR = 'FILTER_BY_CATEGORY_ERROR'
const DELETE_CATEGORY_START = 'DELETE_CATEGORY_START'
const DELETE_CATEGORY_SUCCESS = 'DELETE_CATEGORY_SUCCESS'
const DELETE_CATEGORY_ERROR = 'DELETE_CATEGORY_ERROR'
const SHARE_LINK_START = 'SHARE_LINK_START'
const SHARE_LINK_SUCCESS = 'SHARE_LINK_SUCCESS'
const SHARE_LINK_ERROR = 'SHARE_LINK_ERROR'
const COMPLETE_LINK_START = 'COMPLETE_LINK_START'
const COMPLETE_LINK_SUCCESS = 'COMPLETE_LINK_SUCCESS'
const COMPLETE_LINK_ERROR = 'COMPLETE_LINK_ERROR'
const UPDATE_LINK_START = 'UPDATE_LINK_START'
const UPDATE_LINK_SUCCESS = 'UPDATE_LINK_SUCCESS'
const UPDATE_LINK_ERROR = 'UPDATE_LINK_ERROR'
const DELETE_LINK_START = 'DELETE_LINK_START'
const DELETE_LINK_SUCCESS = 'DELETE_LINK_SUCCESS'
const DELETE_LINK_ERROR = 'DELETE_LINK_ERROR'
const axiosWithAuth = helpers.axiosWithAuth

/**
 * Define actions
 */

const signUp = creds => dispatch => {
  dispatch({ type: SIGNUP_START })

  return axios
    .post('https://modern-day-researcher-mdr.herokuapp.com/api/auth/register', creds)
    .then(res => {
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: SIGNUP_ERROR, payload: err.response.data })
    })
}

const signIn = creds => dispatch => {
  dispatch({ type: SIGNIN_START })

  return axios
    .post('https://modern-day-researcher-mdr.herokuapp.com/api/auth/login', creds)
    .then(res => {
      dispatch({ type: SIGNIN_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: SIGNIN_ERROR, payload: err.data.message })
    })
}

const getMainLinks = (user_id) => dispatch => {
  dispatch({ type: FETCH_MAIN_LINKS_START })

  return axiosWithAuth()
    .get(`https://modern-day-researcher-mdr.herokuapp.com/api/auth/users/${user_id}/links`)
    .then(res => {
      dispatch({ type: FETCH_MAIN_LINKS_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FETCH_MAIN_LINKS_ERROR, payload: err.response.data.message })
    })
}

const getPriorityLinks = (user_id) => dispatch => {
  dispatch({ type: FETCH_PRIORITY_LINKS_START })

  return axiosWithAuth()
    .get(`https://modern-day-researcher-mdr.herokuapp.com/api/auth/users/${user_id}/links?priority=true`)
    .then(res => {
      dispatch({ type: FETCH_PRIORITY_LINKS_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FETCH_PRIORITY_LINKS_ERROR, payload: err.response.data.message })
    })
}

const toggleLinkPriority = (user_id, link_id) => dispatch => {
  dispatch({ type: TOGGLE_LINK_PRIORITY_START })

  return axiosWithAuth()
    .get(`https://modern-day-researcher-mdr.herokuapp.com/api/auth/users/${user_id}/links/${link_id}/pinned`)
    .then(res => {
      dispatch({ type: TOGGLE_LINK_PRIORITY_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: TOGGLE_LINK_PRIORITY_ERROR, payload: err.response.data.message })
    })
}

const getCategories = (user_id) => dispatch => {
  dispatch({ type: FETCH_CATEGORIES_START })

  return axiosWithAuth()
    .get(`https://modern-day-researcher-mdr.herokuapp.com/api/auth/users/${user_id}/categories`)
    .then(res => {
      dispatch({ type: FETCH_CATEGORIES_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FETCH_CATEGORIES_ERROR, payload: err.response.data.message })
    })
}

const createCategories = (user_id, title, color) => dispatch => {
  dispatch({ type: CREATE_CATEGORY_START })

  return axiosWithAuth()
    .post(`https://modern-day-researcher-mdr.herokuapp.com/api/auth/users/${user_id}/categories`)
    .then(res => {
      dispatch({ type: CREATE_CATEGORY_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: CREATE_CATEGORY_ERROR, payload: err.response.data.message })
    })
}

const filterByCategory = (user_id) => dispatch => {
  dispatch({ type: FILTER_BY_CATEGORY_START })

  return axiosWithAuth()
    .get(`https://modern-day-researcher-mdr.herokuapp.com/api/auth/users/${user_id}/categories`)
    .then(res => {
      dispatch({ type: FILTER_BY_CATEGORY_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FILTER_BY_CATEGORY_ERROR, payload: err.response.data.message })
    })
}

const deleteCategory = (user_id, id) => dispatch => {
  dispatch({ type: DELETE_CATEGORY_START })

  return axiosWithAuth()
    .delete(`https://modern-day-researcher-mdr.herokuapp.com/api/auth/users/${user_id}/category/${id}`)
    .then(res => {
      dispatch({ type: DELETE_CATEGORY_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: DELETE_CATEGORY_ERROR, payload: err.response.data.message })
    })
}

const shareLink = (user_id, link) => dispatch => {
  dispatch({ type: SHARE_LINK_START })

  return axiosWithAuth()
    .post(`https://modern-day-researcher-mdr.herokuapp.com/api/auth/users/${user_id}/links`, link)
    .then(res => {
      dispatch({ type: SHARE_LINK_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: SHARE_LINK_ERROR, payload: err.response.data.message })
    })
}

const completeLink = (user_id, id) => dispatch => {
  dispatch({ type: COMPLETE_LINK_START })

  return axiosWithAuth()
    .put(`https://modern-day-researcher-mdr.herokuapp.com/api/auth/users/${user_id}/links/${id}/completed`)
    .then(res => {
      dispatch({ type: COMPLETE_LINK_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: COMPLETE_LINK_ERROR, payload: err.response.data.message })
    })
}

const updateLink = (user_id, id, title) => dispatch => {
  dispatch({ type: UPDATE_LINK_START })

  return axiosWithAuth()
    .put(`https://modern-day-researcher-mdr.herokuapp.com/api/auth/users/${user_id}/links/${id}`, title)
    .then(res => {
      dispatch({ type: UPDATE_LINK_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: UPDATE_LINK_ERROR, payload: err.response.data.message })
    })
}

const deleteLink = (user_id, id) => dispatch => {
  dispatch({ type: DELETE_LINK_START })

  return axiosWithAuth()
    .delete(`https://modern-day-researcher-mdr.herokuapp.com/api/auth/users/${user_id}/links/${id}`)
    .then(res => {
      dispatch({ type: DELETE_LINK_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: DELETE_LINK_ERROR, payload: err.response.data.message })
    })
}

/**
 * Export actions
 */

module.exports = {
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  signUp,
  SIGNIN_START,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
  signIn,
  FETCH_MAIN_LINKS_START,
  FETCH_MAIN_LINKS_SUCCESS,
  FETCH_MAIN_LINKS_ERROR,
  getMainLinks,
  FETCH_PRIORITY_LINKS_START,
  FETCH_PRIORITY_LINKS_SUCCESS,
  FETCH_PRIORITY_LINKS_ERROR,
  getPriorityLinks,
  TOGGLE_LINK_PRIORITY_START,
  TOGGLE_LINK_PRIORITY_SUCCESS,
  TOGGLE_LINK_PRIORITY_ERROR,
  toggleLinkPriority,
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_ERROR,
  getCategories,
  CREATE_CATEGORY_START,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_ERROR,
  createCategories,
  CREATE_CATEGORY_START,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_ERROR,
  filterByCategory,
  DELETE_CATEGORY_START,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_ERROR,
  deleteCategory,
  SHARE_LINK_START,
  SHARE_LINK_SUCCESS,
  SHARE_LINK_ERROR,
  shareLink,
  COMPLETE_LINK_START,
  COMPLETE_LINK_SUCCESS,
  COMPLETE_LINK_ERROR,
  completeLink,
  UPDATE_LINK_START,
  UPDATE_LINK_SUCCESS,
  UPDATE_LINK_ERROR,
  updateLink,
  DELETE_LINK_START,
  DELETE_LINK_SUCCESS,
  DELETE_LINK_ERROR,
  deleteLink,
}
