<template>
  <el-tabs type="border-card" style="height: 100%">
    <el-tab-pane label="ES存单数据库">
      <div slot="label" @click="getEsOrderInfo">ES存单数据库</div>
      <!--json展示-->
      <JsonView ref="esOrderData"></JsonView>
      <!--数据库展示-->
      <!--<EsOrderInfoTable ref="esOrderData"></EsOrderInfoTable>-->
    </el-tab-pane>

    <el-tab-pane label="Mongo主单数据库">
      <div slot="label" @click="getMongoMainOrderInfo">Mongo主单数据库</div>
      <!--json展示-->
      <JsonView ref="mangoMainOrderData"></JsonView>
      <!--table展示-->
      <!--<TcOrderTable ref="mangoMainOrderData"></TcOrderTable>-->
    </el-tab-pane>

    <el-tab-pane label="Mongo子单数据库">
      <div slot="label" @click="getMongoSubOrderInfo">Mongo子单数据库</div>
      <!--json展示-->
      <JsonView ref="mangoSubOrderData"></JsonView>
      <!--table展示-->
      <!--<SubOrderTable ref="mangoSubOrderData"></SubOrderTable>-->
    </el-tab-pane>

    <el-tab-pane label="退款订单库">
      <div slot="label" @click="getRefundOrder">退款订单库</div>
      <!--json展示-->
      <JsonView ref="refundOrderData"></JsonView>
      <!--table展示-->
      <!--<RefundOrderTable ref="refundOrderData"></RefundOrderTable>-->
    </el-tab-pane>

    <el-tab-pane label="FullInfoAPI返回信息">
      <div slot="label" @click="getOrderFullInfoApiInfo">FullInfoAPI返回信息</div>
      <!--json展示-->
      <JsonView ref="OrderFullInfoData"></JsonView>
      <!--table展示-->
<!--      <FullInfoTable ref="OrderFullInfoData"></FullInfoTable>-->
    </el-tab-pane>

    <el-tab-pane label="退款API结果">
      <div slot="label" @click="getOrderRefundApiInfo">退款API结果</div>
      <!--json展示-->
      <JsonView ref="refundAPIData"></JsonView>
      <!--table展示-->
<!--      <RefundApiTable ref="refundAPIData"></RefundApiTable>-->

    </el-tab-pane>

  </el-tabs>
</template>

<script>
import Table from "@/views/operation/trade/common/Table";
import EsOrderInfoTable from "@/views/operation/trade/view/table/EsOrderInfoTable";
import FullInfoTable from "@/views/operation/trade/view/table/FullInfoTable";
import SubOrderTable from "@/views/operation/trade/view/table/SubOrderTable";
import RefundOrderTable from "@/views/operation/trade/view/table/RefundOrderTable";
import RefundApiTable from "@/views/operation/trade/view/table/RefundApiTable";
import TcOrderTable from "@/views/operation/trade/view/table/TcOrderTable";
import JsonView from "@/views/operation/trade/common/JsonView.vue";
import {
  getOrderInfoAPI,
  getSuOrderInfoAPI,
  getRefundOrderInfoAPI,
  getEsInfoAPI,
  getPlatformOrderInfo, getPlatformOrderRefundInfo
} from "@/api/operation/trade/orderInfo";

export default {
  name: "OrderInfoList",
  components: {
    Table, EsOrderInfoTable, FullInfoTable, SubOrderTable, RefundOrderTable, RefundApiTable, TcOrderTable, JsonView
  },
  props: {
    userInfo: {
      tcpType: Object,
      default: null
    }
  },

  data() {
    return {
      orderResultList: [],
    }
  },

  created() {
    this.getEsOrderInfo()
  },

  methods: {
    /**
     * 获取ES订单信息
     */
    getEsOrderInfo() {
      let userInfo = this.userInfo
      if (userInfo == null) {
        this.$message({
          type: 'warning',
          message: '请输入查询参数',
          center: true
        });
      } else {
        getEsInfoAPI(userInfo).then(res => {
          if (res.code === 200) {
            this.$message({
              type: 'success',
              message: res.msg,
              center: true
            });

            let body = res.data;
            this.orderResultList = body
            this.$refs.esOrderData.getData(body)
          } else {
            this.$message({
              type: 'error',
              message: res.msg,
              center: true
            });
          }
        })
      }

    },

    /**
     * 获取mongo主单信息
     */
    getMongoMainOrderInfo() {
      let userInfo = this.userInfo
      if (userInfo == null) {
        this.$message({
          type: 'warning',
          message: '请输入查询参数',
          center: true
        });
      } else {
        getOrderInfoAPI(userInfo).then(res => {
          if (res.code === 200) {
            this.$message({
              type: 'success',
              message: res.msg,
              center: true
            });
            let body = res.data;
            this.orderResultList = body
            this.$refs.mangoMainOrderData.getData(body)
          } else {
            this.$message({
              type: 'error',
              message: res.msg,
              center: true
            });
          }
        })
      }
    },

    /**
     * 获取mango子单信息
     */
    getMongoSubOrderInfo() {
      let userInfo = this.userInfo;
      if (userInfo == null) {
        this.$message({
          type: 'warning',
          message: '请输入查询参数',
          center: true
        });
      } else {
        getSuOrderInfoAPI(userInfo).then(res => {
          if (res.code === 200) {
            this.$message({
              type: 'success',
              message: res.msg,
              center: true
            });

            let body = res.data;
            this.orderResultList = body
            this.$refs.mangoSubOrderData.getData(body)
          } else {
            this.$message({
              type: 'error',
              message: res.msg,
              center: true
            });
          }
        })
      }
    },

    /**
     * 获取退款存单信息
     */
    getRefundOrder() {
      let userInfo = this.userInfo;
      if (userInfo == null) {
        this.$message({
          type: 'warning',
          message: '请输入查询参数',
          center: true
        });
      } else {
        let body = []
        getRefundOrderInfoAPI(userInfo).then(res => {
          if (res.code === 200) {
            this.$message({
              type: 'success',
              message: res.msg,
              center: true
            });

            body = res.data;
            this.orderResultList = body
            this.$refs.refundOrderData.getData(body)
          } else {
            this.$message({
              type: 'error',
              message: res.msg,
              center: true
            });
          }

        })
      }
    },

    /**
     * 获取FullInfoAPI返回信息
     */
    getOrderFullInfoApiInfo() {
      let userInfo = this.userInfo;
      if (userInfo == null) {
        this.$message({
          type: 'warning',
          message: '请输入查询参数',
          center: true
        });
      } else {
        getPlatformOrderInfo(userInfo).then(res => {
          if (res.code === 200) {
            this.$message({
              type: 'success',
              message: res.msg,
              center: true
            });
            let body = res.data;
            this.orderResultList = body
            this.$refs.OrderFullInfoData.getData(body)
          } else {
            this.$message({
              type: 'error',
              message: res.msg,
              center: true
            });
          }
        })
      }
    },

    /**
     * 获取RefundAPI返回信息
     */
    getOrderRefundApiInfo() {
      let userInfo = this.userInfo;
      if (userInfo == null) {
        this.$message({
          type: 'warning',
          message: '请输入查询参数',
          center: true
        });
      } else {
        getPlatformOrderRefundInfo(userInfo).then(res => {
          if (res.code === 200) {
            this.$message({
              type: 'success',
              message: res.msg,
              center: true
            });
          let body = res.data;
          this.orderResultList = body
          this.$refs.refundAPIData.getData(body)
          } else {
            this.$message({
              type: 'error',
              message: res.msg,
              center: true
            });
          }
        })
      }
    },
  }
}
</script>

<style scoped>

</style>
