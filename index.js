var app = new Vue({
    el: "#app",
    data: {
        selected: "green",
        product:
            {
                title: "Socks",
                details: [
                    "80% cotton",
                    "20% polyester",
                    "Gender-neutral",
                ],
                stocks: [
                    {color:"green", quantity:1, thumbnail:""},
                    {color:"blue", quantity:0, thumbnail:""},
                ],
                image:"./assets/vmSocks-green.jpg",
                altTxt: "pair of socks"
            }
        
    }
});
