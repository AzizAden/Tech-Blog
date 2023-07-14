const commentFormHandler = async function (event) {
    event.preventDefault();
  
    const blog_id = document.querySelector('.new-comment-form').dataset.blogid;
    const comment_description = document.querySelector('#comment_description').value.trim();
  
    if (comment_description) {
      try {
        await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({
            blog_id,
            comment_description,
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        document.location.reload();
      } catch (err) {
        console.log(err);
        alert('An error occurred. Please try again.');
      }
    }
  };
  
  document
    .querySelector('.new-comment-form')
    .addEventListener('submit', commentFormHandler);
  