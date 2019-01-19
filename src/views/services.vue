<template>
    <div class="ivu-layout">
        <Layout>
            <Header><MyMenu></MyMenu></Header>
            <Content><div><p>服务</p></div></Content>
            <Footer><MyFooter></MyFooter></Footer>
        </Layout>
    </div>
</template>

<script>
    // import { Button, Menu, MenuGroup, MenuItem, Icon,  } from 'iview';
    import MyMenu from '../components/MyMenu';
    import MyFooter from '../components/MyFooter';
    import { Layout, Header, Content, Footer } from 'iview';
    export default {
        name: "services",
        components: {
            MyFooter, MyMenu, Layout, Header, Content, Footer,
            // Button, Menu, MenuGroup, MenuItem, Icon,
        }
    }
</script>

<style scoped>

</style>
