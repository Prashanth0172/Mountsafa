package com.hyva.bsfms.bs.bsrespositories;

import com.hyva.bsfms.bs.bsentities.TimeTable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TimeTableRepository extends JpaRepository<TimeTable,Long> {
    List<TimeTable> findAllByLevelAndClassName(String name,String className);
    List<TimeTable> findAllByTeacher(String name);
    List<TimeTable> findAllByChooseDay(String name);
    List<TimeTable> findAllByTtId(Long id);

}
