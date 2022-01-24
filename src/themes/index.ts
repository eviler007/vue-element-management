import default_theme from './default.css'
import red_theme from './red.css'
import purple_theme from './purple.css'

export interface ThemeType extends Object {
  key: string,
  name: string,
  color: string
}
const themeList: ThemeType[] = [
  {
    key: 'default', name: 'Daybreak Blue', color: '#409eff'
  },
  {
    key: 'red', name: 'Dust Red', color: '#f5222d'
  },
  {
    key: 'purple', name: 'Golden Purple', color: '#9C27B0'
  }
]
const defaultTheme: string = themeList[0].key
const themeListKeys = themeList.map(item => item.key)

const changeTheme = (type: string) => {
  type = !type || themeListKeys.indexOf(type) === -1 ? defaultTheme : type
  let themeModule = default_theme
  switch (type) {
    case 'default':
      themeModule = default_theme
      break;
    case 'red':
      themeModule = red_theme
      break;
    case 'purple':
      themeModule = purple_theme
      break;
    default:
      break;
  }
  const cssVarMap =
      themeModule.split('\n').slice(1, -1)
      .map(item => item.trim())
      .reduce((res, item) => {
        /(.+):(.+);/g.test(item)
        /* @ts-ignore */
        res[RegExp.$1] = RegExp.$2.trim()
        return res;
      }, {})
  // 设置css 变量
  Object.keys(cssVarMap).map(item => {
    /* @ts-ignore */
    document.documentElement.style.setProperty(item, cssVarMap[item])
  })
  return type
}

export {
  defaultTheme,
  themeList,
  changeTheme,
}