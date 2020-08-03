package com.hyva.bsfms.bs.bsentities;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@Table(name = "LeaveFormMaster", uniqueConstraints = @UniqueConstraint(columnNames = {"leaveFormId"}))
public class LeaveFormMaster implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    private Long leaveFormId;
    private String name;
    private String staffNo;
    private String position;
    private String dateApply;
    private String reach;
    private String telephoneNo;
    private String supervisor;
    private String reliefStaff;
    private String typeOfLeave;
    private String approved;
    private String notApproved;
    private String note;
    private String adminNote;
    private String date;
    private String status;
    private String leaveFormList;
    @Column(columnDefinition="text")
    private String leaveList;
    private String dateDiff;
    private String signdate;
    private String admin;
    private String murdissign;
    private String approveStatus;
    private String NotApprovedStatus;
    private String daysRequired;

}
