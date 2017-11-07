export function createBlogFunctions (firestore) {
  // check if a post exists
  function checkIfPostExists (id, callback) {
    return firestore.collection('blog').doc(id).get().then(doc => callback(doc))
  }

  // create a new post
  function createNewPost (date = new Date(), author = 'Josh Derocher') {
    return firestore.collection('blog').add({
      date,
      author,
      title: '',
      body: '',
      tags: []
    })
    .then(doc => {
      console.log('Created document with id: ', doc.id)
      return doc
    })
    .catch(err => console.log(err))
  }
  return {
    checkIfPostExists,
    createNewPost
  }
}
