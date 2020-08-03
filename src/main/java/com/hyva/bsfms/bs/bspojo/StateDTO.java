package com.hyva.bsfms.bs.bspojo;

/**
 * Created by azgar.h on 6/30/2017.
 */
public class StateDTO {
    private Long stateId;
    private String stateName;
    private String countryId;
    private String status;
    private String countryName;

    public String getCountryName() {
        return countryName;
    }

    public void setCountryName(String countryName) {
        this.countryName = countryName;
    }

    public Long getStateId(){
        return stateId;
    }

    public void setStateId(Long stateId){
        this.stateId = stateId;
    }

    public String getStateName(){
        return stateName;
    }

    public void setStateName(String stateName){
        this.stateName = stateName;
    }

    public String getCountryId() {
        return countryId;
    }

    public void setCountryId(String countryId) {
        this.countryId = countryId;
    }

    public String getStatus(){
        return status;
    }

    public void setStatus(String status){
        this.status = status;
    }
}
