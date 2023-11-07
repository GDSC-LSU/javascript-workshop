// CODE ALONG !!

// console.log(document.url)
// console.log(document.title)

// const headerTitle = document.getElementById('header-title');
// console.log(headerTitle)
// headerTitle.innerHTML = "Corbin's webpage";
// headerTitle.innerText = "Corbin's webpage"; // style

// headerTitle.style.color = "white"

// const container = document.querySelector('.container');
// console.log(container);

// let button = document.getElementById('add-item-form')

// button.addEventListener('click', (event) => {
//     event.preventDefault() // prevents form submit.

//     // console.log(event)
// })

// const inputText = document.getElementById('new-item');

// inputText.addEventListener('mouseover', (event) => {
//     console.log(`Event Type: ${event.type}`)

//     // inputText.style.backgroundColor = 'red';
// })

// const inputText = document.getElementById("new-item");

// inputText.addEventListener("mouseover", (event) => {
//   console.log(`Event Type: ${event.type}`);

//   // inputText.style.backgroundColor = 'red';
// });

// CALLBACKS //

const PostCallBack = [
    {
        title: "Post1", body: "This is post 1"
    },
    {
        title: "Post2", body: "This is post 2"
    }
]

const getPostCallBack = () => {
    setTimeout(() => {
        let output = "";
        Posts.map((posts) => {
            output += `<li>${posts.title}</li>`
        })
        document.body.innerHTML = output;
    }, 1000)
}

const createPostCallBack = (post, callBack) => {
    setTimeout(() => {
        Posts.push(post)
        callBack();
    }, 2000)
}

createPost({ title: 'post3', body: 'This is post 3'}, getPost)


// PROMISES //

const PostsPromise = [
    {
        title: "Post1", body: "This is post 1"
    },
    {
        title: "Post2", body: "This is post 2"
    }
]

const getPostPromise = () => {
    setTimeout(() => {
        let output = "";
        Posts.map((posts) => {
            output += `<li>${posts.title}</li>`
        })
        document.body.innerHTML = output;
    }, 1000)
}

const createPostPromise = (post) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Posts.push(post)
            if (true) {
                resolve();
            }
            reject('error');
        }, 2000)
    })
}

createPost({ title: 'post3', body: 'This is post 3'})
  .then(getPost)
  .catch((error) => {
    console.log(error);
  });

// ASYNC AND AWAIT //

const Posts = [
    {
      title: "Post1",
      body: "This is post 1",
    },
    {
      title: "Post2",
      body: "This is post 2",
    },
  ];
  
  const getPosts = () => {
    let output = "";
    Posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  };
  
  const createPost = (post) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        Posts.push(post);
        const error = false; // Simulating success
        if (!error) {
          resolve();
        } else {
          reject("error");
        }
      }, 2000);
    });
  };
  
  const init = async () => {
    try {
      await createPost({ title: "Post3", body: "This is post 3" });
      getPosts();
    } catch (error) {
      console.error(error);
    }
  };
  
  init();
  