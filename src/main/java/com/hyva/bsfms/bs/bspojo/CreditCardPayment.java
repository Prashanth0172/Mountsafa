/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hyva.bsfms.bs.bspojo;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;

import java.util.Date;
import java.util.List;

/**
 *
 * @author admin
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class CreditCardPayment {
    private double totalCCPAmountRefunded;
    private double totalCCPDiscount;
    private double totalCCPAmountTendered;
    private Date chequeDate;
    private String chequeBankName;
    private String transactionNo;
    private String totalCCPAfterDiscount;
    private String paymentType;

    private List<MultiCardPayment> cardPaymentList;

    public String getPaymentType() {
        return paymentType;
    }

    public void setPaymentType(String paymentType) {
        this.paymentType = paymentType;
    }

    public Date getChequeDate() {
        return chequeDate;
    }

    public void setChequeDate(Date chequeDate) {
        this.chequeDate = chequeDate;
    }

    public String getChequeBankName() {
        return chequeBankName;
    }

    public void setChequeBankName(String chequeBankName) {
        this.chequeBankName = chequeBankName;
    }

    public String getTotalCCPAfterDiscount() {
        return totalCCPAfterDiscount;
    }

    public void setTotalCCPAfterDiscount(String totalCCPAfterDiscount) {
        this.totalCCPAfterDiscount = totalCCPAfterDiscount;
    }

    public String getTransactionNo() {
        return transactionNo;
    }

    public void setTransactionNo(String transactionNo) {
        this.transactionNo = transactionNo;
    }

    public double getTotalCCPAmountRefunded() {
        return totalCCPAmountRefunded;
    }

    public void setTotalCCPAmountRefunded(double totalCCPAmountRefunded) {
        this.totalCCPAmountRefunded = totalCCPAmountRefunded;
    }

    public double getTotalCCPDiscount() {
        return totalCCPDiscount;
    }

    public void setTotalCCPDiscount(double totalCCPDiscount) {
        this.totalCCPDiscount = totalCCPDiscount;
    }

    public double getTotalCCPAmountTendered() {
        return totalCCPAmountTendered;
    }

    public void setTotalCCPAmountTendered(double totalCCPAmountTendered) {
        this.totalCCPAmountTendered = totalCCPAmountTendered;
    }

    public List<MultiCardPayment> getCardPaymentList() {
        return cardPaymentList;
    }

    public void setCardPaymentList(List<MultiCardPayment> cardPaymentList) {
        this.cardPaymentList = cardPaymentList;
    }
}
