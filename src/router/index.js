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
            path: '/add-receipt',
            name: 'PageAdd',
            component: PageAddEdit
        },
        {
            path: '/receipt/:id',
            name: 'PageReceiptDetails',
            component: PageReceiptDetails
        },
        /*{
            path: '/edit-receipt',
            name: 'PageEditReceipt',
            component: PageAddEdit
        }*/
    ],
    history: createWebHistory()
})

export default router;