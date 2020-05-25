
const btn = document.querySelector('.button__like__other');

let like = true,
    likeCount = document.querySelector('.button__like__2').innerHTML;

btn.addEventListener('click', () => {
    likeCount = like ? ++likeCount : --likeCount;
    like = !like;
    document.querySelector('.button__like__2').innerHTML = likeCount;
});