
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


// function to get innerText
function getElement( id ) {
    return document.getElementById(id)
}
// function to convert string to number
function getNumber( text ) {
    return parseInt(text)
}

// showing alert on call button click with service name and number
const callPrice = 20
const callBtns = document.querySelectorAll( ".call-button" )
callBtns.forEach( function ( btn ) {
    btn.addEventListener( "click", function () {
        const cardItems = btn.parentNode.parentNode.childNodes
        const serviceName = cardItems[ 7 ].innerText
        const serviceNumber = cardItems[ 11 ].innerText
        const coinElement = getElement( "coin-count" )
        const totalCoin = parseInt(coinElement.innerText)
        // console.log( newTotalCoin )
        const newTotalCoin = totalCoin - callPrice
        console.log(totalCoin)
        if ( totalCoin < 20 ) {
            alert( "❌ Insufficient Coin. Need Atleast 20 Coin To Make A Call." )
            return
        }
        coinElement.innerText = newTotalCoin
        alert( `📞 Calling ${ serviceName }    ${ serviceNumber }...` )
    })
})
