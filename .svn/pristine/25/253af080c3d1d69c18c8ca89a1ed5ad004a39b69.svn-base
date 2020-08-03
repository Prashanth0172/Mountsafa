package com.hyva.bsfms.bs.bsentities;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
public class AssessmentType implements Serializable {

    @Id
    @GenericGenerator(name = "native", strategy = "native")
    @GeneratedValue(strategy = GenerationType.AUTO,generator = "native")
    private Long assessmentTypeId;
    private String assessmentTypeName;
    private String assessmentDesc;
    private String status;

    public Long getAssessmentTypeId() {
        return assessmentTypeId;
    }

    public void setAssessmentTypeId(Long assessmentTypeId) {
        this.assessmentTypeId = assessmentTypeId;
    }

    public String getAssessmentTypeName() {
        return assessmentTypeName;
    }

    public void setAssessmentTypeName(String assessmentTypeName) {
        this.assessmentTypeName = assessmentTypeName;
    }

    public String getAssessmentDesc() {
        return assessmentDesc;
    }

    public void setAssessmentDesc(String assessmentDesc) {
        this.assessmentDesc = assessmentDesc;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
