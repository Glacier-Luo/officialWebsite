<template>
  <div>
    <Row
      type="flex"
      justify="center"
    >
      <Col :xs="23" :md="14">
      <Card dis-hover>
        <h1
          slot="title"
          style="padding: 10px"
        >
          文章管理
        </h1>
        <Row>
          <Col
            :xs="6" :md="3"
            style="text-align: right"
          >
          <h3 style="padding-top: 5px; margin-right: 15px">
            栏目选择:
          </h3>
          </Col>
          <Col :xs="18" :md="18">
          <Select
            v-model="column"
            size="large"
          >
            <Option
              v-for="item in columnList"
              :key="item.value"
              :value="item.value"
            >
              {{ item.label }}
            </Option>
          </Select>
          </Col>
        </Row>
        <Row>
          <div id="passagelist">
            <p v-for="(passage,index) in passages">
              <Divider />
              <Row>
                <Col :xs="0" :md="18">
                {{ index+1 }}. 
                <a href="#">
                  {{ passage }}
                </a>
                </Col>
                <Col :xs="0" :md="6">
                <Button
                  style="margin-right: 10px"
                  icon="md-create"
                  size="large"
                  @click="handleEdit()"
                >
                  编辑
                </Button>
                <Button
                  icon="ios-trash-outline"
                  size="large"
                  @click="handleDelete()"
                >
                  删除
                </Button>
                </Col>
                <Col :xs="14" :md="0">
                {{ index+1 }}. 
                <a href="#">
                  {{ passage }}
                </a>
                </Col>
                <Col :xs="10" :md="0">
                <Button
                  style="margin-right: 10px"
                  icon="md-create"
                  size="small"
                  @click="handleEdit()"
                >
                  编辑
                </Button>
                <Button
                  icon="ios-trash-outline"
                  size="small"
                  @click="handleSubmit()"
                >
                  删除
                </Button>
                </Col>
              </Row>
            </p>
          </div>
        </Row>
      </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
    import { Card, Row, Col, Button, Select, Option, Divider } from 'iview';
    import api from '../axios/api'
    export default {
        components:{
            Card, Row, Col, Button, Select, Option, Divider
        },
        data () {
          return {
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
                passage: ['sdfdsf']
              }
            ],
          }
        },
        mounted: function() {
          this.init()
        },
        methods: {
          init: function() {
            // 没有文章标题的url
            api.get_manage().then(res => {
              for(var i in this.columnList) {
                this.columnList[i].passage = res.data.body[i]
              }
            })
          },
          handleDelete: function() {
            // 删除文章的column page不知道怎么获得
            api.delete(columm, page).then(res => {
              alert("删除成功");
            })
          },
          handleEdit: function() {
            api.to_edit(column, page).then(res => {
              // 
            })
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
    margin: 20px;
    padding-left: 20px;
  }

  a {
    color: black;
  }
</style>
