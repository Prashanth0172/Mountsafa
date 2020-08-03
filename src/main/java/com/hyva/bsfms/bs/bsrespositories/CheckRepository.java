package com.hyva.bsfms.bs.bsrespositories;

import com.hyva.bsfms.bs.bsentities.CheckListMaster;
//import com.hyva.bsfms.bs.bsentities.City;
//import org.springframework.data.domain.Pageable;
//import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CheckRepository extends JpaRepository<CheckListMaster,Long> {
//        City findByCityName(String cityName);
//    City findByCityNameAndCityIdNotIn(String cityName, Long id);
    List<CheckListMaster> findAllByAccountName(String name);
    List<CheckListMaster> findAllByLevel1IdAndLevel2IdNullAndLevel3IdNull(Long level1Id);
    List<CheckListMaster> findAllByLevel2Id(Long level2Id);
    CheckListMaster findByLevel1IdAndLevel2Id(Long level1Id,Long level2Id);
    List<CheckListMaster> findAllByLevel1IdNullAndLevel2IdNull();
    List<CheckListMaster> findAllByLevel1IdNotNullAndLevel2IdNull(Long level1Id);
    List<CheckListMaster> findAllByLevel1IdNotNullAndLevel2IdNotNull(Long level1Id,Long level2Id);

    List<CheckListMaster> findAllByAccountNameContainingAndStatus(String name,String status);
    List<CheckListMaster> findAllByStatus(String status);

    CheckListMaster findFirstByAccountNameContainingAndStatus(String name, String status, Sort sort);
    List<CheckListMaster> findAllByAccountNameContainingAndStatus(String name, String status, Pageable pageable);
    List<CheckListMaster> findByStatus(String status, Pageable pageable);
    CheckListMaster findFirstByStatus( String status, Sort sort);

//    List<City> findAllByStateName(String stateName);
//    List<City>findAllByStatus(String status);
//    List<City>findAllByCityNameContainingAndStatus(String name, String status);
//    City findFirstByCityNameContainingAndStatus(String name, String status, Sort sort);
//    List<City>findAllByCityNameContainingAndStatus(String name, String status, Pageable pageable);
//    City findFirstByStatus(String status, Sort sort);
//    List<City>findAllByStatus(String status, Pageable pageable);
}


