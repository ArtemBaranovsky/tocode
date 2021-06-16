<template>
    <div class="wrapper-content wrapper-content--fixed">
        <section>
            <div class="container">
                <div class="product__wrapper">

                    <!-- slider -->
                    <div class="product__slider">
<!--                        <img :src="product.img" :alt="product.title">-->
                        <carousel
                            :perPage="2"
                            :pagination-enabled="true"
                            pagination-color="#b3b3b3"
                            pagination-active-color="#494ce8"
                        >
                            <slide v-for="(slide, index) in product.gallery" :key="index">
                                <img :src="slide.img" :alt="slide.name">
                            </slide>
                        </carousel>
                    </div>

                    <!-- content -->
                    <div class="product__content">
                        <h1 class="title">Product: {{ product.title }}</h1>
                        <p>{{ product.descr }}</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "ShopItem",
    data() {
    	return {
    		id: this.$route.params.id,
            product: null
        }
    },
    created() {
    	let id = this.$route.params.id
    	this.product = this.$store.getters.getProduct(id)
        console.log(this.product);
			// console.log({ route: this.$route, id: this.$route.params.id })
    }
}
</script>

<style lang="scss">
.product__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.product__slider,
.product__content {
    max-width: 48%;
    text-align: center;
}
.VueCarousel-inner {
    visibility: visible !important;
    flex-basis: 100% !important;
    width: 100% !important;
}
</style>