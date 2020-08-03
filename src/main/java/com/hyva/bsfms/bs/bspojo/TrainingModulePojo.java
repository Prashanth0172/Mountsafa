package com.hyva.bsfms.bs.bspojo;

import com.hyva.bsfms.bs.bsentities.User;
import lombok.Data;

import javax.persistence.OneToOne;
import java.sql.Date;

@Data
public class TrainingModulePojo {
    private Long trainingId;
    private String trainingModuleName;
    private String trainingDescription;
    private String trainingStatus;
    private String branchName;
    private String branchId;
    private String userId;
}
