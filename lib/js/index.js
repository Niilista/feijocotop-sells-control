var genOrderBtn = document.getElementById("genOrder");
var orderName = document.getElementById("orderName");
var orderAddBtn = document.getElementById("orderAddBtn");
var radios = document.getElementsByName('sizeOp');
var orderList = document.getElementById('orderList');

genOrderBtn.addEventListener("click", () => {
    alert("cu");
});


orderAddBtn.addEventListener("click", () => {

    let pedido = "";
    pedido = pedido + ' ' + orderName.options[orderName.selectedIndex].text;
    
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            pedido = pedido + ' ' + radios[i].value;
            break;
        }
    }
    var node = document.createElement("LI");
    var textnode = document.createTextNode(pedido);
    node.appendChild(textnode);
    orderList.appendChild(node);
});

