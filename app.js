// init github
const github = new GitHub;

// Search Input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    // Get Input text
    const userText = e.target.value;

    if (userText !== ''){
        // Make http call
        github.getUser(userText).then(data => {
            if(data.profile.message === 'Not Found'){
                // Show Alert

            }
            else{
                // Show Profile
            }
        })
    }
    else{
        // clear profile
    }

});