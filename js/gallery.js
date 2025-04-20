document.addEventListener('DOMContentLoaded', (event) => {
    $("#gallery").justifiedGallery({
        rowHeight: 300,
        margins: 20,
        lastRow: 'center',
        border: 0,
    }).on('jg.complete', function () {
        Fancybox.bind('[data-fancybox="gallery"]', {
            Toolbar: {
                display: {
                    left: ["infobar"],
                    middle: ["zoomOut", "zoomIn"],
                    right: ["thumbs", "close"],
                },
            },
            loop: true,
        });
    });
});
