let homepoints=document.getElementById('homepoints')
let homeCount=0
let guestpoints=document.getElementById('guestpoints')
let guestCount=0

function homeAddPoint() {
    homeCount=homeCount+1
    homepoints.innerText=homeCount    
}

function homeAddTwoPoints() {
    homeCount=homeCount+2
    homepoints.innerText=homeCount
}

function homeAddThreePoints() {
    homeCount=homeCount+3
    homepoints.innerText=homeCount
}


function guestAddPoint() {
    guestCount=guestCount+1
    guestpoints.innerText=guestCount    
}

function guestAddTwoPoints() {
    guestCount=guestCount+2
    guestpoints.innerText=guestCount
}

function guestAddThreePoints() {
    guestCount=guestCount+3
    guestpoints.innerText=guestCount
}

