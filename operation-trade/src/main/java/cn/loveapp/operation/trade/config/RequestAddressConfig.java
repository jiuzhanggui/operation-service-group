package cn.loveapp.operation.trade.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

import lombok.Data;

/**
 * @author xujianhu
 * @date 2023-03-20 11:41
 * @Description: 请求地址配置
 */
@Data
@Configuration
public class RequestAddressConfig {

    /**
     * uac 服务连接地址
     */
    @Value("${operation.uac.url:http://172.18.5.187:30018}")
    private String uacUrl;

    /**
     * 获取用户信息path
     */
    @Value("${operation.uac.getUserFullInfo.path:/export/uac/user/getUserFullInfo}")
    private String uacGetUserFullInfoPath;

    /**
     * 获取订单信息url
     */
//    @Value("${operation.trade.url:http://172.17.0.21:30311}")
    @Value("${operation.trade.url:http://127.0.0.1:8080}")
    private String orderInfoUrl;

    /**
     * 获取平台订单详情url
     */
    @Value("${operation.trade.platformOrderInfo.path:/monitor/operations/platform.order.get}")
    private String platformOrderInfoPath;

    /**
     * 获取平台订单退款详情地址
     */
    @Value("${operation.trade.platformOrderRefundInfo.path:/monitor/operations/platform.refund.get}")
    private String platformOrderRefundInfoPath;
}
