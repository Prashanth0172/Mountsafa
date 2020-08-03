package com.hyva.bsfms.bs.bsmapper;

import com.hyva.bsfms.bs.bsentities.Country;
import com.hyva.bsfms.bs.bspojo.CountryDTO;

import java.util.ArrayList;
import java.util.List;

public class BsCountryMapper {

    public static List<CountryDTO> mapcountryEntityToPojo(List<Country> List) {
        List<CountryDTO> list = new ArrayList<>();
        for (Country Qualification : List) {
            CountryDTO qualificationPojo = new CountryDTO();
            qualificationPojo.setCountryId(Qualification.getCountryId());
            qualificationPojo.setStatus(Qualification.getStatus());
            qualificationPojo.setCountryName(Qualification.getCountryName());

            list.add(qualificationPojo);
        }
        return list;
    }

}
