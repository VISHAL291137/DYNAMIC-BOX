document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', () => {
        // Close all boxes except the one clicked
        document.querySelectorAll('.box').forEach(otherBox => {
            if (otherBox !== box) {
                otherBox.classList.remove('expanded');
                otherBox.querySelector('.options').style.display = 'none';
            }
        });
        // Toggle the clicked box
        box.classList.toggle('expanded');
        const options = box.querySelector('.options');
        options.style.display = options.style.display === 'block' ? 'none' : 'block';
    });
});

document.querySelectorAll('.color-option').forEach(option => {
    option.addEventListener('click', (e) => {
        const box = e.target.closest('.box');
        box.style.backgroundColor = e.target.style.backgroundColor;
    });
});

document.querySelectorAll('.size-option').forEach(option => {
    option.addEventListener('click', (e) => {
        const box = e.target.closest('.box');
        const size = e.target.textContent.toLowerCase();
        box.style.fontSize = size === 'small' ? '12px' : size === 'medium' ? '16px' : '20px';
    });
});