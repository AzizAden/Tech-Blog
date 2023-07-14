const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && password) {
      try {
        const response = await fetch('/api/users', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert('Failed to sign up. Please try again.');
        }
      } catch (err) {
        console.log(err);
        alert('An error occurred. Please try again.');
      }
    }
  };
  
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
  