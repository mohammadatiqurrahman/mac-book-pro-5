
// get and set the price of different accessories, will be included with iMAC!

function costByparts(costId,price){
    const memoryDefault = document.getElementById(costId)
    memoryDefault.innerText = price
    calculateTotal()
}
// calculate total price of iMAC including different accessories!
function calculateTotal(){
    let memoryCost = document.getElementById('memory-cost')
    let convertedMemoryCost = parseInt(memoryCost.innerText);
    let storageCost = document.getElementById('storage-cost')
    let convertedStorageCost = parseInt(storageCost.innerText);
    let deliveryCharge = document.getElementById('delivery-charge')
    let convertedDeliveryCost = parseInt(deliveryCharge.innerText);
// calculate total cost!
    let totalCost =convertedMemoryCost+convertedStorageCost+convertedDeliveryCost+1299;
    const priceTotal = document.getElementById('total-price')
    priceTotal.innerText = totalCost;
// set total cost and display!
    const discountPrice = document.getElementById('discount-price')
    discountPrice.innerText = totalCost

}

document.getElementById('memory-default').addEventListener('click',function(){
   costByparts('memory-cost','0')

})
document.getElementById('memory-extra').addEventListener('click',function(){
    costByparts('memory-cost','180')

})
document.getElementById('ssd-default').addEventListener('click',function(){
    costByparts('storage-cost','0')
 
})
document.getElementById('ssd-gb512').addEventListener('click',function(){
    costByparts('storage-cost','100')
 
})
document.getElementById('ssd-tb1').addEventListener('click',function(){
    costByparts('storage-cost','180')

})
document.getElementById('free-delivery').addEventListener('click',function(){
    costByparts('delivery-charge','0')

})
document.getElementById('delivery-cost').addEventListener('click',function(){
    costByparts('delivery-charge','20')
  
    
})
// calculate total price after using coupon!
document.getElementById('submit-coupon').addEventListener('click',function(){
    const inputField = document.getElementById('apply-coupon')
    const getInput = inputField.value
    if(getInput == 'stevekaku'){

        const setMessage = document.getElementById('message')
        setMessage.innerText = '✅ Congratulations! you got 20% discount!'

        const updatedTotal = document.getElementById('total-price')
        const convertUpdateTotal =parseFloat (updatedTotal.innerText)
        let totalDiscount = (convertUpdateTotal*20)/100
        const totalAfterDiscount = convertUpdateTotal - totalDiscount;
        // updatedTotal.innerText = totalAfterDiscount;
        const updateDiscountPrice = document.getElementById('discount-price')
        updateDiscountPrice.innerText = totalAfterDiscount;
        inputField.value = ''

    }
    else{
        const setMessage = document.getElementById('message')
        setMessage.innerText = "❌ Coupon Didn't Matched, Please try again!"
        inputField.value = ''
    }
})