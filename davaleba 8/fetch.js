fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
          const posts = document.getElementById("posts");
          data.forEach((post) => {
            posts.innerHTML += `
                        <div>
                            <h3>${post.title}</h3>
                            <p>${post.body}</p>
                            <small>Post ID: ${post.id}</small>
                            <hr>
                        </div>
                    `;
          });
        })
        .catch((error) => {
          document.getElementById("posts").innerHTML =
            "<p>Error loading posts. Please try again later.</p>";
          console.error("Error:", error);
        });