package com.hyva.bsfms.bs.bsrespositories;
import com.hyva.bsfms.bs.bsentities.AssesmentSubmissionDetails;
import com.hyva.bsfms.bs.bsentities.Settings;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GeneralSettingsRepository extends JpaRepository<Settings,Long> {
    Settings findById(Long Id);
}
