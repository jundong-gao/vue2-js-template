<!--
 * Created by WebStorm.
 * User: 高俊东
 * Date: 4/15/21
 * Time: 10:00 AM
-->
<template>
    <transition name="fade">
        <div class="qz-modal flex-jac" v-show="value" @click.self="confirm('cancel')">
            <div class="qz-modal-content" :style="contentStyle">
                <div class="qz-modal-content-title">
                    <slot name="title">{{title}}</slot>
                    <i class="el-icon-close qz-modal-content-title-icon" @click.stop="confirm('cancel')"></i>
                </div>
                <div class="qz-modal-content-body">
                    <slot></slot>
                </div>
                <div class="qz-modal-content-footer">
                    <slot name="footer">
                        <div class="flex-jasc">
                            <div></div>
                            <div class="flex-aic">
                                <div class="qz-modal-content-footer-cancel" @click.stop="confirm('cancel')">取消</div>
                                <div class="qz-modal-content-footer-confirm" @click.stop="confirm('confirm')">确定</div>
                            </div>
                        </div>
                    </slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "modal",
        props: {
            value: {
                type: Boolean,
                default: false
            },
            width: {
                type: String,
                default: '300px'
            },
            title: {
                type: String,
                default: '提示'
            }
        },
        computed: {
            contentStyle() {
                return {
                    width: this.width
                }
            }
        },
        data() {
            return {

            }
        },
        watch: {
            value: {
                handler: function (val) {
                    document.body.style.overflow = val ? 'hidden' : ''
                }
            }
        },
        methods: {
            confirm(type) {
                this.$emit('confirm', type)
                this.$emit('input', false)
            }
        }
    }
</script>

<style scoped lang="scss">
    .qz-modal{position: fixed; z-index: 1000; padding-bottom: 300px; overflow: auto; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, .5);
        &-content{background-color: #fff; z-index: 1001; transition: all .5s ease-in-out;
            &-title{padding: 10px; position: relative; font-size: 16px; font-weight: bolder;
                &-icon{position: absolute; color: red; right: 10px; cursor: pointer; font-size: 20px; top: 50%; transform: translateY(-50%);}
            }
            &-body{padding: 0 10px; font-size: 14px; max-height: 500px; overflow: auto;}
            &-footer{padding: 10px;
                &-cancel{color: #b4b4b4; cursor: pointer; font-size: 14px;}
                &-confirm{color: #66b1ff; margin-left: 10px; cursor: pointer; font-size: 14px;}
            }
        }
    }


    .fade-enter-active, .fade-leave-active {
        transition: all .5s ease-in-out;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
        .qz-modal-content{
            margin-top: -100px;
        }
    }
</style>
