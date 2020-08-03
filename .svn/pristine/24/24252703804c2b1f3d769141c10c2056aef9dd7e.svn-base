package com.hyva.bsfms.bs.bsentities;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@Table(name = "leaveMaster", uniqueConstraints = @UniqueConstraint(columnNames = {"leaveId"}))
public class LeaveMaster implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    private Long leaveId;
    private String leaveType;
    private String status;
    private String leaveFor;
    private String days;
    private String dayCount;
    private String paidLeave;
    private String allowNegativeBal;
    private String reasonRequired;
    private String day;
    private String day1;
    private String calender;
}
