package com.hyva.bsfms.bs.bsrespositories;



import com.hyva.bsfms.bs.bsentities.Class;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BsClassRepository extends JpaRepository<Class, Long> {

    Class findByBranchIdAndLevelIdAndClassNameAndClassIdNotIn(Long branchId, Long levelId,String className,Long id);
    Class findByBranchIdAndLevelIdAndClassName(Long branchId, Long levelId,String className);
    Class findByClassName(String name);

    List<Class> findByClassStatusAndClassNameContaining(String name, String status);
    Class findByClassId(Long id);
    List<Class> findAllByLevelId(Long id);
    List<Class> findAllByLevelIdAndClassStatus(Long id,String Status);
    List<Class> findAllByClassNameContainingAndClassStatus(String name,String status);
    Class findFirstByClassNameContainingAndClassStatus(String name, String status, Sort sort);
    List<Class> findAllByClassNameContainingAndClassStatus(String name, String status, Pageable pageable);
    Class findFirstByClassStatus(String status, Sort sort);
    List<Class> findAllByClassStatus(String status, Pageable pageable);
    List<Class> findAllByClassStatus(String status);




}
