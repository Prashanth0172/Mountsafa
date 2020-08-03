package com.hyva.bsfms.bs.bspojo;

import lombok.Data;

import java.sql.Date;


@Data
public class TeachingObservationDTO {

    private Long teachingObservationId;
    private String teacherName;
    private String subjectId;
    private Date sdate;
    private Date edate;
    private String inductionSetStudentReadyScore;
    private String inductionSetStudentReadyRemarks;
    private String inductionSetGreetingProceduresScore;
    private String inductionSetGreetingProceduresRemarks;
    private String inductionSetCalenderForDayScore;
    private String inductionSetCalenderForDayRemarks;
    private String inductionSetLessonObjectiveScore;
    private String inductionSetLessonObjectiveRemarks;
    private String deliverySetStimulusScore;
    private String deliverySetStimulusRemarks;
    private String deliverySetPreviousLessonScore;
    private String deliverySetPreviousLessonRemarks;
    private String deliverySetTeachingFromGeneralScore;
    private String deliverySetTeachingFromGeneralRemarks;
    private String deliverySetWhiteBoardScore;
    private String deliverySetWhiteBoardScoreRemarks;
    private String deliverySetTeachingAidsScore;
    private String deliverySetTeachingAidsRemarks;
    private String deliverySetTextbookRefScore;
    private String deliverySetTextbookRefRemarks;
    private String deliverySetMakingAssociationScore;
    private String deliverySetMakingAssociationRemarks;
    private String deliverySetThinkingLevelScore;
    private String deliverySetThinkingLevelRemarks;
    private String deliverySetInteractionStudentScore;
    private String deliverySetInteractionStudentRemarks;
    private String deliverySetAppropriateLevelScore;
    private String deliverySetAppropriateLevelRemarks;
    private String deliverySetProperLanguageScore;
    private String deliverySetProperLanguageRemarks;
    private String deliverySetPronounciationScore;
    private String deliverySetPronounciationRemarks;
    private String deliverySetStudentConfidenceScore;
    private String deliverySetStudentConfidenceRemarks;
    private String deliverySetLearningStylesScore;
    private String deliverySetLearningStylesRemarks;
    private String deliverySetSupervisingClassworkScore;
    private String deliverySetSupervisingClassworkRemarks;
    private String deliverySetClassroomManagementScore;
    private String deliverySetClassroomManagementRemarks;
    private String deliverySetStudentManagementScore;
    private String deliverySetStudentManagementRemarks;
    private String lessonConclusionLessonPlanScore;
    private String lessonConclusionLessonPlanRemarks;
    private String lessonConclusionStudentAchievementScore;
    private String lessonConclusionStudentAchievementRemarks;
    private String lessonConclusionNextLessonScore;
    private String lessonConclusionNextLessonRemarks;
    private String additionalRemarks;
    private String observationReport;
    private String signature;
    private String type;
    private String noAttempt;
    private String belowExpectation;
    private String minReq;
    private String goodAttempt;
    private String wellDone;
    private String hrId;
    private String level;
    private String salaryoffered;
    private Date reportingDate;

}
