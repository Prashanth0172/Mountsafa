package com.hyva.bsfms.bs.bsmapper;


import com.hyva.bsfms.bs.bsentities.Position;

import com.hyva.bsfms.bs.bspojo.PositionPojo;

import java.util.ArrayList;
import java.util.List;

public class BsPositionMapper {

    public static Position mapPositionPojoToEntity(PositionPojo pojo){
        Position type=new Position();
        type.setPositionId(pojo.getPositionId());
        type.setPositionName(pojo.getPositionName());
        type.setStatus(pojo.getStatus());

        return type;
    }

    public static List<PositionPojo> mapPositionEntityToPojo(List<Position> typeList){
        List<PositionPojo> list=new ArrayList<>();
        for(Position type:typeList) {
            PositionPojo positionPojo = new PositionPojo();
            positionPojo.setPositionId(type.getPositionId());
            positionPojo.setPositionName(type.getPositionName());
            positionPojo.setStatus(type.getStatus());

            list.add(positionPojo);
        }
        return list;
    }
}
