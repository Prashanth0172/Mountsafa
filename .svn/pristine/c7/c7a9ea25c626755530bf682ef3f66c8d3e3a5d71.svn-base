package com.hyva.bsfms.bs.bsrespositories;

import com.hyva.bsfms.bs.bsentities.City;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CityRepository extends JpaRepository<City,Long> {
    City findAllByStateIdAndCountryIdAndCityNameAndCityIdNotIn(Long stateId,Long countryId,String cityName,Long id);
    City findAllByStateIdAndCountryIdAndCityName(Long stateId,Long countryId,String cityName);
    List<City> findAllByCityName(String name);
    List<City> findAllByStateIdAndStatus(Long stateId,String status);
    List<City>findAllByStatus(String status);
    List<City>findAllByCityNameContainingAndStatus(String name,String status);
    City findFirstByCityNameContainingAndStatus(String name,String status,Sort sort);
    List<City>findAllByCityNameContainingAndStatus(String name,String status,Pageable pageable);
    City findFirstByStatus(String status,Sort sort);
    List<City>findAllByStatus(String status,Pageable pageable);


}


