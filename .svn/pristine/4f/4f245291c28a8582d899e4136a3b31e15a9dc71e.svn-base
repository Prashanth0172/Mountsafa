package com.hyva.bsfms.bs.bsentities;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Data
@Table(name = "Notification", uniqueConstraints = @UniqueConstraint(columnNames = {"notificationId"}))
public class Notification implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    private Long notificationId;
    private String notificationSubject;
    private String notificationSend;
    private Date notificationDate;
    private String notificationContent;
    private String notificationStatus;
    private String branchName;
    private String branchId;
    @OneToOne
    private User userId;

}
