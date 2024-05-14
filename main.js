// Function definitions
function signIn() {
  const email = document.getElementById('email-input').value;
  const password = document.getElementById('password-input').value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      showElement('name-input');
      hideElement('sign-in-container');
      showPopup('Please enter your name to join the chat.');
    })
    .catch((error) => {
      showPopup(`Error signing in: ${error.message}`);
    });
}

function signUp() {
  const email = document.getElementById('email-input').value;
  const password = document.getElementById('password-input').value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      user.sendEmailVerification()
        .then(() => {
          showPopup('Verification email sent. Please verify your email before joining the chat.');
        })
        .catch((error) => {
          console.error('Error sending verification email:', error);
        });
    })
    .catch((error) => {
      console.error('Error creating user:', error);
    });
}

function resetPassword() {
  const email = document.getElementById('email-input').value;

  auth.sendPasswordResetEmail(email)
    .then(() => {
      showPopup('Password reset email sent. Check your inbox.');
    })
    .catch((error) => {
      showPopup(`Error resetting password: ${error.message}`);
    });
}

function signOut() {
  auth.signOut()
    .then(() => {
      showPopup('You have been signed out.');
      hideElement('chat-input');
      hideElement('profile-menu');
      document.getElementById('chat-messages').innerHTML = '';
    })
    .catch((error) => {
      showPopup(`Error signing out: ${error.message}`);
    });
}

function joinChat(name) {
  if (currentUser && currentUser.emailVerified) {
    currentUser.updateProfile({
      displayName: name
    })
      .then(() => {
        showElement('chat-input');
        hideElement('name-input');
      })
      .catch((error) => {
        console.error('Error updating user profile:', error);
      });
  } else if (currentUser) {
    showPopup('Please verify your email before joining the chat.');
  } else {
    showPopup('You must be signed in to join the chat.');
  }
}


// Event listeners and main logic
document.getElementById('sign-in-button').addEventListener('click', signIn);
document.getElementById('sign-up-button').addEventListener('click', signUp);
document.getElementById('reset-password-button').addEventListener('click', resetPassword);
document.getElementById('join-button').addEventListener('click', () => {
  const name = document.getElementById('name-input').value.trim();
  if (name) {
    joinChat(name);
  } else {
    showPopup('Please enter a name to join the chat.');
  }
});
document.getElementById('send-button').addEventListener('click', () => {
  const message = document.getElementById('message-input').value.trim();
  if (message) {
    sendMessage(message);
    document.getElementById('message-input').value = '';
  }
});
document.getElementById('change-name-button').addEventListener('click', () => {
  showElement('profile-menu');
});
document.getElementById('save-name-button').addEventListener('click', () => {
  const newName = document.getElementById('new-name-input').value.trim();
  if (newName) {
    changeUserName(newName);
  } else {
    showPopup('Please enter a new name.');
  }
});
document.getElementById('sign-out-button').addEventListener('click', signOut);

// Initialize Firebase and set up event listeners for real-time updates
// Initialize Firebase and set up event listeners for real-time updates
firebase.auth().onAuthStateChanged((user) => {
  currentUser = user;

  if (user) {
    if (user.emailVerified) {
      showElement('name-input');
      hideElement('sign-in-container');
      showPopup('Please enter your name to join the chat.');
    } else {
      showPopup('Please verify your email before joining the chat.');
      hideElement('chat-input');
      hideElement('profile-menu');
    }
  } else {
    showElement('sign-in-container');
    hideElement('name-input');
    hideElement('chat-input');
    hideElement('profile-menu');
    document.getElementById('chat-messages').innerHTML = '';
    showPopup('You are not logged in.');
  }
});


messagesCollection.orderBy('timestamp')
  .onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === 'added') {
        displayMessage(change.doc.data());
      }
    });
  });
