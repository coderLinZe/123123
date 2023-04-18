import {
  getAmountListData,
  getGoodsCategoryCount,
  getGoodsAddressSale,
  getGoodsCategorySale,
  getGoodsCategoryFavor
} from '@/service/main/analysis/analysis'
import { defineStore } from 'pinia'

interface IAnalysisStore {
  amountList: any[]
  goodsCategoryCount: any[]
  goodsCategoryAddress: any[]
  goodsCategorySale: any[]
  goodsCategoryFavor: any[]
}

const useAnalysisStore = defineStore('analysis', {
  state: (): IAnalysisStore => ({
    amountList: [],
    goodsCategoryCount: [],
    goodsCategoryAddress: [],
    goodsCategorySale: [],
    goodsCategoryFavor: []
  }),
  actions: {
    async fetchAnalysisDataAction() {
      getAmountListData().then((res) => {
        this.amountList = res.data
      })
      getGoodsCategoryCount().then((res) => {
        this.goodsCategoryCount = res.data
      })
      getGoodsAddressSale().then((res) => {
        this.goodsCategoryAddress = res.data
      })
      getGoodsCategorySale().then((res) => {
        this.goodsCategorySale = res.data
      })
      getGoodsCategoryFavor().then((res) => {
        this.goodsCategoryFavor = res.data
      })
    }
  }
})

export default useAnalysisStore
