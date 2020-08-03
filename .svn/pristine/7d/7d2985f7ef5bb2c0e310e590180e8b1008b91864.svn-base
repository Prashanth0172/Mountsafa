package com.hyva.bsfms.bs.bsentities;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;

@Entity
@Data
@Table(name = "student", uniqueConstraints = @UniqueConstraint(columnNames = {"studentId"}))
public class Student implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    private Long studentId;
    private String studentName;
    @OneToOne
    private GradeMaster level;
    private String admissionFormNo;
    @OneToOne
    private AcademicYearMaster academicYearMaster;
    private Date dateofbirth;
    private String gender;
    private Date dateOfAdmission;
    private Date dateOfJoining;
    private String studentProfileId;
    private String fatherName;
    private String fatherContactNo;
    private String fatherEmailId;
    private String fatherOccupation;
    private String motherName;
    private String motherContactNo;
    private String motherEmailId;
    private String motherOccupation;
    private String bloodGroup;
    private String primaryContactNo;
    private String admissionStatus;
    private Double annualIncome;
    private String presentAddress;
    @Column(columnDefinition="text")
    private String permanentAddress;
    @Column(columnDefinition="text")
    private String spokenlang;
    private String religion;
    private String physicalCondition;
    private String documentUpload;
    private String aadhaarNo;
    private String studentStatus;
    private String gaurdianNumber;
    private String studentType;
    private Long classId;
    private Date admissionDate;
    private String passportNo;
    private String birthCertificate;
    private String age;
    private String telNo;
    private String semester;
    private String nationality;
    private String placeOfBirth;
    @Column(columnDefinition="text")
    private String correspondenceAddress;
    private String language;
    @Column(columnDefinition="text")
    private String previousSchoolsDetails;
    @Column(columnDefinition="text")
    private String siblingsInformation;
    private String medicine;
    private String immunization;
    private String food;
    private String others;
    private String asthma;
    private String epilepsy;
    private String illnessOthers;
    private String medicineState;
    private String immunizationState;
    private String foodState;
    private String othersState;
    private String asthmaState;
    private String epilepsyState;
    private String illnessOthersState;
    private String fatherPassportNo;
    private String fatherICNO;
    private String faxNo;
    private String fatherNationality;
    private Date fathersDOB;
    private String fatherEducation;
    private String incomePerAnnum;
    private String fatherEmployer;
    private String natureofbusiness;
    @Column(columnDefinition="text")
    private String fatherOfficeAddress;
    private String fatherMobileNo;
    private String motherPassportNo;
    private String motherICNO;
    private String motherfaxNo;
    private String motherNationality;
    private Date motherDOB;
    private String motherEducation;
    private String motherincomePerAnnum;
    private String motherEmployer;
    private String mothernatureofbusiness;
    @Column(columnDefinition="text")
    private String motherOfficeAddress;
    private String motherMobileNo;
    private String gaurdianName;
    private String gaurdianPassportNo;
    private String gaurdianNationality;
    private String gaurdianRelation;
    private String gaurdianOccupation;
    private String gaurdianEmployeer;
    private String gaurdianICNO;
    private String gaurdianMobileNo;
    @Column(columnDefinition="text")
    private String gaurdianCorrespondenceAddress;
    @Column(columnDefinition="text")
    private String gaurdianPermanentAddress;
    private String email;
    private String motherTelNo;
    private String guardianTelNo;
    private String houseNo;
    private String streetNo;
    private String postCode;
    private String country;
    private String state;
    private String city;
    @Column(columnDefinition="text")
    private String corresponding;
    @Column(columnDefinition="text")
    private String permanent;
    private String studentPhoto;
    private String studBirthCer;
    private String studIdentityCard;
    private String parentIdentityCard;
    private String parentMarrCer;
    private String prevSchoolCer;
    private String studOtherDoc;
    private String sameascorresponding;
    private String guarSameAsCorresAdd;

    public Long getStudentId() {
        return studentId;
    }

    public void setStudentId(Long studentId) {
        this.studentId = studentId;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public GradeMaster getLevel() {
        return level;
    }

    public void setLevel(GradeMaster level) {
        this.level = level;
    }

    public String getAdmissionFormNo() {
        return admissionFormNo;
    }

    public void setAdmissionFormNo(String admissionFormNo) {
        this.admissionFormNo = admissionFormNo;
    }

    public AcademicYearMaster getAcademicYearMaster() {
        return academicYearMaster;
    }

    public void setAcademicYearMaster(AcademicYearMaster academicYearMaster) {
        this.academicYearMaster = academicYearMaster;
    }

    public Date getDateofbirth() {
        return dateofbirth;
    }

    public void setDateofbirth(Date dateofbirth) {
        this.dateofbirth = dateofbirth;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Date getDateOfAdmission() {
        return dateOfAdmission;
    }

    public void setDateOfAdmission(Date dateOfAdmission) {
        this.dateOfAdmission = dateOfAdmission;
    }

    public Date getDateOfJoining() {
        return dateOfJoining;
    }

    public void setDateOfJoining(Date dateOfJoining) {
        this.dateOfJoining = dateOfJoining;
    }

    public String getStudentProfileId() {
        return studentProfileId;
    }

    public void setStudentProfileId(String studentProfileId) {
        this.studentProfileId = studentProfileId;
    }

    public String getFatherName() {
        return fatherName;
    }

    public void setFatherName(String fatherName) {
        this.fatherName = fatherName;
    }

    public String getFatherContactNo() {
        return fatherContactNo;
    }

    public void setFatherContactNo(String fatherContactNo) {
        this.fatherContactNo = fatherContactNo;
    }

    public String getFatherEmailId() {
        return fatherEmailId;
    }

    public void setFatherEmailId(String fatherEmailId) {
        this.fatherEmailId = fatherEmailId;
    }

    public String getFatherOccupation() {
        return fatherOccupation;
    }

    public void setFatherOccupation(String fatherOccupation) {
        this.fatherOccupation = fatherOccupation;
    }

    public String getMotherName() {
        return motherName;
    }

    public void setMotherName(String motherName) {
        this.motherName = motherName;
    }

    public String getMotherContactNo() {
        return motherContactNo;
    }

    public void setMotherContactNo(String motherContactNo) {
        this.motherContactNo = motherContactNo;
    }

    public String getMotherEmailId() {
        return motherEmailId;
    }

    public void setMotherEmailId(String motherEmailId) {
        this.motherEmailId = motherEmailId;
    }

    public String getMotherOccupation() {
        return motherOccupation;
    }

    public void setMotherOccupation(String motherOccupation) {
        this.motherOccupation = motherOccupation;
    }

    public String getBloodGroup() {
        return bloodGroup;
    }

    public void setBloodGroup(String bloodGroup) {
        this.bloodGroup = bloodGroup;
    }

    public String getPrimaryContactNo() {
        return primaryContactNo;
    }

    public void setPrimaryContactNo(String primaryContactNo) {
        this.primaryContactNo = primaryContactNo;
    }

    public String getAdmissionStatus() {
        return admissionStatus;
    }

    public void setAdmissionStatus(String admissionStatus) {
        this.admissionStatus = admissionStatus;
    }

    public Double getAnnualIncome() {
        return annualIncome;
    }

    public void setAnnualIncome(Double annualIncome) {
        this.annualIncome = annualIncome;
    }

    public String getPresentAddress() {
        return presentAddress;
    }

    public void setPresentAddress(String presentAddress) {
        this.presentAddress = presentAddress;
    }

    public String getPermanentAddress() {
        return permanentAddress;
    }

    public void setPermanentAddress(String permanentAddress) {
        this.permanentAddress = permanentAddress;
    }

    public String getSpokenlang() {
        return spokenlang;
    }

    public void setSpokenlang(String spokenlang) {
        this.spokenlang = spokenlang;
    }

    public String getReligion() {
        return religion;
    }

    public void setReligion(String religion) {
        this.religion = religion;
    }

    public String getPhysicalCondition() {
        return physicalCondition;
    }

    public void setPhysicalCondition(String physicalCondition) {
        this.physicalCondition = physicalCondition;
    }

    public String getDocumentUpload() {
        return documentUpload;
    }

    public void setDocumentUpload(String documentUpload) {
        this.documentUpload = documentUpload;
    }

    public String getAadhaarNo() {
        return aadhaarNo;
    }

    public void setAadhaarNo(String aadhaarNo) {
        this.aadhaarNo = aadhaarNo;
    }

    public String getStudentStatus() {
        return studentStatus;
    }

    public void setStudentStatus(String studentStatus) {
        this.studentStatus = studentStatus;
    }

    public String getGaurdianNumber() {
        return gaurdianNumber;
    }

    public void setGaurdianNumber(String gaurdianNumber) {
        this.gaurdianNumber = gaurdianNumber;
    }

    public String getStudentType() {
        return studentType;
    }

    public void setStudentType(String studentType) {
        this.studentType = studentType;
    }

    public Long getClassId() {
        return classId;
    }

    public void setClassId(Long classId) {
        this.classId = classId;
    }

    public Date getAdmissionDate() {
        return admissionDate;
    }

    public void setAdmissionDate(Date admissionDate) {
        this.admissionDate = admissionDate;
    }

    public String getPassportNo() {
        return passportNo;
    }

    public void setPassportNo(String passportNo) {
        this.passportNo = passportNo;
    }

    public String getBirthCertificate() {
        return birthCertificate;
    }

    public void setBirthCertificate(String birthCertificate) {
        this.birthCertificate = birthCertificate;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getTelNo() {
        return telNo;
    }

    public void setTelNo(String telNo) {
        this.telNo = telNo;
    }

    public String getSemester() {
        return semester;
    }

    public void setSemester(String semester) {
        this.semester = semester;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public String getPlaceOfBirth() {
        return placeOfBirth;
    }

    public void setPlaceOfBirth(String placeOfBirth) {
        this.placeOfBirth = placeOfBirth;
    }

    public String getCorrespondenceAddress() {
        return correspondenceAddress;
    }

    public void setCorrespondenceAddress(String correspondenceAddress) {
        this.correspondenceAddress = correspondenceAddress;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getPreviousSchoolsDetails() {
        return previousSchoolsDetails;
    }

    public void setPreviousSchoolsDetails(String previousSchoolsDetails) {
        this.previousSchoolsDetails = previousSchoolsDetails;
    }

    public String getSiblingsInformation() {
        return siblingsInformation;
    }

    public void setSiblingsInformation(String siblingsInformation) {
        this.siblingsInformation = siblingsInformation;
    }

    public String getMedicine() {
        return medicine;
    }

    public void setMedicine(String medicine) {
        this.medicine = medicine;
    }

    public String getImmunization() {
        return immunization;
    }

    public void setImmunization(String immunization) {
        this.immunization = immunization;
    }

    public String getFood() {
        return food;
    }

    public void setFood(String food) {
        this.food = food;
    }

    public String getOthers() {
        return others;
    }

    public void setOthers(String others) {
        this.others = others;
    }

    public String getAsthma() {
        return asthma;
    }

    public void setAsthma(String asthma) {
        this.asthma = asthma;
    }

    public String getEpilepsy() {
        return epilepsy;
    }

    public void setEpilepsy(String epilepsy) {
        this.epilepsy = epilepsy;
    }

    public String getIllnessOthers() {
        return illnessOthers;
    }

    public void setIllnessOthers(String illnessOthers) {
        this.illnessOthers = illnessOthers;
    }

    public String getMedicineState() {
        return medicineState;
    }

    public void setMedicineState(String medicineState) {
        this.medicineState = medicineState;
    }

    public String getImmunizationState() {
        return immunizationState;
    }

    public void setImmunizationState(String immunizationState) {
        this.immunizationState = immunizationState;
    }

    public String getFoodState() {
        return foodState;
    }

    public void setFoodState(String foodState) {
        this.foodState = foodState;
    }

    public String getOthersState() {
        return othersState;
    }

    public void setOthersState(String othersState) {
        this.othersState = othersState;
    }

    public String getAsthmaState() {
        return asthmaState;
    }

    public void setAsthmaState(String asthmaState) {
        this.asthmaState = asthmaState;
    }

    public String getEpilepsyState() {
        return epilepsyState;
    }

    public void setEpilepsyState(String epilepsyState) {
        this.epilepsyState = epilepsyState;
    }

    public String getIllnessOthersState() {
        return illnessOthersState;
    }

    public void setIllnessOthersState(String illnessOthersState) {
        this.illnessOthersState = illnessOthersState;
    }

    public String getFatherPassportNo() {
        return fatherPassportNo;
    }

    public void setFatherPassportNo(String fatherPassportNo) {
        this.fatherPassportNo = fatherPassportNo;
    }

    public String getFatherICNO() {
        return fatherICNO;
    }

    public void setFatherICNO(String fatherICNO) {
        this.fatherICNO = fatherICNO;
    }

    public String getFaxNo() {
        return faxNo;
    }

    public void setFaxNo(String faxNo) {
        this.faxNo = faxNo;
    }

    public String getFatherNationality() {
        return fatherNationality;
    }

    public void setFatherNationality(String fatherNationality) {
        this.fatherNationality = fatherNationality;
    }

    public Date getFathersDOB() {
        return fathersDOB;
    }

    public void setFathersDOB(Date fathersDOB) {
        this.fathersDOB = fathersDOB;
    }

    public String getFatherEducation() {
        return fatherEducation;
    }

    public void setFatherEducation(String fatherEducation) {
        this.fatherEducation = fatherEducation;
    }

    public String getIncomePerAnnum() {
        return incomePerAnnum;
    }

    public void setIncomePerAnnum(String incomePerAnnum) {
        this.incomePerAnnum = incomePerAnnum;
    }

    public String getFatherEmployer() {
        return fatherEmployer;
    }

    public void setFatherEmployer(String fatherEmployer) {
        this.fatherEmployer = fatherEmployer;
    }

    public String getNatureofbusiness() {
        return natureofbusiness;
    }

    public void setNatureofbusiness(String natureofbusiness) {
        this.natureofbusiness = natureofbusiness;
    }

    public String getFatherOfficeAddress() {
        return fatherOfficeAddress;
    }

    public void setFatherOfficeAddress(String fatherOfficeAddress) {
        this.fatherOfficeAddress = fatherOfficeAddress;
    }

    public String getFatherMobileNo() {
        return fatherMobileNo;
    }

    public void setFatherMobileNo(String fatherMobileNo) {
        this.fatherMobileNo = fatherMobileNo;
    }

    public String getMotherPassportNo() {
        return motherPassportNo;
    }

    public void setMotherPassportNo(String motherPassportNo) {
        this.motherPassportNo = motherPassportNo;
    }

    public String getMotherICNO() {
        return motherICNO;
    }

    public void setMotherICNO(String motherICNO) {
        this.motherICNO = motherICNO;
    }

    public String getMotherfaxNo() {
        return motherfaxNo;
    }

    public void setMotherfaxNo(String motherfaxNo) {
        this.motherfaxNo = motherfaxNo;
    }

    public String getMotherNationality() {
        return motherNationality;
    }

    public void setMotherNationality(String motherNationality) {
        this.motherNationality = motherNationality;
    }

    public Date getMotherDOB() {
        return motherDOB;
    }

    public void setMotherDOB(Date motherDOB) {
        this.motherDOB = motherDOB;
    }

    public String getMotherEducation() {
        return motherEducation;
    }

    public void setMotherEducation(String motherEducation) {
        this.motherEducation = motherEducation;
    }

    public String getMotherincomePerAnnum() {
        return motherincomePerAnnum;
    }

    public void setMotherincomePerAnnum(String motherincomePerAnnum) {
        this.motherincomePerAnnum = motherincomePerAnnum;
    }

    public String getMotherEmployer() {
        return motherEmployer;
    }

    public void setMotherEmployer(String motherEmployer) {
        this.motherEmployer = motherEmployer;
    }

    public String getMothernatureofbusiness() {
        return mothernatureofbusiness;
    }

    public void setMothernatureofbusiness(String mothernatureofbusiness) {
        this.mothernatureofbusiness = mothernatureofbusiness;
    }

    public String getMotherOfficeAddress() {
        return motherOfficeAddress;
    }

    public void setMotherOfficeAddress(String motherOfficeAddress) {
        this.motherOfficeAddress = motherOfficeAddress;
    }

    public String getMotherMobileNo() {
        return motherMobileNo;
    }

    public void setMotherMobileNo(String motherMobileNo) {
        this.motherMobileNo = motherMobileNo;
    }

    public String getGaurdianName() {
        return gaurdianName;
    }

    public void setGaurdianName(String gaurdianName) {
        this.gaurdianName = gaurdianName;
    }

    public String getGaurdianPassportNo() {
        return gaurdianPassportNo;
    }

    public void setGaurdianPassportNo(String gaurdianPassportNo) {
        this.gaurdianPassportNo = gaurdianPassportNo;
    }

    public String getGaurdianNationality() {
        return gaurdianNationality;
    }

    public void setGaurdianNationality(String gaurdianNationality) {
        this.gaurdianNationality = gaurdianNationality;
    }

    public String getGaurdianRelation() {
        return gaurdianRelation;
    }

    public void setGaurdianRelation(String gaurdianRelation) {
        this.gaurdianRelation = gaurdianRelation;
    }

    public String getGaurdianOccupation() {
        return gaurdianOccupation;
    }

    public void setGaurdianOccupation(String gaurdianOccupation) {
        this.gaurdianOccupation = gaurdianOccupation;
    }

    public String getGaurdianEmployeer() {
        return gaurdianEmployeer;
    }

    public void setGaurdianEmployeer(String gaurdianEmployeer) {
        this.gaurdianEmployeer = gaurdianEmployeer;
    }

    public String getGaurdianICNO() {
        return gaurdianICNO;
    }

    public void setGaurdianICNO(String gaurdianICNO) {
        this.gaurdianICNO = gaurdianICNO;
    }

    public String getGaurdianMobileNo() {
        return gaurdianMobileNo;
    }

    public void setGaurdianMobileNo(String gaurdianMobileNo) {
        this.gaurdianMobileNo = gaurdianMobileNo;
    }

    public String getGaurdianCorrespondenceAddress() {
        return gaurdianCorrespondenceAddress;
    }

    public void setGaurdianCorrespondenceAddress(String gaurdianCorrespondenceAddress) {
        this.gaurdianCorrespondenceAddress = gaurdianCorrespondenceAddress;
    }

    public String getGaurdianPermanentAddress() {
        return gaurdianPermanentAddress;
    }

    public void setGaurdianPermanentAddress(String gaurdianPermanentAddress) {
        this.gaurdianPermanentAddress = gaurdianPermanentAddress;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMotherTelNo() {
        return motherTelNo;
    }

    public void setMotherTelNo(String motherTelNo) {
        this.motherTelNo = motherTelNo;
    }

    public String getGuardianTelNo() {
        return guardianTelNo;
    }

    public void setGuardianTelNo(String guardianTelNo) {
        this.guardianTelNo = guardianTelNo;
    }

    public String getHouseNo() {
        return houseNo;
    }

    public void setHouseNo(String houseNo) {
        this.houseNo = houseNo;
    }

    public String getStreetNo() {
        return streetNo;
    }

    public void setStreetNo(String streetNo) {
        this.streetNo = streetNo;
    }

    public String getPostCode() {
        return postCode;
    }

    public void setPostCode(String postCode) {
        this.postCode = postCode;
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

    public String getCorresponding() {
        return corresponding;
    }

    public void setCorresponding(String corresponding) {
        this.corresponding = corresponding;
    }

    public String getPermanent() {
        return permanent;
    }

    public void setPermanent(String permanent) {
        this.permanent = permanent;
    }

    public String getStudentPhoto() {
        return studentPhoto;
    }

    public void setStudentPhoto(String studentPhoto) {
        this.studentPhoto = studentPhoto;
    }

    public String getStudBirthCer() {
        return studBirthCer;
    }

    public void setStudBirthCer(String studBirthCer) {
        this.studBirthCer = studBirthCer;
    }

    public String getStudIdentityCard() {
        return studIdentityCard;
    }

    public void setStudIdentityCard(String studIdentityCard) {
        this.studIdentityCard = studIdentityCard;
    }

    public String getParentIdentityCard() {
        return parentIdentityCard;
    }

    public void setParentIdentityCard(String parentIdentityCard) {
        this.parentIdentityCard = parentIdentityCard;
    }

    public String getParentMarrCer() {
        return parentMarrCer;
    }

    public void setParentMarrCer(String parentMarrCer) {
        this.parentMarrCer = parentMarrCer;
    }

    public String getPrevSchoolCer() {
        return prevSchoolCer;
    }

    public void setPrevSchoolCer(String prevSchoolCer) {
        this.prevSchoolCer = prevSchoolCer;
    }

    public String getStudOtherDoc() {
        return studOtherDoc;
    }

    public void setStudOtherDoc(String studOtherDoc) {
        this.studOtherDoc = studOtherDoc;
    }

    public String getSameascorresponding() {
        return sameascorresponding;
    }

    public void setSameascorresponding(String sameascorresponding) {
        this.sameascorresponding = sameascorresponding;
    }

    public String getGuarSameAsCorresAdd() {
        return guarSameAsCorresAdd;
    }

    public void setGuarSameAsCorresAdd(String guarSameAsCorresAdd) {
        this.guarSameAsCorresAdd = guarSameAsCorresAdd;
    }
}
