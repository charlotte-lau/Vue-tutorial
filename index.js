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
                    {color:"green", quantity:1, thumbnail:"./assets/vmSocks-green.jpg", id: 2234},
                    {color:"blue", quantity:0, thumbnail:"./assets/vmSocks-blue.jpg", id: 2235},
                ],
                image:"./assets/vmSocks-green.jpg",
                altTxt: "pair of socks",
                inventory: 100
                
            },
            cart: 0
    },
    computed: {
        inStock: function(){
            return this.product.inventory>0;
        }
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
