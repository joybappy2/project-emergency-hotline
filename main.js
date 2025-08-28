
// Increasing Heart Number Value if Heart Icon Clicked
const heartIcons = document.querySelectorAll( ".heart-icon" )
let newHeartCountNumber = 0;
heartIcons.forEach( function ( heartIcon ) {
    heartIcon.addEventListener( "click", function () {
        console.log( "heart icon clicked" )
        const heartCountEl = document.getElementById( "heart-count" )
        console.log( heartCountEl )
        newHeartCountNumber += 1
        heartCountEl.innerText = newHeartCountNumber
    })
} )

