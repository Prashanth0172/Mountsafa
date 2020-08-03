package com.hyva.bsfms.bs.bsrespositories;

import com.hyva.bsfms.bs.bsentities.AssessmentType;
import com.hyva.bsfms.bs.bsentities.SubComponent;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BsSubComponentRepository extends JpaRepository<SubComponent, Long> {

    SubComponent findBySubComponentName(String name);
    List<SubComponent> findByComponentName(Long id);
    SubComponent findBySubComponentNameAndSubComponentIdNotIn(String name, Long id);
    List<SubComponent> findAllBySubComponentName(String positionName);
    List<SubComponent>findAllByStatus(String status);
    List<SubComponent>findAllBySubComponentNameContainingAndStatus(String countryName, String status);
    SubComponent findFirstBySubComponentNameContainingAndStatus(String countryName, String status, Sort sort);
    List<SubComponent>findAllBySubComponentNameContainingAndStatus(String countryName, String status, Pageable pageable);
    SubComponent findFirstByStatus(String status, Sort sort);
    List<SubComponent>findAllByStatus(String status, Pageable pageable);

}
