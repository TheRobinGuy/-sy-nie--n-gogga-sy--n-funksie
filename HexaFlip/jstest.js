"use strict"; 

var hexaDemo5,
            set = [
                {
                    value: 'orange',
                    horizontalFlip: true,
                    style: {
                        backgroundColor: '#e67e22'
                    }
                },
                {
                    value: 'teal',
                    horizontalFlip: true,
                    style: {
                        backgroundColor: '#1ABC9C'
                    }
                },
                {
                    value: 'yellow',
                    horizontalFlip: true,
                    style: {
                        backgroundColor: '#f1c40f'
                    }
                },
                {
                    value: 'green',
                    horizontalFlip: true,
                    style: {
                        backgroundColor: '#2ECC71'
                    }
                },
                {
                    value: 'blue',
                    horizontalFlip: true,
                    style: {
                        backgroundColor: '#3498DB'
                    }
                },
                {
                    value: 'red',
                    horizontalFlip: true,
                    style: {
                        backgroundColor: '#E74C3C'
                    }
                },
                {
                    value: 'violet',
                    horizontalFlip: true,
                    style: {
                        backgroundColor: '#9B59B6'
                    }
                },
                {
                    value: 'gray',
                    horizontalFlip: true,
                    style: {
                        backgroundColor: '#BDC3C7'
                    }
                }
            ];
                    
        document.addEventListener('DOMContentLoaded', function(){
            var submit = document.getElementById('submit'),
                output = document.getElementById('output');
            hexaDemo5 = new HexaFlip(document.getElementById('hexaflip-demo5'),
                {set1: set, set2: set, set3: set, set4: set},
                {fontSize: 50, margin: 4, perspective: 1000}
            );            
            submit.addEventListener('click', function(){
                if(hexaDemo5.getValue().join(' ') === 'orange orange orange orange'){
                   output.innerHTML = 'Password Correct!';
                    /*hexaDemo5.flip();
                    hexaDemo5.flip();
                    hexaDemo5.flip();
                    hexaDemo5.flip();
                    hexaDemo5.flip();
                    hexaDemo5.flip();
                    hexaDemo5.flip();
                    hexaDemo5.flip();*/
                    
                    var cubes = document.getElementById('hexaflip-demo5');
                    var button = document.getElementById('holder');
                    var main = document.getElementById('main');
                    main.removeChild(button);
                    main.removeChild(cubes);
       
//---------------------------------------------------------                    
                    
            var hexaFullPage,
                images = [
                    './screenshot.png', //Use a screenshot of the correct password here...
                    './newPage.png'
                ];
                    
            hexaFullPage = new HexaFlip(document.getElementById('container'),
                {set: images},{
                size:  $(window).innerHeight()
            },
                {fontSize: 50, margin: 4, perspective: 1000}
            );
                    
//-------------------------------------------------------
                    
                    setTimeout(function(){hexaFullPage.flip(); setTimeout(function(){newPage();},1000); }, 1000);
                }else{
                    output.innerHTML = 'Password Incorrect!';
                    hexaDemo5.flip();
                    hexaDemo5.flip();
                    hexaDemo5.flip();
                    hexaDemo5.flip();
                    hexaDemo5.flip();
                    hexaDemo5.flip();
                    hexaDemo5.flip();
                    
                    var audio = new Audio('Wrong-answer-sound-effect.mp3');
                    audio.play();
                }
            }, false);
        }, false);


function newPage()
{
    var contain = document.getElementById('container');
    
    document.body.removeChild(contain);
    
    var width = $(window).innerWidth();
    var heigth = $(window).innerHeight();
    
    $('body').width(width).height(heigth).html('<object id="objecter" data="../FaceDetection/faceDetection.html"/>');
    
    $('#objecter').width(width).height(1000);
}
