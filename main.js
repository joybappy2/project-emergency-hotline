//  FUNCTIONS
// function to get element 
function getElement( id ) {
    return document.getElementById(id)
}

const cardHeart = getElement( "card-heart" )
console.log( cardHeart )
cardHeart.addEventListener( "click", function () {
    console.log("heart clicked")
})