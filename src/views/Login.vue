<template>
<form class="box" @submit.prevent="submit">
  <header>登录</header>
  <div class="form-group">
    <label class="left control-label">用户名:</label>
    <div class="right">
      <input type="text" class="form-control" placeholder="请输入用户名" v-model="username">
    </div>
  </div>
  <div class="form-group">
    <label class="left control-label">密码:</label>
    <div class="right">
      <input type="password" class="form-control" placeholder="请输入密码" v-model="password">
    </div>
  </div>
  <div class="form-group">
    <label class="left control-label"></label>
    <div class="left">
      <button class="btn btn-success" style="width: 190px">
        <i v-if="isLoading" class="icon icon-loading"></i>
      登录</button>
    </div>
  </div>
</form>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      isLoading: false,
    };
  },
  created() {
  },
  methods: {
    submit() {
      if (!this.username || !this.password) {
        this.$notify.warning({
          title: '警告',
          message: '请输入账号密码！',
        });
      } else {
        this.login();
      }
    },
    login() {
      if (this.isLoading) return;
      this.isLoading = true;
      this.$http.post('payment/ticket', {
        username: this.username,
        password: this.password,
      }).then(() => {
        this.$router.back();
        this.isLoading = false;
      }, () => {
        this.isLoading = false;
        this.$notify.error({
          title: '错误',
          message: '登录失败',
        });
      });
    },
  },
};
</script>
<style lang="stylus" scoped>
.form-group
  display flex
  margin-bottom 20px
  .left
    width 80px
    text-align right
    padding-right 20px
    line-height 34px
  .right
    flex 1
</style>

