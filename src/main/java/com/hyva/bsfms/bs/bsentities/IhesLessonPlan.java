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
public class IhesLessonPlan implements Serializable {

    @Id
    @GenericGenerator(name = "native", strategy = "native")
    @GeneratedValue(strategy = GenerationType.AUTO,generator = "native")
    private Long iheslessonId;
    private String levelId;
    private String classId;
    private String subjectId;
    private String chapterId;
    private String topicId;
    @Column(columnDefinition="text")
    private String description;
    private String textbookCheckbox;
    private String textbookChapter;
    private String workbookCheckbox;
    private String workbook;
    private String objectivesCheckbox;
    private String objectives;
    private String immersionKnowledge;
    private String chapterBuilding;
    private String skillsCompetency;
    private String academicAchievement;
    private String applicationLife;
    @Column(columnDefinition="text")
    private String immersion;
    @Column(columnDefinition="text")
    private String instructional;
    @Column(columnDefinition="text")
    private String investigational;

    public String getImmersion() {
        return immersion;
    }

    public void setImmersion(String immersion) {
        this.immersion = immersion;
    }

    public String getInstructional() {
        return instructional;
    }

    public void setInstructional(String instructional) {
        this.instructional = instructional;
    }

    public String getInvestigational() {
        return investigational;
    }

    public void setInvestigational(String investigational) {
        this.investigational = investigational;
    }

    public Long getIheslessonId() {
        return iheslessonId;
    }

    public void setIheslessonId(Long iheslessonId) {
        this.iheslessonId = iheslessonId;
    }

    public String getLevelId() {
        return levelId;
    }

    public void setLevelId(String levelId) {
        this.levelId = levelId;
    }

    public String getClassId() {
        return classId;
    }

    public void setClassId(String classId) {
        this.classId = classId;
    }

    public String getSubjectId() {
        return subjectId;
    }

    public void setSubjectId(String subjectId) {
        this.subjectId = subjectId;
    }

    public String getChapterId() {
        return chapterId;
    }

    public void setChapterId(String chapterId) {
        this.chapterId = chapterId;
    }

    public String getTopicId() {
        return topicId;
    }

    public void setTopicId(String topicId) {
        this.topicId = topicId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTextbookCheckbox() {
        return textbookCheckbox;
    }

    public void setTextbookCheckbox(String textbookCheckbox) {
        this.textbookCheckbox = textbookCheckbox;
    }

    public String getTextbookChapter() {
        return textbookChapter;
    }

    public void setTextbookChapter(String textbookChapter) {
        this.textbookChapter = textbookChapter;
    }

    public String getWorkbookCheckbox() {
        return workbookCheckbox;
    }

    public void setWorkbookCheckbox(String workbookCheckbox) {
        this.workbookCheckbox = workbookCheckbox;
    }

    public String getWorkbook() {
        return workbook;
    }

    public void setWorkbook(String workbook) {
        this.workbook = workbook;
    }

    public String getObjectivesCheckbox() {
        return objectivesCheckbox;
    }

    public void setObjectivesCheckbox(String objectivesCheckbox) {
        this.objectivesCheckbox = objectivesCheckbox;
    }

    public String getObjectives() {
        return objectives;
    }

    public void setObjectives(String objectives) {
        this.objectives = objectives;
    }

    public String getImmersionKnowledge() {
        return immersionKnowledge;
    }

    public void setImmersionKnowledge(String immersionKnowledge) {
        this.immersionKnowledge = immersionKnowledge;
    }

    public String getChapterBuilding() {
        return chapterBuilding;
    }

    public void setChapterBuilding(String chapterBuilding) {
        this.chapterBuilding = chapterBuilding;
    }

    public String getSkillsCompetency() {
        return skillsCompetency;
    }

    public void setSkillsCompetency(String skillsCompetency) {
        this.skillsCompetency = skillsCompetency;
    }

    public String getAcademicAchievement() {
        return academicAchievement;
    }

    public void setAcademicAchievement(String academicAchievement) {
        this.academicAchievement = academicAchievement;
    }

    public String getApplicationLife() {
        return applicationLife;
    }

    public void setApplicationLife(String applicationLife) {
        this.applicationLife = applicationLife;
    }
}
