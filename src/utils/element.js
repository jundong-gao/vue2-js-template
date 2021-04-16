/**
 * Created by WebStorm.
 * User: 高俊东
 * Date: 4/16/21
 * Time: 9:31 AM
 */
import {
    Button,
    DatePicker,
    Form,
    FormItem,
    Input,
    Select,
    Option,
    Radio,
    Checkbox,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Tabs,
    TabPane
} from 'element-ui'


let element = {
    install: function (Vue) {
        Vue.use(Button)
        Vue.use(DatePicker)
        Vue.use(Form)
        Vue.use(FormItem)
        Vue.use(Input)
        Vue.use(Select)
        Vue.use(Option)
        Vue.use(Radio)
        Vue.use(Menu)
        Vue.use(Submenu)
        Vue.use(MenuItem)
        Vue.use(MenuItemGroup)
        Vue.use(Tabs)
        Vue.use(TabPane)
    }
}

export default element
