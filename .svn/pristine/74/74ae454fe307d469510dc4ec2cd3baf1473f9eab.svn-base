package com.hyva.bsfms.bs.bsrespositories;

import com.hyva.bsfms.bs.bsentities.Term;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TermRepository extends JpaRepository<Term,Long> {
    Term findByTermNameAndSemesterId(String name,Long semid);
    Term findByTermId(Long Id);
    Term findByTermName(String name);
    Term findByTermNameAndSemesterIdAndTermIdNotIn(String name,Long semid, Long id);
    List<Term> findAllByTermName(String name);
    List<Term> findAllBySemesterId(Long semid);
    List<Term> findAllByTermNameContainingAndStatus(String name,String status);
    Term findFirstByTermNameContainingAndStatus(String name, String status, Sort sort);
    Term findFirstByStatus(String status,Sort sort);
    List<Term> findAllByStatus(String status, Pageable pageable);
    List<Term> findAllByStatus(String status);
    List<Term> findByStatusAndTermNameContaining(String status,String name);
    List<Term> findAllByTermNameContainingAndStatus(String name, String status, Pageable pageable);


}
