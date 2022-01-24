import BasicLayout from '@/layouts/BasicLayout.vue'
import RouterView from '@/layouts/RouterView.vue'
import { RouteRecordRaw } from 'vue-router'

export const routerToMenu: RouteRecordRaw[] = [
  // dashboard
  {
    path: '/dashboard',
    name: 'dashboard',
    redirect: '/dashboard/workplace',
    component: RouterView,
    meta: {
      title: 'Dashboard',
      icon: 'home-filled'
    },
    children: [
      {
        name: 'analysis',
        path: '/dashboard/analysis',
        component: () => import('@/views/dashboard/Analysis.vue'),
        meta: {
          title: 'Analysis'
        }
      },
      {
        name: 'workplace',
        path: '/dashboard/workplace',
        component: () => import('@/views/dashboard/Workplace.vue'),
        meta: {
          title: 'Workplace'
        }
      },
    ]
  },
  // form
  {
    path: '/form',
    name: 'form',
    redirect: '/form/basic-form',
    component: RouterView,
    meta: {
      title: 'Form',
      icon: 'edit'
    },
    children: [
      {
        name: 'BasicForm',
        path: '/form/basic-form',
        component: () => import('@/views/form/BasicForm.vue'),
        meta: {
          title: 'BasicForm'
        }
      },
      {
        name: 'StepForm',
        path: '/form/step-form',
        component: () => import('@/views/form/StepForm.vue'),
        meta: {
          title: 'StepForm'
        }
      },
      {
        name: 'AdvancedForm',
        path: '/form/advanced-form',
        component: () => import('@/views/form/AdvancedForm.vue'),
        meta: {
          title: 'AdvancedForm'
        }
      },
    ]
  },
  // list
  {
    path: '/list',
    name: 'list',
    redirect: '/list/table-list',
    component: RouterView,
    meta: {
      title: 'List',
      icon: 'list'
    },
    children: [
      {
        name: 'TableList',
        path: '/list/table-list',
        component: () => import('@/views/list/TableList.vue'),
        meta: {
          title: 'Search Table'
        }
      },
      {
        name: 'BasicList',
        path: '/list/basic-list',
        component: () => import('@/views/list/BasicList.vue'),
        meta: {
          title: 'Basic List'
        }
      },
      {
        name: 'CardList',
        path: '/list/card-list',
        component: () => import('@/views/list/CardList.vue'),
        meta: {
          title: 'Card List'
        }
      },
      {
        name: 'SearchList',
        path: '/list/search',
        redirect: '/list/search/article',
        component: () => import('@/views/list/search/Index.vue'),
        meta: {
          title: 'Search List'
        },
        children: [
          {
            name: 'SearchListArticle',
            path: '/list/search/article',
            component: () => import('@/views/list/search/Article.vue'),
            meta: {
              title: 'Search List(articles)'
            },
          },
          {
            name: 'SearchListProject',
            path: '/list/search/project',
            component: () => import('@/views/list/search/Project.vue'),
            meta: {
              title: 'Search List(projects)'
            },
          },
          {
            name: 'SearchListApp',
            path: '/list/search/application',
            component: () => import('@/views/list/search/Application.vue'),
            meta: {
              title: 'Search List(applications)'
            },
          }
        ]
      },
    ]
  },
]

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: BasicLayout,
    redirect: '/dashboard',
    meta: {
      title: 'Home'
    },
    children: routerToMenu
  }
];
