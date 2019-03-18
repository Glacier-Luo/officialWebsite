<template>
  <div>
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
        id="guide"
      >
        <Select
          v-model="column"
          size="large"
        >
          <Option
            v-for="item in columnList"
            :value="item.value"
            :key="item.value">
            {{ item.label }}
          </Option>
        </Select>
        <ul id="passagelist">
          <li v-for="passage in passages">
            <a href="#">
              {{ passage }}
            </a>
            <Divider/>
          </li>
        </ul>
      </Card>
      </Col>

      <Col
        span="12"
      >
      <Card
        title="文章编辑"
        dis-hover
      >
        <h1>{{ title }}</h1>
        <br />
        <froala :tag="'textarea'" :config="config" v-model="model" ></froala>
        <br />
        <Button size="large" icon="md-checkmark-circle">提交</Button>
      </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
    import { Card, Row, Col, Button, Select, Option, Divider } from 'iview';
    import VueFroala from 'vue-froala-wysiwyg';
    import 'froala-editor/js/languages/zh_cn.js';
    var HOST = "http://localhost:8000";
    export default {
      components:{
          Card, Row, Col, Button, Select, Option, Divider
      },
      data () {
        return {
          title: 'passage title',
          column: '机构概况',
          columnList:[
            {
              value: '机构概况',
              label: '机构概况',
              passage: []
            },
            {
              value: '新闻中心',
              label: '新闻中心',
              passage: []
            },
            {
              value: '科研合作',
              label: '科研合作',
              passage: []
            },
            {
              value: '社会服务',
              label: '社会服务',
              passage: []
            },
            {
              value: '人才培养',
              label: '人才培养',
              passage: []
            },
            {
              value: '文件资料',
              label: '文件资料',
              passage: []
            },
            {
              value: '人才招聘',
              label: '人才招聘',
              passage: []
            }
          ],
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
            requestHeaders: {
              Authorization: 'JWT ' + this.$store.getters.token
            },
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
      computed: {
        passages: function() {
          var passage
          this.columnList.forEach(col => {
          if (col.value == this.column)
            passage = col.passage
          })
          return passage;
        }
      }
    }

</script>

<style scoped>
  #buttonmargin {
    margin-bottom: 8px;
    margin-top: 8px;
  }

  #passagelist {
    padding-left: 15px;
    padding-right: 10px;
    padding-top: 30px;
  }

  a {
    color: black;
  }
</style>
