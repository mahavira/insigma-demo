<template>
<div class="box">
  <p>请检票</p>
  <router-link class="btn btn-link" to='/'>如未购票，请去取票</router-link>
</div>
</template>

<script>
export default {
  data() {
    return {
      isLogin: false,
    };
  },
  created() {
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      this.$http.get('ticketsales/checklogin').then(({ body }) => {
        const { haslogin } = body;
        if (haslogin && haslogin.a.toString() === 'true') {
          this.isLogin = true;
        } else {
          this.isLogin = false;
        }
      });
    },
  },
};
</script>
<style lang="stylus" scoped>
.box
  color #5cb85c
  font-size 1.7rem
</style>
