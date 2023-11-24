<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h4 class="pt-3">Order Id: {{orderID}}</h4>
            </div>
        </div>
    </div>

</template>

<script>

export default {
    name:'OrderItems',
    data() {
        return {
            orderItems:[],
            order: {},
            token: null,
            orderID: 0
        }
    }
};

</script>

<style scoped>

    h4 {
        font-family: 'Roboto', sans-serif;
        color: #484848;
        font-weight: 700;
    }

    .embed-responsive .card-img-top {
        object-fit: cover;
    }

</style>
