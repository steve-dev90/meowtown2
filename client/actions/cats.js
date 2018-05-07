import request from 'superagent'

export const receiveCats = (cats) => {
  return {
    type: 'RECEIVE_CATS',
    cats
  }
}

export const receiveCat = (cat) => {
  return {
    type: 'RECEIVE_CAT',
    cat
  }
}

export const catEdited = () => {
  return {
    type: 'CAT_EDITED'
  }
}

export function getCats () {
  return (dispatch) => {
    request
      .get(`/api/cats`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveCats(res.body))
      })
  }
}

export function getCatById (id) {
  return (dispatch) => {
    request
      .get(`/api/cats/${id}`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveCat(res.body))
      })
  }
}

export function putCatById (id, name, image, life_story) {
  return (dispatch) => {
    request
      .put(`/api/cats/${id}`)
      .send({ name, image, life_story})
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(catEdited())
      })

  }


}