package com.hyva.bsfms.bs.bspojo;

public class ResourceCategoryPojo {

    private Long resourceCategoryId;
    private String resourceCategoryName;
    private String status;
    private String branchId;

    public String getBranchId() {
        return branchId;
    }

    public void setBranchId(String branchId) {
        this.branchId = branchId;
    }


    public Long getResourceCategoryId() {
        return resourceCategoryId;
    }

    public void setResourceCategoryId(Long resourceCategoryId) {
        this.resourceCategoryId = resourceCategoryId;
    }

    public String getResourceCategoryName() {
        return resourceCategoryName;
    }

    public void setResourceCategoryName(String resourceCategoryName) {
        this.resourceCategoryName = resourceCategoryName;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
