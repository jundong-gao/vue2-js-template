<!--
 * Created by WebStorm.
 * User: 高俊东
 * Date: 4/15/21
 * Time: 5:39 PM
-->
<template>
    <transition name="fade">
        <div class="qz-mask" v-show="show" @click.self="confirm('cancel')">
            <div class="qz-content">
                <div class="qz-content-title">{{title}}</div>
                <div class="qz-content-desc">{{content}}</div>
                <div class="flex-jasc qz-confirm-operation">
                    <div></div>
                    <div class="flex-aic">
                        <div class="qz-confirm-btn cancel" @click.stop="confirm('cancel')">取消</div>
                        <div class="qz-confirm-btn confirm" @click.stop="confirm('confirm')">确认</div>
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
    .qz-mask{position: fixed; left: 0; top: 0; z-index: 1000; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); padding-top: 200px;}
    .qz-content{width: 200px; background-color: #fff; transition: all .3s ease-out; margin: 0 auto;
        &-title{font-size: 14px; font-weight: bolder; padding: 10px;}
        &-desc{font-size: 14px; padding: 0 10px;}
    }
    .qz-confirm-operation{ padding: 10px;
        .qz-confirm-btn{ font-size: 14px; cursor: pointer;
            &:last-child{margin-left: 10px;}
            &.cancel{color: #bbbbbb;}
            &.confirm{color: red;}
        }
    }





    .fade-enter-active, .fade-leave-active {transition: all .3s ease-out;}
    .fade-enter, .fade-leave-to {opacity: 0;
        .qz-content{margin-top: -50px;}
    }
</style>
