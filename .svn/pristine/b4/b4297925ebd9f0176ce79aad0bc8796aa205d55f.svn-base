package com.hyva.bsfms.bs.bsmapper;


import com.hyva.bsfms.bs.bsentities.AssessmentType;
import com.hyva.bsfms.bs.bsentities.SubComponent;
import com.hyva.bsfms.bs.bspojo.AssessmentTypePojo;
import com.hyva.bsfms.bs.bspojo.SubComponentPojo;

import java.util.ArrayList;
import java.util.List;

public class BsSubComponentMapper {

    public static SubComponent mapSUbComponentPojoToEntity(SubComponentPojo subComponentPojo){
        SubComponent subComponent=new SubComponent();
        subComponent.setSubComponentId(subComponentPojo.getSubComponentId());
        subComponent.setSubComponentName(subComponentPojo.getSubComponentName());
        subComponent.setComponentName(subComponentPojo.getComponentName());
        subComponent.setSubComponentDesc(subComponentPojo.getSubComponentDesc());
        subComponent.setStatus(subComponentPojo.getStatus());

        return subComponent;
    }

    public static List<SubComponentPojo> mapSubComponentEntityToPojo(List<SubComponent> subComponents){
        List<SubComponentPojo> list=new ArrayList<>();
        for(SubComponent subComponent:subComponents) {
            SubComponentPojo subComponentPojo = new SubComponentPojo();
            subComponentPojo.setSubComponentId(subComponent.getSubComponentId());
            subComponentPojo.setSubComponentName(subComponent.getSubComponentName());
            subComponentPojo.setSubComponentDesc(subComponent.getSubComponentDesc());
            subComponentPojo.setComponentName(subComponent.getComponentName());
            subComponentPojo.setStatus(subComponent.getStatus());

            list.add(subComponentPojo);
        }
        return list;
    }
}
