// init github
const github = new GitHub;
// Init UI
const ui = new UI;
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
                ui.showProfile(data.profile);
            }
        })
    }
    else{
        // clear profile
    }

});