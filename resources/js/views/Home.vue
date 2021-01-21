 <template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-4 product-box" v-for="(product,index) in products" v-bind:key="index">
                            <router-link class="box" :to="{ path: '/products/'+product.id}">
                                <img :src="product.image" :alt="product.name">
                                <h5><span v-html="product.name"></span>
                                    <span class="small-text text-muted float-right">$ {{product.price}}</span>
                                </h5>
                                <button class="col-md-4 btn btn-sm btn-primary float-right">View</button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                products : []
            }
        },
        mounted(){
            axios.get("api/products/").then(response => this.products = response.data)      
        }
    }
</script>

<style scoped>


    .small-text {
        font-size: 14px;
    }
    .product-box {
        display: flex;
        justify-content: center;
    }

    img {
       height: auto;
       width: 210px; 
       border-radius: 8px;
    }
</style>