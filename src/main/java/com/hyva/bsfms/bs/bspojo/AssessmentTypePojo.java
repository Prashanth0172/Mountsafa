package com.hyva.bsfms.bs.bspojo;

public class AssessmentTypePojo {

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
