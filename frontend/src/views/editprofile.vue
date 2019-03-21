<template>
  <div>
    <Row
      type="flex"
      justify="center"
      :gutter="24"
    >
      <Card
        dis-hover
        style="padding: 15px"
      >
        <h2 slot="title" style="padding-bottom: 5px">机构概况编辑</h2>
        <br />
        <froala
          v-model="model"
          :tag="'textarea'"
          :config="config"
        ></froala>
        <br />
        <Button
          size="large"
          icon="md-checkmark-circle"
          @click="post"
        >
          提交
        </Button>
      </Card>
    </Row>
  </div>
</template>

<script>
    import { Card, Row, Col, Button, Select, Option, Divider, Message } from 'iview';
    import VueFroala from 'vue-froala-wysiwyg';
    import 'froala-editor/js/languages/zh_cn.js';
    import api from '../axios/api'
    // var HOST = "http://localhost:8000";
    import { HOST } from "../../config";
    export default {
      components:{
          Card, Row, Col, Button, Select, Option, Divider, Message
      },
      data () {
        return {
          config: {
            toolbarButtons: ['undo', 'redo','|', 'bold', 'italic', 'underline','|', 'fontFamily', 'fontSize', 'color', '|','align', 'formatOL', 'formatUL', '|', 'outdent', 'indent', 'quote', '|','insertFile', 'insertImage', 'embedly', 'insertTable', '|', 'emoticons', 'specialCharacters', 'insertHR', 'selectAll', '|','fullscreen'],
            toolbarButtonsMD: ['bold', 'italic', 'underline','|', 'fontFamily', 'fontSize', 'color', '|','align', 'formatOL','formatUL','quote', 'insertLink', 'insertImage','insertFile', 'embedly','insertTable', '|', 'emoticons', 'selectAll', '|','fullscreen'],
            toolbarButtonsSM: ['bold', 'italic', 'underline','|', 'fontFamily', 'fontSize', 'color', '|','align', 'formatOL', 'formatUL','|', 'insertImage','insertFile', 'embedly', '|', 'emoticons', 'specialCharacters','|','fullscreen'],
            toolbarButtonsXS: ['bold', 'italic', 'underline','fontFamily', 'fontSize', 'color','align','insertImage', 'embedly', 'insertFile','fullscreen'],
            placeholder: "请填写内容",
            language: "zh_cn",
            requestWithCORS: true,
            imageUploadURL: HOST + '/image-upload',
            imageManagerLoadURL: HOST + '/image-list',
            imageManagerDeleteURL: HOST + '/image-delete',
            fileUploadURL: HOST + '/file-upload',
            videoUploadURL: HOST + '/video-upload',
            requestHeaders: {
              Authorization: 'JWT ' + this.$store.getters.token
            },
            toolbarSticky: true,
            heightMin: 370,
            heightMax: 400,
            events: {
              'froalaEditor.initialized': function () {
                console.log('initialized');
              }
            },
          },
          model: '文章内容'
        }
      },
      mounted(){
        this.init()
      },
      watch: {
        model: function (model) { //可以考虑做一个即时保存
          console.log(model)
        }
      },
      methods: {
        post(){
          let data = {'body': this.model};
          api.change_desc(data).then(res => {
            if(res.data.code === 200){
              Message.success('更新成功！')
            }else if(res.data.code === 400){
              Message.error(res.data.desc)
            }
          }).catch(() => {
            Message.error('服务器错误！')
          })
        },
        init(){
          api.get_desc().then(res => {
            this.model = res.data.body
          }).catch(() => {
            Message.error('服务器错误！')
          })
        }
      },
    }

</script>

<style scoped>
  #buttonmargin {
    margin-bottom: 8px;
    margin-top: 8px;
  }

  a {
    color: black;
  }
</style>
