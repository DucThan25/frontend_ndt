<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">Your Orders</h4>
      </div>
    </div>
    <!--        for each order display -->    
  </div>

</template>

<script>
export default {

    data() {
      return {
        token: null,
        orderList : []
      }
    },
    name: 'Order', 
};

</script>

<style scoped>
  h4, h5 {
    font-family: 'Roboto', sans-serif;
    color: #484848;
    font-weight: 700;
  }

  .embed-responsive .card-img-top {
    object-fit: cover;
  }
</style>
