/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hyva.bsfms.bs.bsentities;


import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;

/**
 * @author Admin
 */
@Entity
public class LessonPlanDetails implements Serializable {

    @Id
    @GenericGenerator(name = "native", strategy = "native")
    @GeneratedValue(strategy = GenerationType.AUTO,generator = "native")
    private Long lessonPlanDetailsId;
    private String assessment;
    private String component;
    private String subComponent;
    private String weightage;
    private String maxMarks;
    @Column(columnDefinition="text")
    private String questionId;
    private Long lessonPlanId;

    public Long getLessonPlanDetailsId() {
        return lessonPlanDetailsId;
    }

    public void setLessonPlanDetailsId(Long lessonPlanDetailsId) {
        this.lessonPlanDetailsId = lessonPlanDetailsId;
    }

    public String getAssessment() {
        return assessment;
    }

    public void setAssessment(String assessment) {
        this.assessment = assessment;
    }

    public String getComponent() {
        return component;
    }

    public void setComponent(String component) {
        this.component = component;
    }

    public String getSubComponent() {
        return subComponent;
    }

    public void setSubComponent(String subComponent) {
        this.subComponent = subComponent;
    }

    public String getWeightage() {
        return weightage;
    }

    public void setWeightage(String weightage) {
        this.weightage = weightage;
    }

    public String getMaxMarks() {
        return maxMarks;
    }

    public void setMaxMarks(String maxMarks) {
        this.maxMarks = maxMarks;
    }



    public String getQuestionId() {
        return questionId;
    }

    public void setQuestionId(String questionId) {
        this.questionId = questionId;
    }

    public Long getLessonPlanId() {
        return lessonPlanId;
    }

    public void setLessonPlanId(Long lessonPlanId) {
        this.lessonPlanId = lessonPlanId;
    }
}
