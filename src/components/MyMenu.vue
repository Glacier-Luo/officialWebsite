<template>
    <div id="header">
        <Menu mode="horizontal" theme="light" :active-name="activeMenu" @on-select="handleRoute" class="menu">
            <div class="logo"><img src="../assets/logo.png"><Divider type="vertical" /><span class="name">软件学院软件工程中心</span></div>
            <MenuItem name="/">
                <Icon type="ios-paper"></Icon>
                首页
            </MenuItem>
            <MenuItem name="/profile">
                <Icon type="ios-stats"></Icon>
                机构概况
            </MenuItem>
            <MenuItem name="/news">
                <Icon type="ios-globe"></Icon>
                新闻中心
            </MenuItem>
            <MenuItem name="/cooperation">
                <Icon type="ios-flask"></Icon>
                科研合作
            </MenuItem>
            <MenuItem name="/services">
                <Icon type="ios-flag"></Icon>
                社会服务
            </MenuItem>
            <MenuItem name="/train">
                <Icon type="ios-chatboxes"></Icon>
                人才培养
            </MenuItem>
            <MenuItem name="/files">
                <Icon type="ios-cloud-download"></Icon>
                文件资料
            </MenuItem>
            <MenuItem name="/recruit">
                <Icon type="ios-contacts"></Icon>
                人才招聘
            </MenuItem>
        </Menu>
    </div>
</template>

<script>
    import { Menu, MenuItem, Icon, Divider } from 'iview';
    export default {
        name: "MyMenu",
        components:{
            Menu, MenuItem, Icon, Divider
        },
        methods: {
            handleRoute(route){
                // console.log(route);
                this.$router.push(route);
            }
        },
        computed: {
            activeMenu () {
                return '/' + this.$route.path.split('/')[1]
            },
        }
    }
</script>

<style scoped lang="less">
    #header {
        min-width: 1500px;
        position: fixed;
        top: 0;
        left: 0;
        height: 60px;
        width: 100%;
        z-index: 1000;
        background-color: #fff;
        box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);

        .oj-menu {
            background: #fdfdfd;
        }

        .logo {
            margin-left: 2%;
            margin-right: 2%;
            font-size: 20px;
            float: left;
            line-height: 60px;
        }

        img {
            float: left;
        }

        /*太菜了， logo和文字对不齐*/
        .name {
            /*display: inline-block;*/
            /*vertical-align: middle;*/
            /*line-height: 60px;*/

            /*position: relative;*/
            /*top: -17px;*/
        }
    }
</style>
