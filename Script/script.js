(function (){
  "use strict";
  var state=document.getElementById('s-state');
  document.addEventListener('DOMContentLoaded',function(){
    document.getElementById("cart-shop").addEventListener('submit',estimateTotal);
    var estimateBtn=document.getElementById("estimate-btn");
    estimateBtn.disabled=true;

    state.addEventListener('change',function(){

      if(state.value===''){
        estimateBtn.disabled=true;
      }
      else{
        estimateBtn.disabled=false;
      }
    });

  });

  function estimateTotal(event){
    event.preventDefault();

    if(state.value === ''){
      alert("Plese choose your shipping state");
      state.focus();
    }

    var itemBball =parseInt(document.getElementById("quantity").value,10),
    itemJersy =parseInt(document.getElementById("quantity-jersy").value,10),
    itemPower =parseInt(document.getElementById("quantity-power").value,10),
    shippingState=state.value,
    shippingMethod=document.querySelector('[name=r_method]:checked').value;

    var totalQ= itemBball+itemJersy+itemPower,
    shippingCostPer,
    shippingCost,
    taxFactor=1,
    estimate,
    totalItemPrice;

    totalItemPrice=estimate=(90*itemBball)+(25*itemJersy)+(30*itemPower);
    if(shippingState==='CA'){
      taxFactor=1.075;
    }

    switch(shippingMethod){
      case 'usps':
      shippingCostPer=2;
      break;
      case 'usp':
      shippingCostPer=3;
      break;
      default :
      shippingCostPer=0;
      break;
    }
    shippingCost=shippingCostPer*totalQ;

    estimate='$'+((totalItemPrice*taxFactor)+shippingCost).toFixed(2);
    document.getElementById('estimate-text').value=estimate;
    var results=document.getElementById('results');
    results.innerHTML='Total Items:' +totalQ+'<br>';
    results.innerHTML+='Total Shipping cost:$'+shippingCost.toFixed(2)+'<br>';
    results.innerHTML+='Tax:'+((taxFactor-1)*100).toFixed(2)+'% ('+ shippingState +')';

  }

})();
