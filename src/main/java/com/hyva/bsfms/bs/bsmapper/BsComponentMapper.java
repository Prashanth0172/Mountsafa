package com.hyva.bsfms.bs.bsmapper;

import com.hyva.bsfms.bs.bsentities.Components;
import com.hyva.bsfms.bs.bspojo.ComponentPojo;

import java.util.ArrayList;
import java.util.List;

public class BsComponentMapper {

    public static List<ComponentPojo> mapcomponentEntityToPojo(List<Components> List) {
        List<ComponentPojo> list = new ArrayList<>();
        for (Components component : List) {
            ComponentPojo componentPojo = new ComponentPojo();
            componentPojo.setComponentId(component.getComponentId());
            componentPojo.setWeightage(component.getWeightage());
            componentPojo.setStatus(component.getStatus());
            componentPojo.setComponentName(component.getComponentName());

            list.add(componentPojo);
        }
        return list;
    }

    public static Components mapPojoToEntity(ComponentPojo pojo){
        Components component=new Components();
        component.setComponentId(pojo.getComponentId());
        component.setWeightage(pojo.getWeightage());
        component.setComponentName(pojo.getComponentName());
        component.setStatus(pojo.getStatus());
        return component;
    }

}
