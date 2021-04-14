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
        <el-button type="primary" @click="resetData">resetData</el-button>
        <el-input v-model.trim="info.name"></el-input>
        <el-input v-model.trim="info.age"></el-input>
        <el-input v-model.trim="info.company.code"></el-input>
        <el-input v-model.trim="info2.address"></el-input>
        {{info}}
        {{info2}}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                info: {
                    name: '高俊东',
                    age: 18,
                    company: {
                        code: '123',
                        phone: '123'
                    }
                },
                info2: {
                    address: '浙江杭州'
                }
            }
        },
        mounted() {

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
            resetData() {
                this.$ui.resetData('info.company.code', this)
            },
            setStorage() {
                this.$storage.setItem('userinfo', this.info, 10)
                this.$ui.showToast('设置成功')
            },
            getStorage() {
                let info = this.$storage.getItem('userinfo')
                this.$ui.showToast(info ? JSON.stringify(info) : '数据为空')
            }
        }
    }
</script>

<style scoped>

</style>
