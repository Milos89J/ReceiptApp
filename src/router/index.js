import {createRouter, createWebHistory} from 'vue-router'

import PageHome from '@/pages/PageHome';
import PageReceiptDetails from '@/pages/PageReceiptDetails'
import PageAddEdit from '@/pages/PageAddEdit'

const router = createRouter({
    routes: [
        {
            path: '/',
            name: 'PageHome',
            component: PageHome
        },
        {
            path: '/receipt/:id',
            name: 'PageReceiptDetails',
            component: PageReceiptDetails
        },
        {
            path: '/add-receipt',
            name: 'PageAdd',
            component: PageAddEdit
        },
        {
            path: '/edit-receipt/:id',
            name: 'PageEdit',
            component: PageAddEdit
        }
    ],
    history: createWebHistory()
})

export default router;