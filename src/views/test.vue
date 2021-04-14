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
            return {
                info: {
                    name: '高俊东',
                    age: 18
                }
            }
        },
        mounted() {
            let ins = this.$ui.showLoading('加载中')

            console.log('this.$methods.createUUID::::::::::::::::', this.$methods.createUUID())

            setTimeout(() => {
                this.$ui.hideLoading()
            },1000)



            $http.test.test2({
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
                this.$storage.setItem('userinfo', this.info, 10)
                this.$methods.showToast('设置成功')
            },
            getStorage() {
                let info = this.$storage.getItem('userinfo')
                this.$methods.showToast(JSON.stringify(info) || '数据为空')
            }
        }
    }
</script>

<style scoped>

</style>
