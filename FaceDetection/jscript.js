"use strict";
$('#try-it').click(function (e) {
  e.preventDefault();
  
            //Access-Control-Allow-Origin:*     --> Insert to fix tainted cross-origin data
    
  $('.face').remove();

  $('.picture').faceDetection({
    complete: function (faces) {
      for (var i = 0; i < faces.length; i++) {
        $('<div>', {
          'class':'face',
          'css': {
            'position': 'absolute',
            'left':   faces[i].x * faces[i].scaleX + 'px',
            'top':    faces[i].y * faces[i].scaleY + 'px',
            'width':  faces[i].width  * faces[i].scaleX + 'px',
            'height': faces[i].height * faces[i].scaleY + 'px'
          }
        })
        .insertAfter(this);
      }
    },
    error:function (code, message) {
      alert('Error: ' + message);
    }
  });
});



/*
$('#picture-container').ready(function () {
//setTimeout(function(){
  $("#my_nanogallery2").nanoGallery({
    items: [
      {
        src:          'image_01.jpg',    // image url
        srct:         'image_01.jpg',  // thumbnail url
        title:        'Title Image1',    // element title
        description:  'Description1'     // element description
      },
      { src: 'image_02.jpg', srct: 'image_02.jpg',  title: 'Title Image2' },
      { src: 'image_03.jpg', srct: 'image_03.jpg', title: 'Title Image3' }
    ]
  });
});*/
    //}, 5000);
