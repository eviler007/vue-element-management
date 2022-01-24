import { ThemeType } from '@/themes'

export interface AppType extends Object {
  isCollapse: boolean,
  theme: string,
  themeList: readonly ThemeType[]
}

export interface UserType extends Object {
  userid: string,
  username: string,
  avatar: string,
  permissionList: Array<string>
}

export interface StoreType extends Object {
  app: AppType,
  user: UserType
}