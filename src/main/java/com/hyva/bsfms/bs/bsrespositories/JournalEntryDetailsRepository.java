package com.hyva.bsfms.bs.bsrespositories;
import com.hyva.bsfms.bs.bsentities.JournalEntry;
import com.hyva.bsfms.bs.bsentities.JournalEntryDetails;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface JournalEntryDetailsRepository extends JpaRepository<JournalEntryDetails, Long> {
List<JournalEntryDetails> findAllByJeId(JournalEntry journalEntry);
}
