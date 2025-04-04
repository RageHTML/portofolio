document.querySelectorAll('.link_nav').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.color = '#ff4500'
    });

    link.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.color = 'red'
    });
})

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.bg-image');
    images.forEach(img => {
        const src = img.style.backgroundImage.replace('url("', '').replace('")', '');
        const preload = new Image();
        preload.src = src;
    });
});