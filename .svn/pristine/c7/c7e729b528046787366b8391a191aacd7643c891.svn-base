/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hyva.bsfms.bs.bsentities;


import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;

/**
 * @author Admin
 */
@Entity
public class GradingMaster implements Serializable {

    @Id
    @GenericGenerator(name = "native", strategy = "native")
    @GeneratedValue(strategy = GenerationType.AUTO,generator = "native")
    private Long gradeMasterId;
    private String gradeList;
    @Column(columnDefinition="text")
    private String list;

    public String getList() {
        return list;
    }

    public void setList(String list) {
        this.list = list;
    }

    public String getGradeList() {
        return gradeList;
    }

    public void setGradeList(String gradeList) {
        this.gradeList = gradeList;
    }

    public Long getGradeMasterId() {
        return gradeMasterId;
    }

    public void setGradeMasterId(Long gradeMasterId) {
        this.gradeMasterId = gradeMasterId;
    }

}
