package com.hyva.bsfms.bs.bsrespositories;

import com.hyva.bsfms.bs.bsentities.Holiday;
import com.hyva.bsfms.bs.bsentities.Roles;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface HolidayRepositories extends JpaRepository<Holiday,Long> {

    Holiday findAllByHolidayNameAndIdNotIn(String name,Long id);
    Holiday findAllByHolidayName(String name);
    List<Holiday> findAllByStatus(String status);
    List<Holiday>findAllByHolidayNameContainingAndStatus(String name,String status);
    Holiday findFirstByHolidayNameContainingAndStatus(String name,String status,Sort sort);
    List<Holiday>findAllByHolidayNameContainingAndStatus(String name,String status,Pageable pageable);
    Holiday findFirstByStatus(String status,Sort sort);
    List<Holiday>findAllByStatus(String status,Pageable pageable);

}
