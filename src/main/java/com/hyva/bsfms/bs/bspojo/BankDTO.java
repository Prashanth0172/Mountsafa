package com.hyva.bsfms.bs.bspojo;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;

/**
 * Created by azgar.h on 6/30/2017.
 */

@JsonIgnoreProperties(ignoreUnknown = true)
public class BankDTO {

    private Long bankId;
    private String bankName;
    private String address;
    private String accountNo;
    private String iFSCCode;
    private String bankEmail;
    private String branchName;
    private String bankPhoneNo;
    private String bankAccountNo;

    private String description;
    private String locationId;
    private String useraccount_id;
    private String status;

    private long lglinkedAccount;
    private long lglinkedAccountForBankCharges;


    public Long getBankId() {
        return bankId;
    }

    public void setBankId(Long bankId) {
        this.bankId = bankId;
    }

    public String getBankName() {
        return bankName;
    }

    public void setBankName(String bankName) {
        this.bankName = bankName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getAccountNo() {
        return accountNo;
    }

    public void setAccountNo(String accountNo) {
        this.accountNo = accountNo;
    }

    public String getiFSCCode() {
        return iFSCCode;
    }

    public void setiFSCCode(String iFSCCode) {
        this.iFSCCode = iFSCCode;
    }

    public String getBankEmail() {
        return bankEmail;
    }

    public void setBankEmail(String bankEmail) {
        this.bankEmail = bankEmail;
    }

    public String getBranchName() {
        return branchName;
    }

    public void setBranchName(String branchName) {
        this.branchName = branchName;
    }

    public String getBankPhoneNo() {
        return bankPhoneNo;
    }

    public void setBankPhoneNo(String bankPhoneNo) {
        this.bankPhoneNo = bankPhoneNo;
    }

    public String getBankAccountNo() {
        return bankAccountNo;
    }

    public void setBankAccountNo(String bankAccountNo) {
        this.bankAccountNo = bankAccountNo;
    }


    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getLocationId() {
        return locationId;
    }

    public void setLocationId(String locationId) {
        this.locationId = locationId;
    }

    public String getUseraccount_id() {
        return useraccount_id;
    }

    public void setUseraccount_id(String useraccount_id) {
        this.useraccount_id = useraccount_id;
    }



    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public long getLglinkedAccount() {
        return lglinkedAccount;
    }

    public void setLglinkedAccount(long lglinkedAccount) {
        this.lglinkedAccount = lglinkedAccount;
    }

    public long getLglinkedAccountForBankCharges() {
        return lglinkedAccountForBankCharges;
    }

    public void setLglinkedAccountForBankCharges(long lglinkedAccountForBankCharges) {
        this.lglinkedAccountForBankCharges = lglinkedAccountForBankCharges;
    }


}
