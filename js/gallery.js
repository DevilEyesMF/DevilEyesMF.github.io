document.addEventListener('DOMContentLoaded', (event) => {
    const $gallery = $("#gallery");

    // Load images (if path is provided)
    if ($gallery.attr('data-gallery-path')) {
        const basePath = $gallery.attr('data-gallery-path');

        $.getJSON(basePath + "images.json", function(data) {
            data.images.forEach(function(image) {
                const fullPath = basePath + image;
            
                const $a = $("<a>", {
                    href: fullPath,
                    "data-fancybox": "gallery"
                });
            
                const $img = $("<img>", {
                    src: fullPath,
                    alt: ""
                });
            
                $a.append($img);
                $gallery.append($a);
                // Initialize gallery
                initGallery($gallery);
            });
        });
    } else {
        initGallery($gallery);
    }
});

function initGallery($gallery) {
    $gallery.justifiedGallery({
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
}
