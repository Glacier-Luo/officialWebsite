<style lang="less" scoped>
</style>
<template>
  <div class="ivu-layout">
    <Layout>
      <Header><MyMenu></MyMenu></Header>
      <Content><RouterView></RouterView></Content>
      <Footer><MyFooter></MyFooter></Footer>
    </Layout>
  </div>
</template>
<script>
  import MyMenu from './components/MyMenu';
  import MyFooter from './components/MyFooter'
  import { Layout, Header, Content, Footer } from 'iview';
  export default {
    components: {
      MyFooter, MyMenu, Layout, Header, Content, Footer,
      // Button, Menu, MenuGroup, MenuItem, Icon,
    }
  }
</script>
