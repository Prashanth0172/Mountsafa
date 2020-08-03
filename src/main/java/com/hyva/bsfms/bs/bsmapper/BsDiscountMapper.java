package com.hyva.bsfms.bs.bsmapper;


import com.hyva.bsfms.bs.bsentities.DiscountType;
import com.hyva.bsfms.bs.bspojo.DiscountTypePojo;

import java.util.ArrayList;
import java.util.List;

public class BsDiscountMapper {
    public static DiscountType mapPojoToEntity(DiscountTypePojo pojo){
        DiscountType type=new DiscountType();
        type.setDiscountId(pojo.getDiscountId());
        type.setDiscountType(pojo.getDiscountType());
        type.setDiscountPercentage(pojo.getDiscountPercentage());
        type.setDiscountCriteria(pojo.getDiscountCriteria());
        type.setDiscountStatus(pojo.getDiscountStatus());
        type.setBranchId(pojo.getBranchId());
        return type;
    }

    public static List<DiscountTypePojo> mapEntityToPojo(List<DiscountType> typeList){
        List<DiscountTypePojo> list=new ArrayList<>();
        for(DiscountType type:typeList) {
            DiscountTypePojo discountTypePojo = new DiscountTypePojo();
            discountTypePojo.setDiscountId(type.getDiscountId());
            discountTypePojo.setDiscountType(type.getDiscountType());
            discountTypePojo.setDiscountCriteria(type.getDiscountCriteria());
            discountTypePojo.setDiscountPercentage(type.getDiscountPercentage());
            discountTypePojo.setDiscountStatus(type.getDiscountStatus());
            discountTypePojo.setBranchId(type.getBranchId());
            list.add(discountTypePojo);
        }
        return list;
    }
}
