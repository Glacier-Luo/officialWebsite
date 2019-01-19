<template>
    <div class="ivu-layout">
        <Layout>
            <Header><MyMenu></MyMenu></Header>
            <Content><div><p>文件下载</p></div></Content>
            <Footer></Footer>
        </Layout>
    </div>
</template>

<script>
    // import { Button, Menu, MenuGroup, MenuItem, Icon,  } from 'iview';
    import MyMenu from '../components/MyMenu';
    import { Layout, Header, Content, Footer } from 'iview';
    export default {
        name: "files",
        components: {
            MyMenu, Layout, Header, Content, Footer,
            // Button, Menu, MenuGroup, MenuItem, Icon,
        }
    }
</script>

<style scoped>

</style>
