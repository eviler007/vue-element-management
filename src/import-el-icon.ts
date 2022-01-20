import { App } from 'Vue'

import {
  HomeFilled, Edit, Expand, Fold, FullScreen, ArrowDown, Eleme, List
} from '@element-plus/icons-vue'

export default (app: App<Element>) => {
  app.component(HomeFilled.name, HomeFilled)
    .component(Edit.name, Edit)
    .component(Expand.name, Expand)
    .component(Fold.name, Fold)
    .component(FullScreen.name, FullScreen)
    .component(ArrowDown.name, ArrowDown)
    .component(Eleme.name, Eleme)
    .component(List.name, List)
}