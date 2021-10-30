function calcTip() {
    let subTotal = parseFloat(document.getElementById("subtotal").value);
    let tip = parseFloat(document.getElementById("tip").value);
    
    let total =  subTotal + ( tip * subTotal) / 100; 
    document.getElementById("total").innerHTML = "$" + total.toFixed(2); 
  }