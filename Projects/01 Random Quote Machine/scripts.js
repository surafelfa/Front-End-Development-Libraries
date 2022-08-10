//DB
const colors = ['#73a857', '#9b59b6', '#342224', '#16a085', '#2c3e50', '#fb6964', ];
const quotes = {
    0:{
        quote: 'It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.',
        author: '- Ann Landers'
    },
    1:{
        quote: 'Strive not to be a success, but rather to be of value.',
        author: '- Albert Einstein'
    },
    2:{
        quote: 'Dreaming, after all, is a form of planning.',
        author: '- Gloria Steinem'
    },
    3:{
        quote: 'I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.',
        author: '- Maya Angelou'
    },
    4:{
        quote: 'You become what you believe.',
        author: '- Oprah Winfrey'
    },
    5:{
        quote: 'When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down ‘happy’. They told me I didn’t understand the assignment, and I told them they didn’t understand life.',
        author: '- John Lennon'
    }
}
//Event handler
$(document).ready(()=>{

    // On first load, my quote machine displays a random quote
    changeQuote();
    //When the #new-quote button is clicked, my quote machine should fetch a new quote and display
    $('#new-quote').on('click', ()=>{
        $("#text").css("opacity", 0)
        setTimeout(changeQuote, 1000);
        setTimeout(()=>{
            $("#text").css("opacity", 1)
        }, 1500);
        //clearTimeout(myTimeout);
    });
    
})
let generatorRand =  ()=>{
    const randQuote = Math.floor(Math.random() * 6);
    const randColor = Math.floor(Math.random() * 6);
    return [randQuote, randColor];
}
let changeQuote = ()=>{
    const [randQuote, randColor] = generatorRand();
    $('.random-quote').text(quotes[randQuote].quote);
    $('#author').text(quotes[randQuote].author);
    $('a').prop('href', "https://twitter.com/intent/tweet?text=" + encodeURIComponent(quotes[randQuote].quote));
    $('.bgcolor').css("backgroundColor", colors[randColor])
    $('.fgcolor').css("color", colors[randColor])
}