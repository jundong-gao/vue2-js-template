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
        <el-button type="primary" @click="showLoading">showLoading</el-button>
        <el-input v-model.trim="info.name"></el-input>
        <el-input v-model.trim="info.age"></el-input>
        <el-input v-model.trim="info.company.code"></el-input>
        <el-input v-model.trim="info2.address"></el-input>
        {{info}}
        {{info2}}

        <qz-echarts style="width: 100px; height: 100px;"></qz-echarts>
        <qz-echarts style="width: 100px; height: 100px;"></qz-echarts>

        <el-button @click="showModal = true">modal</el-button>
        <el-button @click="qzConfirm">$qzConfirm</el-button>

        <qz-modal v-model="showModal" title="asdasdsd" width="200px" @confirm="confirmModal">
            是否要删除？
        </qz-modal>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                showModal: false,
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
        async mounted() {
            setTimeout(() => {
                this.$ui.hideLoading()
            },2000)

            let b = await $http.test.test2(this.info)
            this.$http.gao.gao1().then(res => {
                // console.log('gao1::::::::::::::::', res)
            }).catch(e => {
                console.log('eeeeeeeee::::::::::::::::', e)
            })
            let gao2 = await this.$http.gao.gao2()
        },
        methods: {
            qzConfirm() {
                this.$qzConfirm('标题', '内容', res => {
                    $ui.showToast(res, 'info')
                })
            },
            showLoading() {
                this.$ui.showLoading()
                setTimeout(() => {
                    this.$ui.hideLoading()
                }, 3000)
            },
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
            },
            confirmModal(e){
                console.log('e::::::::::::::::', e)
                this.$ui.showToast(e, 'info')
            }
        }
    }
</script>

<style scoped>

</style>
