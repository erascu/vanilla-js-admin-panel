const hideEditBar = document.querySelectorAll('.news__edit-bar');

function hideAllBars() {
    hideEditBar.forEach(function (item) {
        item.classList.add('hidden');
    });
}

function addEditBar() {
    const newsBarBlock = document.createElement('div');
    newsBarBlock.classList.add('news__edit-bar');

    const editBarBtns = document.createElement('div');
    editBarBtns.classList.add('edit-bar-buttons');

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-post__btn', 'edit-both-btns');
    editBtn.innerText = "Edit";

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-post__btn', 'edit-both-btns');
    deleteBtn.innerText = "Delete";

    newsBlock.appendChild(newsBarBlock);
    newsBarBlock.appendChild(editBarBtns);
    editBarBtns.appendChild(editBtn);
    editBarBtns.appendChild(deleteBtn);
}

const editBtn = document.querySelectorAll('.edit-post__btn');

editBtn.forEach(function (item) {
    item.addEventListener('click', function () {
        const editFormBlock = document.querySelector('.edit__post-add-block');
        editFormBlock.classList.remove('hidden');
        document.querySelector('.news__new-post').classList.add('hidden');

        const editInputTitle = document.querySelector('.edit__post-title-input');
        const editInputText = document.querySelector('.edit__post-text-input');
        editInputTitle.value = item.closest('.news__block').querySelector('.news__title').innerText;
        editInputText.value = item.closest('.news__block').querySelector('.news__text').innerText;

        const newsBlock = item.closest('.news__block');
        const editBlock = newsBlock.offsetTop;
        editFormBlock.style.top = editBlock + 'px';
        //all JS code was written by © Eugeniu Rascu
        newsBlock.after(editFormBlock);

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
                item.closest('.news__block').querySelector('.news__title').innerText = document.querySelector('.edit__post-title-input').value;
                item.closest('.news__block').querySelector('.news__text').innerText = document.querySelector('.edit__post-text-input').value;
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
    });
});

const deleteBtn = document.querySelectorAll('.delete-post__btn');

deleteBtn.forEach(function (item) {
    item.addEventListener('click', function () {
        item.closest('.news__block').remove();
    });
});