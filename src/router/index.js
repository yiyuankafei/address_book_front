import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'
import AddressBook from '@/pages/addressBook'
import Add from '@/pages/components/add'
import Detail from '@/pages/components/detail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
        path: '/addressBook',
        name: 'AddressBook',
        component: AddressBook
    },
    {
        path: '/add',
        name: 'Add',
        component: Add
    },
    {
        path: '/detail/:id',
        name: 'Detail',
        component: Detail
    }
  ]
})
