<template>
    <Menu mode="horizontal" theme="light" active-name="1">
        <MenuItem name="1">
            <Icon type="ios-paper"></Icon>
            首页
        </MenuItem>
        <MenuItem name="2">
            <Icon type="ios-stats"></Icon>
            机构概况
        </MenuItem>
        <MenuItem name="3">
            <Icon type="ios-glob"></Icon>
            新闻中心
        </MenuItem>
        <MenuItem name="4">
            <Icon type="ios-flask"></Icon>
            科研合作
        </MenuItem>
        <MenuItem name="5">
            <Icon type="ios-flag"></Icon>
            社会服务
        </MenuItem>
        <MenuItem name="6">
            <Icon type="ios-chatboxes"></Icon>
            人才培养
        </MenuItem>
        <MenuItem name="7">
            <Icon type="ios-cloud-download"></Icon>
            文件资料
        </MenuItem>
        <MenuItem name="8">
            <Icon type="ios-contacts"></Icon>
            人才招聘
        </MenuItem>
    </Menu>
</template>

<script>
    import { Menu, MenuItem, Icon } from 'iview';
    export default {
        name: "MyMenu",
        components:{
            Menu, MenuItem, Icon
        },
    }
</script>

<style scoped>

</style>
