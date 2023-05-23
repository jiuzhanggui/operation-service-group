// 订单相关的API
import request from "@/utils/request";

/**
 * ES数据请求API
 * @param params
 * @returns {AxiosPromise}
 */
export function getEsInfoAPI(params) {
  return request({
    url: `operation/orderInfo/getEsOrderInfo`,
    method: 'post',
    data: params,
  })
}

/**
 * 主单数据请求API
 * @param params
 * @returns {AxiosPromise}
 */
export function getOrderInfoAPI(params) {
  return request({
    url: `operation/orderInfo/getOrderInfo`,
    method: 'post',
    data: params,
  })
}

/**
 * 子单数据请求API
 * @param params
 * @returns {AxiosPromise}
 */
export function getSuOrderInfoAPI(params) {
  return request({
    url: `operation/orderInfo/getSubOrderInfo`,
    method: 'post',
    data: params,
  })
}

/**
 * 退款订单数据请求API
 * @param params
 * @returns {AxiosPromise}
 */
export function getRefundOrderInfoAPI(params) {
  return request({
    url: `operation/orderInfo/getRefundOrderInfo`,
    method: 'post',
    data: params,
  })
}

/**
 * 平台订单详情请求API
 * @param params
 * @returns {AxiosPromise}
 */
export function getPlatformOrderInfo(params) {
  return request({
    url: `operation/orderInfo/getPlatformOrderInfo`,
    method: 'post',
    data: params,
  })}

/**
 * 平台订单退款请求API
 * @param params
 * @returns {AxiosPromise}
 */
export function getPlatformOrderRefundInfo(params) {
  return request({
    url: `operation/orderInfo/getPlatformOrderRefundInfo`,
    method: 'post',
    data: params,
  })}
