package com.hyva.bsfms.bs.bsrespositories;


import com.hyva.bsfms.bs.bsentities.AttendanceMgt;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;

public interface BsAttendanceMgtRepository extends JpaRepository<AttendanceMgt, Long> {


    AttendanceMgt findByDepartmentAndAIdNotIn(String dept,Long id);
    AttendanceMgt findByENameAndDepartment(String name,String department);
    List<AttendanceMgt> findAllByStatus(String status);
    List  <AttendanceMgt> findByStatusAndENameContaining(String status, String name);
    AttendanceMgt findByAId(Long id);
    List<AttendanceMgt> findAllByEName(String name);
    List<AttendanceMgt> findAllByADateBetween(Date from,Date to);


}
