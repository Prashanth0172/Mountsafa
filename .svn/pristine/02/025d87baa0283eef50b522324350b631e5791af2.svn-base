package com.hyva.bsfms.bs.bsentities;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@Table(name = "Suppliers", uniqueConstraints = @UniqueConstraint(columnNames = {"suppliersId"}))
public class Suppliers implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    private Long suppliersId;
    private String branchId;
    private String suppliersName;
    private String suppliersCode;
    private String gstNo;
    private String suppliersAddress;
    private String suppliersPhone;
    private String suppliersEmail;
    private String suppliersRemarks;
    private String suppliersStatus;

    public String getBranchId() {
        return branchId;
    }

    public void setBranchId(String branchId) {
        this.branchId = branchId;
    }

    public Long getSuppliersId() {
        return suppliersId;
    }

    public void setSuppliersId(Long suppliersId) {
        this.suppliersId = suppliersId;
    }

    public String getSuppliersName() {
        return suppliersName;
    }

    public void setSuppliersName(String suppliersName) {
        this.suppliersName = suppliersName;
    }

    public String getSuppliersCode() {
        return suppliersCode;
    }

    public void setSuppliersCode(String suppliersCode) {
        this.suppliersCode = suppliersCode;
    }

    public String getGstNo() {
        return gstNo;
    }

    public void setGstNo(String gstNo) {
        this.gstNo = gstNo;
    }

    public String getSuppliersAddress() {
        return suppliersAddress;
    }

    public void setSuppliersAddress(String suppliersAddress) {
        this.suppliersAddress = suppliersAddress;
    }

    public String getSuppliersPhone() {
        return suppliersPhone;
    }

    public void setSuppliersPhone(String suppliersPhone) {
        this.suppliersPhone = suppliersPhone;
    }

    public String getSuppliersEmail() {
        return suppliersEmail;
    }

    public void setSuppliersEmail(String suppliersEmail) {
        this.suppliersEmail = suppliersEmail;
    }

    public String getSuppliersRemarks() {
        return suppliersRemarks;
    }

    public void setSuppliersRemarks(String suppliersRemarks) {
        this.suppliersRemarks = suppliersRemarks;
    }

    public String getSuppliersStatus() {
        return suppliersStatus;
    }

    public void setSuppliersStatus(String suppliersStatus) {
        this.suppliersStatus = suppliersStatus;
    }
}
