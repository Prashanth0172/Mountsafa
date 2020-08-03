package com.hyva.bsfms.bs.bsentities;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;

@Entity
@Data
@Table(name = "DoctorPanel", uniqueConstraints = @UniqueConstraint(columnNames = {"doctorpanelId"}))
public class DoctorPanelMaster implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    private Long doctorpanelId;
    private String doctorName;
    private String doctorCode;
    private String doctorSpecialization;
    private String doctorAddress;
    private String doctorPhone;
    private String doctorEmail;
    private String doctorRemarks;
    private String branchName;
    private String branchId;
    private String doctorStatus;
    @OneToOne
    private User userId;

}
