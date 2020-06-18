Vue.component('product-review', {
    template: `
    <form class="review-form" @submit.prevent="onSubmit">
        <p v-if="errors.length > 0">
            <b>Please correct the following error(s):</b>
            <ul>
                <li v-for="error in errors">
                    {{ error }}
                </li>
            </ul>
        </p>
        <p>
            <label for="name">Name: </label>
            <input id="name" v-model="name">
        </p>
        <p>
            <label for="review">Review: </label>
            <textarea id="review" v-model="review"></textarea>
        </p>
        <p>
            <label for="rating">Rating: </label>
            <select id="rating" v-model.number="rating">
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
            </select>
        </p>
        <p>
            <p>Would you like to recommend this product? </p>
            <label for="radio-yes">Yes</label>
            <input type="radio" id="radio-yes" name="recommend" v-model="recommend" value="yes">
            <label for="radio-no">No</label>
            <input type="radio" id="radio-no" name="recommend" v-model="recommend" value="no">
        </p>
        <input type="submit" value="Submit">
    </form>
    `,
    data: function () {
        return {
            name: null,
            rating: null,
            review: null,
            recommend: null,
            errors: []
        }
    },
    methods: {
        onSubmit: function () {
            this.errors = [];
            if (this.name && this.review && this.rating && this.recommend) {
                let productReview = {
                    name: this.name,
                    rating: this.rating,
                    review: this.review,
                    recommend: this.recommend
                }
                this.$emit('product-review', productReview);
                this.name = null;
                this.rating = null;
                this.review = null;
                this.recommend = null;
            } else {
                if (!this.name) this.errors.push("Name Required");
                if (!this.review) this.errors.push("Review Required");
                if (!this.rating) this.errors.push("Rating Required");
                if (!this.recommend) this.errors.push("Recommend Required");
            }


        }
    }
});

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
        </div>
        <div>
            <h2>Reivews:</h2>
            <p v-if="reviews.length === 0">There is no reviews yet.</p> 
            <ul>
                <li v-for="review in reviews">
                    <p>{{ review.name }}</p>
                    <p>{{ review.review }}</p>
                    <p>Rating: {{ review.rating }}</p>
                    <p>{{ review.name + " " + (review.recommend==="yes"?"would":"wouldn't") + " like to recommend this product."}}</p>
                </li>
            </ul>
        </div>
        <product-review @product-review="addToReview"></product-review>
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
            reviews: []
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
            this.$emit('add-to-cart', this.product.variants[this.selectedVariant].id);
        },
        updateProduct: function (index) {
            this.selectedVariant = index;
        },
        addToReview: function (review) {
            this.reviews.push(review);
        }
    }
})

var app = new Vue({
    el: "#app",
    data: {
        premium: true,
        cart: []
    },
    methods: {
        updateCart: function (id) {
            this.cart.push(id);
        }
    }
});
