let count = 1;
totalPrice = 0;
const cards = document.querySelectorAll('.card')
console.log(cards);

for(let index = 0; index < cards.length; index++){
    const card = cards[index];

    card.addEventListener('click', function(){
       
        // get the title 
        const title = card.querySelector('h3').innerText;
        const price = parseFloat(card.querySelector('span').innerText.split(' ')[1]);
        

        // set the title on the right side
        const titleContainer = document.getElementById('title-container');
        const p = document.createElement('p');
        p.innerText = count + '. '  + title;
        count++

        titleContainer.appendChild(p);

        // count price 
        totalPrice = totalPrice + price;
        document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);

        // net price 
        const payAmount = document.getElementById('total').innerText = totalPrice;
    })
}

const btn = document.getElementById('apply-btn');
btn.addEventListener('click', function(){
   
    // get the value from cupone 
    const coupon = document.getElementById('input-field').value.split(' ').join("").toUpperCase();
    if( totalPrice >= 200){
        if( coupon === 'SELL200'){
            const discountElement = document.getElementById('discountPrice');
            const discountAmount = totalPrice * 0.2 ;
            discountElement.innerText = discountAmount.toFixed(2);
            document.getElementById('total').innerText = totalPrice - discountAmount;
            document.getElementById('input-field').value = '';

        }
        else{
            alert('Invaild Coupon');
        }

    }else{
        alert('please at least 200 taka khoroch koren vai !!');
        document.getElementById('input-field').value = '';
    }
   
    
})


