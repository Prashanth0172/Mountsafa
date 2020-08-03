package com.hyva.bsfms.bs.bsrespositories;

import com.hyva.bsfms.bs.bsentities.DiscountType;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BsDiscountTypeRepository extends JpaRepository<DiscountType, Long> {

    DiscountType findByDiscountTypeAndDiscountIdNotIn(String name, Long id);
    DiscountType findByDiscountType(String name);
    List<DiscountType> findAllByDiscountType(String name);
    List<DiscountType> findAllByDiscountTypeContaining(String typeName);
    DiscountType findFirstByDiscountTypeContainingAndDiscountStatus(String typeName,String status, Sort sort);
    List<DiscountType> findAllByDiscountTypeContainingAndDiscountStatus(String typeName,String status, Pageable pageable);
    DiscountType findFirstByDiscountStatus(String status,Sort sort);
    List<DiscountType> findAllByDiscountStatus(String name,Pageable pageable);
}
