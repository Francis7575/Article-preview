const shareBtn = document.getElementById('shareBtn');
const shareContainer = document.querySelector('.share_content');
shareContainer.style.display = 'none';

shareBtn.addEventListener('click', () => {
    if (shareContainer.style.display === 'none') {
        shareContainer.style.display = 'block';
    } else {
        shareContainer.style.display = 'none';
    }
})

