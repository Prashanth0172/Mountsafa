package com.hyva.bsfms.bs.bsmapper;

import com.hyva.bsfms.bs.bsentities.City;
import com.hyva.bsfms.bs.bsentities.SubjectCategory;
import com.hyva.bsfms.bs.bspojo.CityDTO;
import com.hyva.bsfms.bs.bspojo.SubjectCategoryPojo;

import java.util.ArrayList;
import java.util.List;

public class SubjectCategoryMapper {
    public static List<SubjectCategoryPojo> mapcategoryEntityToPojo(List<SubjectCategory> List) {
        List<SubjectCategoryPojo> list = new ArrayList<>();
        for (SubjectCategory subjectCategory : List) {
            SubjectCategoryPojo pojo = new SubjectCategoryPojo();
            pojo.setDescription(subjectCategory.getDescription());
            pojo.setStatus(subjectCategory.getStatus());
            pojo.setSubjectCategoryId(subjectCategory.getSubjectCategoryId());
            pojo.setSubjectCategroyName(subjectCategory.getSubjectCategroyName());
            list.add(pojo);
        }
        return list;
    }

    public static SubjectCategory mapSubjectCategoryPojoToEntity(SubjectCategoryPojo subjectCategoryPojo){
        SubjectCategory subject = new SubjectCategory();
        subject.setSubjectCategroyName(subjectCategoryPojo.getSubjectCategroyName());
        subject.setDescription(subjectCategoryPojo.getDescription());
        subject.setStatus(subjectCategoryPojo.getStatus());
        subject.setSubjectCategoryId(subjectCategoryPojo.getSubjectCategoryId());
        return subject;
    }
}
