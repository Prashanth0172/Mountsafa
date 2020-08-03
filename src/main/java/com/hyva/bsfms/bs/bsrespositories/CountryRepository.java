package com.hyva.bsfms.bs.bsrespositories;

import com.hyva.bsfms.bs.bsentities.Country;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CountryRepository extends JpaRepository<Country,Long> {
    Country findByCountryName(String countryName);
    Country findByCountryNameAndCountryIdNotIn(String name, Long id);
    List<Country> findAllByCountryName(String countryName);
    List<Country>findAllByStatus(String status);
    List<Country>findAllByCountryNameContainingAndStatus(String countryName,String status);
    Country findFirstByCountryNameContainingAndStatus(String countryName,String status,Sort sort);
    List<Country>findAllByCountryNameContainingAndStatus(String countryName,String status,Pageable pageable);
    Country findFirstByStatus(String status,Sort sort);
    List<Country>findAllByStatus(String status,Pageable pageable);


}
