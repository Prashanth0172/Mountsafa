/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hyva.bsfms.bs.bspojo;

import java.util.List;
import java.util.Map;

/**
 *
 * @author Nataraj t
 */
public class PermissionDto {
    
   private String name;
   private String id;
   private Map<Long,List<Long>> parentCategory;
   private Map<Long,PermissionDto> category;

    public Map<Long, PermissionDto> getCategory() {
        return category;
    }

    public void setCategory(Map<Long, PermissionDto> category) {
        this.category = category;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Map<Long, List<Long>> getParentCategory() {
        return parentCategory;
    }

    public void setParentCategory(Map<Long, List<Long>> parentCategory) {
        this.parentCategory = parentCategory;
    }
}
