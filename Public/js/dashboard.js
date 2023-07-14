const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#blog-title').value.trim();
    const description = document.querySelector('#blog-desc').value.trim();
  
    if (title && description) {
      try {
        const response = await fetch(`/api/blogs`, {
          method: 'POST',
          body: JSON.stringify({ title, description }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert('Failed to create blog. Please try again.');
        }
      } catch (err) {
        console.log(err);
        alert('An error occurred. Please try again.');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      try {
        const response = await fetch(`/api/blogs/${id}`, {
          method: 'DELETE',
        });
  
        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert('Failed to delete blog. Please try again.');
        }
      } catch (err) {
        console.log(err);
        alert('An error occurred. Please try again.');
      }
    }
  };
  
  document
    .querySelector('.new-blog-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.blog-list')
    .addEventListener('click', delButtonHandler);
  