package com.hyva.bsfms.bs.bspojo;

public class AgegroupPojo {

    private Long agegroupId;
    private String fromAgegroup;
    private String toAgegroup;
    private String branchId;
    private String status;

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Long getAgegroupId() {
        return agegroupId;
    }

    public void setAgegroupId(Long agegroupId) {
        this.agegroupId = agegroupId;
    }

    public String getFromAgegroup() {
        return fromAgegroup;
    }

    public void setFromAgegroup(String fromAgegroup) {
        this.fromAgegroup = fromAgegroup;
    }

    public String getToAgegroup() {
        return toAgegroup;
    }

    public void setToAgegroup(String toAgegroup) {
        this.toAgegroup = toAgegroup;
    }

    public String getBranchId() {
        return branchId;
    }

    public void setBranchId(String branchId) {
        this.branchId = branchId;
    }

}
