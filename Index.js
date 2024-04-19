document.querySelectorAll('.question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.querySelector('.answer');
        answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
    });
});

    