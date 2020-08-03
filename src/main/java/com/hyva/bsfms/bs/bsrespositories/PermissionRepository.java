package com.hyva.bsfms.bs.bsrespositories;

import com.hyva.bsfms.bs.bsentities.Permission;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface PermissionRepository extends JpaRepository<Permission,Long> {
    List<Permission> findAllByPermissionNameContainingAndStatus(String name,String status);
    List<Permission> findAllByStatus(String status);

    Permission findFirstByPermissionNameContainingAndStatus(String name, String status, Sort sort);
    List<Permission> findAllByPermissionNameContainingAndStatus(String name, String status, Pageable pageable);
    List<Permission> findByStatus(String status, Pageable pageable);
    Permission findFirstByStatus( String status, Sort sort);
    List<Permission> findAllByParentId(Long id);
    @Query(value = "select p.parentId  from Permission p group by p.parentId")
    public List<Long> findByPermissionId();
}


