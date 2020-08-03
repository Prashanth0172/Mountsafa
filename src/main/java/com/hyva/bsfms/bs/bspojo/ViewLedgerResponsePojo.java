package com.hyva.bsfms.bs.bspojo;


import java.math.BigDecimal;
import java.util.Date;

/**
 * Created by tnataraj on 7/22/17.
 */
public class ViewLedgerResponsePojo {

    private Date date;
    private String desc;
    private String formNo;
    private double openingBalance;
    private double credit;
    private double debit;
    private double closingBalance;
    private String closingBal;
    private String chequeNo;
    private Long glID;
    private BigDecimal amount;
    private String accCode;
    private String accName;

    public String getAccCode() {
        return accCode;
    }

    public void setAccCode(String accCode) {
        this.accCode = accCode;
    }

    public String getAccName() {
        return accName;
    }

    public void setAccName(String accName) {
        this.accName = accName;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }
    //
//    private double totalOpeningBalanceAmt;
//    private double totalCreditAmt;
//    private double totalDebitAmt;
//    private double totalclosingBalanceAmt;

    private boolean isSelected;

    public boolean isSelected() {
        return isSelected;
    }

    public void setSelected(boolean selected) {
        isSelected = selected;
    }
    //    public double getTotalOpeningBalanceAmt() {
//        return totalOpeningBalanceAmt;
//    }
//
//    public void setTotalOpeningBalanceAmt(double totalOpeningBalanceAmt) {
//        this.totalOpeningBalanceAmt = totalOpeningBalanceAmt;
//    }
//
//    public double getTotalCreditAmt() {
//        return totalCreditAmt;
//    }
//
//    public void setTotalCreditAmt(double totalCreditAmt) {
//        this.totalCreditAmt = totalCreditAmt;
//    }
//
//    public double getTotalDebitAmt() {
//        return totalDebitAmt;
//    }
//
//    public void setTotalDebitAmt(double totalDebitAmt) {
//        this.totalDebitAmt = totalDebitAmt;
//    }
//
//    public double getTotalclosingBalanceAmt() {
//        return totalclosingBalanceAmt;
//    }
//
//    public void setTotalclosingBalanceAmt(double totalclosingBalanceAmt) {
//        this.totalclosingBalanceAmt = totalclosingBalanceAmt;
//    }

    /**
     * Gets formNo.
     *
     * @return Value of formNo.
     */
    public String getFormNo() {
        return formNo;
    }

    /**
     * Sets new closingBalance.
     *
     * @param closingBalance New value of closingBalance.
     */
    public void setClosingBalance(double closingBalance) {
        this.closingBalance = closingBalance;
    }

    /**
     * Gets credit.
     *
     * @return Value of credit.
     */
    public double getCredit() {
        return credit;
    }

    /**
     * Gets date.
     *
     * @return Value of date.
     */
    public Date getDate() {
        return date;
    }

    /**
     * Gets openingBalance.
     *
     * @return Value of openingBalance.
     */
    public double getOpeningBalance() {
        return openingBalance;
    }

    /**
     * Gets debit.
     *
     * @return Value of debit.
     */
    public double getDebit() {
        return debit;
    }

    /**
     * Sets new desc.
     *
     * @param desc New value of desc.
     */
    public void setDesc(String desc) {
        this.desc = desc;
    }

    /**
     * Gets closingBalance.
     *
     * @return Value of closingBalance.
     */
    public double getClosingBalance() {
        return closingBalance;
    }

    /**
     * Gets desc.
     *
     * @return Value of desc.
     */
    public String getDesc() {
        return desc;
    }

    /**
     * Sets new formNo.
     *
     * @param formNo New value of formNo.
     */
    public void setFormNo(String formNo) {
        this.formNo = formNo;
    }

    /**
     * Sets new openingBalance.
     *
     * @param openingBalance New value of openingBalance.
     */
    public void setOpeningBalance(double openingBalance) {
        this.openingBalance = openingBalance;
    }

    /**
     * Sets new date.
     *
     * @param date New value of date.
     */
    public void setDate(Date date) {
        this.date = date;
    }

    /**
     * Sets new debit.
     *
     * @param debit New value of debit.
     */
    public void setDebit(double debit) {
        this.debit = debit;
    }

    /**
     * Sets new credit.
     *
     * @param credit New value of credit.
     */
    public void setCredit(double credit) {
        this.credit = credit;
    }

    /**
     * Gets closingBal.
     *
     * @return Value of closingBal.
     */
    public String getClosingBal() {
        return closingBal;
    }

    /**
     * Sets new closingBal.
     *
     * @param closingBal New value of closingBal.
     */
    public void setClosingBal(String closingBal) {
        this.closingBal = closingBal;
    }

    /**
     * Sets Cheque No.[Transaction No.]
     *
     *  @return ChequeNo. [Transaction No.]
     */

    public String getChequeNo() {
        return chequeNo;
    }

    public void setChequeNo(String chequeNo) {
        this.chequeNo = chequeNo;
    }

    public Long getGlID() {return glID;}

    public void setGlID(Long glID) {this.glID = glID;}

}
