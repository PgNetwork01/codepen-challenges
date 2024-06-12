document.addEventListener('keydown', function(event) {
    const container = document.querySelector('.gallery-container');
    const focusedItem = document.activeElement;
    if (container.contains(focusedItem)) {
        if (event.key === 'ArrowRight') {
            const nextItem = focusedItem.nextElementSibling;
            if (nextItem) {
                nextItem.focus();
                container.scrollLeft += nextItem.offsetWidth;
            }
        } else if (event.key === 'ArrowLeft') {
            const prevItem = focusedItem.previousElementSibling;
            if (prevItem) {
                prevItem.focus();
                container.scrollLeft -= prevItem.offsetWidth;
            }
        }
    }
});
