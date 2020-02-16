function animatePoof() {
    var bgTop = 0,
        frame = 0,
        frames = 6,
        frameSize = 128,
        frameRate = 80,
        puff = $('.puff');
        
    var animate = function(){
        if(frame < frames){
            puff.css({
                backgroundPosition: "0 "+bgTop+"px"
            });
            bgTop = bgTop - frameSize;
            frame++;
            setTimeout(animate, frameRate);
        }
    };
    
    animate();
    setTimeout("$('.puff').hide()", frames * frameRate);
}

$( function() {
    $('.images-holder').sortable({
        connectWith: '.delete-area',
        update: function(){
            var order = $(this).sortable('serialize');
        },
        helper: 'clone'
    });

    $('.delete-area').droppable({
        accept:'.images-holder img',
        hoverClass: 'dropAreaHover',

        drop: function(e, ui) {
            ui.draggable.remove();
            var xOffset = 24;
            var yOffset = 24;

            $('.puff').css({
                left: e.pageX - xOffset + 'px',
                top: e.pageY - yOffset + 'px'
            }).show();

            animatePoof();
        }
    })
  } );

