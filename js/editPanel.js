const addNewPostBtn = document.querySelector('.news__new-post');
const addNewPostForm = document.querySelector('.news__post-add-block');

addNewPostBtn.addEventListener('click', function () {
    addNewPostBtn.closest('.news__edit-button').classList.add('hidden');
    addNewPostForm.classList.remove('hidden');
});


const formCloseBtn = document.querySelector('.news__post-close');

const titleInput = document.querySelector('.news__post-title-input');
const textInput = document.querySelector('.news__post-text-input');

formCloseBtn.addEventListener('click', function () {
    addNewPostForm.classList.add('hidden');
    addNewPostBtn.closest('.news__edit-button').classList.remove('hidden');
    document.querySelector('.news__new-post').classList.remove('hidden');
    titleInput.value = "";
    textInput.value = "";
    titleInput.style.boxShadow = "none";
    textInput.style.boxShadow = "none";
});


const editFormCloseBtn = document.querySelector('.edit__post-close');
const editFormBlock = document.querySelector('.edit__post-add-block');

editFormCloseBtn.addEventListener('click', function () {
    editFormBlock.classList.add('hidden');
    document.querySelector('.news__new-post').classList.remove('hidden');
    document.querySelector('.edit__post-title-input').style.boxShadow = "none";
    document.querySelector('.edit__post-text-input').style.boxShadow = "none";
});

const editFormClearBtn = document.querySelector('.edit-clear-button');
editFormClearBtn.addEventListener('click', function () {
    if (document.querySelector('.edit__post-title-input').value.length > 0 || document.querySelector('.edit__post-text-input').value.length > 0) {
        document.querySelector('.edit__post-title-input').style.boxShadow = "none";
        document.querySelector('.edit__post-text-input').style.boxShadow = "none";
    } else if (document.querySelector('.edit__post-title-input').value === "" || document.querySelector('.edit__post-text-input').value === "") {
        document.querySelector('.edit__post-title-input').style.boxShadow = "none";
        document.querySelector('.edit__post-text-input').style.boxShadow = "none";
    }

    document.querySelector('.edit__post-title-input').value = "";
    document.querySelector('.edit__post-text-input').value = "";
});


const saveBtn = document.querySelector('.save-button');
const clearBtn = document.querySelector('.clear-button');

let titleInputInfo;
let textInputInfo;

const insertBlock = document.querySelector('.news__body');
let newsBlock;
function createPost() {
    newsBlock = document.createElement('div');
    newsBlock.classList.add('news__block');

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('news__title');
    titleDiv.innerText = `${titleInputInfo}`;
    //all JS code was written by © Eugeniu Rascu
    const textDiv = document.createElement('div');
    textDiv.classList.add('news__text');
    textDiv.innerText = `${textInputInfo}`;

    insertBlock.appendChild(newsBlock);
    newsBlock.appendChild(titleDiv);
    newsBlock.appendChild(textDiv);

    addEditBar();

    insertBlock.addEventListener('click', function (event) {
        if (event.target.classList.contains('delete-post__btn')) {
            event.target.closest('.news__block').remove();
        } else if (event.target.classList.contains('edit-post__btn')) {
            const editFormBlock = document.querySelector('.edit__post-add-block');
            editFormBlock.classList.remove('hidden');
            document.querySelector('.news__new-post').classList.add('hidden');

            const editInputTitle = document.querySelector('.edit__post-title-input');
            const editInputText = document.querySelector('.edit__post-text-input');
            editInputTitle.value = event.target.closest('.news__block').querySelector('.news__title').innerText;
            editInputText.value = event.target.closest('.news__block').querySelector('.news__text').innerText;

            const newsBlock = event.target.closest('.news__block');
            const editBlock = newsBlock.offsetTop; //in this case offsetTop showing exact position of the block
            editFormBlock.style.top = editBlock + 'px';


            document.querySelector('.edit-button').onclick = function () {
                if (document.querySelector('.edit__post-title-input').value.length > 0) {
                    document.querySelector('.edit__post-title-input').style.boxShadow = "none";
                } else if (document.querySelector('.edit__post-text-input').value.length > 0) {
                    document.querySelector('.edit__post-text-input').style.boxShadow = "none";
                }

                if (document.querySelector('.edit__post-title-input').value === "") {
                    document.querySelector('.edit__post-title-input').style.boxShadow = "inset 0 0 5px red";
                } else if (document.querySelector('.edit__post-text-input').value === "") {
                    document.querySelector('.edit__post-text-input').style.boxShadow = "inset 0 0 5px red";
                } else {
                    event.target.closest('.news__block').querySelector('.news__title').innerText = document.querySelector('.edit__post-title-input').value;
                    event.target.closest('.news__block').querySelector('.news__text').innerText = document.querySelector('.edit__post-text-input').value;
                    editInputTitle.value = "";
                    editInputText.value = "";
                    editFormBlock.classList.add('hidden');
                    document.querySelector('.news__new-post').classList.remove('hidden');
                }

                if (document.querySelector('.edit__post-title-input').value === "" && document.querySelector('.edit__post-text-input').value === "") {
                    document.querySelector('.edit__post-title-input').style.boxShadow = "inset 0 0 5px red";
                    document.querySelector('.edit__post-text-input').style.boxShadow = "inset 0 0 5px red";
                }

                document.querySelector('.edit__post-title-input').style.boxShadow = "none";
                document.querySelector('.edit__post-text-input').style.boxShadow = "none";
            }
        }
    });

    titleInput.value = "";
    textInput.value = "";
    addNewPostForm.classList.add('hidden');
    addNewPostBtn.closest('.news__edit-button').classList.remove('hidden');
}

saveBtn.addEventListener('click', function () {
    if (titleInput.value === "" && textInput.value === "") {
        titleInput.style.boxShadow = "inset 0 0 5px red";
        textInput.style.boxShadow = "inset 0 0 5px red";
    } else if (titleInput.value === "") {
        titleInput.style.boxShadow = "inset 0 0 5px red";
    } else if (textInput.value === "") {
        textInput.style.boxShadow = "inset 0 0 5px red";
    } else {
        titleInput.style.boxShadow = "none";
        textInput.style.boxShadow = "none";
    }

    if (titleInput.value.length > 0) {
        titleInput.style.boxShadow = "none";
    } else if (textInput.value.length > 0) {
        textInput.style.boxShadow = "none";
    }

    if (titleInput.value.length > 0 && textInput.value.length > 0) {
        titleInputInfo = titleInput.value;
        textInputInfo = textInput.value;
        createPost();
    }
    document.querySelector('.news__new-post').classList.remove('hidden');
});

clearBtn.addEventListener('click', function () {
    titleInput.style.boxShadow = "none";
    textInput.style.boxShadow = "none";
    titleInput.value = "";
    textInput.value = "";
});