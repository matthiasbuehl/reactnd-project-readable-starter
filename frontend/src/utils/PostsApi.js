const OPTS = {
    headers: new Headers( {
        'Authorization': 'whatever-you-want',
        'Content-Type': 'application/json'
        }
    )
}
const BASE_URL = 'http://localhost:3001'

export function uuid(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c==='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}

export function fetchPosts() {
    return fetch(`${BASE_URL}/posts`, OPTS)
        .then(res => res.json())
}

export function fetchPost(id) {
    return fetch(`${BASE_URL}/posts/${id}`, OPTS)
        .then(res => res.json())
}

export function fetchAddPost(post) {
    return fetch(
        `${BASE_URL}/posts`,
        {
            ...OPTS,
            method: 'POST',
            body: JSON.stringify(post)
        },
      ).then(res => {
          return res.json()
      })
}

export function fetchUpdatePost(post) {
    return fetch(
        `${BASE_URL}/posts/${post.id}`,
        {
            ...OPTS,
            method: 'PUT',
            body: JSON.stringify(post)
        },
      ).then(res => {
          return res.json()
      })
}

export function fetchDeletePost(post) {
    return fetch(
        `${BASE_URL}/posts/${post.id}`,
        {
            ...OPTS,
            method: 'DELETE',
            body: JSON.stringify(post)
        },
      ).then(res => {
          return res.json()
      })
}

export function fetchPostComments(postId) {
    return fetch(`${BASE_URL}/posts/${postId}/comments`, OPTS)
        .then(res => res.json())
}

export function fetchAddComment(comment) {
    return fetch(
        `${BASE_URL}/comments`,
        {
            ...OPTS,
            method: 'POST',
            body: JSON.stringify(comment)
        },
      ).then(res => {
          return res.json()
      })
}

export function fetchUpdateComment(comment) {
    return fetch(
        `${BASE_URL}/comments/${comment.id}`,
        {
            ...OPTS,
            method: 'PUT',
            body: JSON.stringify(comment)
        },
      ).then(res => {
          return res.json()
      })
}

export function fetchDeleteComment(comment) {
    return fetch(
        `${BASE_URL}/comments/${comment.id}`,
        {
            ...OPTS,
            method: 'DELETE',
            body: JSON.stringify(comment)
        },
      ).then(res => {
          return res.json()
      })
}

export function fetchCategories() {
    return fetch(`${BASE_URL}/categories`, OPTS)
        .then(res => res.json())
}