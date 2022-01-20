import default_theme from './default.css'
import dark_theme from './dark.css'

const defaultTheme: string = 'default'

export interface ThemeType extends Object {
  key: string,
  name: string
}
const themeList: ThemeType[] = [
  {
    key: 'default', name: '默认'
  },
  {
    key: 'dark', name: '暗黑'
  }
]
const themeListKeys = themeList.map(item => item.key)

const changeTheme = (type: string) => {
  type = !type || themeListKeys.indexOf(type) === -1 ? defaultTheme : type
  let themeModule = default_theme
  switch (type) {
    case 'default':
      themeModule = default_theme
      break;
    case 'dark':
      themeModule = dark_theme
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
}

export {
  defaultTheme,
  themeList,
  changeTheme,
}