const green = 'rgba(118,174, 170, 1)'
const black = 'rgba(23,35, 50, 1)'
const brown = 'rgba(205,164, 133, 1)'
const greenblue = 'rgba(62,171, 201, 1)'
const pink = 'rgba(254,156, 161, 1)'
const blue = 'rgba(98,189, 254, 1)'

const data = [
    {
        topic: 'Food',
        title: 'Wake Up and Smell the Coffee',
        price: '$0.90',
        color: green,
        background: 'https://picsum.photos/id/294/300/300',
        
    },
    {
        topic: 'Architecture',
        title: 'The Brand New NASA Office',
        price: '$0.19',
        color: black,
        background: 'https://picsum.photos/id/898/300/300',
    },
    {
        topic: 'Travel',
        title: 'Experience the Saharan Sands',
        price: '$2.29',
        color: brown,
        background: 'https://picsum.photos/id/525/300/300',
    },
    {
        topic: 'Interior',
        title: '9 Air-Cleaning Plants Your Home Needs',
        price: '$0.09',
        color: greenblue,
        background: 'https://picsum.photos/id/400/300/300',
    },
    {
        topic: 'Food',
        title: 'One Month Sugar Detox',
        price: '$0.99',
        color: pink,
        background: 'https://picsum.photos/id/326/300/300',
    },
    {
        topic: 'Photography',
        title: 'Shooting Minimal Instagram Photos',
        price: '$0.29',
        color: blue,
        background: 'https://picsum.photos/id/536/300/300',
    }
]

// Instructions
// Take the data above and display it as tiles on the page

let html = ''
    
function buildCardHtml(item) {
    return `
        <div class="card" id='js__card' style="background-image:url(${item.background})">
            <div class="topic">${item.topic}</div>
            <div class="title">${item.title}</div>
            <div class="price" style="color:${item.color}">Read for ${item.price}</div>
        </div>
    `
}

for (item of data) {
    html = html + buildCardHtml(item)
}

document.querySelector('#content').innerHTML = html