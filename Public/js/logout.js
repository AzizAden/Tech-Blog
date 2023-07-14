const logout = async () => {
    try {
      const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log out. Please try again.');
      }
    } catch (err) {
      console.log(err);
      alert('An error occurred. Please try again.');
    }
  };
  
  document.querySelector('#logout').addEventListener('click', logout);
  