package com.hyva.bsfms.bs.bspojo;

import lombok.Data;

@Data
public class RemaindersPojo {
    private Long remainderId;
    private String remainderName;
    private String reason;
    private String branchId;
    private String levelName;
    private String className;
    private String semester;
    private String sentTo;
    private String remainderStart;
    private String days;
    private String untill;
    private String emailTemplate;
    private String remainderStatus;

    public Long getRemainderId() {
        return remainderId;
    }

    public void setRemainderId(Long remainderId) {
        this.remainderId = remainderId;
    }

    public String getRemainderName() {
        return remainderName;
    }

    public void setRemainderName(String remainderName) {
        this.remainderName = remainderName;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getBranchId() {
        return branchId;
    }

    public void setBranchId(String branchId) {
        this.branchId = branchId;
    }

    public String getLevelName() {
        return levelName;
    }

    public void setLevelName(String levelName) {
        this.levelName = levelName;
    }

    public String getClassName() {
        return className;
    }

    public void setClassName(String className) {
        this.className = className;
    }

    public String getSemester() {
        return semester;
    }

    public void setSemester(String semester) {
        this.semester = semester;
    }

    public String getSentTo() {
        return sentTo;
    }

    public void setSentTo(String sentTo) {
        this.sentTo = sentTo;
    }

    public String getRemainderStart() {
        return remainderStart;
    }

    public void setRemainderStart(String remainderStart) {
        this.remainderStart = remainderStart;
    }

    public String getDays() {
        return days;
    }

    public void setDays(String days) {
        this.days = days;
    }

    public String getUntill() {
        return untill;
    }

    public void setUntill(String untill) {
        this.untill = untill;
    }

    public String getEmailTemplate() {
        return emailTemplate;
    }

    public void setEmailTemplate(String emailTemplate) {
        this.emailTemplate = emailTemplate;
    }

    public String getRemainderStatus() {
        return remainderStatus;
    }

    public void setRemainderStatus(String remainderStatus) {
        this.remainderStatus = remainderStatus;
    }
}

