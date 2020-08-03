package com.hyva.bsfms.bs.bsentities;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;

@Entity
@Data
@Table(name = "TrainingModule", uniqueConstraints = @UniqueConstraint(columnNames = {"trainingId"}))
public class TrainingModule implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    private Long trainingId;
    private String trainingModuleName;
    private String trainingDescription;
    private String trainingStatus;
    private String branchName;
    private String branchId;
    @OneToOne
    private User userId;

}
