import { App } from 'vue'
import svgToComponent from '@/utils/svgToComponent'

import {
  HomeFilled, Edit, Expand, Fold, FullScreen, ArrowDown, Eleme, List,
  User, Setting, Plus
} from '@element-plus/icons-vue'

import logoutSvg from '@/assets/svgs/logout.svg?raw'

export default (app: App<Element>) => {
  app.component(HomeFilled.name, HomeFilled)
    .component(Edit.name, Edit)
    .component(Expand.name, Expand)
    .component(Fold.name, Fold)
    .component(FullScreen.name, FullScreen)
    .component(ArrowDown.name, ArrowDown)
    .component(Eleme.name, Eleme)
    .component(List.name, List)
    .component(User.name, User)
    .component(Setting.name, Setting)
    .component(Plus.name, Plus)
    .component('Logout', svgToComponent(logoutSvg, 'Logout'))
}