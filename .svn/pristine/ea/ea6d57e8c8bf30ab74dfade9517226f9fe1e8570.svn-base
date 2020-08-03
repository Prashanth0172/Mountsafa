package com.hyva.bsfms.bs.bsrespositories;

import com.hyva.bsfms.bs.bsentities.Country;
import com.hyva.bsfms.bs.bsentities.Position;
import com.hyva.bsfms.bs.bsentities.State;
import com.hyva.bsfms.bs.bsentities.TeacherTable;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BsPositionRepository extends JpaRepository<Position, Long> {

    Position findByPositionName(String name);
    Position findByPositionNameAndPositionIdNotIn(String name, Long id);
    List<Position> findAllByPositionName(String positionName);
    List<Position>findAllByStatus(String status);
    List<Position>findAllByPositionNameContainingAndStatus(String countryName,String status);
    Position findFirstByPositionNameContainingAndStatus(String countryName,String status,Sort sort);
    List<Position>findAllByPositionNameContainingAndStatus(String countryName,String status,Pageable pageable);
    Position findFirstByStatus(String status,Sort sort);
    List<Position>findAllByStatus(String status,Pageable pageable);

}
