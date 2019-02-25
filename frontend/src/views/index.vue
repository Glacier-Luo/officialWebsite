<template>
  <div>
    <Row
      type="flex"
      justify="center"
    >
      <Col>
      <Card style="width: 320px">
        <!--此处应为一张宣传图-->
        <img src="../assets/logo.png">
      </Card>
      </Col>
    </Row>
    <Row
      type="flex"
      justify="center"
    >
      <Col>
      <h2>新闻</h2>
      </Col>
    </Row>
    <Row
      type="flex"
      justify="center"
    >
      <Col>
      <h2>友情链接</h2>
      </Col>
    </Row>
  </div>
  <!--<div>-->
  <!--<Card style="width: 320px">-->
  <!--<div style="text-align:center">-->
  <!--<img src="../assets/logo.png">-->
  <!--<h3>首页</h3>-->
  <!--</div>-->
  <!--</Card>-->
  <!--</div>-->
</template>

<script>
    import { Card, Row, Col } from 'iview';
    export default {
        components:{
            Card, Row, Col
        }
    }
</script>

<style scoped>

</style>
