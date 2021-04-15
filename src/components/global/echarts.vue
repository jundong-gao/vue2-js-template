<!--
 * Created by WebStorm.
 * User: 高俊东
 * Date: 4/15/21
 * Time: 9:55 AM
-->
<template>
    <div class="qz-echarts" :ref="ref_id"></div>
</template>

<script>
    export default {
        name: "echarts",
        props: {
            options: Object
        },
        data() {
            return {
                ref_id: this.$methods.createUUID(),
                echart: null
            }
        },
        methods: {
            init(opt) {
                this.echart = echarts.init(this.$refs[this.ref_id])
                this.echart.clear()
                this.echart.setOption(opt)
            }
        },
        watch: {
            options: {
                immediate: true,
                handler(opt) {
                    if(!opt) return
                    if(this.chart) {
                        this.echart.clear()
                        this.echart.setOption(opt)
                        this.echart.resize()
                    }else{
                        this.init(opt)
                    }
                }
            }
        },
    }
</script>

<style scoped lang="scss">
    .qz-echarts{width: 100%; height: 100%;}
</style>
