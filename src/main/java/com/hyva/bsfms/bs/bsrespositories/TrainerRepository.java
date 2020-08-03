package com.hyva.bsfms.bs.bsrespositories;

import com.hyva.bsfms.bs.bsentities.Holiday;
import com.hyva.bsfms.bs.bsentities.Trainer;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TrainerRepository extends JpaRepository<Trainer,Long> {

    Trainer findAllByNameAndIdNotIn(String name, Long id);
    Trainer findAllByName(String name);
    List<Trainer> findAllByNameContainingAndStatus(String name, String status);
    Trainer findFirstByNameContainingAndStatus(String name, String status, Sort sort);
    List<Trainer> findAllByNameContainingAndStatus(String name, String status, Pageable pageable);
    Trainer findFirstByStatus(String status,Sort sort);
    List<Trainer> findAllByStatus(String status, Pageable pageable);
    List<Trainer> findAllByStatus(String status);
    List<Trainer> findByStatusAndNameContaining(String status,String name);
}
