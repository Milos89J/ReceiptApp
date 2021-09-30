import { createStore } from 'vuex'

import axios from "axios"

import baseUrl from '../utils/index';

const store = createStore({
    state: {
        receipts: [],
        receipt: {}
    },
    getters: {
        receipts(state) {
            return state.receipts;
        },
        receipt(state) {
            return state.receipt;
        }
    },
    actions: {
        getReceipts({ state, commit }) {
            axios.get(baseUrl).then(res => {
                const receipts = res.data;
                commit('setReceipts', receipts)
                return state.receipts
            }).catch(e => {
                console.error(e);
            });
        },
        getReceiptById({ state, commit }, receiptId) {
            axios.get(baseUrl + `/${receiptId}`).then(res => {
                const receipt = res.data;
                commit('setReceipt', receipt)
                return state.receipt
            }).catch(e => {
                console.error(e);
            });
        },
        createReceipt({ state, commit }, receiptData) {
            axios.post(baseUrl, receiptData).then(res => {
                const receipt = res.data;
                commit('setReceipt', receipt)
                return state.receipt
            }).catch(e => {
                console.error(e);
            });
        },
        updateReceipt({ state, commit }, data) {
            axios.patch(baseUrl + `/${data.id}`, data.data).then(res => {
                const receipt = res.data;
                commit('setReceipt', receipt)
                return state.receipt
            }).catch(e => {
                console.error(e);
            });
        },
        deleteReceipt({ state, commit }, receiptId) {
            axios.delete(baseUrl + `/${receiptId}`).then(res => {
                const receipt = res.data;
                commit('setReceipt', receipt)
                return state.receipt
            }).catch(e => {
                console.error(e);
            });
        }
    },
    mutations: {
        setReceipts(state, receipts) {
            state.receipts = receipts
        },
        setReceipt(state, receipt) {
            state.receipt = receipt
        },
    }
})

export default store;