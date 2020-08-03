package com.hyva.bsfms.bs.bsmapper;


import com.hyva.bsfms.bs.bsentities.AssessmentType;
import com.hyva.bsfms.bs.bsentities.Position;
import com.hyva.bsfms.bs.bspojo.AssessmentTypePojo;
import com.hyva.bsfms.bs.bspojo.PositionPojo;

import java.util.ArrayList;
import java.util.List;

public class BsAssessmentTypeMapper {

    public static AssessmentType mapAssessmentTypePojoToEntity(AssessmentTypePojo assessmentTypePojo){
        AssessmentType assessmentType=new AssessmentType();
        assessmentType.setAssessmentTypeId(assessmentTypePojo.getAssessmentTypeId());
        assessmentType.setAssessmentTypeName(assessmentTypePojo.getAssessmentTypeName());
        assessmentType.setAssessmentDesc(assessmentTypePojo.getAssessmentDesc());
        assessmentType.setStatus(assessmentTypePojo.getStatus());

        return assessmentType;
    }

    public static List<AssessmentTypePojo> mapAssessmentTypeEntityToPojo(List<AssessmentType> assessmentTypes){
        List<AssessmentTypePojo> list=new ArrayList<>();
        for(AssessmentType assessmentType:assessmentTypes) {
            AssessmentTypePojo assessmentTypePojo = new AssessmentTypePojo();
            assessmentTypePojo.setAssessmentTypeId(assessmentType.getAssessmentTypeId());
            assessmentTypePojo.setAssessmentTypeName(assessmentType.getAssessmentTypeName());
            assessmentTypePojo.setAssessmentDesc(assessmentType.getAssessmentDesc());
            assessmentTypePojo.setStatus(assessmentType.getStatus());

            list.add(assessmentTypePojo);
        }
        return list;
    }
}
