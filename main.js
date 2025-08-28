
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

// const emergencyCard = document.getElementsByClassName( "emergency-card" )
// console.log(emergencyCard)

// const card1 = document.getElementById( "card1" )
// card1.addEventListener( "click", function ( event ) {
//     const targetEvent = event.target
//     const targetClassList = event.target.classList
//     if ( targetClassList[ 0 ] === "call-button" ) {
//         alert("calling national emergency 999")
//         console.log("Got The call Btn")
//     }
    
// } )


const callBtns = document.querySelectorAll( ".call-button" )
callBtns.forEach( function ( btn ) {
    btn.addEventListener( "click", function () {
        console.log("call btn clicked")
        const cardItems = btn.parentNode.parentNode.childNodes
        const serviceName = cardItems[ 7 ]
        const serviceNumber = cardItems[11].innerText
        console.log(serviceNumber)
        const serviceNameText =  serviceName.innerText
        alert(`📞 Calling ${serviceNameText} ${serviceNumber}`)
    })
})
