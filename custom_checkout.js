document.querySelector('button[data-trekkie-id="complete_order_button"]').onclick = function () {
if(document.getElementById('checkout_payment_gateway_28653420644').getAttribute('aria-expanded') == 'true' || document.getElementById('checkout_payment_gateway_11207606372').getAttribute('aria-expanded') == 'true'){
fbq('track', 'ccbuy');
}};

try{
document.getElementById('checkout_payment_gateway_28653420644').click();
document.getElementById("payment-gateway-subfields-17179803748").insertAdjacentHTML("afterbegin","<div class='blank-state'><center><h1>ATENÇÃO!<br><br> Não parcelamos compras com boleto bancário.<br><br> Boleto com prazo de vencimento em 1 dia, só clique em comprar se realmente tiver interesse. <br><br>Este método de pagamento tem uma taxa extra de 5% sobre o valor total da compra.</h1></center></div>");
}catch(error){};
