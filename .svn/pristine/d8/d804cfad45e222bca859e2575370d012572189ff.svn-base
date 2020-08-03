package com.hyva.bsfms.bs.bsentities;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
public class CustomApprover implements Serializable {

    @Id
    @GenericGenerator(name = "native", strategy = "native")
    @GeneratedValue(strategy = GenerationType.AUTO,generator = "native")
    private Long customApproverId;
    private String customRole;
    private String customDesc;
    private String approver;
    private String customLeave;
    private String documentWorkflow;
    private String status;


    public Long getCustomApproverId() {
        return customApproverId;
    }

    public void setCustomApproverId(Long customApproverId) {
        this.customApproverId = customApproverId;
    }

    public String getCustomRole() {
        return customRole;
    }

    public void setCustomRole(String customRole) {
        this.customRole = customRole;
    }

    public String getCustomDesc() {
        return customDesc;
    }

    public void setCustomDesc(String customDesc) {
        this.customDesc = customDesc;
    }

    public String getApprover() {
        return approver;
    }

    public void setApprover(String approver) {
        this.approver = approver;
    }

    public String getCustomLeave() {
        return customLeave;
    }

    public void setCustomLeave(String customLeave) {
        this.customLeave = customLeave;
    }

    public String getDocumentWorkflow() {
        return documentWorkflow;
    }

    public void setDocumentWorkflow(String documentWorkflow) {
        this.documentWorkflow = documentWorkflow;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
