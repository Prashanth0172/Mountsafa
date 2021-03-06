package com.hyva.bsfms.bs.bsrespositories;

import com.hyva.bsfms.bs.bsentities.State;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StateRepository extends JpaRepository<State,Long> {
    State findByStateName(String name);
    State findByStateNameAndStateIdNotIn(String name, Long id);
    List<State> findAllByStateName(String name);
//    State findAllByStateId(Long id);
//    List<State> findAllByCountryNameAndStatus(String countryName,String status);
    List<State>findAllByStatus(String status);
    List<State>findAllByStateNameContainingAndStatus(String name,String status);
    State findFirstByStateNameContainingAndStatus(String name,String status,Sort sort);
    List<State>findAllByStateNameContainingAndStatus(String name,String status,Pageable pageable);
    State findFirstByStatus(String status,Sort sort);
    List<State>findAllByStatus(String status,Pageable pageable);

    List<State> findAllByCountryIdAndStatus(Long countryId, String active);
}
