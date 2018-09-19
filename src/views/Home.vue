<template>
  <div class="box">
    <div class="ticket">
      ￥{{money}}
    </div>
    <div>
      <button style="width: 200px" class="btn btn-primary" @click="checkPay">
        <i v-if="isLoadPayStatus" class="icon icon-loading"></i>
        去支付</button>
    </div>
    <transition name="fade">
        <div v-if="!isLogin" class="mask">
          <div class="icon icon-loading"></div>
        </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      money: 100,
      isLogin: false,
      isEnablePay: false,
      isLoadPayStatus: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.checkLogin();
    }, 1000);
  },
  methods: {
    checkLogin() {
      this.$http.get('ticketsales/checklogin').then(({ body }) => {
        const { haslogin } = body;
        if (haslogin && haslogin.a.toString() === 'true') {
          this.isLogin = true;
        } else {
          this.isLogin = false;
          this.$router.push('/login');
        }
      }, () => {
        this.$router.push('/login');
      });
    },
    checkPay() {
      if (this.isLoadPayStatus) return;
      this.isLoadPayStatus = true;
      this.$http.get('ticketsales/checkpayment').then(({ body }) => {
        const { running } = body;
        if (running && running.a.toString() === 'true') {
          this.isEnablePay = true;
        } else {
          this.isEnablePay = false;
          this.$router.push('/ticket/fail');
        }
        // this.isLoadPayStatus = false;
      }, () => {
        this.$router.push('/ticket/fail');
        // this.isLoadPayStatus = false;
      });
    },
  },
};
</script>
<style lang="stylus" scoped>
.ticket
  display inline-block
  width 300px
  height 100px
  line-height 100px
  background #F68484
  border-radius 3px
  box-shadow 1px 1px 5px rgba(0,0,0,0.3)
  font-size 3rem
  color #FFF
  margin-bottom 50px
.mask
  background rgba(0,0,0,0.3)
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  border-radius 3px
  display flex
  justify-content center
  .icon-loading
    width 40px
    height 40px
    margin-top 20px
</style>

