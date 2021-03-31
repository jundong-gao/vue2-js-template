<!--
 * Created by WebStorm.
 * User: 高俊东
 * Date: 3/30/21
 * Time: 1:19 PM
-->
<template>
    <div style="height: 2000px;">
        <el-button type="primary" @click="setStorage">setStorage（10秒）</el-button>
        <el-button type="primary" @click="getStorage">getStorage</el-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        mounted() {
            let ins = this.$methods.showLoading('加载中')


            setTimeout(() => {
                this.$methods.hideLoading()
            },1000)



            this.$http.test.test2({
                age: 18,
                name:'张三'
            })

            this.$http.gao.gao1().then(res => {
                console.log('gao1::::::::::::::::', res)
            }).catch(e => {
                console.log('e::::::::::::::::', e)
            })
            this.$http.gao.gao2().then(res => {
                console.log('gao2::::::::::::::::', res)
            })

        },
        methods: {
            setStorage() {
                this.$storage.setItem('name', {name: '高俊东', age: 18}, 10)
            },
            getStorage() {
                let obj = this.$storage.getItem('name')

                alert(JSON.stringify(obj))
            }
        }
    }
</script>

<style scoped>

</style>
