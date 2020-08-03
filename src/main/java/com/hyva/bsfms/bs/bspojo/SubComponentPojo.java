package com.hyva.bsfms.bs.bspojo;

public class SubComponentPojo {

    private Long subComponentId;
    private Long componentName;
    private String subComponentName;
    private String subComponentDesc;
    private String status;
    private String componentNm;

    public Long getSubComponentId() {
        return subComponentId;
    }

    public void setSubComponentId(Long subComponentId) {
        this.subComponentId = subComponentId;
    }

    public Long getComponentName() {
        return componentName;
    }

    public void setComponentName(Long componentName) {
        this.componentName = componentName;
    }

    public String getComponentNm() {
        return componentNm;
    }

    public void setComponentNm(String componentNm) {
        this.componentNm = componentNm;
    }

    public String getSubComponentName() {
        return subComponentName;
    }

    public void setSubComponentName(String subComponentName) {
        this.subComponentName = subComponentName;
    }

    public String getSubComponentDesc() {
        return subComponentDesc;
    }

    public void setSubComponentDesc(String subComponentDesc) {
        this.subComponentDesc = subComponentDesc;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
