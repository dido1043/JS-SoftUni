function attachEvents() {
    const loadPostsButton = document.getElementById('btnLoadPosts');
    const viewButton = document.getElementById('btnViewPost');
    const postSelect = document.getElementById('posts');
    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const postComments = document.getElementById('post-comments');

    const baseURL = 'http://localhost:3030/jsonstore/blog/';

    let allPosts = {};
    loadPostsButton.addEventListener('click', async () => {
        postSelect.innerHTML = '';

        const response = await fetch(baseURL + 'posts');

        allPosts = await response.json();
        console.log(allPosts);

        for (const [postId, postObj] of Object.entries(allPosts)) {

            const option = document.createElement('option');

            option.value = postId;
            option.textContent = postObj.title;
            postSelect.appendChild(option);
        }
    });
    //let allComments = {};
    viewButton.addEventListener('click', async () => {
        //“/comments“ - to obtain all comments. 
        //The request will return a Object of objects.
        const postId = postSelect.value;

        postBody.textContent = allPosts[postId].body;
        postTitle.textContent = allPosts[postId].title
        const response = await fetch(baseURL + 'comments');
        const commentsInfo = await response.json();
        console.log(commentsInfo);
        const filteredValues = Object.values(commentsInfo).filter((c) => c.postId === postId);
        filteredValues.forEach(comment => {
            const li = document.createElement('li');
            li.id = comment.id;
            li.textContent = comment.text;
            postComments.appendChild(li);
        });
        console.log(filteredValues);
    });
}

attachEvents();