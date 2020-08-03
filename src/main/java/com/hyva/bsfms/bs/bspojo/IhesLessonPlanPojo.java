package com.hyva.bsfms.bs.bspojo;

import javax.persistence.Column;

public class IhesLessonPlanPojo {
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
    private String level;
    private String classes;
    private String subject;
    private String chapter;
    private String topic;
    private String immersion;
    private String instructional;
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

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }

    public String getClasses() {
        return classes;
    }

    public void setClasses(String classes) {
        this.classes = classes;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getChapter() {
        return chapter;
    }

    public void setChapter(String chapter) {
        this.chapter = chapter;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
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
