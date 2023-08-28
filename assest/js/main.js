let _next = document.getElementById('next')
// console.log(_next);

let _pre = document.getElementById('pre')
// console.log(_pre);

let _img = document.querySelectorAll('main>div>.box>img')
// console.log(_img);

let _rotation = document.querySelector('div>div>ul>li:nth-of-type(2)')
console.log(_rotation);

let turn = 0

let _firstimg = document.getElementById('imgslider')
// console.log(_firstimg);



let moveAndChangeColor = [
    { 
        transform: 'rotateX(0)',
        
    },
    { 
        offset: 0.8,
        transform: 'rotateX(90deg)', 
        
    },
    {
        transform: 'rotateX(0deg)',
      
    }
];

let moveAndChangeColor1 = [
    { 
        transform: 'rotateY(0)',
        
    },
    { 
        offset: 0.8,
        transform: 'rotateY(90deg)', 
        
    },
    {
        transform: 'rotateY(0deg)',
      
    }
];

_rotation.addEventListener('click' , function(){
    _rotation.style.background = 'red'

    _next.addEventListener('click', function () {

        _firstimg.animate(moveAndChangeColor, {
             duration: 400,
             fill: 'forwards'
         }); 
         
         
         if (turn < _img.length - 1) {
             turn++
           
     
         } else {
             turn = 0
     
         }
         _print()
     })
     
     
     
     
     _pre.addEventListener('click', function () {
     
       
         _firstimg.animate(moveAndChangeColor1, {
             duration: 400,
             fill: 'forwards'
         });
     
         if (turn > 0) {
     
             turn--
     
         } else {
             turn = _img.length - 1
     
         }
         _print()
     })
})


function _print() {
    let src = _img[turn].getAttribute('src')
    document.getElementById('imgslider').setAttribute('src', src)
   


}