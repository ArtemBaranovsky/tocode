<template>
    <div class="wrapper-content wrapper-content--fixed">
        <section>
            <div class="container">
                <img :src="product.img" :alt="product.title">
                <h1>Product: {{ product.title }}</h1>
                <p>{{ product.descr }}</p>
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

<style scoped>

</style>