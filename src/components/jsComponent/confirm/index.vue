<!--
 * Created by WebStorm.
 * User: 高俊东
 * Date: 4/15/21
 * Time: 5:39 PM
-->
<template>
    <transition name="fade">
        <div class="qz-mask flex-jac" v-show="show">
            <div class="qz-content">
                <div>{{title}}</div>
                <div>{{content}}</div>
                <div class="flex-jasc">
                    <div></div>
                    <div class="flex-aic">
                        <div @click.stop="confirm('cancel')">取消</div>
                        <div @click.stop="confirm('confirm')">确认</div>
                    </div>
                </div>
            </div>
        </div>
    </transition>

</template>

<script>
    export default {
        data() {
            return {
                show: false
            }
        },
        mounted() {
            setTimeout(() => {
                this.show = true
            },100)
        },
        methods: {
            confirm(type){
                this.cb(type)
                this.show = false
                setTimeout(() => {
                    this.$el.parentNode && this.$el.parentNode.removeChild(this.$el) // 从DOM里将这个组件移除
                }, 1000)
            }
        }

    }
</script>

<style scoped lang="scss">
    .qz-mask{position: fixed; left: 0; top: 0; z-index: 1000; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5);}
    .qz-content{width: 200px; background-color: #fff; transition: all .3s ease-out;}




    .fade-enter-active, .fade-leave-active {
        transition: all .3s ease-out;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
        .qz-content{
            margin-top: -50px;
        }
    }
</style>
