package com.hyva.bsfms.bs.bsentities;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@Table(name = "Qualification", uniqueConstraints = @UniqueConstraint(columnNames = {"qualificationId"}))
public class Qualification implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    private Long qualificationId;
    private String qualificationName;
    private String status;
    private String branchId;
    private String branchName;
//    private String trainingDescription;
    @OneToOne
    private User userId;

}
