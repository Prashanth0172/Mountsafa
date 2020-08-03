package com.hyva.bsfms.bs.bsentities;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
public class SubComponent implements Serializable {

    @Id
    @GenericGenerator(name = "native", strategy = "native")
    @GeneratedValue(strategy = GenerationType.AUTO,generator = "native")
    private Long subComponentId;
    private Long componentName;
    private String subComponentName;
    private String subComponentDesc;
    private String status;

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
