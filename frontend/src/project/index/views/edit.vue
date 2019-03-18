<template>
  <div>
    <Row
      type="flex"
      justify="center"
    >
      <Col span="16">
      <Card dis-hover>
        <!--此处应为一张宣传图-->
        <img src="">
      </Card>
      </Col>
    </Row>

    <br />

    <Row
      type="flex"
      justify="center"
      :gutter="24"
    >
      <Col
        span="4"
      >
      <Card
        title=" 栏目导航"
        icon="md-menu"
      >
        <div
          v-for="(ICON,X) in guide"
          id="buttonmargin"
          :key="X.key"
        >
          <Button
            long
            :icon="ICON[0]"
            size="large"
            :to="ICON[1]"
            :disabled="false"
          >
            {{ X }}
          </Button>
        </div>
      </Card>
      </Col>

      <Col
        span="12"
      >
      <Card
        title="文章编辑"
        dis-hover
      >
        <froala :tag="'textarea'" :config="config" v-model="model" ></froala>
        <br />
        <Button size="large" icon="md-checkmark-circle">提交</Button>
      </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
    import { Card, Row, Col, Button } from 'iview';
    import VueFroala from 'vue-froala-wysiwyg';
    import 'froala-editor/js/languages/zh_cn.js';
    var HOST = "http://localhost:8000";
    export default {
      components:{
          Card, Row, Col, Button
      },
      data () {
        return {
          guide:{
            "首页":["ios-paper","/"],
            "机构概况":["ios-stats","/profile"],
            "新闻中心":["ios-globe","/news"],
            "科研合作":["ios-flask","/cooperation"],
            "社会服务":["ios-flag","/services"],
            "人才培养":["ios-chatboxes","/train"],
            "文件资料":["ios-cloud-download","/files"],
            "人才招聘":["ios-contacts","/recruit"]
          },
          config: {
            toolbarButtons: ['undo', 'redo','|', 'bold', 'italic', 'underline','|', 'fontFamily', 'fontSize', 'color', '|','align', 'formatOL', 'formatUL', '|', 'outdent', 'indent', 'quote', '|','insertFile', 'insertImage', 'embedly', 'insertTable', '|', 'emoticons', 'specialCharacters', 'insertHR', 'selectAll', '|','fullscreen'],
            toolbarButtonsMD: ['bold', 'italic', 'underline','|', 'fontFamily', 'fontSize', 'color', '|','align', 'formatOL','formatUL','quote', 'insertLink', 'insertImage','insertFile', 'embedly','insertTable', '|', 'emoticons', 'selectAll', '|','fullscreen'],
            toolbarButtonsSM: ['bold', 'italic', 'underline','|', 'fontFamily', 'fontSize', 'color', '|','align', 'formatOL', 'formatUL','|', 'insertImage','insertFile', 'embedly', '|', 'emoticons', 'specialCharacters','|','fullscreen'],
            toolbarButtonsXS: ['bold', 'italic', 'underline','fontFamily', 'fontSize', 'color','align','insertImage', 'embedly', 'insertFile','fullscreen'],
            placeholder: "请填写内容",
            language: "zh_cn",
            requestWithCORS: true,
            imageUploadURL: HOST + '/api/image-upload',
            imageManagerLoadURL: HOST + '/api/image-list',
            imageManagerDeleteURL: HOST + '/api/image-delete',
            fileUploadURL: HOST + '/api/file-upload',
            videoUploadURL: HOST + '/api/video-upload',
            toolbarSticky: true,
            heightMin: 320,
            heightMax: 340,
            events: {
              'froalaEditor.initialized': function () {
                console.log('initialized')
              }
            },
          },
          model: '文章内容'
        }
      },
    }
    
</script>

<style scoped>
  #buttonmargin {
    margin-bottom: 8px;
    margin-top: 8px;
  }
</style>
