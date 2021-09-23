const newBtn = $('<button id="btn-id">"1. This is gonna be so nice"</button>')
$('body').append(newBtn);

newBtn.click(function() {
    alert('any nice message')
});

$('#text-button').click(function() {
    alert($('#text-input').val());
})

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

$('#hover-div').mouseover(function() {
    this.style.backgroundColor = getRandomColor();
})

$('#hover-div').mouseout(function() {
    this.style.backgroundColor = 'black';
})

$('#paragraph').click(function() {
    this.style.color = getRandomColor();
})

$('#div-btn').click(function() {
    $('#name-div').append('<span>Richard McLin</span>')
})

let friends = ["Arlie",
    "Joie",
    "Jermaine",
    "Alexander",
    "Cathy",
    "Kortney",
    "Kalyn",
    "Rossie",
    "Jenell",
    "Wes"]

$('#list-btn').click(cycleList)

let i = 0

function cycleList() {
    i++
    i %= friends.length
    $('#list').append('<li>' + friends[i] + '</li>')
}