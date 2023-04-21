async function getFollowers() {

    document.querySelector('.container1').style.display = 'flex';

    const username = document.getElementById('username').value;
    const headers = {
        'Authorization': 'token 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',
        'Accept': 'application/vnd.github+json'
    };
    fetch(`https://api.github.com/users/${username}`, { headers })
        .then(response => response.json())
        .then(username => {		
       const avatarUrl = username['avatar_url'];
       const myAvatar = document.getElementById('myAvatar');
       const myUsername = document.getElementById('myUsername');
       myAvatar.src =avatarUrl;
       myUsername.textContent = username['login'];
       console.log(avatarUrl)

})
        .catch(error => console.error(error));


    fetch(`https://api.github.com/users/${username}/followers`, { headers })
        .then(response => response.json())
        .then(followers => {
            const followerAvatar = document.getElementById('followerAvatar');
            const followerUsername = document.getElementById('followerUsername');
            
            if (followers.length > 0) {
                // Pick a random follower
                const index = Math.floor(Math.random() * followers.length);
                
                const follower = followers[index];
               
                followerAvatar.src = follower['avatar_url'];
                followerUsername.textContent = follower.login;
            }
            else {
               /*  const popup = document.createElement('div');
                popup.classList.add('popup');
                popup.textContent = 'Enter a valid username';
                 document.body.appendChild(popup);
                 setTimeout(() => {
                     popup.remove();
                 }, 3000);
                 */
            }
        })
        .catch(error => console.error(error));
}
