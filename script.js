// GET https://github.com/login/oauth/authorize

// function requestUserData(username){
    
//   // create new XMLHttpRequest object
//   const xhr = new XMLHttpRequest();
  
//   // GitHub endpoint, dynamically passing in specified username
//   const url = `https://api.github.com/users/${username}/repos`;

//   xhr.open('GET', url, true);
  
// }

// function getRequest (username) {
//   let url = 'https://api.github.com/users/${username}/repos'
//   const options = {method: 'GET'};
//   fetch (url)
//   .then(new XMLHttpRequest())
// }

// getRequest(rileypowers);

const userID = document.getElementById('userID');

userID.addEventListener('submit', (e) => {
    e.preventDefault();
    let formInput = document.getElementById('textBox');
    let gitHubUsername = formInput.value;          
    requestUserRepos(gitHubUsername);
})

function showResults() {
  $('#results').toggle();
}

function requestUserRepos(username){
  const xhr = new XMLHttpRequest();
  const url = `https://api.github.com/users/${username}/repos`;
  xhr.open('GET', url, true);
  xhr.onload = function() {
      const data = JSON.parse(this.response);
      console.log(data);
      for (let i in data) {
        let ul = document.getElementById('userRepos');
        let li = document.createElement('li');
        li.innerHTML = (`
            <p><strong>Repo:</strong> ${data[i].name}</p>
            <p><strong>Description:</strong> ${data[i].description}</p>
            <p><strong>URL:</strong> <a href="${data[i].html_url}">${data[i].html_url}</a></p>
        `);
        showResults();
        ul.appendChild(li);
      }
  }
  xhr.send();
}


requestUserRepos();