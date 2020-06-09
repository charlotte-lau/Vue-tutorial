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
                variants: [
                    {color:"green", quantity:1, thumbnail:""},
                    {color:"blue", quantity:0, thumbnail:""},
                ],
                image:"./assets/vmSocks-green.jpg",
                altTxt: "pair of socks",
                inventory: 100
            },
            cart: 0
    },
    methods: {
        addToCart:function() {
            this.cart +=  1;
        },
        updateProduct:function(variantImage) {
            this.product.image = variantImage;
        }
    }
});
