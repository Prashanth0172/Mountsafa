package com.hyva.bsfms.bs.bsentities;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@Table(name = "designation", uniqueConstraints = @UniqueConstraint(columnNames = {"designationId"}))
public class Designation implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    private Long designationId;
    private String designationName;
    private Long branchId;
    private String designationDesc;
    private String designationStatus;



    public Long getDesignationId() {
        return designationId;
    }

    public void setDesignationId(Long designationId) {
        this.designationId = designationId;
    }

    public String getDesignationName() {
        return designationName;
    }

    public void setDesignationName(String designationName) {
        this.designationName = designationName;
    }

    public String getDesignationDesc() {
        return designationDesc;
    }

    public void setDesignationDesc(String designationDesc) {
        this.designationDesc = designationDesc;
    }

    public String getDesignationStatus() {
        return designationStatus;
    }

    public void setDesignationStatus(String designationStatus) {
        this.designationStatus = designationStatus;
    }

    public Long getBranchId() {
        return branchId;
    }

    public void setBranchId(Long branchId) {
        this.branchId = branchId;
    }
}
