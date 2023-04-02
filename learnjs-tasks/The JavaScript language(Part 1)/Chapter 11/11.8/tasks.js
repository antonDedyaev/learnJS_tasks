// Task 1:
async function loadJson(url) {
  const response = await fetch(url);
    if (response.status == 200) {
        return response.json();
    } else {
        throw new Error(response.status);
    }
}

// Task 2:
class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  const response = await fetch(url)
    if (response.status == 200) {
        return response.json();
    } else {
        throw new HttpError(response);
    }
};

async function demoGithubUser() {
  let user;
  while(true) {
    let name = prompt("Введите логин?", "iliakan");
    try {
        user = await loadJson(`https://api.github.com/users/${name}`)
        break;
    }   catch(err) {
            if (err instanceof HttpError && err.response.status == 404) {
                alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
            } else {
                throw err;
            }
    }
    
  }
  alert(`Полное имя: ${user.name}.`);
  return user;
};

// Task 3:
async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

function f() {
    wait().then(result => alert(result));
};