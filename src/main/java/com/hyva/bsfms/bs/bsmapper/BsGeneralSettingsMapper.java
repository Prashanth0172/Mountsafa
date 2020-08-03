package com.hyva.bsfms.bs.bsmapper;



import com.hyva.bsfms.bs.bsentities.Settings;

import com.hyva.bsfms.bs.bspojo.SettingsPojo;

import java.util.ArrayList;
import java.util.List;

public class BsGeneralSettingsMapper {
    public static Settings mapPojoToEntity(SettingsPojo pojo){
        Settings settings=new Settings();
        settings.setId(pojo.getId());
        settings.setCompanyName(pojo.getCompanyName());
        settings.setAttachFile(pojo.getAttachFile());
        settings.setAddress(pojo.getAddress());
        settings.setCompanyEmail(pojo.getCompanyEmail());
        settings.setGst(pojo.getGst());
        settings.setCompanyLink(pojo.getCompanyLink());
        settings.setGoogleAnalyticsID(pojo.getGoogleAnalyticsID());
        return settings;
    }

}
