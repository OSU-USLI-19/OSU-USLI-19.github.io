
let imageList = [
    'https://www.instagram.com/p/B5GT7YAhRfH/media/?size=l', //change
    'https://www.instagram.com/p/B7_sLvUBhps/media/?size=l', //change
    'https://www.instagram.com/p/B5GT7YAhRfH/media/?size=l', //changed
    'https://www.instagram.com/p/B5a58hrhXMc/media/?size=l', //changed
    'img/header-bg-1.jpg',
    'img/header-bg-2.jpg'
];
var transitionState = 0

function cycleTransitionState(){
    switch(transitionState){
        case 0:
        transitionState = 1;
        break;
        case 1:
        transitionState = 2;
        break;
        case 2:
        transitionState = 3;
        break;
        case 3:
        transitionState = 4;
        break;
        case 4:
        transitionState = 5;
        break;
        default:
        transitionState = 0;
    }
}

function changeHeaderBG(){
    cycleTransitionState();

    //for only one dom traversal.
    var header = $('header.masthead');
    header.fadeTo('slow', 0.3, () => {
        header.css('background-image', 'url('+ imageList[transitionState] +')');
    }).delay(500).fadeTo('slow', 1);
}

//Bad javascript live with it.
$(document).ready( () => {
    console.log("Joseph was here, also Kevin was here first.");
    setInterval(changeHeaderBG,15000);//15 secs
});
