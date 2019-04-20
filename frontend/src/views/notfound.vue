<template>
    <div>
        <Row type="flex" justify="center">
            <Col>
                <div style="text-align: center; margin-top: 80px; height: 600px">
                    <p style="font-size: 150px">404</p>
                    <p style="font-size: 40px">ERROR PAGE</p>
                    <p style="font-size: 30px">您访问的页面不存在</p>
                </div>
            </Col>
        </Row>
    </div>
</template>

<script>
    import { Row, Col, Divider } from 'iview';
    export default {
        components:{
            Row, Col, Divider
        }
    }
</script>

<style scoped>
</style>