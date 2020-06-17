

Vue.component('product-details', {
    props: {
        details: {
            type: Array,
            required: true
        }
    },
    template: `
    <ul>
        <li v-for="detail in details">{{ detail }}</li>
    </ul>
    `
});

Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `
    <div class="product">
        <div class="product-image">
            <img :src="image" />
        </div>
        <div class="product-info">
            <h1>{{ title }}</h1>
            <p v-if="inStock">In Stock</p>
            <p v-else :class="{outOfStock: !inStock}">Out of Stock</p>
            <p>Shipping: {{ shipping }}</p>
            <product-details :details="product.details"></product-details>
            <div v-for="(variant, index) in product.variants" :key="variant.id" class="color-box"
                :style="{ backgroundColor: variant.color }" @mouseover="updateProduct(index)">
            </div>
            <button v-on:click="addToCart" :disabled="!inStock" :class="{ disabledButton: !inStock}">Add to
                cart</button>
            <div class="cart">
                <p>Cart ({{ cart }})</p>
            </div>
        </div>
    </div>`,
    data: function () {
        return {
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
        }
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
        },
        shipping: function () {
            return this.premium ? "Free" : 2.99;
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
})

var app = new Vue({
    el: "#app",
    data: {
        premium: true
    }
});
