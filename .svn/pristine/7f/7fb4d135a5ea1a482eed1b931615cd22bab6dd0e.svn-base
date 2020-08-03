package com.hyva.bsfms.bs.bsrespositories;

import com.hyva.bsfms.bs.bsentities.Instruments;
import com.hyva.bsfms.bs.bsentities.Position;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BsInstrumentsRepository extends JpaRepository<Instruments, Long> {

    Instruments findByInstrumentsName(String name);
    Instruments findByInstrumentsNameAndInstrumentsIdNotIn(String name, Long id);
    List<Instruments> findAllByInstrumentsName(String positionName);
    List<Instruments>findAllByStatus(String status);
    List<Instruments>findAllByInstrumentsNameContainingAndStatus(String countryName, String status);
    Instruments findFirstByInstrumentsNameContainingAndStatus(String countryName, String status, Sort sort);
    List<Instruments>findAllByInstrumentsNameContainingAndStatus(String countryName, String status, Pageable pageable);
    Instruments findFirstByStatus(String status, Sort sort);
    List<Instruments>findAllByStatus(String status, Pageable pageable);

}
