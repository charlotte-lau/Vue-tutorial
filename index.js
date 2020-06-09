var app = new Vue({
    el: "#app",
    data: {
        selectedVariant: 0,
        brand: "Charlotte",
        product:
        {
            title: "Socks",
            details: [
                "80% cotton",
                "20% polyester",
                "Gender-neutral",
            ],
            variants: [
                {
                    color: "green",
                    quantity: 1,
                    thumbnail: "./assets/vmSocks-green.jpg",
                    id: 2234,
                    quantity: 10
                },
                {
                    color: "blue",
                    quantity: 0,
                    thumbnail: "./assets/vmSocks-blue.jpg",
                    id: 2235,
                    quantity: 0
                },
            ],
            altTxt: "pair of socks",
            inventory: 100

        },
        cart: 0
    },
    computed: {
        inStock: function () {
            return this.product.variants[this.selectedVariant].quantity > 0;
        },
        title: function () {
            return this.brand + ' ' + this.product.title;
        },
        image: function () {
            return this.product.variants[this.selectedVariant].thumbnail;
        }
    },
    methods: {
        addToCart: function () {
            this.cart += 1;
        },
        updateProduct: function (index) {
            this.selectedVariant = index;
        }
    }
});
