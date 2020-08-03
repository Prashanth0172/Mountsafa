/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hyva.bsfms.bs.bsentities;


import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;

@Entity

public class PaymentMethod implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    private Long paymentmethodId;
    private String paymentmethodName;
    private String paymentmethodDescription;
    private String paymentmethodType;
    private String status;
    private String defaultType;
    private String accountMaster;
    private String validateVoucher;

    public String getValidateVoucher() {
        return validateVoucher;
    }

    public void setValidateVoucher(String validateVoucher) {
        this.validateVoucher = validateVoucher;
    }

    public String getDefaultType() {
        return defaultType;
    }

    public void setDefaultType(String defaultType) {
        this.defaultType = defaultType;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }


    public Long getPaymentmethodId() {
        return paymentmethodId;
    }

    public void setPaymentmethodId(Long paymentmethodId) {
        this.paymentmethodId = paymentmethodId;
    }

    public String getPaymentmethodName() {
        return paymentmethodName;
    }

    public void setPaymentmethodName(String paymentmethodName) {
        this.paymentmethodName = paymentmethodName;
    }

    public String getPaymentmethodDescription() {
        return paymentmethodDescription;
    }

    public void setPaymentmethodDescription(String paymentmethodDescription) {
        this.paymentmethodDescription = paymentmethodDescription;
    }

    public String getPaymentmethodType() {
        return paymentmethodType;
    }

    public void setPaymentmethodType(String paymentmethodType) {
        this.paymentmethodType = paymentmethodType;
    }


    public String getAccountMaster() {
        return accountMaster;
    }

    public void setAccountMaster(String accountMaster) {
        this.accountMaster = accountMaster;
    }
}
