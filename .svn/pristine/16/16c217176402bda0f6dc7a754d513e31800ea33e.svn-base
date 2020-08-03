package com.hyva.bsfms.bs.bsrespositories;


import com.hyva.bsfms.bs.bsentities.Designation;
import com.hyva.bsfms.bs.bsentities.Suppliers;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BsSuppliersRepository extends JpaRepository<Suppliers, Long> {
    Suppliers findBySuppliersNameAndSuppliersIdNotIn(String name, Long id);
    Suppliers findBySuppliersName(String name);

    List<Suppliers> findBySuppliersStatusAndSuppliersNameContaining(String name, String status);
    Suppliers findBySuppliersId(Long id);
    List<Suppliers> findAllBysuppliersNameContainingAndSuppliersStatus(String name,String status);
    Suppliers findFirstBySuppliersNameContainingAndSuppliersStatus(String name, String status, Sort sort);
    List<Suppliers> findAllBySuppliersNameContainingAndSuppliersStatus(String name, String status, Pageable pageable);
    Suppliers findFirstBySuppliersStatus(String status, Sort sort);
    List<Suppliers> findAllBySuppliersStatus(String status, Pageable pageable);
    List<Suppliers> findAllBySuppliersStatus(String status);



}
