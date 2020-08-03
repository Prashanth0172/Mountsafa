package com.hyva.bsfms.bs.bspojo;

public class BankDetailsPojo {
    private Long bankdetailsId;
   private Long hrId;
    private String bankName;
    private String bankaccNo;
    private String epfaccNo;
    private String address;
    private String email;
    private String mobile;
    private String home;
    private String StatusText;
    private String employeeName;
    private String acceptLetter;

    public String getAcceptLetter() {
        return acceptLetter;
    }

    public void setAcceptLetter(String acceptLetter) {
        this.acceptLetter = acceptLetter;
    }

    public String getEmployeeName() {
        return employeeName;
    }

    public void setEmployeeName(String employeeName) {
        this.employeeName = employeeName;
    }

    public Long getHrId() {
        return hrId;
    }

    public void setHrId(Long hrId) {
        this.hrId = hrId;
    }

    public Long getBankdetailsId() {
        return bankdetailsId;
    }

    public void setBankdetailsId(Long bankdetailsId) {
        this.bankdetailsId = bankdetailsId;
    }

    public String getBankName() {
        return bankName;
    }

    public void setBankName(String bankName) {
        this.bankName = bankName;
    }

    public String getBankaccNo() {
        return bankaccNo;
    }

    public void setBankaccNo(String bankaccNo) {
        this.bankaccNo = bankaccNo;
    }

    public String getEpfaccNo() {
        return epfaccNo;
    }

    public void setEpfaccNo(String epfaccNo) {
        this.epfaccNo = epfaccNo;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getHome() {
        return home;
    }

    public void setHome(String home) {
        this.home = home;
    }

    public String getStatusText() {
        return StatusText;
    }

    public void setStatusText(String statusText) {
        StatusText = statusText;
    }
}
