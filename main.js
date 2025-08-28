
// Increasing Heart Number Value if Heart Icon Clicked
let heartCount = 0;
const heartIcons = document.querySelectorAll( ".heart-icon" )
heartIcons.forEach( function ( heartIcon ) {
    heartIcon.addEventListener( "click", function () {
        heartCount += 1
        const heartCountEl = document.getElementById( "heart-count" )
        heartCountEl.innerText = heartCount
    })
} )


// showing alert on call button click with service name and number
const callBtns = document.querySelectorAll( ".call-button" )
callBtns.forEach( function ( btn ) {
    btn.addEventListener( "click", function () {
        const cardItems = btn.parentNode.parentNode.childNodes
        const serviceName = cardItems[ 7 ].innerText
        const serviceNumber = cardItems[11].innerText
        alert(`📞 Calling ${serviceName}    ${serviceNumber}...`)
    })
})
