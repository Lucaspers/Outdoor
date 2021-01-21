<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <img class="row justify-content-center" :src="product.image" :alt="product.name">
                <h3 class="title" v-html="product.name"></h3>
                <p class="text-muted">{{product.description}}</p>
                <h4>
                    <span class="small-text text-muted float-left">$ {{product.price}}</span>
                    <span class="small-text float-right">Quantity: {{product.units}}</span>
                </h4>
                <br>
                <hr>
                <router-link :to="{ path: '/checkout?pid='+product.id }" class="col-md-4 btn btn-sm btn-primary float-right">Buy Now</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            product : []
        }
    },
    beforeMount(){
        let url = `/api/products/${this.$route.params.id}`
        axios.get(url).then(response => this.product = response.data)      
    }
}
</script>

<style scoped>
.small-text { font-size: 18px; }
.title { font-size: 36px; }

img {
    height: auto;
    width: 300px;
    border-radius: 50%;
}

.col-md-8 img {
    display: flex;
    justify-content: center;
}
</style>