# vue2-js-template
```
.
├── README.md
├── babel.config.js
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.vue
│   ├── api  // api层
│   │   ├── gao.api.js
│   │   ├── methods.js
│   │   └── test.api.js
│   ├── assets // 资源
│   │   ├── logo.png
│   │   └── style
│   ├── components // 组件
│   ├── http // axios封装
│   │   ├── config.js
│   │   └── server.js
│   ├── main.js
│   ├── router
│   │   └── index.js
│   ├── store
│   │   └── index.js
│   ├── utils // 工具类
│   │   ├── methods.js // 方法类
│   │   ├── ui.js // 交互类
│   │   ├── element.js // 按需加载ele
│   │   ├── rem.js // rem方案
│   │   └── storage.js // 缓存类
│   └── views // 视图模板
│       └── test.vue
└── vue.config.js // webpack配置
```

## 方法类
- createUUID()
- deepClone(data)
- formatDate(date)
```js
this.$methods.xxx
```

## 交互类
- showToast(content, type)
- showLoading | hideLoading
```js
this.$ui.xxx
```

## 缓存类
- setStorage(key, data, expired)
- getStorage(key)
- remoteStorage(key)
```js
this.$storage.xxx
```

## 自定义组件
> **为很好的适应系统UI主题，特此封装两个交互组件**
- 模态框
```vue
<qz-modal v-model="show" title="标题" width="500px">
    <template>content</template>
    <template slot="footer">底部</template>
</qz-modal>
```
- 询问框
```js
this.$qzConfirm('标题', '内容', res => {
    console.log('res::::::::::::::::', res)
})
```

## ui
- 使用按需加载，封装在@/utils/element.js。

## 通用全局组件
- @comps/global/**.vue
- 使用
    ```
    <qz-${component.name} />
    ```




## Project setup
```
npm install
```
```
npm run serve
```
```
npm run build
```

