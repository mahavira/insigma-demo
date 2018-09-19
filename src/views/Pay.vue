<template>
<div class="pay">
  <header>支付 <a href="javascript:;">+</a></header>
  <div class="money">
    ￥{{money}}.00
  </div>
  <div>
    <button style="width: 200px" class="btn btn-success" @click="toPay">
      <i v-if="paymenting" class="icon icon-loading"></i>
      <span>{{paymenting?'支付中':'确认支付'}}</span>
    </button>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      money: 100,
      paymenting: false,
    };
  },
  methods: {
    toPay() {
      if (this.paymenting) return;
      this.paymenting = true;
      this.$http.get('payment/ticket').then(() => {
        this.$router.push('/pay/success');
      }, () => {
        this.$router.push('/ticket/fail');
      });
    },
  },
};
</script>
<style lang="stylus" scoped>
.pay
  width 280px
  padding 0 0 50px 0
  background #ffffff
  border-radius 2px
  box-shadow 0 0 3px rgba(0,0,0,0.3)
  header
    line-height 50px
    font-weight 700
    border-bottom 1px solid #4cae4c
    a
      position absolute
      right 10px
      top 0
      text-decoration none
      color #aaa
      font-size 1.8rem
      font-weight 100
      transform rotate(45deg)
  .money
    font-size 2.5rem
    font-weight 700
    padding 30px 0
</style>

