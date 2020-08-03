package com.hyva.bsfms.bs.bsrespositories;
import com.hyva.bsfms.bs.bsentities.JournalEntry;
import com.hyva.bsfms.bs.bsentities.OtherReceipt;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface JournalEntryRepository extends JpaRepository<JournalEntry, Long> {
    JournalEntry findByJeNo(String orNo);
    List<JournalEntry> findAllByStatus(String status);

}
