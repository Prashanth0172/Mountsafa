package com.hyva.bsfms.bs.bsrespositories;



import com.hyva.bsfms.bs.bsentities.Remainders;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BsRemaindersRepository extends JpaRepository<Remainders, Long> {

    Remainders findByRemainderNameAndRemainderIdNotIn(String name, Long id);
    Remainders findByRemainderName(String name);
    List<Remainders> findAllByRemainderStatus(String status);
    List<Remainders> findByRemainderStatusAndRemainderNameContaining(String name, String status);
    Remainders findByRemainderId(Long id);

    List<Remainders> findAllByRemainderNameContainingAndRemainderStatus(String name,String status);
    Remainders findFirstByRemainderNameContainingAndRemainderStatus(String name, String status, Sort sort);
    List<Remainders> findAllByRemainderNameContainingAndRemainderStatus(String name, String status, Pageable pageable);
    Remainders findFirstByRemainderStatus(String status, Sort sort);
    List<Remainders> findAllByRemainderStatus(String status, Pageable pageable);


}
