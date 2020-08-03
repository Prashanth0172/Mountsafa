package com.hyva.bsfms.bs.bsentities;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;

@Entity
@Data
@Table(name = "HrApplication", uniqueConstraints = @UniqueConstraint(columnNames = {"hrId"}))
public class HrApplication implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    private Long hrId;
    private String hrFullName;
    private Date DOBText;
    private String passportNew;
    private String hrNationality;
    private String hrSex;
    private String hrAddress1;
    private String hrAddress2;
    private String country;
    private String state;
    private String city;
    private String postCode;
    private String hrphoneNo;
    private String hPNo;
    private String hrEmailAddress;
    private String hrage;
    private String hrplaceOfBirth;
    private String hrmaritalstatus;
    private String hrHPNo;
    private String spouseFullName;
    private String spousepassportNew;
    private String spousepassportOld;
    private Date spouseDOBText;
    private String spouseNationality;
    private String spouseage;
    private String spouseplaceOfBirth;
    private String spouseAddress;
    private String spousephoneNo;
    private String spouseHPNo;
    @Column(columnDefinition="text")
    private String academicQuali;
    @Column(columnDefinition="text")
    private String feildOfSpec;
    private String pecomsch;
    private String pedesignation;
    private Date peDateAppoint;
    private String preEmpAddress;
    private String preEmpTelNo;
    private String preEmpSal;
    private String preEmpavail;
    private String positionText;
    private String identityCard;
    private String hrResume;
    private String relevantcert;
    private String photocopy;
    private String tertiaryeducerts;
    private String otherdocs;
    @Column(columnDefinition="text")
    private String workExperiencedetailsList;
    private String reasonForLeaving;
    private String longServeMSI;
    private String furtherStudies;
    private String expecedSalary;
    private String personalObservation;
    private String contrtrowIslamic;
    private String usPrinAndConcept;
    private String rolePlayMSI;
    private String booksWritingIslamic;
    private String medicalHistory;
    private String medicaldisabilities;
    @Column(columnDefinition="text")
    private String referenceDetailsList;
    private String passportOld;
    private String status;
    private String interviewerText;
    @Column(columnDefinition="text")
    private String kivremarks;
    @Column(columnDefinition="text")
    private String interviewNotes;
    private String interviewTime;
    private String interviewerStatus;
    private Date applicationDate;
    private Date interviewDate;
    private Date declarationDate;
    private String spouseOccipation;
    private String declarationSignature;
    private String arabicSpeaking;
    private String arabicWriting;
    private String arabicReading;
    private String engSpeaking;
    private String engWriting;
    private String engReading;
    private String malSpeaking;
    private String malWriting;
    private String malReading;
    private String interviewerSchedStatus;
    @Column(columnDefinition="text")
    private String interviewSchedNotes;
    private String salaryoffered;
    private Date reportingDate;

    public String getSalaryoffered() {
        return salaryoffered;
    }

    public void setSalaryoffered(String salaryoffered) {
        this.salaryoffered = salaryoffered;
    }

    public Date getReportingDate() {
        return reportingDate;
    }

    public void setReportingDate(Date reportingDate) {
        this.reportingDate = reportingDate;
    }

    public String getInterviewerSchedStatus() {
        return interviewerSchedStatus;
    }

    public void setInterviewerSchedStatus(String interviewerSchedStatus) {
        this.interviewerSchedStatus = interviewerSchedStatus;
    }

    public String getInterviewSchedNotes() {
        return interviewSchedNotes;
    }

    public void setInterviewSchedNotes(String interviewSchedNotes) {
        this.interviewSchedNotes = interviewSchedNotes;
    }
    private String secondInteviewStatus;
    @Column(columnDefinition="text")
    private String notes;

    public String getSecondInteviewStatus() {
        return secondInteviewStatus;
    }

    public void setSecondInteviewStatus(String secondInteviewStatus) {
        this.secondInteviewStatus = secondInteviewStatus;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public String getInterviewTime() {
        return interviewTime;
    }

    public void setInterviewTime(String interviewTime) {
        this.interviewTime = interviewTime;
    }

    public Date getDeclarationDate() {
        return declarationDate;
    }

    public void setDeclarationDate(Date declarationDate) {
        this.declarationDate = declarationDate;
    }

    public String getSpouseOccipation() {
        return spouseOccipation;
    }

    public void setSpouseOccipation(String spouseOccipation) {
        this.spouseOccipation = spouseOccipation;
    }

    public String getDeclarationSignature() {
        return declarationSignature;
    }

    public void setDeclarationSignature(String declarationSignature) {
        this.declarationSignature = declarationSignature;
    }

    public String getInterviewerText() {
        return interviewerText;
    }

    public void setInterviewerText(String interviewerText) {
        this.interviewerText = interviewerText;
    }

    public String getKivremarks() {
        return kivremarks;
    }

    public void setKivremarks(String kivremarks) {
        this.kivremarks = kivremarks;
    }

    public String getInterviewNotes() {
        return interviewNotes;
    }

    public void setInterviewNotes(String interviewNotes) {
        this.interviewNotes = interviewNotes;
    }

    public String getInterviewerStatus() {
        return interviewerStatus;
    }

    public void setInterviewerStatus(String interviewerStatus) {
        this.interviewerStatus = interviewerStatus;
    }

    public Date getInterviewDate() {
        return interviewDate;
    }

    public void setInterviewDate(Date interviewDate) {
        this.interviewDate = interviewDate;
    }

    public Date getApplicationDate() {
        return applicationDate;
    }

    public void setApplicationDate(Date applicationDate) {
        this.applicationDate = applicationDate;
    }

    public String getTertiaryeducerts() {
        return tertiaryeducerts;
    }

    public void setTertiaryeducerts(String tertiaryeducerts) {
        this.tertiaryeducerts = tertiaryeducerts;
    }

    public String getOtherdocs() {
        return otherdocs;
    }

    public void setOtherdocs(String otherdocs) {
        this.otherdocs = otherdocs;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Long getHrId() {
        return hrId;
    }

    public void setHrId(Long hrId) {
        this.hrId = hrId;
    }

    public String getHrFullName() {
        return hrFullName;
    }

    public void setHrFullName(String hrFullName) {
        this.hrFullName = hrFullName;
    }

    public Date getDOBText() {
        return DOBText;
    }

    public void setDOBText(Date DOBText) {
        this.DOBText = DOBText;
    }

    public String getPassportNew() {
        return passportNew;
    }

    public void setPassportNew(String passportNew) {
        this.passportNew = passportNew;
    }

    public String getHrNationality() {
        return hrNationality;
    }

    public void setHrNationality(String hrNationality) {
        this.hrNationality = hrNationality;
    }

    public String getHrSex() {
        return hrSex;
    }

    public void setHrSex(String hrSex) {
        this.hrSex = hrSex;
    }

    public String getHrAddress1() {
        return hrAddress1;
    }

    public void setHrAddress1(String hrAddress1) {
        this.hrAddress1 = hrAddress1;
    }

    public String getHrAddress2() {
        return hrAddress2;
    }

    public void setHrAddress2(String hrAddress2) {
        this.hrAddress2 = hrAddress2;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPostCode() {
        return postCode;
    }

    public void setPostCode(String postCode) {
        this.postCode = postCode;
    }

    public String getHrphoneNo() {
        return hrphoneNo;
    }

    public void setHrphoneNo(String hrphoneNo) {
        this.hrphoneNo = hrphoneNo;
    }

    public String gethPNo() {
        return hPNo;
    }

    public void sethPNo(String hPNo) {
        this.hPNo = hPNo;
    }

    public String getHrEmailAddress() {
        return hrEmailAddress;
    }

    public void setHrEmailAddress(String hrEmailAddress) {
        this.hrEmailAddress = hrEmailAddress;
    }

    public String getHrage() {
        return hrage;
    }

    public void setHrage(String hrage) {
        this.hrage = hrage;
    }

    public String getHrplaceOfBirth() {
        return hrplaceOfBirth;
    }

    public void setHrplaceOfBirth(String hrplaceOfBirth) {
        this.hrplaceOfBirth = hrplaceOfBirth;
    }

    public String getHrmaritalstatus() {
        return hrmaritalstatus;
    }

    public void setHrmaritalstatus(String hrmaritalstatus) {
        this.hrmaritalstatus = hrmaritalstatus;
    }

    public String getHrHPNo() {
        return hrHPNo;
    }

    public void setHrHPNo(String hrHPNo) {
        this.hrHPNo = hrHPNo;
    }

    public String getSpouseFullName() {
        return spouseFullName;
    }

    public void setSpouseFullName(String spouseFullName) {
        this.spouseFullName = spouseFullName;
    }

    public String getSpousepassportNew() {
        return spousepassportNew;
    }

    public void setSpousepassportNew(String spousepassportNew) {
        this.spousepassportNew = spousepassportNew;
    }

    public String getSpousepassportOld() {
        return spousepassportOld;
    }

    public void setSpousepassportOld(String spousepassportOld) {
        this.spousepassportOld = spousepassportOld;
    }

    public Date getSpouseDOBText() {
        return spouseDOBText;
    }

    public void setSpouseDOBText(Date spouseDOBText) {
        this.spouseDOBText = spouseDOBText;
    }

    public String getSpouseNationality() {
        return spouseNationality;
    }

    public void setSpouseNationality(String spouseNationality) {
        this.spouseNationality = spouseNationality;
    }

    public String getSpouseage() {
        return spouseage;
    }

    public void setSpouseage(String spouseage) {
        this.spouseage = spouseage;
    }

    public String getSpouseplaceOfBirth() {
        return spouseplaceOfBirth;
    }

    public void setSpouseplaceOfBirth(String spouseplaceOfBirth) {
        this.spouseplaceOfBirth = spouseplaceOfBirth;
    }

    public String getSpouseAddress() {
        return spouseAddress;
    }

    public void setSpouseAddress(String spouseAddress) {
        this.spouseAddress = spouseAddress;
    }

    public String getSpousephoneNo() {
        return spousephoneNo;
    }

    public void setSpousephoneNo(String spousephoneNo) {
        this.spousephoneNo = spousephoneNo;
    }

    public String getSpouseHPNo() {
        return spouseHPNo;
    }

    public void setSpouseHPNo(String spouseHPNo) {
        this.spouseHPNo = spouseHPNo;
    }

    public String getAcademicQuali() {
        return academicQuali;
    }

    public void setAcademicQuali(String academicQuali) {
        this.academicQuali = academicQuali;
    }

    public String getFeildOfSpec() {
        return feildOfSpec;
    }

    public void setFeildOfSpec(String feildOfSpec) {
        this.feildOfSpec = feildOfSpec;
    }

    public String getPecomsch() {
        return pecomsch;
    }

    public void setPecomsch(String pecomsch) {
        this.pecomsch = pecomsch;
    }

    public String getPedesignation() {
        return pedesignation;
    }

    public void setPedesignation(String pedesignation) {
        this.pedesignation = pedesignation;
    }

    public Date getPeDateAppoint() {
        return peDateAppoint;
    }

    public void setPeDateAppoint(Date peDateAppoint) {
        this.peDateAppoint = peDateAppoint;
    }

    public String getPreEmpAddress() {
        return preEmpAddress;
    }

    public void setPreEmpAddress(String preEmpAddress) {
        this.preEmpAddress = preEmpAddress;
    }

    public String getPreEmpTelNo() {
        return preEmpTelNo;
    }

    public void setPreEmpTelNo(String preEmpTelNo) {
        this.preEmpTelNo = preEmpTelNo;
    }

    public String getPreEmpSal() {
        return preEmpSal;
    }

    public void setPreEmpSal(String preEmpSal) {
        this.preEmpSal = preEmpSal;
    }

    public String getPreEmpavail() {
        return preEmpavail;
    }

    public void setPreEmpavail(String preEmpavail) {
        this.preEmpavail = preEmpavail;
    }

    public String getPositionText() {
        return positionText;
    }

    public void setPositionText(String positionText) {
        this.positionText = positionText;
    }

    public String getIdentityCard() {
        return identityCard;
    }

    public void setIdentityCard(String identityCard) {
        this.identityCard = identityCard;
    }

    public String getHrResume() {
        return hrResume;
    }

    public void setHrResume(String hrResume) {
        this.hrResume = hrResume;
    }

    public String getRelevantcert() {
        return relevantcert;
    }

    public void setRelevantcert(String relevantcert) {
        this.relevantcert = relevantcert;
    }

    public String getPhotocopy() {
        return photocopy;
    }

    public void setPhotocopy(String photocopy) {
        this.photocopy = photocopy;
    }

    public String getWorkExperiencedetailsList() {
        return workExperiencedetailsList;
    }

    public void setWorkExperiencedetailsList(String workExperiencedetailsList) {
        this.workExperiencedetailsList = workExperiencedetailsList;
    }

    public String getReasonForLeaving() {
        return reasonForLeaving;
    }

    public void setReasonForLeaving(String reasonForLeaving) {
        this.reasonForLeaving = reasonForLeaving;
    }

    public String getLongServeMSI() {
        return longServeMSI;
    }

    public void setLongServeMSI(String longServeMSI) {
        this.longServeMSI = longServeMSI;
    }

    public String getFurtherStudies() {
        return furtherStudies;
    }

    public void setFurtherStudies(String furtherStudies) {
        this.furtherStudies = furtherStudies;
    }

    public String getExpecedSalary() {
        return expecedSalary;
    }

    public void setExpecedSalary(String expecedSalary) {
        this.expecedSalary = expecedSalary;
    }

    public String getPersonalObservation() {
        return personalObservation;
    }

    public void setPersonalObservation(String personalObservation) {
        this.personalObservation = personalObservation;
    }

    public String getContrtrowIslamic() {
        return contrtrowIslamic;
    }

    public void setContrtrowIslamic(String contrtrowIslamic) {
        this.contrtrowIslamic = contrtrowIslamic;
    }

    public String getUsPrinAndConcept() {
        return usPrinAndConcept;
    }

    public void setUsPrinAndConcept(String usPrinAndConcept) {
        this.usPrinAndConcept = usPrinAndConcept;
    }

    public String getRolePlayMSI() {
        return rolePlayMSI;
    }

    public void setRolePlayMSI(String rolePlayMSI) {
        this.rolePlayMSI = rolePlayMSI;
    }

    public String getBooksWritingIslamic() {
        return booksWritingIslamic;
    }

    public void setBooksWritingIslamic(String booksWritingIslamic) {
        this.booksWritingIslamic = booksWritingIslamic;
    }

    public String getMedicalHistory() {
        return medicalHistory;
    }

    public void setMedicalHistory(String medicalHistory) {
        this.medicalHistory = medicalHistory;
    }

    public String getMedicaldisabilities() {
        return medicaldisabilities;
    }

    public void setMedicaldisabilities(String medicaldisabilities) {
        this.medicaldisabilities = medicaldisabilities;
    }

    public String getReferenceDetailsList() {
        return referenceDetailsList;
    }

    public void setReferenceDetailsList(String referenceDetailsList) {
        this.referenceDetailsList = referenceDetailsList;
    }

    public String getPassportOld() {
        return passportOld;
    }

    public void setPassportOld(String passportOld) {
        this.passportOld = passportOld;
    }

    public String getArabicSpeaking() {
        return arabicSpeaking;
    }

    public void setArabicSpeaking(String arabicSpeaking) {
        this.arabicSpeaking = arabicSpeaking;
    }

    public String getArabicWriting() {
        return arabicWriting;
    }

    public void setArabicWriting(String arabicWriting) {
        this.arabicWriting = arabicWriting;
    }

    public String getArabicReading() {
        return arabicReading;
    }

    public void setArabicReading(String arabicReading) {
        this.arabicReading = arabicReading;
    }

    public String getEngSpeaking() {
        return engSpeaking;
    }

    public void setEngSpeaking(String engSpeaking) {
        this.engSpeaking = engSpeaking;
    }

    public String getEngWriting() {
        return engWriting;
    }

    public void setEngWriting(String engWriting) {
        this.engWriting = engWriting;
    }

    public String getEngReading() {
        return engReading;
    }

    public void setEngReading(String engReading) {
        this.engReading = engReading;
    }

    public String getMalSpeaking() {
        return malSpeaking;
    }

    public void setMalSpeaking(String malSpeaking) {
        this.malSpeaking = malSpeaking;
    }

    public String getMalWriting() {
        return malWriting;
    }

    public void setMalWriting(String malWriting) {
        this.malWriting = malWriting;
    }

    public String getMalReading() {
        return malReading;
    }

    public void setMalReading(String malReading) {
        this.malReading = malReading;
    }
}
