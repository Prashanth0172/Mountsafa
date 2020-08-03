package com.hyva.bsfms.bs.bsmapper;

import com.hyva.bsfms.bs.bsentities.*;
import com.hyva.bsfms.bs.bspojo.*;
import org.apache.commons.lang3.StringUtils;

import java.util.ArrayList;
import java.util.List;

import com.hyva.bsfms.bs.bsentities.Class;

public class BsUserMapper {

    public static User mapPojoToEntity(BsUserPojo bsUserPojo) {
        User user = new User();
        user.setEmail(bsUserPojo.getEmail());
        user.setUserName(bsUserPojo.getUserName());
        user.setPasswordUser(bsUserPojo.getPasswordUser());
        user.setFull_name(bsUserPojo.getFull_name());
        user.setPhone(bsUserPojo.getPhone());
        user.setSecurityAnswer(bsUserPojo.getSecurityAnswer());
        user.setSecurityQuestion(bsUserPojo.getSecurityQuestion());
        user.setStatus(bsUserPojo.getStatus());
        user.setBranchCode(bsUserPojo.getBranchCode());
        user.setUserType(bsUserPojo.getUserType());
        user.setBranchId(bsUserPojo.getBranchId());
        user.setOrganizationId(bsUserPojo.getOrganizationId());
        return user;
    }

    public static Country mapCountryPojoToEntity(CountryDTO countryDTO){
        Country country = new Country();
        country.setCountryId(countryDTO.getCountryId());
        country.setCountryName(countryDTO.getCountryName());
        country.setStatus(countryDTO.getStatus());
        return country;
    }
    public static TimeTable mapTimeTablePojoToEntity(TimeTablePojo timeTablePojo){
        TimeTable timeTable = new TimeTable();
        timeTable.setTtId(timeTablePojo.getTtId());
        timeTable.setLevel(timeTablePojo.getLevel());
        timeTable.setClassName(timeTablePojo.getClassName());
        timeTable.setSubject(timeTablePojo.getSubject());
        timeTable.setChooseDay(timeTablePojo.getChooseDay());
        timeTable.setPeriod(timeTablePojo.getPeriod());
        timeTable.setFacility(timeTablePojo.getFacility());
        timeTable.setTeacher(timeTablePojo.getTeacher());
        timeTable.setTtList(timeTablePojo.getTtList());
        return timeTable;
    }

    public static List<TimeTablePojo> mapTimetableEntityToPojo(List<TimeTable> List) {
        List<TimeTablePojo> list = new ArrayList<>();
        for (TimeTable timeTable : List) {
            TimeTablePojo timeTablePojo = new TimeTablePojo();
            timeTablePojo.setTtId(timeTable.getTtId());
            timeTablePojo.setLevel(timeTable.getLevel());
            timeTablePojo.setClassName(timeTable.getClassName());
            timeTablePojo.setSubject(timeTable.getSubject());
            timeTablePojo.setChooseDay(timeTable.getChooseDay());
            timeTablePojo.setPeriod(timeTable.getPeriod());
            timeTablePojo.setFacility(timeTable.getFacility());
            timeTablePojo.setTeacher(timeTable.getTeacher());
            timeTablePojo.setTtList(timeTable.getTtList());

            list.add(timeTablePojo);
        }
        return list;
    }
    public static PeriodsMaster mapPeriodPojoToEntity(PeriodsDTO periodsDTO){
        PeriodsMaster periodsMaster = new PeriodsMaster();
        periodsMaster.setPeriodId(periodsDTO.getPeriodId());
        periodsMaster.setPeriodName(periodsDTO.getPeriodName());
        periodsMaster.setPeriodFrom(periodsDTO.getPeriodFrom());
        periodsMaster.setPeriodTo(periodsDTO.getPeriodTo());
        periodsMaster.setHours(periodsDTO.getHours());
        periodsMaster.setWeekdayText(periodsDTO.getWeekdayText());
        periodsMaster.setStatus(periodsDTO.getStatus());
        return periodsMaster;
    }
    public static List<PeriodsDTO> mapPeriodEntityToPojo(List<PeriodsMaster> List) {
        List<PeriodsDTO> list = new ArrayList<>();
        for (PeriodsMaster periodsMaster : List) {
            PeriodsDTO periodsDTO = new PeriodsDTO();
            periodsDTO.setPeriodId(periodsMaster.getPeriodId());
            periodsDTO.setStatus(periodsMaster.getStatus());
            periodsDTO.setPeriodName(periodsMaster.getPeriodName());
            periodsDTO.setPeriodFrom(periodsMaster.getPeriodFrom());
            periodsDTO.setPeriodTo(periodsMaster.getPeriodTo());
            periodsDTO.setHours(periodsMaster.getHours());
            periodsDTO.setWeekdayText(periodsMaster.getWeekdayText());

            list.add(periodsDTO);
        }
        return list;
    }
    public static AccountType mapAccountTypePojoToEntity(AccountTypePojo accountTypePojo){
        AccountType accountType = new AccountType();
        accountType.setAccountId(accountTypePojo.getAccountId());
        accountType.setAccountDescription(accountTypePojo.getAccountDescription());
        accountType.setAccountName(accountTypePojo.getAccountName());
        accountType.setStatus(accountTypePojo.getStatus());
        return accountType;
    }
    public static AccountGroup mapAccountGroupPojoToEntity(AccountGroupPojo accountGroupPojo){
        AccountGroup accountGroup = new AccountGroup();
        accountGroup.setAccountId(accountGroupPojo.getAccountId());
        accountGroup.setAccountDescription(accountGroupPojo.getAccountDescription());
        accountGroup.setAccountName(accountGroupPojo.getAccountName());
        accountGroup.setAccountType(accountGroupPojo.getAccountType());
        accountGroup.setAccountCode(accountGroupPojo.getAccountCode());
        accountGroup.setStatus(accountGroupPojo.getStatus());
        return accountGroup;
    }
//    public static AccountMaster mapAccountMasterPojoToEntity(ListChatOfAccountDto postChartOfAccountDto){
//        AccountMaster accountMaster = new AccountMaster();
//        accountMaster.setAccountid(postChartOfAccountDto.getAccountid());
//        accountMaster.setAmaccountid(postChartOfAccountDto.getAmaccountid());
//        accountMaster.setAccountGroupId(postChartOfAccountDto.get);
//        accountMaster.setAccountname(postChartOfAccountDto.getAccountname());
//        accountMaster.setStatus(postChartOfAccountDto.getStatus());
//        accountMaster.setAccountCode(postChartOfAccountDto.getAccountcode());
//        accountMaster.setStringAccountCode(postChartOfAccountDto.getStringAccountCode());
//        accountMaster.setAparcode(postChartOfAccountDto.getAparcode());
//        accountMaster.setStatus(postChartOfAccountDto.getStatus());
//        return accountMaster;
//    }
    
    
    
    public static Student mapStudentPojoToEntity(StudentDTO studentDTO){
        Student student = new Student();
        student.setStudentId(studentDTO.getStudentId());
//        student.setLevelId(studentDTO.getLevelId());
        student.setClassId(studentDTO.getClassId());
        student.setAdmissionDate(studentDTO.getAdmissionDate());
        student.setGender(studentDTO.getGender());
        student.setPassportNo(studentDTO.getPassportNo());
        student.setBirthCertificate(studentDTO.getBirthCertificate());
        student.setAge(studentDTO.getAge());
        student.setTelNo(studentDTO.getTelNo());
        student.setLanguage(studentDTO.getLanguage());
        student.setSemester(studentDTO.getSemester());
        student.setStudentStatus("Active");
        student.setStudentName(studentDTO.getStudentName());
        student.setNationality(studentDTO.getNationality());
        student.setDateofbirth(studentDTO.getDateofbirth());
        student.setPlaceOfBirth(studentDTO.getPlaceOfBirth());
        student.setEmail(studentDTO.getEmail());
        student.setMedicine(studentDTO.getMedicine());
        student.setIllnessOthers(studentDTO.getIllnessOthers());
        student.setIllnessOthersState(studentDTO.getIllnessOthersState());
        student.setImmunization(studentDTO.getImmunization());
        student.setImmunizationState(studentDTO.getImmunizationState());
        student.setMedicineState(studentDTO.getMedicineState());
        student.setFood(studentDTO.getFood());
        student.setFoodState(studentDTO.getFoodState());
        student.setOthers(studentDTO.getOthers());
        student.setOthersState(studentDTO.getOthersState());
        student.setAsthma(studentDTO.getAsthma());
        student.setAsthmaState(studentDTO.getAsthmaState());
        student.setEpilepsy(studentDTO.getEpilepsy());
        student.setEpilepsyState(studentDTO.getEpilepsyState());
        student.setFatherName(studentDTO.getFatherName());
        student.setFatherPassportNo(studentDTO.getFatherPassportNo());
        student.setFatherICNO(studentDTO.getFatherICNO());
        student.setFaxNo(studentDTO.getFaxNo());
        student.setNationality(studentDTO.getNationality());
        student.setFathersDOB(studentDTO.getFathersDOB());
        student.setFatherEducation(studentDTO.getFatherEducation());
        student.setFatherOccupation(studentDTO.getFatherOccupation());
        student.setIncomePerAnnum(studentDTO.getIncomePerAnnum());
        if(studentDTO.isFatherPrimaryContact()==true) {
            student.setFatherMobileNo(studentDTO.getFatherMobileNo());
            }
        if(studentDTO.isMotherPrimaryContact()==true){
            student.setMotherMobileNo(studentDTO.getMotherMobileNo());
        }
        if(studentDTO.isGaurdianPrimaryContact()==true){
            student.setGaurdianMobileNo(studentDTO.getGaurdianMobileNo());
        }

        student.setFatherContactNo(studentDTO.getFatherContactNo());
        student.setFatherNationality(studentDTO.getFatherNationality());
        student.setMotherContactNo(studentDTO.getMotherContactNo());
        student.setFatherEmployer(studentDTO.getFatherEmployer());
        student.setNatureofbusiness(studentDTO.getNatureofbusiness());
        student.setPreviousSchoolsDetails(studentDTO.getPreviousSchoolsDetails());
        student.setSiblingsInformation(studentDTO.getSiblingsInformation());
        student.setFatherOfficeAddress(studentDTO.getFatherOfficeAddress());
        student.setTelNo(studentDTO.getTelNo());
        student.setMotherName(studentDTO.getMotherName());
        student.setMotherPassportNo(studentDTO.getMotherPassportNo());
        student.setMotherICNO(studentDTO.getMotherICNO());
        student.setMotherfaxNo(studentDTO.getMotherfaxNo());
        student.setMotherNationality(studentDTO.getMotherNationality());
        student.setMotherDOB(studentDTO.getMotherDOB());
        student.setMotherEducation(studentDTO.getMotherEducation());
        student.setMotherOccupation(studentDTO.getMotherOccupation());
        student.setMotherincomePerAnnum(studentDTO.getMotherincomePerAnnum());
        student.setMotherEmployer(studentDTO.getMotherEmployer());
        student.setMothernatureofbusiness(studentDTO.getMothernatureofbusiness());
        student.setMotherOfficeAddress(studentDTO.getMotherOfficeAddress());
        student.setMotherTelNo(studentDTO.getMotherTelNo());
        student.setMotherEmailId(studentDTO.getMotherEmailId());
        student.setGaurdianName(studentDTO.getGaurdianName());
        student.setGaurdianPassportNo(studentDTO.getGaurdianPassportNo());
        student.setGaurdianNationality(studentDTO.getGaurdianNationality());
        student.setGaurdianRelation(studentDTO.getGaurdianRelation());
        student.setGaurdianOccupation(studentDTO.getGaurdianOccupation());
        student.setGaurdianEmployeer(studentDTO.getGaurdianEmployeer());
        student.setGaurdianICNO(studentDTO.getGaurdianICNO());
        student.setGuardianTelNo(studentDTO.getGuardianTelNo());
        student.setSpokenlang(studentDTO.getSpokenlang());
        student.setGaurdianEmployeer(studentDTO.getGaurdianEmployeer());
        if(StringUtils.equals(studentDTO.getSameascorresponding(),"true")) {
            student.setPermanent(studentDTO.getCorresponding());
        }else {
            student.setPermanent(studentDTO.getPermanent());
        }
        student.setSameascorresponding(studentDTO.getSameascorresponding());
        student.setCorresponding(studentDTO.getCorresponding());
        student.setGuarSameAsCorresAdd(studentDTO.getGuarSameAsCorresAdd());
        if(StringUtils.equals(studentDTO.getSameascorresponding(),"true")) {
            student.setGaurdianPermanentAddress(studentDTO.getGaurdianCorrespondenceAddress());
        }else {
            student.setGaurdianPermanentAddress(studentDTO.getGaurdianPermanentAddress());
        }
        student.setGaurdianCorrespondenceAddress(studentDTO.getGaurdianCorrespondenceAddress());
        student.setStudentProfileId(studentDTO.getStudentProfileId());
        student.setStudentPhoto(studentDTO.getStudentPhoto());
        student.setStudBirthCer(studentDTO.getStudBirthCer());
        student.setStudOtherDoc(studentDTO.getStudOtherDoc());
        student.setStudIdentityCard(studentDTO.getStudIdentityCard());
        student.setParentIdentityCard(studentDTO.getParentIdentityCard());
        student.setPrevSchoolCer(studentDTO.getPrevSchoolCer());
        student.setParentMarrCer(studentDTO.getParentMarrCer());
        return student;
    }

    public static List<StudentPojo> mapStudentEntityToPojo(List<Student> studentList) {
        List<StudentPojo> list = new ArrayList<>();
        for (Student student : studentList) {
            StudentPojo studentPojo = new StudentPojo();
            studentPojo.setStudentId(student.getStudentId());
            if (student.getLevel() != null) {
                studentPojo.setGradeId(student.getLevel().getGradeId());
            }

            if (student.getClassId() != null) {
                studentPojo.setClassId(student.getClassId().toString());
            }

            studentPojo.setAdmissionDate(student.getDateOfJoining());
            studentPojo.setGender(student.getGender());
            studentPojo.setPassportNo(student.getPassportNo());
            studentPojo.setBirthCertificate(student.getBirthCertificate());
            studentPojo.setAge(student.getAge());
            studentPojo.setTelNo(student.getMotherContactNo());
            studentPojo.setLanguage(student.getLanguage());
            studentPojo.setAcademicYear(student.getAcademicYearMaster().getAcdyrName());
            studentPojo.setAcdYearId(student.getAcademicYearMaster().getAcdyrId());
            studentPojo.setSemester(student.getSemester());
            studentPojo.setStudentStatus("Active");
            studentPojo.setStudentName(student.getStudentName());
            studentPojo.setNationality(student.getNationality());
            studentPojo.setDateofbirth(student.getDateofbirth());
            studentPojo.setPlaceOfBirth(student.getPlaceOfBirth());
            studentPojo.setPermanent(student.getPermanentAddress());
            studentPojo.setEmail(student.getEmail());
            studentPojo.setFatherEmailId(student.getFatherEmailId());
            studentPojo.setAdmissionDate(student.getAdmissionDate());
            studentPojo.setMedicine(student.getMedicine());
            studentPojo.setIllnessOthers(student.getIllnessOthers());
            studentPojo.setIllnessOthersState(student.getIllnessOthersState());
            studentPojo.setImmunization(student.getImmunization());
            studentPojo.setImmunizationState(student.getImmunizationState());
            studentPojo.setMedicineState(student.getMedicineState());
            studentPojo.setFood(student.getFood());
            studentPojo.setFoodState(student.getFoodState());
            studentPojo.setOthers(student.getOthers());
            studentPojo.setOthersState(student.getOthersState());
            studentPojo.setAsthma(student.getAsthma());
            studentPojo.setAsthmaState(student.getAsthmaState());
            studentPojo.setEpilepsy(student.getEpilepsy());
            studentPojo.setEpilepsyState(student.getEpilepsyState());
            studentPojo.setFatherName(student.getFatherName());
            studentPojo.setFatherPassportNo(student.getFatherPassportNo());
            studentPojo.setFatherICNO(student.getFatherICNO());
            studentPojo.setFaxNo(student.getFaxNo());
            studentPojo.setNationality(student.getNationality());
            studentPojo.setFathersDOB(student.getFathersDOB());
            studentPojo.setFatherEducation(student.getFatherEducation());
            studentPojo.setFatherOccupation(student.getFatherOccupation());
            studentPojo.setIncomePerAnnum(student.getIncomePerAnnum());
            studentPojo.setFatherMobileNo(student.getFatherMobileNo());
            studentPojo.setFatherContactNo(student.getFatherContactNo());
            studentPojo.setFatherNationality(student.getFatherNationality());
            studentPojo.setMotherContactNo(student.getMotherContactNo());
            studentPojo.setFatherEmployer(student.getFatherEmployer());
            studentPojo.setNatureofbusiness(student.getNatureofbusiness());
            studentPojo.setPreviousSchoolsDetails(student.getPreviousSchoolsDetails());
            studentPojo.setSiblingsInformation(student.getSiblingsInformation());
            studentPojo.setFatherOfficeAddress(student.getFatherOfficeAddress());
            studentPojo.setTelNo(student.getTelNo());
            studentPojo.setMotherName(student.getMotherName());
            studentPojo.setMotherPassportNo(student.getMotherPassportNo());
            studentPojo.setMotherICNO(student.getMotherICNO());
            studentPojo.setMotherfaxNo(student.getMotherfaxNo());
            studentPojo.setMotherNationality(student.getMotherNationality());
            studentPojo.setMotherDOB(student.getMotherDOB());
            studentPojo.setMotherEducation(student.getMotherEducation());
            studentPojo.setMotherOccupation(student.getMotherOccupation());
            studentPojo.setMotherincomePerAnnum(student.getMotherincomePerAnnum());
            studentPojo.setMotherEmployer(student.getMotherEmployer());
            studentPojo.setMothernatureofbusiness(student.getMothernatureofbusiness());
            studentPojo.setMotherOfficeAddress(student.getMotherOfficeAddress());
            studentPojo.setMotherMobileNo(student.getMotherMobileNo());
            studentPojo.setMotherTelNo(student.getMotherTelNo());
            studentPojo.setMotherEmailId(student.getMotherEmailId());
            studentPojo.setGaurdianName(student.getGaurdianName());
            studentPojo.setGaurdianPassportNo(student.getGaurdianPassportNo());
            studentPojo.setGaurdianNationality(student.getGaurdianNationality());
            studentPojo.setGaurdianRelation(student.getGaurdianRelation());
            studentPojo.setGaurdianOccupation(student.getGaurdianOccupation());
            studentPojo.setGaurdianEmployeer(student.getGaurdianEmployeer());
            studentPojo.setGaurdianICNO(student.getGaurdianICNO());
            studentPojo.setGaurdianMobileNo(student.getGaurdianMobileNo());
            studentPojo.setGuardianTelNo(student.getGuardianTelNo());
            studentPojo.setSpokenlang(student.getSpokenlang());
            studentPojo.setGaurdianEmployeer(student.getGaurdianEmployeer());
            if (StringUtils.equals(student.getSameascorresponding(), "true")) {
                studentPojo.setPermanent(student.getCorresponding());
            } else {
                studentPojo.setPermanent(student.getPermanent());
            }
            studentPojo.setSameascorresponding(student.getSameascorresponding());
            studentPojo.setCorresponding(student.getCorresponding());
            studentPojo.setGuarSameAsCorresAdd(student.getGuarSameAsCorresAdd());
            if (StringUtils.equals(student.getSameascorresponding(), "true")) {
                studentPojo.setGaurdianPermanentAddress(student.getGaurdianCorrespondenceAddress());
            } else {
                studentPojo.setGaurdianPermanentAddress(student.getGaurdianPermanentAddress());
            }
            studentPojo.setGaurdianCorrespondenceAddress(student.getGaurdianCorrespondenceAddress());
            studentPojo.setStudentProfileId(student.getStudentProfileId());
            studentPojo.setStudentPhoto(student.getStudentPhoto());
            studentPojo.setStudBirthCer(student.getStudBirthCer());
            studentPojo.setStudOtherDoc(student.getStudOtherDoc());
            studentPojo.setStudIdentityCard(student.getStudIdentityCard());
            studentPojo.setParentIdentityCard(student.getParentIdentityCard());
            studentPojo.setPrevSchoolCer(student.getPrevSchoolCer());
            studentPojo.setParentMarrCer(student.getParentMarrCer());
            list.add(studentPojo);
        }
        return list;
    }
    public static HrApplication mapHrApplicPojoToEntity(HrApplicationPojo hrApplicationPojo){
        HrApplication hrApplication = new HrApplication();
        hrApplication.setHrId(hrApplicationPojo.getHrId());
        hrApplication.setHrFullName(hrApplicationPojo.getHrFullName());
        hrApplication.setDOBText(hrApplicationPojo.getdOBText());
        hrApplication.setPassportNew(hrApplicationPojo.getPassportNew());
        hrApplication.setHrNationality(hrApplicationPojo.getHrNationality());
        hrApplication.setHrSex(hrApplicationPojo.getHrSex());
        hrApplication.setHrAddress1(hrApplicationPojo.getHrAddress1());
        hrApplication.setHrAddress2(hrApplicationPojo.getHrAddress2());
        hrApplication.setCountry(hrApplicationPojo.getCountry());
        hrApplication.setState(hrApplicationPojo.getState());
        hrApplication.setCity(hrApplicationPojo.getCity());
        hrApplication.setPostCode(hrApplicationPojo.getPostCode());
        hrApplication.setStatus(hrApplicationPojo.getStatus());
        hrApplication.setHrphoneNo(hrApplicationPojo.getHrphoneNo());
        hrApplication.sethPNo(hrApplicationPojo.gethPNo());
        hrApplication.setHrEmailAddress(hrApplicationPojo.getHrEmailAddress());
        hrApplication.setHrage(hrApplicationPojo.getHrage());
        hrApplication.setHrplaceOfBirth(hrApplicationPojo.getHrplaceOfBirth());
        hrApplication.setHrmaritalstatus(hrApplicationPojo.getHrmaritalstatus());
        hrApplication.setHrHPNo(hrApplicationPojo.getHrHPNo());
        hrApplication.setSpouseAddress(hrApplicationPojo.getSpouseAddress());
        hrApplication.setSpouseFullName(hrApplicationPojo.getSpouseFullName());
        hrApplication.setSpousepassportOld(hrApplicationPojo.getSpousepassportOld());
        hrApplication.setSpousepassportNew(hrApplicationPojo.getSpousepassportNew());
        hrApplication.setSpouseDOBText(hrApplicationPojo.getSpouseDOBText());
        hrApplication.setSpouseNationality(hrApplicationPojo.getSpouseNationality());
        hrApplication.setSpouseage(hrApplicationPojo.getSpouseage());
        hrApplication.setSpouseplaceOfBirth(hrApplicationPojo.getSpouseplaceOfBirth());
        hrApplication.setSpousephoneNo(hrApplicationPojo.getSpousephoneNo());
        hrApplication.setSpouseHPNo(hrApplicationPojo.getSpouseHPNo());
        hrApplication.setAcademicQuali(hrApplicationPojo.getAcademicQuali());
        hrApplication.setFeildOfSpec(hrApplicationPojo.getFeildOfSpec());
        hrApplication.setPecomsch(hrApplicationPojo.getPecomsch());
        hrApplication.setPedesignation(hrApplicationPojo.getPedesignation());
        hrApplication.setPeDateAppoint(hrApplicationPojo.getPeDateAppoint());
        hrApplication.setPreEmpAddress(hrApplicationPojo.getPreEmpAddress());
        hrApplication.setPreEmpTelNo(hrApplicationPojo.getPreEmpTelNo());
        hrApplication.setPreEmpSal(hrApplicationPojo.getPreEmpSal());
        hrApplication.setPreEmpavail(hrApplicationPojo.getPreEmpavail());
        hrApplication.setWorkExperiencedetailsList(hrApplicationPojo.getWorkExperiencedetailsList());
        hrApplication.setReasonForLeaving(hrApplicationPojo.getReasonForLeaving());
        hrApplication.setLongServeMSI(hrApplicationPojo.getLongServeMSI());
        hrApplication.setExpecedSalary(hrApplicationPojo.getExpecedSalary());
        hrApplication.setPersonalObservation(hrApplicationPojo.getPersonalObservation());
        hrApplication.setContrtrowIslamic(hrApplicationPojo.getContrtrowIslamic());
        hrApplication.setUsPrinAndConcept(hrApplicationPojo.getUsPrinAndConcept());
        hrApplication.setRolePlayMSI(hrApplicationPojo.getRolePlayMSI());
        hrApplication.setBooksWritingIslamic(hrApplicationPojo.getBooksWritingIslamic());
        hrApplication.setMedicalHistory(hrApplicationPojo.getMedicalHistory());
        hrApplication.setMedicaldisabilities(hrApplicationPojo.getMedicaldisabilities());
        hrApplication.setReferenceDetailsList(hrApplicationPojo.getReferenceDetailsList());
        hrApplication.setPositionText(hrApplicationPojo.getPositionText());
        hrApplication.setIdentityCard(hrApplicationPojo.getIdentityCard());
        hrApplication.setHrResume(hrApplicationPojo.getHrResume());
        hrApplication.setRelevantcert(hrApplicationPojo.getRelevantcert());
        hrApplication.setPhotocopy(hrApplicationPojo.getPhotocopy());
        hrApplication.setTertiaryeducerts(hrApplicationPojo.getTertiaryeducerts());
        hrApplication.setOtherdocs(hrApplicationPojo.getOtherdocs());
        hrApplication.setPassportOld(hrApplicationPojo.getPassportOld());
        hrApplication.setFurtherStudies(hrApplicationPojo.getFurtherStudies());
        hrApplication.setApplicationDate(hrApplicationPojo.getApplicationDate());
        hrApplication.setArabicReading(hrApplicationPojo.getArabicReading());
        hrApplication.setArabicSpeaking(hrApplicationPojo.getArabicSpeaking());
        hrApplication.setArabicWriting(hrApplicationPojo.getArabicWriting());
        hrApplication.setEngReading(hrApplicationPojo.getEngReading());
        hrApplication.setEngWriting(hrApplicationPojo.getEngWriting());
        hrApplication.setEngSpeaking(hrApplicationPojo.getEngSpeaking());
        hrApplication.setMalReading(hrApplicationPojo.getMalReading());
        hrApplication.setMalSpeaking(hrApplicationPojo.getMalSpeaking());
        hrApplication.setMalWriting(hrApplicationPojo.getMalWriting());
        hrApplication.setDeclarationDate(hrApplicationPojo.getDeclarationDate());
        hrApplication.setDeclarationSignature(hrApplicationPojo.getDeclarationSignature());
        hrApplication.setSpouseOccipation(hrApplicationPojo.getSpouseOccipation());
        return hrApplication;
    }

    public static List<CountryDTO> mapCountryEntityToPojo(List<Country> typeList){
        List<CountryDTO> list=new ArrayList<>();
        for(Country type:typeList) {
            CountryDTO countryDto = new CountryDTO();
            countryDto.setCountryId(type.getCountryId());
            countryDto.setCountryName(type.getCountryName());
            countryDto.setStatus(type.getStatus());
            list.add(countryDto);
        }
        return list;
    }
    public static List<AccountTypePojo> mapAccountTypeEntityToPojo(List<AccountType> typeList){
        List<AccountTypePojo> list=new ArrayList<>();
        for(AccountType type:typeList) {
            AccountTypePojo accountTypePojo = new AccountTypePojo();
            accountTypePojo.setAccountId(type.getAccountId());
            accountTypePojo.setAccountName(type.getAccountName());
            accountTypePojo.setAccountDescription(type.getAccountDescription());
            accountTypePojo.setStatus(type.getStatus());
            list.add(accountTypePojo);
        }
        return list;
    }
    public static List<AccountGroupPojo> mapAccountGroupEntityToPojo(List<AccountGroup> typeList){
        List<AccountGroupPojo> list=new ArrayList<>();
        for(AccountGroup type:typeList) {
            AccountGroupPojo accountGroupPojo = new AccountGroupPojo();
            accountGroupPojo.setAccountId(type.getAccountId());
            accountGroupPojo.setAccountName(type.getAccountName());
            accountGroupPojo.setAccountDescription(type.getAccountDescription());
            accountGroupPojo.setStatus(type.getStatus());
            accountGroupPojo.setAccountType(type.getAccountType());
            accountGroupPojo.setAccountCode(type.getAccountCode());
            list.add(accountGroupPojo);
        }
        return list;
    }
    public static List<ListChatOfAccountDto> mapAccountMasterEntityToPojo(List<AccountMaster> typeList){
        List<ListChatOfAccountDto> list=new ArrayList<>();
        for(AccountMaster type:typeList) {
            ListChatOfAccountDto listChatOfAccountDto = new ListChatOfAccountDto();
            listChatOfAccountDto.setAccountid(type.getAccountid());
            listChatOfAccountDto.setAccountname(type.getAccountname());
            listChatOfAccountDto.setAccountCode(type.getAccountcode());
            listChatOfAccountDto.setStringAccountCode(type.getStringAccountCode());
            listChatOfAccountDto.setStatus(type.getStatus());
            listChatOfAccountDto.setAparcode(type.getAparcode());
            if(type.getAccountTypeId()!=null) {
                listChatOfAccountDto.setAccountTypeId(type.getAccountTypeId().getAccountId());
                listChatOfAccountDto.setAccountTypeName(type.getAccountTypeId().getAccountName());
            }
            listChatOfAccountDto.setAccountGroupId(type.getAgid().getAccountId());
            listChatOfAccountDto.setAccountGroupName(type.getAgid().getAccountName());
            if(type.getAmaccountid()!=null) {
                listChatOfAccountDto.setAmaccountid(type.getAmaccountid().getAccountid());
            }
            list.add(listChatOfAccountDto);
        }
        return list;
    }
    public static List<SecondChatOfAccountDto> mapSecondAccountMasterEntityToPojo(List<AccountMaster> typeList){
        List<SecondChatOfAccountDto> list=new ArrayList<>();
        for(AccountMaster type:typeList) {
            SecondChatOfAccountDto listChatOfAccountDto = new SecondChatOfAccountDto();
            listChatOfAccountDto.setAccountid(type.getAccountid());
            listChatOfAccountDto.setAccountname(type.getAccountname());
            listChatOfAccountDto.setAccountCode(type.getAccountcode());
            listChatOfAccountDto.setStringAccountCode(type.getStringAccountCode());
            listChatOfAccountDto.setStatus(type.getStatus());
            listChatOfAccountDto.setAparcode(type.getAparcode());
            if(type.getAccountTypeId()!=null) {
                listChatOfAccountDto.setAccountTypeId(type.getAccountTypeId().getAccountId());
                listChatOfAccountDto.setAccountTypeName(type.getAccountTypeId().getAccountName());
            }
            listChatOfAccountDto.setAccountGroupId(type.getAgid().getAccountId());
            listChatOfAccountDto.setAccountGroupName(type.getAgid().getAccountName());
            if(type.getAmaccountid()!=null) {
                listChatOfAccountDto.setAmaccountid(type.getAmaccountid().getAccountid());
            }
            list.add(listChatOfAccountDto);
        }
        return list;
    }
    public static List<ThirdChatOfAccountDto> mapThirdAccountMasterEntityToPojo(List<AccountMaster> typeList){
        List<ThirdChatOfAccountDto> list=new ArrayList<>();
        for(AccountMaster type:typeList) {
            ThirdChatOfAccountDto listChatOfAccountDto = new ThirdChatOfAccountDto();
            listChatOfAccountDto.setAccountid(type.getAccountid());
            listChatOfAccountDto.setAccountname(type.getAccountname());
            listChatOfAccountDto.setAccountCode(type.getAccountcode());
            listChatOfAccountDto.setStringAccountCode(type.getStringAccountCode());
            listChatOfAccountDto.setStatus(type.getStatus());
            listChatOfAccountDto.setAparcode(type.getAparcode());
            if(type.getAccountTypeId()!=null) {
                listChatOfAccountDto.setAccountTypeId(type.getAccountTypeId().getAccountId());
                listChatOfAccountDto.setAccountTypeName(type.getAccountTypeId().getAccountName());
            }
            listChatOfAccountDto.setAccountGroupId(type.getAgid().getAccountId());
            listChatOfAccountDto.setAccountGroupName(type.getAgid().getAccountName());
            if(type.getAmaccountid()!=null) {
                listChatOfAccountDto.setAmaccountid(type.getAmaccountid().getAccountid());
            }
            list.add(listChatOfAccountDto);
        }
        return list;
    }
    public static List<AccountMasterDTO> mapAccMasterEntityToPojo(List<AccountMaster> typeList){
        List<AccountMasterDTO> list=new ArrayList<>();
        for(AccountMaster type:typeList) {
            AccountMasterDTO listChatOfAccountDto = new AccountMasterDTO();
            listChatOfAccountDto.setAccountid(type.getAccountid());
            listChatOfAccountDto.setAccountname(type.getAccountname());
            listChatOfAccountDto.setAccountcode(type.getAccountcode());
            listChatOfAccountDto.setStringAccountCode(type.getStringAccountCode());
            listChatOfAccountDto.setStatus(type.getStatus());
            listChatOfAccountDto.setAparcode(type.getAparcode());
            if(type.getAccountTypeId()!=null) {
                listChatOfAccountDto.setAccountTypeId(type.getAccountTypeId().getAccountId());
                listChatOfAccountDto.setAccountTypeName(type.getAccountTypeId().getAccountName());
            }
            listChatOfAccountDto.setAccountGroupId(type.getAgid().getAccountId());
            listChatOfAccountDto.setAccountGroup(type.getAgid().getAccountName());
            if(type.getAmaccountid()!=null) {
                listChatOfAccountDto.setAmaccountid(type.getAmaccountid().getAccountid());
            }
            list.add(listChatOfAccountDto);
        }
        return list;
    }
    public static List<ListChatOfAccountDto> mapChartOfAccEntityToPojo(List<AccountMaster> typeList){
        List<ListChatOfAccountDto> list=new ArrayList<>();
        for(AccountMaster type:typeList) {
            ListChatOfAccountDto accountGroupPojo = new ListChatOfAccountDto();
            accountGroupPojo.setAccountid(type.getAccountid());
            accountGroupPojo.setAccountname(type.getAccountname());
            accountGroupPojo.setStatus(type.getStatus());
            accountGroupPojo.setAccountCode(type.getAccountcode());
            accountGroupPojo.setStringAccountCode(type.getStringAccountCode());
            accountGroupPojo.setAparcode(type.getAparcode());
            accountGroupPojo.setReportValue(type.getReportvalue());
            list.add(accountGroupPojo);
        }
        return list;
    }

//    public static List<StudentDTO> mapStudentEntityToPojo(List<Student> typeList){
//        List<StudentDTO> list=new ArrayList<>();
//        for(Student student:typeList) {
//            StudentDTO studentDTO = new StudentDTO();
//            studentDTO.setStudentName(student.getStudentName());
//            studentDTO.setStudentId(student.getStudentId());
//            studentDTO.setDateofbirth(student.getDateofbirth());
//            studentDTO.setEmail(student.getEmail());
//            studentDTO.setGender(student.getGender());
//            studentDTO.setNationality(student.getNationality());
//            if(student.getLevel()!=null) {
//                studentDTO.setGradeId(student.getLevel().getGradeId());
//            }
 //         studentDTO.setClassId(student.getClassId());
//            studentDTO.setAdmissionDate(student.getAdmissionDate());
//            studentDTO.setGender(student.getGender());
//            studentDTO.setPassportNo(student.getPassportNo());
//            studentDTO.setBirthCertificate(student.getBirthCertificate());
//            studentDTO.setAge(student.getAge());
//            studentDTO.setTelNo(student.getTelNo());
//            if(student.getAcademicYearMaster()!=null) {
//                studentDTO.setAcdYearId(student.getAcademicYearMaster().getAcdyrId());
//            }
//            studentDTO.setLanguage(student.getLanguage());
//            studentDTO.setSemester(student.getSemester());
//            studentDTO.setStudentName(student.getStudentName());
//            studentDTO.setNationality(student.getNationality());
//            studentDTO.setFatherMobileNo(student.getFatherMobileNo());
//            studentDTO.setFatherContactNo(student.getFatherContactNo());
//            studentDTO.setMotherContactNo(student.getMotherContactNo());
//            studentDTO.setFatherNationality(student.getFatherNationality());
//            studentDTO.setDateofbirth(student.getDateofbirth());
//            studentDTO.setPlaceOfBirth(student.getPlaceOfBirth());
//            studentDTO.setEmail(student.getEmail());
//            studentDTO.setMedicine(student.getMedicine());
//            studentDTO.setIllnessOthers(student.getIllnessOthers());
//            studentDTO.setIllnessOthersState(student.getIllnessOthersState());
//            studentDTO.setImmunization(student.getImmunization());
//            studentDTO.setImmunizationState(student.getImmunizationState());
//            studentDTO.setMedicineState(student.getMedicineState());
//            studentDTO.setFood(student.getFood());
//            studentDTO.setFoodState(student.getFoodState());
//            studentDTO.setOthers(student.getOthers());
//            studentDTO.setOthersState(student.getOthersState());
//            studentDTO.setAsthma(student.getAsthma());
//            studentDTO.setAsthmaState(student.getAsthmaState());
//            studentDTO.setEpilepsy(student.getEpilepsy());
//            studentDTO.setEpilepsyState(student.getEpilepsyState());
//            studentDTO.setFatherName(student.getFatherName());
//            studentDTO.setFatherPassportNo(student.getFatherPassportNo());
//            studentDTO.setFatherICNO(student.getFatherICNO());
//            studentDTO.setFaxNo(student.getFaxNo());
//            studentDTO.setNationality(student.getNationality());
//            studentDTO.setFathersDOB(student.getFathersDOB());
//            studentDTO.setFatherEducation(student.getFatherEducation());
//            studentDTO.setFatherOccupation(student.getFatherOccupation());
//            studentDTO.setIncomePerAnnum(student.getIncomePerAnnum());
//            studentDTO.setFatherEmployer(student.getFatherEmployer());
//            studentDTO.setNatureofbusiness(student.getNatureofbusiness());
//            studentDTO.setPreviousSchoolsDetails(student.getPreviousSchoolsDetails());
//            studentDTO.setSiblingsInformation(student.getSiblingsInformation());
//            studentDTO.setFatherOfficeAddress(student.getFatherOfficeAddress());
//            studentDTO.setTelNo(student.getTelNo());
//            studentDTO.setMotherName(student.getMotherName());
//            studentDTO.setMotherPassportNo(student.getMotherPassportNo());
//            studentDTO.setMotherICNO(student.getMotherICNO());
//            studentDTO.setMotherfaxNo(student.getMotherfaxNo());
//            studentDTO.setMotherNationality(student.getMotherNationality());
//            studentDTO.setMotherDOB(student.getMotherDOB());
//            studentDTO.setMotherEducation(student.getMotherEducation());
//            studentDTO.setMotherOccupation(student.getMotherOccupation());
//            studentDTO.setMotherincomePerAnnum(student.getMotherincomePerAnnum());
//            studentDTO.setMotherEmployer(student.getMotherEmployer());
//            studentDTO.setMothernatureofbusiness(student.getMothernatureofbusiness());
//            studentDTO.setMotherOfficeAddress(student.getMotherOfficeAddress());
//            studentDTO.setMotherMobileNo(student.getMotherMobileNo());
//            studentDTO.setMotherTelNo(student.getMotherTelNo());
//            studentDTO.setMotherEmailId(student.getMotherEmailId());
//            studentDTO.setGaurdianName(student.getGaurdianName());
//            studentDTO.setGaurdianPassportNo(student.getGaurdianPassportNo());
//            studentDTO.setGaurdianNationality(student.getGaurdianNationality());
//            studentDTO.setGaurdianRelation(student.getGaurdianRelation());
//            studentDTO.setGaurdianOccupation(student.getGaurdianOccupation());
//            studentDTO.setGaurdianEmployeer(student.getGaurdianEmployeer());
//            studentDTO.setGaurdianICNO(student.getGaurdianICNO());
//            studentDTO.setGaurdianMobileNo(student.getGaurdianMobileNo());
//            studentDTO.setGuardianTelNo(student.getGuardianTelNo());
//            studentDTO.setGaurdianCorrespondenceAddress(student.getGaurdianCorrespondenceAddress());
//            studentDTO.setGaurdianPermanentAddress(student.getGaurdianPermanentAddress());
//            studentDTO.setSpokenlang(student.getSpokenlang());
//            studentDTO.setGaurdianEmployeer(student.getGaurdianEmployeer());
//            studentDTO.setCorresponding(student.getCorresponding());
//            studentDTO.setPermanent(student.getPermanent());
//            studentDTO.setStudentProfileId(student.getStudentProfileId());
//            studentDTO.setStudentPhoto(student.getStudentPhoto());
//            studentDTO.setStudBirthCer(student.getStudBirthCer());
//            studentDTO.setStudOtherDoc(student.getStudOtherDoc());
//            studentDTO.setStudIdentityCard(student.getStudIdentityCard());
//            studentDTO.setParentIdentityCard(student.getParentIdentityCard());
//            studentDTO.setPrevSchoolCer(student.getPrevSchoolCer());
//            studentDTO.setParentMarrCer(student.getParentMarrCer());
//            studentDTO.setSameascorresponding(student.getSameascorresponding());
//            studentDTO.setGuarSameAsCorresAdd(student.getGuarSameAsCorresAdd());
//            list.add(studentDTO);
//        }
//        return list;
//    }
    public static List<HrApplicationPojo> mapHrEntityToPojo(List<HrApplication> typeList){
        List<HrApplicationPojo> list=new ArrayList<>();
        for(HrApplication hrApplication:typeList) {
            HrApplicationPojo hrApplicationPojo = new HrApplicationPojo();
            hrApplicationPojo.setHrId(hrApplication.getHrId());
            hrApplicationPojo.setHrFullName(hrApplication.getHrFullName());
            hrApplicationPojo.setdOBText(hrApplication.getDOBText());
            hrApplicationPojo.setPassportNew(hrApplication.getPassportNew());
            hrApplicationPojo.setHrNationality(hrApplication.getHrNationality());
            hrApplicationPojo.setHrSex(hrApplication.getHrSex());
            hrApplicationPojo.setHrAddress1(hrApplication.getHrAddress1());
            hrApplicationPojo.setHrAddress2(hrApplication.getHrAddress2());
            hrApplicationPojo.setCountry(hrApplication.getCountry());
            hrApplicationPojo.setState(hrApplication.getState());
            hrApplicationPojo.setCity(hrApplication.getCity());
            hrApplicationPojo.setPostCode(hrApplication.getPostCode());
            hrApplicationPojo.setStatus(hrApplication.getStatus());
            hrApplicationPojo.setHrphoneNo(hrApplication.getHrphoneNo());
            hrApplicationPojo.sethPNo(hrApplication.gethPNo());
            hrApplicationPojo.setHrEmailAddress(hrApplication.getHrEmailAddress());
            hrApplicationPojo.setHrage(hrApplication.getHrage());
            hrApplicationPojo.setPassportOld(hrApplication.getPassportOld());
            hrApplicationPojo.setHrplaceOfBirth(hrApplication.getHrplaceOfBirth());
            hrApplicationPojo.setHrmaritalstatus(hrApplication.getHrmaritalstatus());
            hrApplicationPojo.setHrHPNo(hrApplication.getHrHPNo());
            hrApplicationPojo.setSpouseAddress(hrApplication.getSpouseAddress());
            hrApplicationPojo.setSpouseFullName(hrApplication.getSpouseFullName());
            hrApplicationPojo.setSpousepassportOld(hrApplication.getSpousepassportOld());
            hrApplicationPojo.setSpousepassportNew(hrApplication.getSpousepassportNew());
            hrApplicationPojo.setSpouseDOBText(hrApplication.getSpouseDOBText());
            hrApplicationPojo.setSpouseNationality(hrApplication.getSpouseNationality());
            hrApplicationPojo.setSpouseage(hrApplication.getSpouseage());
            hrApplicationPojo.setSpouseplaceOfBirth(hrApplication.getSpouseplaceOfBirth());
            hrApplicationPojo.setSpousephoneNo(hrApplication.getSpousephoneNo());
            hrApplicationPojo.setSpouseHPNo(hrApplication.getSpouseHPNo());
            hrApplicationPojo.setAcademicQuali(hrApplication.getAcademicQuali());
            hrApplicationPojo.setFeildOfSpec(hrApplication.getFeildOfSpec());
            hrApplicationPojo.setPecomsch(hrApplication.getPecomsch());
            hrApplicationPojo.setPedesignation(hrApplication.getPedesignation());
            hrApplicationPojo.setPeDateAppoint(hrApplication.getPeDateAppoint());
            hrApplicationPojo.setPreEmpAddress(hrApplication.getPreEmpAddress());
            hrApplicationPojo.setInterviewtime(hrApplication.getInterviewTime());
            hrApplicationPojo.setInterviewerSchedStatus(hrApplication.getInterviewerSchedStatus());
            hrApplicationPojo.setSecondInteviewStatus(hrApplication.getSecondInteviewStatus());
            hrApplicationPojo.setPreEmpTelNo(hrApplication.getPreEmpTelNo());
            hrApplicationPojo.setPreEmpSal(hrApplication.getPreEmpSal());
            hrApplicationPojo.setPreEmpavail(hrApplication.getPreEmpavail());
            hrApplicationPojo.setWorkExperiencedetailsList(hrApplication.getWorkExperiencedetailsList());
            hrApplicationPojo.setReasonForLeaving(hrApplication.getReasonForLeaving());
            hrApplicationPojo.setLongServeMSI(hrApplication.getLongServeMSI());
            hrApplicationPojo.setExpecedSalary(hrApplication.getExpecedSalary());
            hrApplicationPojo.setPersonalObservation(hrApplication.getPersonalObservation());
            hrApplicationPojo.setContrtrowIslamic(hrApplication.getContrtrowIslamic());
            hrApplicationPojo.setUsPrinAndConcept(hrApplication.getUsPrinAndConcept());
            hrApplicationPojo.setRolePlayMSI(hrApplication.getRolePlayMSI());
            hrApplicationPojo.setBooksWritingIslamic(hrApplication.getBooksWritingIslamic());
            hrApplicationPojo.setMedicalHistory(hrApplication.getMedicalHistory());
            hrApplicationPojo.setMedicaldisabilities(hrApplication.getMedicaldisabilities());
            hrApplicationPojo.setReferenceDetailsList(hrApplication.getReferenceDetailsList());
            hrApplicationPojo.setPositionText(hrApplication.getPositionText());
            hrApplicationPojo.setIdentityCard(hrApplication.getIdentityCard());
            hrApplicationPojo.setHrResume(hrApplication.getHrResume());
            hrApplicationPojo.setRelevantcert(hrApplication.getRelevantcert());
            hrApplicationPojo.setInterviewerStatus(hrApplication.getInterviewerStatus());
            hrApplicationPojo.setPhotocopy(hrApplication.getPhotocopy());
            hrApplicationPojo.setTertiaryeducerts(hrApplication.getTertiaryeducerts());
            hrApplicationPojo.setOtherdocs(hrApplication.getOtherdocs());
            hrApplicationPojo.setFurtherStudies(hrApplication.getFurtherStudies());
            hrApplicationPojo.setKivremarks(hrApplication.getKivremarks());

            hrApplicationPojo.setInterviewDate(hrApplication.getInterviewDate());
            hrApplicationPojo.setInterviewerStatus(hrApplication.getInterviewerStatus());
            hrApplicationPojo.setInterviewerText(hrApplication.getInterviewerText());
            hrApplicationPojo.setInterviewNotes(hrApplication.getInterviewNotes());
            hrApplicationPojo.setDeclarationDate(hrApplication.getDeclarationDate());
            hrApplicationPojo.setDeclarationSignature(hrApplication.getDeclarationSignature());
            hrApplicationPojo.setSpouseOccipation(hrApplication.getSpouseOccipation());
            hrApplicationPojo.setApplicationDate(hrApplication.getApplicationDate());
            hrApplicationPojo.setArabicReading(hrApplication.getArabicReading());
            hrApplicationPojo.setArabicSpeaking(hrApplication.getArabicSpeaking());
            hrApplicationPojo.setArabicWriting(hrApplication.getArabicWriting());
            hrApplicationPojo.setEngReading(hrApplication.getEngReading());
            hrApplicationPojo.setEngSpeaking(hrApplication.getEngSpeaking());
            hrApplicationPojo.setEngWriting(hrApplication.getEngWriting());
            hrApplicationPojo.setMalReading(hrApplication.getMalReading());
            hrApplicationPojo.setMalSpeaking(hrApplication.getMalSpeaking());
            hrApplicationPojo.setMalWriting(hrApplication.getMalWriting());
            list.add(hrApplicationPojo);
        }
        return list;
    }
    public static List<GradeMasterPojo> mapGradeEntityToPojo(List<GradeMaster> gradeMasterList){
        List<GradeMasterPojo> list=new ArrayList<>();
        for(GradeMaster gradeMaster:gradeMasterList) {
            GradeMasterPojo gradeMasterPojo= new GradeMasterPojo();
            gradeMasterPojo.setGradeId(gradeMaster.getGradeId());
            gradeMasterPojo.setBranchId(gradeMaster.getBranchId());
            gradeMasterPojo.setGradeDescription(gradeMaster.getGradeDescription());
            gradeMasterPojo.setGradeName(gradeMaster.getGradeName());
            gradeMasterPojo.setGradeStatus(gradeMaster.getGradeStatus());
            list.add(gradeMasterPojo);
        }
        return list;
    }

    public static State mapStatePojoToEntity(StateDTO stateDTO){
        State state = new State();
        state.setStateId(stateDTO.getStateId());
        state.setCountryId(stateDTO.getCountryId());
        state.setStatus(stateDTO.getStatus());
        state.setStateName(stateDTO.getStateName());
        return state;
    }

    public static List<StateDTO> mapStateEntityToPojo(List<State> typeList){
        List<StateDTO> list=new ArrayList<>();
        for(State type:typeList) {
            StateDTO stateDTO = new StateDTO();
            stateDTO.setStateId(type.getStateId());
            stateDTO.setCountryId(type.getCountryId());
            stateDTO.setStatus(type.getStatus());
            stateDTO.setStateName(type.getStateName());
            list.add(stateDTO);
        }
        return list;
    }

    public static City mapCityPojoToEntity(CityDTO cityDTO){
        City city = new City();
        city.setCityId(cityDTO.getCityId());
        city.setCountryId(cityDTO.getCountryId());
        city.setStatus(cityDTO.getStatus());
        city.setStateId(cityDTO.getStateId());
        city.setCityName(cityDTO.getCityName());
        return city;
    }

    public static List<CityDTO> mapCityEntityToPojo(List<City> typeList){
        List<CityDTO> list=new ArrayList<>();
        for(City city:typeList) {
            CityDTO cityDTO = new CityDTO();
            cityDTO.setCityId(city.getCityId());
            cityDTO.setCountryId(city.getCountryId());
            cityDTO.setStatus(city.getStatus());
            cityDTO.setStateId(city.getStateId());
            cityDTO.setCityName(city.getCityName());
            list.add(cityDTO);
        }
        return list;
    }

    public static Branches mapBranchesPojoToEntity(BranchesPojo branchesPojo){
        Branches branches = new Branches();
        branches.setBranchesId(branchesPojo.getBranchesId());
        branches.setBranchName(branchesPojo.getBranchName());
        branches.setBranchCode(branchesPojo.getBranchCode());
        branches.setEmail(branchesPojo.getEmail());
        branches.setContact(branchesPojo.getContact());
        branches.setAddressLine1(branchesPojo.getAddressLine1());
        branches.setAddressLine2(branchesPojo.getAddressLine2());
        branches.setCountry(branchesPojo.getCountry());
        branches.setState(branchesPojo.getState());
        branches.setCity(branchesPojo.getCity());
        branches.setPostalCode(branchesPojo.getPostalCode());
        branches.setUserName(branchesPojo.getUserName());
        branches.setPassword(branchesPojo.getPassword());
        branches.setStatus(branchesPojo.getStatus());
        return branches;
    }

    public static List<BranchesPojo> mapBranchesEntityToPojo(List<Branches> branches){
        List<BranchesPojo> list=new ArrayList<>();
        for(Branches branch:branches) {
            BranchesPojo branchesPojo = new BranchesPojo();
            branchesPojo.setAddressLine1(branch.getAddressLine1());
            branchesPojo.setAddressLine2(branch.getAddressLine2());
            branchesPojo.setStatus(branch.getStatus());
            branchesPojo.setBranchCode(branch.getBranchCode());
            branchesPojo.setBranchesId(branch.getBranchesId());
            branchesPojo.setBranchName(branch.getBranchName());
            branchesPojo.setCity(branch.getCity());
            branchesPojo.setContact(branch.getContact());
            branchesPojo.setCountry(branch.getCountry());
            branchesPojo.setEmail(branch.getEmail());
            branchesPojo.setState(branch.getState());
            branchesPojo.setCity(branch.getCity());
            branchesPojo.setPostalCode(branch.getPostalCode());
            branchesPojo.setUserName(branch.getUserName());
            branchesPojo.setPassword(branch.getPassword());
            branchesPojo.setStatus(branch.getStatus());
            list.add(branchesPojo);
        }
        return list;
    }

    public static Roles mapRolesPojoToEntity(RolesPojo rolesPojo){
        Roles roles = new Roles();
        roles.setRolesId(rolesPojo.getRolesId());
        roles.setRole(rolesPojo.getRole());
        roles.setStatus(rolesPojo.getStatus());
        roles.setBranchId(rolesPojo.getBranchId());
        return roles;
    }
    public static AssesmentCreator mapAssCrePojoToEntity(AssesmentCreatorPojo assesmentCreatorPojo){
        AssesmentCreator assesmentCreator = new AssesmentCreator();

        assesmentCreator.setAcreatorId(assesmentCreatorPojo.getAcreatorId());
        assesmentCreator.setAssesmentName(assesmentCreatorPojo.getAssesmentName());
        assesmentCreator.setAssesmentType(assesmentCreatorPojo.getAssesmentType());
        assesmentCreator.setSemesterId(assesmentCreatorPojo.getSemesterId());
        assesmentCreator.setTermId(assesmentCreatorPojo.getTermId());
        assesmentCreator.setLevelId(assesmentCreatorPojo.getLevelId());
        assesmentCreator.setClassId(assesmentCreatorPojo.getClassId());
        assesmentCreator.setChapterId(assesmentCreatorPojo.getChapterId());
        assesmentCreator.setSubjectId(assesmentCreatorPojo.getSubjectId());
        assesmentCreator.setTopicId(assesmentCreatorPojo.getTopicId());
        assesmentCreator.setAssesmentDate(assesmentCreatorPojo.getAssesmentDate());
        assesmentCreator.setStatus(assesmentCreatorPojo.getStatus());
        assesmentCreator.setQuestionName(assesmentCreatorPojo.getQuestionName());

        return assesmentCreator;
    }

    public static List<AssesmentCreatorPojo> mapAssCreatorEntityToPojo(List<AssesmentCreator> assesmentCreators){
        List<AssesmentCreatorPojo> list = new ArrayList<>();
          for(AssesmentCreator assesmentCreator:assesmentCreators) {
              AssesmentCreatorPojo assesmentCreatorPojo = new AssesmentCreatorPojo();
              assesmentCreatorPojo.setAcreatorId(assesmentCreator.getAcreatorId());
              assesmentCreatorPojo.setAssesmentName(assesmentCreator.getAssesmentName());
              assesmentCreatorPojo.setAssesmentType(assesmentCreator.getAssesmentType());
              assesmentCreatorPojo.setSemesterId(assesmentCreator.getSemesterId());
              assesmentCreatorPojo.setTermId(assesmentCreator.getTermId());
              assesmentCreatorPojo.setLevelId(assesmentCreator.getLevelId());
              assesmentCreatorPojo.setClassId(assesmentCreator.getClassId());
              assesmentCreatorPojo.setChapterId(assesmentCreator.getChapterId());
              assesmentCreatorPojo.setSubjectId(assesmentCreator.getSubjectId());
              assesmentCreatorPojo.setTopicId(assesmentCreator.getTopicId());
              assesmentCreatorPojo.setAssesmentDate(assesmentCreator.getAssesmentDate());
              assesmentCreatorPojo.setStatus(assesmentCreator.getStatus());
              assesmentCreatorPojo.setQuestionName(assesmentCreator.getQuestionName());
              list.add(assesmentCreatorPojo);
          }

        return list;
    }

    public static Approval mapApprovalPojoToEntity(ApprovalPojo approvalPojo){
        Approval approval = new Approval();
        approval.setApprover1(approvalPojo.getApprover1());
        approval.setApprover2(approvalPojo.getApprover2());
        approval.setApprover3(approvalPojo.getApprover3());
        approval.setApprovalId(approvalPojo.getApprovalId());
        return approval;
    }

    public static List<AssesmentCreatorPojo> mapCreatorEntityToPojo(List<AssesmentCreator> assesmentCreators){
        List<AssesmentCreatorPojo> list=new ArrayList<>();
        for(AssesmentCreator type:assesmentCreators) {
            AssesmentCreatorPojo assesmentCreatorPojo = new AssesmentCreatorPojo();
            assesmentCreatorPojo.setAcreatorId(type.getAcreatorId());
            assesmentCreatorPojo.setAssesmentName(type.getAssesmentName());
            assesmentCreatorPojo.setAssesmentType(type.getAssesmentType());
            assesmentCreatorPojo.setSemesterId(type.getSemesterId());
            assesmentCreatorPojo.setTermId(type.getTermId());
            assesmentCreatorPojo.setLevelId(type.getLevelId());
            assesmentCreatorPojo.setClassId(type.getClassId());
            assesmentCreatorPojo.setChapterId(type.getChapterId());
            assesmentCreatorPojo.setSubjectId(type.getSubjectId());
            assesmentCreatorPojo.setTopicId(type.getTopicId());
            assesmentCreatorPojo.setAssesmentDate(type.getAssesmentDate());
            assesmentCreatorPojo.setStatus(type.getStatus());
            assesmentCreatorPojo.setQuestionName(type.getQuestionName());
            list.add(assesmentCreatorPojo);
        }
        return list;
    }  
    
    public static List<RolesPojo> mapRolesEntityToPojo(List<Roles> typeList){
        List<RolesPojo> list=new ArrayList<>();
        for(Roles type:typeList) {
            RolesPojo rolesPojo = new RolesPojo();
            rolesPojo.setRolesId(type.getRolesId());
            rolesPojo.setRole(type.getRole());
            rolesPojo.setStatus(type.getStatus());
            rolesPojo.setBranchId(type.getBranchId());
            list.add(rolesPojo);
        }
        return list;
    }

    public static List<ApprovalPojo> mapApprovalEntityToPojo(List<Approval> typeList){
        List<ApprovalPojo> list=new ArrayList<>();
        for(Approval type:typeList) {
            ApprovalPojo approvalPojo = new ApprovalPojo();
            approvalPojo.setApprovalId(type.getApprovalId());
            approvalPojo.setApprover1(type.getApprover1());
            approvalPojo.setApprover2(type.getApprover2());
            approvalPojo.setApprover3(type.getApprover3());
            list.add(approvalPojo);
        }
        return list;
    }

    public static ResourceCategory mapResourceCategoryPojoToEntity(ResourceCategoryPojo resourceCategoryPojo){
        ResourceCategory resourceCategory = new ResourceCategory();
        resourceCategory.setResourceCategoryId(resourceCategoryPojo.getResourceCategoryId());
        resourceCategory.setResourceCategoryName(resourceCategoryPojo.getResourceCategoryName());
        resourceCategory.setStatus(resourceCategoryPojo.getStatus());
        resourceCategory.setBranchId(resourceCategoryPojo.getBranchId());
        return resourceCategory;
    }

    public static List<ResourceCategoryPojo> mapResourceCategoryEntityToPojo(List<ResourceCategory> typeList){
        List<ResourceCategoryPojo> list=new ArrayList<>();
        for(ResourceCategory type:typeList) {
            ResourceCategoryPojo resourceCategoryPojo = new ResourceCategoryPojo();
            resourceCategoryPojo.setResourceCategoryId(type.getResourceCategoryId());
            resourceCategoryPojo.setResourceCategoryName(type.getResourceCategoryName());
            resourceCategoryPojo.setStatus(type.getStatus());
            resourceCategoryPojo.setBranchId(type.getBranchId());
            list.add(resourceCategoryPojo);
        }
        return list;
    }

    public static Resource mapResourcePojoToEntity(ResourcePojo resourcePojo){
        Resource resource= new Resource();
        resource.setResourceId(resourcePojo.getResourceId());
        resource.setResourceName(resourcePojo.getResourceName());
        resource.setResourceCode(resourcePojo.getResourceCode());
        resource.setResourceCategoryId(resourcePojo.getResourceCategoryId());
        resource.setResourceType(resourcePojo.getResourceType());
        resource.setStatus(resourcePojo.getStatus());
        resource.setBranchId(resourcePojo.getBranchId());
        return resource;
    }

    public static List<ResourcePojo> mapResourceEntityToPojo(List<Resource> typeList){
        List<ResourcePojo> list=new ArrayList<>();
        for(Resource type:typeList) {
            ResourcePojo resourcePojo = new ResourcePojo();
            resourcePojo.setResourceId(type.getResourceId());
            resourcePojo.setResourceName(type.getResourceName());
            resourcePojo.setResourceCode(type.getResourceCode());
            resourcePojo.setResourceCategoryId(type.getResourceCategoryId());
            resourcePojo.setResourceType(type.getResourceType());
            resourcePojo.setStatus(type.getStatus());
            resourcePojo.setBranchId(type.getBranchId());
            list.add(resourcePojo);
        }
        return list;
    }
    public static Department mapDepartmentPojoToEntity(DepartmentPojo departmentPojo){
        Department department= new Department();
        department.setDepartmentId(departmentPojo.getDepartmentId());
        department.setDepartmentName(departmentPojo.getDepartmentName());
        department.setStatus(departmentPojo.getStatus());
        department.setBranchId(departmentPojo.getBranchId());
        return department;
    }

    public static List<DepartmentPojo> mapDepartmentEntityToPojo(List<Department> typeList){
        List<DepartmentPojo> list=new ArrayList<>();
        for(Department type:typeList) {
            DepartmentPojo departmentPojo = new DepartmentPojo();
            departmentPojo.setDepartmentId(type.getDepartmentId());
            departmentPojo.setDepartmentName(type.getDepartmentName());
            departmentPojo.setStatus(type.getStatus());
            departmentPojo.setBranchId(type.getBranchId());
            list.add(departmentPojo);
        }
        return list;
    }

    public static List<AssesmentSubPojo> mapAssSubEntityToPojo(List<AssesmentSubmission> assesmentSubmissionList){
        List<AssesmentSubPojo> list=new ArrayList<>();
        for(AssesmentSubmission assesmentSubmission:assesmentSubmissionList) {
            AssesmentSubPojo assesmentSubPojo = new AssesmentSubPojo();
            assesmentSubPojo.setAsId(assesmentSubmission.getAsId());
            assesmentSubPojo.setLevel(assesmentSubmission.getLevel());
            assesmentSubPojo.setClassId(assesmentSubmission.getClassId());
            assesmentSubPojo.setTerm(assesmentSubmission.getTerm());
            assesmentSubPojo.setChapter(assesmentSubmission.getChapter());
            assesmentSubPojo.setSubject(assesmentSubmission.getSubject());
            assesmentSubPojo.setComponent(assesmentSubmission.getComponent());
            assesmentSubPojo.setSubComponent(assesmentSubmission.getSubComponent());
            list.add(assesmentSubPojo);
        }
        return list;
    }

    public static AssesmentSubPojo mapAssEntityToPojo(AssesmentSubmission assesmentSubmission) {
        AssesmentSubPojo assesmentSubPojo = new AssesmentSubPojo();
        assesmentSubPojo.setAsId(assesmentSubmission.getAsId());
        assesmentSubPojo.setLevel(assesmentSubmission.getLevel());
        assesmentSubPojo.setClassId(assesmentSubmission.getClassId());
        assesmentSubPojo.setTerm(assesmentSubmission.getTerm());
        assesmentSubPojo.setChapter(assesmentSubmission.getChapter());
        assesmentSubPojo.setSubject(assesmentSubmission.getSubject());
        assesmentSubPojo.setComponent(assesmentSubmission.getComponent());
        assesmentSubPojo.setSubComponent(assesmentSubmission.getSubComponent());
        assesmentSubPojo.setClassId(assesmentSubmission.getClassId());
        if(assesmentSubmission.getDate()!=null){
            assesmentSubPojo.setDate(assesmentSubmission.getDate());
        }
        assesmentSubPojo.setQuestionName(assesmentSubmission.getQuestionName());
        return assesmentSubPojo;
    }

    public static Weekday mapWeekdayPojoToEntity(WeekdayPojo weekdayPojo){
        Weekday weekday= new Weekday();
        weekday.setWeekdayId(weekdayPojo.getWeekdayId());
        if(StringUtils.equalsIgnoreCase(weekdayPojo.getSunday(),"true")){
            weekday.setSunday("Working");
        }
        else{
            weekday.setSunday("Not Working");
        }if(StringUtils.equalsIgnoreCase(weekdayPojo.getMonday(),"true")){
            weekday.setMonday("Working");
        }
        else{
            weekday.setMonday("Not Working");
        }if(StringUtils.equalsIgnoreCase(weekdayPojo.getTuesday(),"true")){
            weekday.setTuesday("Working");
        }
        else{
            weekday.setTuesday("Not Working");
        }if(StringUtils.equalsIgnoreCase(weekdayPojo.getWednesday(),"true")){
            weekday.setWednesday("Working");
        }
        else{
            weekday.setWednesday("Not Working");
        }if(StringUtils.equalsIgnoreCase(weekdayPojo.getThursday(),"true")){
            weekday.setThursday("Working");
        }
        else{
            weekday.setThursday("Not Working");
        }if(StringUtils.equalsIgnoreCase(weekdayPojo.getFriday(),"true")){
            weekday.setFriday("Working");
        }
        else{
            weekday.setFriday("Not Working");
        }if(StringUtils.equalsIgnoreCase(weekdayPojo.getSaturday(),"true")){
            weekday.setSaturday("Working");
        }
        else{
            weekday.setSaturday("Not Working");
        }
        return weekday;
    }

    public static List<WeekdayPojo> mapWeekdayEntityToPojo(List<Weekday> typeList){
        List<WeekdayPojo> list=new ArrayList<>();
        for(Weekday type:typeList) {
            WeekdayPojo weekdayPojo = new WeekdayPojo();
            weekdayPojo.setWeekdayId(type.getWeekdayId());
            weekdayPojo.setSunday(type.getSunday());
            weekdayPojo.setMonday(type.getMonday());
            weekdayPojo.setTuesday(type.getTuesday());
            weekdayPojo.setWednesday(type.getWednesday());
            weekdayPojo.setThursday(type.getThursday());
            weekdayPojo.setFriday(type.getFriday());
            weekdayPojo.setSaturday(type.getSaturday());
            list.add(weekdayPojo);
        }
        return list;
    }

    public static FacilityDetails mapFacilityPojoToEntity(FacilityDetailsPojo pojo){
        FacilityDetails details= new FacilityDetails();
        details.setFacilityId(pojo.getFacilityId());
        details.setFacilityName(pojo.getFacilityName());
        if(StringUtils.equalsIgnoreCase(pojo.getSunday(),"true")){
            details.setSunday("Working");
        }
        else{
            details.setSunday("Not Working");
        }if(StringUtils.equalsIgnoreCase(pojo.getMonday(),"true")){
            details.setMonday("Working");
        }
        else{
            details.setMonday("Not Working");
        }if(StringUtils.equalsIgnoreCase(pojo.getTuesday(),"true")){
            details.setTuesday("Working");
        }
        else{
            details.setTuesday("Not Working");
        }if(StringUtils.equalsIgnoreCase(pojo.getWednesday(),"true")){
            details.setWednesday("Working");
        }
        else{
            details.setWednesday("Not Working");
        }if(StringUtils.equalsIgnoreCase(pojo.getThursday(),"true")){
            details.setThursday("Working");
        }
        else{
            details.setThursday("Not Working");
        }if(StringUtils.equalsIgnoreCase(pojo.getFriday(),"true")){
            details.setFriday("Working");
        }
        else{
            details.setFriday("Not Working");
        }if(StringUtils.equalsIgnoreCase(pojo.getSaturday(),"true")){
            details.setSaturday("Working");
        }
        else{
            details.setSaturday("Not Working");
        }
        return details;
    }

    public static List<FacilityDetailsPojo> mapFacilityEntityToPojo(List<FacilityDetails> typeList){
        List<FacilityDetailsPojo> list=new ArrayList<>();
        for(FacilityDetails type:typeList) {
            FacilityDetailsPojo pojo = new FacilityDetailsPojo();
            pojo.setFacilityId(type.getFacilityId());
            pojo.setFacilityName(type.getFacilityName());
            pojo.setSunday(type.getSunday());
            pojo.setMonday(type.getMonday());
            pojo.setTuesday(type.getTuesday());
            pojo.setWednesday(type.getWednesday());
            pojo.setThursday(type.getThursday());
            pojo.setFriday(type.getFriday());
            pojo.setSaturday(type.getSaturday());
            list.add(pojo);
        }
        return list;
    }
//    public static List<PeriodsDTO> mapPeriodEntityToPojo(List<PeriodsMaster> typeList){
//        List<PeriodsDTO> list=new ArrayList<>();
//        for(PeriodsMaster type:typeList) {
//            PeriodsDTO periodsDTO = new PeriodsDTO();
//
//            periodsDTO.setPeriodId(type.getPeriodId());
//            periodsDTO.setPeriodName(type.getPeriodName());
//            periodsDTO.setHours(type.getHours());
//            periodsDTO.setPeriodFrom(type.getPeriodFrom());
//            periodsDTO.setPeriodTo(type.getPeriodTo());
//            periodsDTO.setStatus(type.getStatus());
//            periodsDTO.setWeekdayText(type.getWeekdayText());
//
//
//            list.add(periodsDTO);
//        }
//        return list;
//    }
//
    public static IhesLessonPlan mapIhesLessonPojoToEntity(IhesLessonPlanPojo pojo){
        IhesLessonPlan details= new IhesLessonPlan();
        details.setIheslessonId(pojo.getIheslessonId());
        details.setLevelId(pojo.getLevelId());
        details.setClassId(pojo.getClassId());
        details.setSubjectId(pojo.getSubjectId());
        details.setChapterId(pojo.getChapterId());
        details.setTopicId(pojo.getTopicId());
        details.setDescription(pojo.getDescription());
        details.setTextbookCheckbox(pojo.getTextbookCheckbox());
        details.setTextbookChapter(pojo.getTextbookChapter());
        details.setWorkbookCheckbox(pojo.getWorkbookCheckbox());
        details.setWorkbook(pojo.getWorkbook());
        details.setObjectivesCheckbox(pojo.getObjectivesCheckbox());
        details.setObjectives(pojo.getObjectives());
        details.setImmersionKnowledge(pojo.getImmersionKnowledge());
        details.setSkillsCompetency(pojo.getSkillsCompetency());
        details.setAcademicAchievement(pojo.getAcademicAchievement());
        details.setApplicationLife(pojo.getApplicationLife());
        details.setChapterBuilding(pojo.getChapterBuilding());
        return details;
    }

    public static List<IhesLessonPlanPojo> mapIhesLessonEntityToPojo(List<IhesLessonPlan> typeList){
        List<IhesLessonPlanPojo> list=new ArrayList<>();
        for(IhesLessonPlan type:typeList) {
            IhesLessonPlanPojo pojo = new IhesLessonPlanPojo();
            pojo.setIheslessonId(type.getIheslessonId());
            pojo.setLevelId(type.getLevelId());
            pojo.setClassId(type.getClassId());
            pojo.setSubjectId(type.getSubjectId());
            pojo.setChapterId(type.getChapterId());
            pojo.setTopicId(type.getTopicId());
            pojo.setDescription(type.getDescription());
            pojo.setTextbookCheckbox(type.getTextbookCheckbox());
            pojo.setTextbookChapter(type.getTextbookChapter());
            pojo.setWorkbookCheckbox(type.getWorkbookCheckbox());
            pojo.setWorkbook(type.getWorkbook());
            pojo.setObjectives(type.getObjectives());
            pojo.setObjectivesCheckbox(type.getObjectivesCheckbox());
            pojo.setChapterBuilding(type.getChapterBuilding());
            pojo.setSkillsCompetency(type.getSkillsCompetency());
            pojo.setAcademicAchievement(type.getAcademicAchievement());
            pojo.setApplicationLife(type.getApplicationLife());
            pojo.setImmersionKnowledge(type.getImmersionKnowledge());
            pojo.setImmersion(type.getImmersion());
            pojo.setInvestigational(type.getInvestigational());
            pojo.setInstructional(type.getInstructional());
            list.add(pojo);
        }
        return list;
    }

    public static Designation mapDesignationPojoToEntity(DesignationPojo designationPojo) {

        Designation designation = new Designation();
        designation.setBranchId(designationPojo.getBranchId());
        designation.setDesignationId(designationPojo.getDesignationId());
        designation.setDesignationDesc(designationPojo.getDesignationDesc());
        designation.setDesignationName(designationPojo.getDesignationName());
        designation.setDesignationStatus(designationPojo.getDesignationStatus());
        return designation;
    }
    public static Assignment mapAssignmentPojoToEntity(AssignmentPojo assignmentPojo) {

        Assignment assignment = new Assignment();
        assignment.setAssignmentId(assignmentPojo.getAssignmentId());
        assignment.setAssignmentName(assignmentPojo.getAssignmentName());
        assignment.setStatus(assignmentPojo.getStatus());
        return assignment;
    }
    public static List<AssignmentPojo> mapAssignmentEntityToPojo(List<Assignment> assignmentList) {
        List<AssignmentPojo> list = new ArrayList<>();
        for (Assignment assignment : assignmentList) {

            AssignmentPojo assignmentPojo = new AssignmentPojo();

            assignmentPojo.setAssignmentId(assignment.getAssignmentId());
            assignmentPojo.setAssignmentName(assignment.getAssignmentName());
            assignmentPojo.setStatus(assignment.getStatus());

            list.add(assignmentPojo);
        }
        return list;
    }













    public static List<DesignationPojo> mapDesignationEntityToPojo(List<Designation> designationList) {
        List<DesignationPojo> list = new ArrayList<>();
        for (Designation designation : designationList) {

            DesignationPojo designationPojo = new DesignationPojo();

            designationPojo.setDesignationId(designation.getDesignationId());
            designationPojo.setBranchId(designation.getBranchId());
            designationPojo.setDesignationDesc(designation.getDesignationDesc());
            designationPojo.setDesignationName(designation.getDesignationName());
            designationPojo.setDesignationStatus(designation.getDesignationStatus());

            list.add(designationPojo);
        }
        return list;
    }


    public static Class mapClassPojoToEntity(ClassPojo classPojo) {
        Class aClass = new Class();

        aClass.setClassId(classPojo.getClassId());
        aClass.setBranchId(classPojo.getBranchId());
        aClass.setClassName(classPojo.getClassName());
        aClass.setClassStatus(classPojo.getClassStatus());
        aClass.setLevelId(classPojo.getLevelId());
        return aClass;

    }

    
    public static Semester mapSemesterPojoToEntity(SemesterPojo semesterPojo) {
        Semester semester = new Semester();

        semester.setSemesterId(semesterPojo.getSemesterId());
        semester.setDescription(semesterPojo.getDescription());
        semester.setEndDate(semesterPojo.getEndDate());
        semester.setLevel(semesterPojo.getLevel());
        semester.setBranchId(semesterPojo.getBranchId());
        semester.setSemesterName(semesterPojo.getSemesterName());
        semester.setSemesterStatus(semesterPojo.getSemesterStatus());
        semester.setStartDate(semesterPojo.getStartDate());


        return semester;

    }

    public static Remainders mapRemaindersPojoToEntity(RemaindersPojo remaindersPojo) {
        Remainders remainders = new Remainders();
        remainders.setRemainderId(remaindersPojo.getRemainderId());
        remainders.setBranchId(remaindersPojo.getBranchId());
        remainders.setRemainderName(remaindersPojo.getRemainderName());
        remainders.setLevelName(remaindersPojo.getLevelName());
        remainders.setClassName(remaindersPojo.getClassName());
        remainders.setSemester(remaindersPojo.getSemester());
        remainders.setDays(remaindersPojo.getDays());
        remainders.setReason(remaindersPojo.getReason());
        remainders.setEmailTemplate(remaindersPojo.getEmailTemplate());
        remainders.setRemainderStart(remaindersPojo.getRemainderStart());
        remainders.setUntill(remaindersPojo.getUntill());
        remainders.setRemainderStatus(remaindersPojo.getRemainderStatus());
        remainders.setSentTo(remaindersPojo.getSentTo());
        return remainders;
    }

    public static Suppliers mapSuppliersPojoToEntity(SuppliersPojo suppliersPojo) {

        Suppliers suppliers = new Suppliers();
        suppliers.setSuppliersId(suppliersPojo.getSuppliersId());
        suppliers.setBranchId(suppliersPojo.getBranchId());
        suppliers.setSuppliersName(suppliersPojo.getSuppliersName());
        suppliers.setSuppliersCode(suppliersPojo.getSuppliersCode());
        suppliers.setSuppliersAddress(suppliersPojo.getSuppliersAddress());
        suppliers.setSuppliersPhone(suppliersPojo.getSuppliersPhone());
        suppliers.setGstNo(suppliersPojo.getGstNo());
        suppliers.setSuppliersEmail(suppliersPojo.getSuppliersEmail());
        suppliers.setSuppliersStatus(suppliersPojo.getSuppliersStatus());
        suppliers.setSuppliersRemarks(suppliersPojo.getSuppliersRemarks());
        return suppliers;
    }


    public static List<RemaindersPojo> mapRemaindersEntityToPojo(List<Remainders> remaindersList) {
        List<RemaindersPojo> list = new ArrayList<>();
        for (Remainders remainders : remaindersList) {

            RemaindersPojo remaindersPojo = new RemaindersPojo();

            remaindersPojo.setRemainderId(remainders.getRemainderId());
            remaindersPojo.setRemainderName(remainders.getRemainderName());
            remaindersPojo.setBranchId(remainders.getBranchId());
            remaindersPojo.setLevelName(remainders.getLevelName());
            remaindersPojo.setClassName(remainders.getClassName());
            remaindersPojo.setSemester(remainders.getSemester());
            remaindersPojo.setDays(remainders.getDays());
            remaindersPojo.setEmailTemplate(remainders.getEmailTemplate());
            remaindersPojo.setReason(remainders.getReason());
            remaindersPojo.setRemainderStart(remainders.getRemainderStart());
            remaindersPojo.setRemainderStatus(remainders.getRemainderStatus());
            remaindersPojo.setUntill(remainders.getUntill());
            remaindersPojo.setSentTo(remainders.getSentTo());

            list.add(remaindersPojo);
        }
        return list;
    }


    public static List<ClassPojo> mapClassEntityToPojo(List<Class> classList) {
        List<ClassPojo> list = new ArrayList<>();
        for (Class aClass : classList) {

            ClassPojo classPojo = new ClassPojo();
            classPojo.setClassId(aClass.getClassId());
            classPojo.setBranchId(aClass.getBranchId());
            classPojo.setClassName(aClass.getClassName());
            classPojo.setLevelId(aClass.getLevelId());
            classPojo.setClassStatus(aClass.getClassStatus());

            list.add(classPojo);
        }
        return list;
    }




    public static List<SemesterPojo> mapSemesterEntityToPojo(List<Semester> semesterList) {
        List<SemesterPojo> list = new ArrayList<>();
        for (Semester semester : semesterList) {

            SemesterPojo semesterPojo = new SemesterPojo();

            semesterPojo.setDescription(semester.getDescription());
            semesterPojo.setEndDate(semester.getEndDate());
            semesterPojo.setLevel(semester.getLevel());
            semesterPojo.setBranchId(semester.getBranchId());
            semesterPojo.setSemesterId(semester.getSemesterId());
            semesterPojo.setSemesterName(semester.getSemesterName());
            semesterPojo.setDescription(semester.getDescription());
            semesterPojo.setStartDate(semester.getStartDate());
            semesterPojo.setSemesterStatus(semester.getSemesterStatus());


            list.add(semesterPojo);
        }
        return list;
    }

    public static List<SuppliersPojo> mapSuppliersEntityToPojo(List<Suppliers> suppliersList) {
        List<SuppliersPojo> list = new ArrayList<>();
        for (Suppliers suppliers : suppliersList) {
            SuppliersPojo suppliersPojo = new SuppliersPojo();
            suppliersPojo.setSuppliersId(suppliers.getSuppliersId());
            suppliersPojo.setBranchId(suppliers.getBranchId());
            suppliersPojo.setSuppliersName(suppliers.getSuppliersName());
            suppliersPojo.setSuppliersCode(suppliers.getSuppliersCode());
            suppliersPojo.setGstNo(suppliers.getGstNo());
            suppliersPojo.setSuppliersPhone(suppliers.getSuppliersPhone());
            suppliersPojo.setSuppliersAddress(suppliers.getSuppliersAddress());
            suppliersPojo.setSuppliersEmail(suppliers.getSuppliersEmail());
            suppliersPojo.setSuppliersRemarks(suppliers.getSuppliersRemarks());
            suppliersPojo.setSuppliersStatus(suppliers.getSuppliersStatus());
            list.add(suppliersPojo);
        }

  return list;
    }

    public static Agegroup mapAgegroupPojoToEntity(AgegroupPojo agegroupPojo){
        Agegroup agegroup= new Agegroup();
        agegroup.setFromAgegroup(agegroupPojo.getFromAgegroup());
        agegroup.setToAgegroup(agegroupPojo.getToAgegroup());
        agegroup.setBranchId(agegroupPojo.getBranchId());
        agegroup.setStatus(agegroupPojo.getStatus());
        return agegroup;
    }


    public static List<AgegroupPojo> mapAgegroupEntityToPojo(List<Agegroup> typeList){
        List<AgegroupPojo> list=new ArrayList<>();
        for(Agegroup type:typeList) {
            AgegroupPojo agegroupPojo = new AgegroupPojo();
            agegroupPojo.setAgegroupId(type.getAgegroupId());
            agegroupPojo.setFromAgegroup(type.getFromAgegroup());
            agegroupPojo.setToAgegroup(type.getToAgegroup());
            agegroupPojo.setBranchId(type.getBranchId());
            list.add(agegroupPojo);
        }
        return list;
    }
    public static Term mapTermPojoToEntity(TermPojo termPojo){
        Term term = new Term();
        term.setTermId(termPojo.getTermId());
        term.setTermName(termPojo.getTermName());
        term.setStatus(termPojo.getStatus());
        term.setSemesterId(termPojo.getSemesterId());
        return term;
    }

    public static BankDetails mapBankPojoToEntity(BankDetailsPojo bankDetailsPojo){
        BankDetails bankDetails = null;

        return bankDetails;
    }


    public static VistorEntry mapVisitorPojoToEntity(VisitorEntryPojo visitorEntryPojo){
        VistorEntry vistorEntry = new VistorEntry();
        vistorEntry.setVistorId(visitorEntryPojo.getVistorId());
        vistorEntry.setVisitorName(visitorEntryPojo.getVisitorName());
        vistorEntry.setVisitorAddress(visitorEntryPojo.getVisitorAddress());
        vistorEntry.setVisitorNo(visitorEntryPojo.getVisitorNo());
        vistorEntry.setVisitorMobile(visitorEntryPojo.getVisitorMobile());
        vistorEntry.setVisitorEmailID(visitorEntryPojo.getVisitorEmailID());
        vistorEntry.setVisitorLogin(visitorEntryPojo.getVisitorLogin());
        vistorEntry.setVisitorPurpose(visitorEntryPojo.getVisitorPurpose());
        vistorEntry.setVistorStatus(visitorEntryPojo.getVistorStatus());
        vistorEntry.setVisitorToMeet(visitorEntryPojo.getVisitorToMeet());
        return vistorEntry;
    }












    public static ExitInterviewForm mapInterviewPojoToEntity(ExitInterviewformPojo exitInterviewformPojo){
        ExitInterviewForm exitInterviewForm = new ExitInterviewForm();

        exitInterviewForm.setEinterviewFormId(exitInterviewformPojo.getEinterviewFormId());
        exitInterviewForm.seteEmployeeName(exitInterviewformPojo.geteEmployeeName());
        exitInterviewForm.seteEmployeeCode(exitInterviewformPojo.geteEmployeeCode());
        exitInterviewForm.setePosition(exitInterviewformPojo.getePosition());
        exitInterviewForm.seteDateStart(exitInterviewformPojo.geteDateStart());
        exitInterviewForm.seteVolutary(exitInterviewformPojo.geteVolutary());
        exitInterviewForm.seteOtherJob(exitInterviewformPojo.geteOtherJob());
        exitInterviewForm.setePersonalReason(exitInterviewformPojo.getePersonalReason());
        exitInterviewForm.seteRelocation(exitInterviewformPojo.geteRelocation());
        exitInterviewForm.seteRetirement(exitInterviewformPojo.geteRetirement());
        exitInterviewForm.seteVoluntaryOther(exitInterviewformPojo.geteVoluntaryOther());
        exitInterviewForm.seteNonContract(exitInterviewformPojo.geteNonContract());
        exitInterviewForm.seteEndOfP(exitInterviewformPojo.geteEndOfP());
        exitInterviewForm.seteAttendance(exitInterviewformPojo.geteAttendance());
        exitInterviewForm.seteViolation(exitInterviewformPojo.geteViolation());
        exitInterviewForm.seteInVoluntaryOther(exitInterviewformPojo.geteInVoluntaryOther());
        exitInterviewForm.seteSupervisorComment(exitInterviewformPojo.geteSupervisorComment());
        exitInterviewForm.seteSupervisorDate(exitInterviewformPojo.geteSupervisorDate());
        exitInterviewForm.seteMudirsComment(exitInterviewformPojo.geteMudirsComment());
        exitInterviewForm.seteMudirsDate(exitInterviewformPojo.geteMudirsDate());
        exitInterviewForm.seteEmployeesComment(exitInterviewformPojo.geteEmployeesComment());
        exitInterviewForm.seteEmployeesDate(exitInterviewformPojo.geteEmployeesDate());
        exitInterviewForm.seteEmployeesSign(exitInterviewformPojo.geteEmployeesSign());
        exitInterviewForm.seteMudirsSign(exitInterviewformPojo.geteMudirsSign());
        exitInterviewForm.seteSupervisorSign(exitInterviewformPojo.geteSupervisorSign());
        exitInterviewForm.setEstatus(exitInterviewformPojo.getEstatus());

        return exitInterviewForm;
    }

    public static Employee mapEmployeePojoToEntity(EmployeePojo employeePojo){
        Employee employee=new Employee();
        employee.setEmployeeId(employeePojo.getEmployeeId());
        employee.setEmployeeName(employeePojo.getEmployeeName());
        employee.setEmployeeCode(employeePojo.getEmployeeCode());
        employee.setEmpBranch(employeePojo.getEmpBranch());
        employee.setUserType(employeePojo.getUserType());
        employee.setEmpDepartment(employeePojo.getEmpDepartment());
        employee.setEmpType(employeePojo.getEmpType());
        employee.setTypeOfEmp(employeePojo.getTypeOfEmp());
        employee.setEmpDesignation(employeePojo.getEmpDesignation());
        employee.setEmpCoordinator(employeePojo.getEmpCoordinator());
        employee.setReportTo(employeePojo.getReportTo());
        employee.setEmpDoj(employeePojo.getEmpDoj());
        employee.setEmpCapability(employeePojo.getEmpCapability());
        employee.setSpeciality(employeePojo.getSpeciality());
        employee.setMobile(employeePojo.getMobile());
        employee.setEmailId(employeePojo.getEmailId());
        employee.setAadharNo(employeePojo.getAadharNo());
        employee.setPassportNo(employeePojo.getPassportNo());
        employee.setExperience(employeePojo.getExperience());
        employee.setAddressLine1(employeePojo.getAddressLine1());
        employee.setAddressLine2(employeePojo.getAddressLine2());
        employee.setCountry(employeePojo.getCountry());
        employee.setState(employeePojo.getState());
        employee.setCity(employeePojo.getCity());
        employee.setPostalCode(employeePojo.getPostalCode());
        employee.setUserName(employeePojo.getUserName());
        employee.setPassword(employeePojo.getPassword());
        employee.setStatus(employeePojo.getStatus());
        employee.setEmpDob(employeePojo.getEmpDob());
        employee.setEmpAge(employeePojo.getEmpAge());
        employee.setBasicSal(employeePojo.getBasicSal());
        employee.setEmpearnings(employeePojo.getEmpearnings());
        employee.setEmpdeductions(employeePojo.getEmpdeductions());
        employee.setEarningAmount(employeePojo.getEarningAmount());
        employee.setDeductionAmount(employeePojo.getDeductionAmount());
        employee.setHrId(employeePojo.getHrId());

        return employee;
    }

    public static List<EmployeePojo> mapEmployeeEntityToPojo(List<Employee> employeeList){
        List<EmployeePojo> list=new ArrayList<>();
        for(Employee employee:employeeList){
            EmployeePojo employeePojo=new EmployeePojo();
            employeePojo.setEmployeeId(employee.getEmployeeId());
            employeePojo.setEmployeeCode(employee.getEmployeeCode());
            employeePojo.setEmployeeName(employee.getEmployeeName());
            employeePojo.setUserType(employee.getUserType());
            employeePojo.setEmpDepartment(employee.getEmpDepartment());
            employeePojo.setEmpType(employee.getEmpType());
            employeePojo.setTypeOfEmp(employee.getTypeOfEmp());
            employeePojo.setEmpDesignation(employee.getEmpDesignation());
            employeePojo.setEmpCoordinator(employee.getEmpCoordinator());
            employeePojo.setEmpDoj(employee.getEmpDoj());
            employeePojo.setEmpCapability(employee.getEmpCapability());
            employeePojo.setSpeciality(employee.getSpeciality());
            employeePojo.setMobile(employee.getMobile());
            employeePojo.setEmailId(employee.getEmailId());
            employeePojo.setAadharNo(employee.getAadharNo());
            employeePojo.setPassportNo(employee.getPassportNo());
            employeePojo.setExperience(employee.getExperience());
            employeePojo.setAddressLine1(employee.getAddressLine1());
            employeePojo.setAddressLine2(employee.getAddressLine2());
            employeePojo.setCountry(employee.getCountry());
            employeePojo.setState(employee.getState());
            employeePojo.setCity(employee.getCity());
            employeePojo.setPostalCode(employee.getPostalCode());
            employeePojo.setUserName(employee.getUserName());
            employeePojo.setPassword(employee.getPassword());
            employeePojo.setStatus(employee.getStatus());
            employeePojo.setReportTo(employee.getReportTo());
            employeePojo.setEmpBranch(employee.getEmpBranch());
            employeePojo.setEmpDob(employee.getEmpDob());
            employeePojo.setEmpAge(employee.getEmpAge());
            employeePojo.setBasicSal(employee.getBasicSal());
            employeePojo.setEmpearnings(employee.getEmpearnings());
            employeePojo.setEmpdeductions(employee.getEmpdeductions());
            employeePojo.setEarningAmount(employee.getEarningAmount());
            employeePojo.setDeductionAmount(employee.getDeductionAmount());

            list.add(employeePojo);
        }
        return list;
    }


    public static List<TermPojo> mapTermEntityToPojo(List<Term> typeList){
        List<TermPojo> list=new ArrayList<>();
        for(Term type:typeList) {
            TermPojo termPojo = new TermPojo();
            termPojo.setTermId(type.getTermId());
            termPojo.setTermName(type.getTermName());
            termPojo.setStatus(type.getStatus());
            termPojo.setSemesterId(type.getSemesterId());
            list.add(termPojo);
        }
        return list;
    }

    public static Subject mapSubjectPojoToEntity(SubjectPojo subjectPojo){
        Subject subject = new Subject();
        subject.setSubjectId(subjectPojo.getSubjectId());
        subject.setSubjectName(subjectPojo.getSubjectName());
        subject.setClassesId(subjectPojo.getClassesId());
        subject.setStatus(subjectPojo.getStatus());
        subject.setCategory(subjectPojo.getCategory());
        return subject;
    }

    public static List<SubjectPojo> mapSubjectEntityToPojo(List<Subject> typeList){
        List<SubjectPojo> list=new ArrayList<>();
        for(Subject type:typeList) {
            SubjectPojo subjectPojo = new SubjectPojo();
            subjectPojo.setSubjectId(type.getSubjectId());
            subjectPojo.setSubjectName(type.getSubjectName());
            subjectPojo.setClassesId(type.getClassesId());
            subjectPojo.setClassesName(String.valueOf(type.getClassesId()));
            subjectPojo.setStatus(type.getStatus());
            subjectPojo.setCategory(type.getCategory());
            list.add(subjectPojo);
        }
        return list;
    }

    public static Chapters mapChapterPojoToEntity(ChapterPojo chapterPojo){
        Chapters chapters = new Chapters();
        chapters.setChapterId(chapterPojo.getChapterId());
        chapters.setChapterName(chapterPojo.getChapterName());
        chapters.setSubjectId(chapterPojo.getSubjectId());
        chapters.setStatus(chapterPojo.getStatus());
        chapters.setLevelId(chapterPojo.getLevelId());
        chapters.setClassId(chapterPojo.getClassId());
        return chapters;
    }


    public static List<ChapterPojo> mapChapterEntityToPojo(List<Chapters> typeList){
        List<ChapterPojo> list=new ArrayList<>();
        for(Chapters type:typeList) {
            ChapterPojo chapterPojo = new ChapterPojo();
            chapterPojo.setChapterId(type.getChapterId());
            chapterPojo.setChapterName(type.getChapterName());
            chapterPojo.setSubjectId(type.getSubjectId());
            chapterPojo.setStatus(type.getStatus());
            chapterPojo.setClassId(type.getClassId());
            chapterPojo.setLevelId(type.getLevelId());
            list.add(chapterPojo);
        }
        return list;
    }

    public static Topic mapTopicPojoToEntity(TopicPojo topicPojo){
        Topic topic = new Topic();
        topic.setTopicId(topicPojo.getTopicId());
        topic.setSubject(topicPojo.getSubject());
        topic.setLevel(topicPojo.getLevel());
        topic.setClassId(topicPojo.getClassId());
        return topic;
    }

    public static GradingMaster mapGradingMasterPojoToEntity(GradingMasterPojo gradingMasterPojo){
        GradingMaster gradingMaster = new GradingMaster();
        gradingMaster.setGradeMasterId(gradingMasterPojo.getGradeMasterId());
        gradingMaster.setGradeList(gradingMasterPojo.getGradeList());
        gradingMaster.setList(gradingMasterPojo.getList());
        return gradingMaster;
    }
    public static List<TopicPojo> mapTopicEntityToPojo(List<Topic> topics){
        List<TopicPojo> topicPojos=new ArrayList<>();
        for(Topic topic:topics){
            TopicPojo topicPojo=new TopicPojo();
            topicPojo.setClassName(topic.getClassName());
            topicPojo.setClassId(topic.getClassId());
            topicPojo.setLevelName(topic.getLevelName());
            topicPojo.setSubjectName(topic.getSubjectName());
            topicPojo.setSubject(topic.getSubject());
            topicPojo.setLevel(topic.getLevel());
            topicPojo.setTopicId(topic.getTopicId());
            topicPojos.add(topicPojo);
        }
        return topicPojos;
    }

    public static List<GradingMasterPojo> mapGradingMasterEntityToPojo(List<GradingMaster> gradingMasters){
        List<GradingMasterPojo> gradingMasterPojos=new ArrayList<>();
        for(GradingMaster gradingMaster:gradingMasters){
            GradingMasterPojo gradingMasterPojo=new GradingMasterPojo();
            gradingMasterPojo.setGradeMasterId(gradingMaster.getGradeMasterId());
            gradingMasterPojo.setList(gradingMaster.getList());
            gradingMasterPojos.add(gradingMasterPojo);
        }
        return gradingMasterPojos;
    }
    public static List<TopicPojo> mapTopicDetailsEntityToPojo(List<TopicDetails> topics){
        List<TopicPojo> topicPojos=new ArrayList<>();
        for(TopicDetails topic:topics){
            TopicPojo topicPojo=new TopicPojo();
            topicPojo.setChapter(topic.getChapter());
            topicPojo.setTopicName(topic.getTopicName());
            topicPojo.setTopicId(topic.getTopicId());
            topicPojo.setId(topic.getId());
            topicPojos.add(topicPojo);
        }
        return topicPojos;
    }
    public static AssesmentSubmission mapAssSubPojoToEntity(AssesmentSubPojo assesmentSubPojo){
        AssesmentSubmission assesmentSubmission = new AssesmentSubmission();
        assesmentSubmission.setAsId(assesmentSubPojo.getAsId());
        assesmentSubmission.setLevel(assesmentSubPojo.getLevel());
        assesmentSubmission.setClassId(assesmentSubPojo.getClassId());
        assesmentSubmission.setSubject(assesmentSubPojo.getSubject());
        assesmentSubmission.setTerm(assesmentSubPojo.getTerm());
        assesmentSubmission.setChapter(assesmentSubPojo.getChapter());
        assesmentSubmission.setComponent(assesmentSubPojo.getComponent());
        assesmentSubmission.setSubComponent(assesmentSubPojo.getSubComponent());
        assesmentSubmission.setDate(assesmentSubPojo.getDate());
        assesmentSubmission.setFlag(assesmentSubPojo.getFlag());
        assesmentSubmission.setQuestionName(assesmentSubPojo.getQuestionName());
        if(!StringUtils.isNotEmpty(assesmentSubPojo.getTopicName())) {
            assesmentSubmission.setTopic(assesmentSubPojo.getTopicName());
        }
        return assesmentSubmission;
    }

    public static StudentAssesmentMarks mapStudentAssPojoToEntity(StudentAssesmentMarksPojo assesmentSubPojo){
        StudentAssesmentMarks assesmentSubmission = new StudentAssesmentMarks();
        assesmentSubmission.setSamId(assesmentSubPojo.getSamId());
        assesmentSubmission.setLevel(assesmentSubPojo.getLevel());
        assesmentSubmission.setClassId(assesmentSubPojo.getClassId());
        assesmentSubmission.setSubject(assesmentSubPojo.getSubject());
        assesmentSubmission.setTerm(assesmentSubPojo.getTerm());
        assesmentSubmission.setChapter(assesmentSubPojo.getChapter());
        assesmentSubmission.setSemester(assesmentSubPojo.getSemester());
        assesmentSubmission.setTopic(assesmentSubPojo.getTopic());
        return assesmentSubmission;
    }
    public static MarksSubmission mapMarksSubPojoToEntity(MarksSubmissionPojo assesmentSubPojo){
        MarksSubmission assesmentSubmission = new MarksSubmission();
        assesmentSubmission.setLevelId(assesmentSubPojo.getLevelId());
        assesmentSubmission.setClassId(assesmentSubPojo.getClassId());
        assesmentSubmission.setSubjectId(assesmentSubPojo.getSubjectId());
        assesmentSubmission.setEmployee(assesmentSubPojo.getEmployee());
        return assesmentSubmission;
    }

    public static LessonPlan mapLessonPlanPojoToEntity(LessonPlanPojo lessonPlanPojo){
        LessonPlan lessonPlan = new LessonPlan();
        lessonPlan.setLessonPlanId(lessonPlanPojo.getLessonPlanId());
        lessonPlan.setTopic(lessonPlanPojo.getTopic());
        lessonPlan.setSubject(lessonPlanPojo.getSubject());
        lessonPlan.setChapter(lessonPlanPojo.getChapter());
        lessonPlan.setClasses(lessonPlanPojo.getClasses());
        lessonPlan.setLearningOutcomes(lessonPlanPojo.getLearningOutcomes());
        lessonPlan.setResources(lessonPlanPojo.getResources());
        lessonPlan.setActivities(lessonPlanPojo.getActivities());
        lessonPlan.setIslamicIntegration(lessonPlanPojo.getIslamicIntegration());
        lessonPlan.setKnowledge(lessonPlanPojo.getKnowledge());
        lessonPlan.setRemarks(lessonPlanPojo.getRemarks());
        lessonPlan.setStatus(lessonPlanPojo.getStatus());
        lessonPlan.setLevel(lessonPlanPojo.getLevel());
        lessonPlan.setAcademic(lessonPlanPojo.getAcademic());
        lessonPlan.setTeacher(lessonPlanPojo.getTeacher());
        lessonPlan.setLessonPlanning(lessonPlanPojo.getLessonPlanning());
        lessonPlan.setObjective(lessonPlanPojo.getObjective());
        lessonPlan.setIntroduction(lessonPlanPojo.getIntroduction());
        lessonPlan.setImmersion(lessonPlanPojo.getImmersion());
        lessonPlan.setExplanation(lessonPlanPojo.getExplanation());
        lessonPlan.setHandsOnExp(lessonPlanPojo.getHandsOnExp());
        lessonPlan.setEngagementHomework(lessonPlanPojo.getEngagementHomework());
        lessonPlan.setAssessment("noassesment");
        lessonPlan.setWeekText(lessonPlanPojo.getWeekText());
        lessonPlan.setToWeekText(lessonPlanPojo.getToWeekText());
        lessonPlan.setCheckedBy(lessonPlanPojo.getCheckedBy());
        lessonPlan.setLessonPlanDate(lessonPlanPojo.getLessonPlanDate());
        lessonPlan.setTerm(lessonPlanPojo.getTerm());
        lessonPlan.setComponent(lessonPlanPojo.getComponent());
        lessonPlan.setSubComponent(lessonPlanPojo.getSubComponent());
        lessonPlan.setAssessment(lessonPlanPojo.getAssessment());
        lessonPlan.setNewComponent(lessonPlanPojo.getNewComponent());
        lessonPlan.setQuestionId(lessonPlanPojo.getQuestionId());
        lessonPlan.setMaxMarks(String.valueOf(lessonPlanPojo.getMaxMarks()));
        lessonPlan.setSowDetailsList(lessonPlanPojo.getSowDetailsList());
        lessonPlan.setAttachFile(lessonPlanPojo.getAttachFile());
        lessonPlan.setNewStatus("Pending");
        return lessonPlan;
    }
    public static LessonPlanDetails mapLessonPlanDetialsPojoToEntity(LessonPlanPojo lessonPlanPojo){
        LessonPlanDetails lessonPlanDetails = new LessonPlanDetails();
        lessonPlanDetails.setAssessment(lessonPlanPojo.getAssessment());
        lessonPlanDetails.setLessonPlanId(lessonPlanPojo.getLessonPlanId());
        lessonPlanDetails.setComponent(lessonPlanPojo.getComponent());
        lessonPlanDetails.setSubComponent(lessonPlanPojo.getSubComponent());
        lessonPlanDetails.setWeightage(lessonPlanPojo.getNewComponent());
        lessonPlanDetails.setQuestionId(lessonPlanPojo.getQuestionId());
        lessonPlanDetails.setMaxMarks(String.valueOf(lessonPlanPojo.getMaxMarks()));
        return lessonPlanDetails;
    }

    public static AssessmentQuestionDetailsPojo mapAssQueEntityToPojo(AssessmentQuestionDetails typeList){
        AssessmentQuestionDetailsPojo list = new AssessmentQuestionDetailsPojo();
        list.setQuestion(typeList.getQuestion());
        list.setMaxMarks(typeList.getMaxMarks());
        list.setAnswer(typeList.getAnswer());
        list.setAssessmentDetailsId(typeList.getAssessmentDetailsId());
        list.setQuestionType(typeList.getQuestionType());
        list.setInstrument(typeList.getInstrument());
        return list;
    }

    public static List<LessonPlanPojo> mapLessonPlanEntityToPojo(List<LessonPlan> typeList){
        List<LessonPlanPojo> list=new ArrayList<>();
        for(LessonPlan type:typeList) {
            LessonPlanPojo lessonPlanPojo = new LessonPlanPojo();
            lessonPlanPojo.setLessonPlanId(type.getLessonPlanId());
            lessonPlanPojo.setTopic(type.getTopic());
            lessonPlanPojo.setSubject(type.getSubject());
            lessonPlanPojo.setNewStatus(type.getNewStatus());
            lessonPlanPojo.setChapter(type.getChapter());
            lessonPlanPojo.setClasses(type.getClasses());
            lessonPlanPojo.setLearningOutcomes(type.getLearningOutcomes());
            lessonPlanPojo.setResources(type.getResources());
            lessonPlanPojo.setActivities(type.getActivities());
            lessonPlanPojo.setIslamicIntegration(type.getIslamicIntegration());
            lessonPlanPojo.setKnowledge(type.getKnowledge());
            lessonPlanPojo.setRemarks(type.getRemarks());
            lessonPlanPojo.setStatus(type.getStatus());
            lessonPlanPojo.setLevel(type.getLevel());
            lessonPlanPojo.setAcademic(type.getAcademic());
            lessonPlanPojo.setTeacher(type.getTeacher());
            lessonPlanPojo.setLessonPlanning(type.getLessonPlanning());
            lessonPlanPojo.setObjective(type.getObjective());
            lessonPlanPojo.setIntroduction(type.getIntroduction());
            lessonPlanPojo.setImmersion(type.getImmersion());
            lessonPlanPojo.setExplanation(type.getExplanation());
            lessonPlanPojo.setImmersion(type.getImmersion());
            lessonPlanPojo.setHandsOnExp(type.getHandsOnExp());
            lessonPlanPojo.setAssessment(type.getAssessment());
            lessonPlanPojo.setWeekText(type.getWeekText());
            lessonPlanPojo.setAssesmentId(type.getAssesmentId());
            lessonPlanPojo.setToWeekText(type.getToWeekText());
            lessonPlanPojo.setLessonPlanDate(type.getLessonPlanDate());
            lessonPlanPojo.setCheckedBy(type.getCheckedBy());
            lessonPlanPojo.setLessonPlanDate(type.getLessonPlanDate());
            lessonPlanPojo.setTerm(type.getTerm());
            lessonPlanPojo.setComponent(type.getComponent());
            lessonPlanPojo.setAssessment(type.getAssessment());
            lessonPlanPojo.setNewComponent(type.getNewComponent());
            lessonPlanPojo.setComponent(type.getComponent());
            lessonPlanPojo.setSubComponent(type.getSubComponent());
            lessonPlanPojo.setTerm(type.getTerm());
            lessonPlanPojo.setSowDetailsList(type.getSowDetailsList());
            lessonPlanPojo.setMaxMarks(Double.parseDouble(type.getMaxMarks()));
            lessonPlanPojo.setQuestionId(type.getQuestionId());
            lessonPlanPojo.setAttachFile(type.getAttachFile());
            list.add(lessonPlanPojo);
        }
        return list;
    }


    public static Sow mapSowPojoToEntity(SowPojo sowPojo){
        Sow sow = new Sow();
        sow.setSowId(sowPojo.getSowId());
        sow.setLevel(sowPojo.getLevel());
        sow.setClasses(sowPojo.getClasses());
        sow.setSemester(sowPojo.getSemester());
        sow.setSubject(sowPojo.getSubject());
        sow.setChapter(sowPojo.getChapter());
        sow.setTerm(sowPojo.getTerm());
        sow.setSowList(sowPojo.getSowList());
        return sow;
    }


    public static List<SowPojo> mapSowPlanEntityToPojo(List<Sow> typeList){
        List<SowPojo> list=new ArrayList<>();
        for(Sow type:typeList) {
            SowPojo sowPojo = new SowPojo();
            sowPojo.setSowId(type.getSowId());
            sowPojo.setLevel(type.getLevel());
            sowPojo.setClasses(type.getClasses());
            sowPojo.setTerm(type.getTerm());
            sowPojo.setSubject(type.getSubject());
            sowPojo.setChapter(type.getChapter());
            sowPojo.setSowList(type.getSowList());
            sowPojo.setSemester(type.getSemester());
            list.add(sowPojo);
        }
        return list;
    }


    public static Earnings mapEarningsPojoToEntity(EarningsPojo earningsPojo) {
        Earnings earnings = new Earnings();
        earnings.setEarningId(earningsPojo.getEarningId());
        earnings.setEarningName(earningsPojo.getEarningName());
        earnings.setEarningDesc(earningsPojo.getEarningDesc());
        earnings.setStatus(earningsPojo.getStatus());
        earnings.setAccumulated(earningsPojo.getAccumulated());
        earnings.setEarnAt(earningsPojo.getEarnAt());
        earnings.setEmethod(earningsPojo.getEmethod());
        earnings.setMonth1(earningsPojo.getMonth1());
        earnings.setMonth3(earningsPojo.getMonth3());
        earnings.setMonth2(earningsPojo.getMonth2());
        earnings.setMonth4(earningsPojo.getMonth4());
        earnings.setMonth5(earningsPojo.getMonth5());
        earnings.setMonth6(earningsPojo.getMonth6());
        earnings.setMonth7(earningsPojo.getMonth7());
        earnings.setMonth8(earningsPojo.getMonth8());
        earnings.setMonth9(earningsPojo.getMonth9());
        earnings.setMonth10(earningsPojo.getMonth10());
        earnings.setMonth11(earningsPojo.getMonth11());
        earnings.setMonth12(earningsPojo.getMonth12());
        earnings.setEmpearnings(earningsPojo.isEmpearnings());


        return earnings;
    }


    public static List<EarningsPojo> mapEarningsEntityToPojo(List<Earnings> earningsList) {
        List<EarningsPojo> list = new ArrayList<>();
        for (Earnings earnings : earningsList) {
            EarningsPojo earningsPojo = new EarningsPojo();
            earningsPojo.setEarningId(earnings.getEarningId());
            earningsPojo.setEarningName(earnings.getEarningName());
            earningsPojo.setEarningDesc(earnings.getEarningDesc());
            earningsPojo.setStatus(earnings.getStatus());
            earningsPojo.setAccumulated(earnings.getAccumulated());
            earningsPojo.setEarnAt(earnings.getEarnAt());
            earningsPojo.setEmethod(earnings.getEmethod());
            earningsPojo.setMonth1(earnings.getMonth1());
            earningsPojo.setMonth3(earnings.getMonth3());
            earningsPojo.setMonth2(earnings.getMonth2());
            earningsPojo.setMonth4(earnings.getMonth4());
            earningsPojo.setMonth5(earnings.getMonth5());
            earningsPojo.setMonth6(earnings.getMonth6());
            earningsPojo.setMonth7(earnings.getMonth7());
            earningsPojo.setMonth8(earnings.getMonth8());
            earningsPojo.setMonth9(earnings.getMonth9());
            earningsPojo.setMonth10(earnings.getMonth10());
            earningsPojo.setMonth11(earnings.getMonth11());
            earningsPojo.setMonth12(earnings.getMonth12());
            earningsPojo.setEmpearnings(earnings.isEmpearnings());
            list.add(earningsPojo);

        }
        return list;
    }

    public static Deduction mapDeductionPojoToEntity(DeductionPojo deductionDTO) {
        Deduction deduction = new Deduction();
        deduction.setDeductionId(deductionDTO.getDeductionId());
        deduction.setDeductionName(deductionDTO.getDeductionName());
        deduction.setDeductionDesc(deductionDTO.getDeductionDesc());
        deduction.setStatus(deductionDTO.getStatus());
        return deduction;
    }

    public static List<DeductionPojo> mapDeductionEntityToPojo(List<Deduction> deductionList) {
        List<DeductionPojo> list = new ArrayList<>();
        for (Deduction deduction : deductionList) {
            DeductionPojo deductionDTO = new DeductionPojo();

            deductionDTO.setDeductionId(deduction.getDeductionId());
            deductionDTO.setDeductionName(deduction.getDeductionName());
            deductionDTO.setDeductionDesc(deduction.getDeductionDesc());
            deductionDTO.setStatus(deduction.getStatus());
            list.add(deductionDTO);
        }
        return list;
    }

    public static List<ExitInterviewformPojo> mapExitEntityToPojo(List<ExitInterviewForm> exitInterviewFormList) {
        List<ExitInterviewformPojo> list = new ArrayList<>();
        for (ExitInterviewForm exitInterviewForm : exitInterviewFormList) {
            ExitInterviewformPojo exitInterviewformPojo = new ExitInterviewformPojo();
            exitInterviewformPojo.setEinterviewFormId(exitInterviewForm.getEinterviewFormId());
            exitInterviewformPojo.setEstatus(exitInterviewForm.getEstatus());
            exitInterviewformPojo.seteSupervisorSign(exitInterviewForm.geteSupervisorSign());
            exitInterviewformPojo.seteMudirsSign(exitInterviewForm.geteMudirsSign());
            exitInterviewformPojo.seteEmployeesSign(exitInterviewForm.geteEmployeesSign());
            exitInterviewformPojo.seteEmployeesDate(exitInterviewForm.geteEmployeesDate());
            exitInterviewformPojo.seteEmployeesComment(exitInterviewForm.geteEmployeesComment());
            exitInterviewformPojo.seteMudirsDate(exitInterviewForm.geteMudirsDate());
            exitInterviewformPojo.seteMudirsComment(exitInterviewForm.geteMudirsComment());
            exitInterviewformPojo.seteEmployeesDate(exitInterviewForm.geteEmployeesDate());
            exitInterviewformPojo.seteSupervisorComment(exitInterviewForm.geteSupervisorComment());
            exitInterviewformPojo.seteInVoluntaryOther(exitInterviewForm.geteInVoluntaryOther());
            exitInterviewformPojo.seteViolation(exitInterviewForm.geteViolation());
            exitInterviewformPojo.seteAttendance(exitInterviewForm.geteAttendance());
            exitInterviewformPojo.seteNonContract(exitInterviewForm.geteNonContract());
            exitInterviewformPojo.seteEndOfP(exitInterviewForm.geteEndOfP());
            exitInterviewformPojo.seteEmployeeName(exitInterviewForm.geteEmployeeName());
            exitInterviewformPojo.seteEmployeeCode(exitInterviewForm.geteEmployeeCode());
            exitInterviewformPojo.setePosition(exitInterviewForm.getePosition());
            exitInterviewformPojo.seteDateStart(exitInterviewForm.geteDateStart());
            exitInterviewformPojo.seteVolutary(exitInterviewForm.geteVolutary());
            exitInterviewformPojo.seteOtherJob(exitInterviewForm.geteOtherJob());
            exitInterviewformPojo.setePersonalReason(exitInterviewForm.getePersonalReason());
            exitInterviewformPojo.seteRelocation(exitInterviewForm.geteRelocation());
            exitInterviewformPojo.seteRetirement(exitInterviewForm.geteRetirement());
            exitInterviewformPojo.seteVoluntaryOther(exitInterviewForm.geteVoluntaryOther());
            exitInterviewformPojo.seteSupervisorDate(exitInterviewForm.geteSupervisorDate());
            list.add(exitInterviewformPojo);
        }
        return list;
    }


    public static Payroll mapPayrollPojoToEntity(PayrollPojo payrollPojo) {
        Payroll payroll = new Payroll();
        payroll.setEmpName(payrollPojo.getEmpName());
        payroll.setEmpAddress(payrollPojo.getEmpAddress());
        payroll.setEmpPhNo(payrollPojo.getEmpPhNo());
        payroll.setEmpEmail(payrollPojo.getEmpEmail());
        payroll.setEmpDesignation(payrollPojo.getEmpDesignation());
        payroll.setEmpDepartment(payrollPojo.getEmpDepartment());
        payroll.setPayPeriod(payrollPojo.getPayPeriod());
        payroll.setTotalWorkingDays(payrollPojo.getTotalWorkingDays());
        payroll.setTotalPresentDays(payrollPojo.getTotalPresentDays());
        payroll.setEmpDOJ(payrollPojo.getEmpDOJ());
        payroll.setPanNo(payrollPojo.getPanNo());
        payroll.setPfNo(payrollPojo.getPfNo());
        payroll.setBasicSalary(payrollPojo.getBasicSalary());
        payroll.setDailyWage(payrollPojo.getDailyWage());
        payroll.setEmployeeBankAcc(payrollPojo.getEmployeeBankAcc());
        payroll.setEarningsAmt(payrollPojo.getEarningsAmt());
        payroll.setDeductionAmt(payrollPojo.getDeductionAmt());
        payroll.setGrossSal(payrollPojo.getGrossSal());
        payroll.setNetSal(payrollPojo.getNetSal());
        payroll.setStatus(payrollPojo.getStatus());
        payroll.setEmpId(payrollPojo.getEmpId());

        return payroll;
    }


    public static List<PayrollPojo> mapPayrollEntityToPojo(List<Payroll> payrollList) {
        List<PayrollPojo> list = new ArrayList<>();
        for (Payroll payroll : payrollList) {
            PayrollPojo payrollPojo = new PayrollPojo();

            payrollPojo.setEmpName(payroll.getEmpName());
            payrollPojo.setEmpAddress(payroll.getEmpAddress());
            payrollPojo.setEmpPhNo(payroll.getEmpPhNo());
            payrollPojo.setEmpEmail(payroll.getEmpEmail());
            payrollPojo.setEmpDesignation(payroll.getEmpDesignation());
            payrollPojo.setEmpDepartment(payroll.getEmpDepartment());
            payrollPojo.setPayPeriod(payroll.getPayPeriod());
            payrollPojo.setTotalWorkingDays(payroll.getTotalWorkingDays());
            payrollPojo.setTotalPresentDays(payroll.getTotalPresentDays());
            payrollPojo.setEmpDOJ(payroll.getEmpDOJ());

            payrollPojo.setPanNo(payroll.getPanNo());
            payrollPojo.setPfNo(payroll.getPfNo());
            payrollPojo.setBasicSalary(payroll.getBasicSalary());
            payrollPojo.setDailyWage(payroll.getDailyWage());
            payrollPojo.setEmployeeBankAcc(payroll.getEmployeeBankAcc());
            payrollPojo.setEarningsAmt(payroll.getEarningsAmt());
            payrollPojo.setDeductionAmt(payroll.getDeductionAmt());
            payrollPojo.setGrossSal(payroll.getGrossSal());
            payrollPojo.setNetSal(payroll.getNetSal());
            payrollPojo.setStatus(payroll.getStatus());
            payrollPojo.setEmpId(payroll.getEmpId());
            list.add(payrollPojo);
        }
        return list;
    }


    public  static FormSetUp mapFormSetupPojoToEntity(FormsetupDTO formsetupDTO){
        FormSetUp formSetUp = new FormSetUp();
        formSetUp.setFormsetupId(formsetupDTO.getFormsetupId());
        formSetUp.setTypeprefix(formsetupDTO.getTypeprefix());
        formSetUp.setNextref(formsetupDTO.getNextref());
        formSetUp.setTypename(formsetupDTO.getTypename());
        formSetUp.setTransactionType(formsetupDTO.getTransactionType());
        return formSetUp;
    }

    public static List<FormsetupDTO> mapFormSetupEntityToPojo(List<FormSetUp> formSetUpList){
        List<FormsetupDTO> list=new ArrayList<>();
        for(FormSetUp formSetUp:formSetUpList) {
            FormsetupDTO formsetupDTO = new FormsetupDTO();
            formsetupDTO.setNextref(formSetUp.getNextref());
            formsetupDTO.setFormsetupId(formSetUp.getFormsetupId());
            formsetupDTO.setTypename(formSetUp.getTypename());
            formsetupDTO.setTransactionType(formSetUp.getTransactionType());
            formsetupDTO.setTypeprefix(formSetUp.getTypeprefix());
            list.add(formsetupDTO);
        }
        return list;
    }

    public static PaymentMethod mapPaymentMethodPojoToEntity(PaymentMethodDTO paymentMethodDTO){
        PaymentMethod paymentMethod = new PaymentMethod();
        paymentMethod.setPaymentmethodName(paymentMethodDTO.getPaymentmethodName());
        paymentMethod.setPaymentmethodDescription(paymentMethodDTO.getPaymentmethodDescription());
        paymentMethod.setPaymentmethodType(paymentMethodDTO.getPaymentmethodType());
        paymentMethod.setAccountMaster(paymentMethodDTO.getAccountMaster());
        paymentMethod.setDefaultType(paymentMethodDTO.getDefaultType());
        paymentMethod.setStatus(paymentMethodDTO.getStatus());
        return paymentMethod;
    }


    public static List<PaymentMethodDTO> mapPaymentMethodEntityToPojo(List<PaymentMethod> paymentMethodList){
        List<PaymentMethodDTO> list=new ArrayList<>();
        for(PaymentMethod paymentMethod:paymentMethodList) {
            PaymentMethodDTO paymentMethodDTO = new PaymentMethodDTO();
            paymentMethodDTO.setPaymentmethodId(paymentMethod.getPaymentmethodId());
            paymentMethodDTO.setPaymentmethodName(paymentMethod.getPaymentmethodName());
            paymentMethodDTO.setPaymentmethodDescription(paymentMethod.getPaymentmethodDescription());
            paymentMethodDTO.setPaymentmethodType(paymentMethod.getPaymentmethodType());
            paymentMethodDTO.setDefaultType(paymentMethod.getDefaultType());
            if(paymentMethod.getAccountMaster()!=null) {
                paymentMethodDTO.setAccountMaster(paymentMethod.getAccountMaster());
            }
            paymentMethodDTO.setStatus(paymentMethod.getStatus());
            list.add(paymentMethodDTO);
        }
        return list;
    }

    public static Bank mapBankPojoToEntity(BankDTO bankDTO){
        Bank bank = new Bank();
        bank.setAccountNo(bankDTO.getAccountNo());
        bank.setAddress(bankDTO.getAddress());
        bank.setBankAccountNo(bankDTO.getBankAccountNo());
        bank.setBankEmail(bankDTO.getBankEmail());
        bank.setBankName(bankDTO.getBankName());
        bank.setBankId(bankDTO.getBankId());
        bank.setiFSCCode(bankDTO.getiFSCCode());
        bank.setBranchName(bankDTO.getBranchName());
        bank.setDescription(bankDTO.getDescription());
        bank.setBankPhoneNo(bankDTO.getBankPhoneNo());
        bank.setStatus(bankDTO.getStatus());
        return bank;
    }


    public static List<ViewLedgerResponsePojo> mapViewLedgerEntityToPojo(List<GLTransactions> bankList){
        List<ViewLedgerResponsePojo> list=new ArrayList<>();
        for(GLTransactions glTransactions:bankList) {
            ViewLedgerResponsePojo viewLedgerResponsePojo = new ViewLedgerResponsePojo();
            viewLedgerResponsePojo.setAccCode(glTransactions.getAcc_code());
            viewLedgerResponsePojo.setAccName(glTransactions.getAcc_name());
            viewLedgerResponsePojo.setDesc(glTransactions.getFlagForGlTrans());
            viewLedgerResponsePojo.setDate(glTransactions.getTran_date());
            viewLedgerResponsePojo.setFormNo(glTransactions.getTran_no());
            viewLedgerResponsePojo.setAmount(glTransactions.getAmount());
            list.add(viewLedgerResponsePojo);
        }
        return list;
    }

//    public static List<ViewLedgerResponsePojo> mapTrailBalanceEntityToPojo(List<AccountGroup> accountGroupList){
//        List<ViewLedgerResponsePojo> list=new ArrayList<>();
//        for(AccountGroup accountGroup:accountGroupList) {
//            ViewLedgerResponsePojo viewLedgerResponsePojo = new ViewLedgerResponsePojo();
//            viewLedgerResponsePojo.setDesc(accountGroup.getAccountCode());
//            viewLedgerResponsePojo.setAccName(accountGroup.getAccountName());
//            viewLedgerResponsePojo.setGlID(accountGroup.getAccountId());
//             list.add(viewLedgerResponsePojo);
//        }
//        return list;
//    }
    public static List<BankDTO> mapBankEntityToPojo(List<Bank> bankList){
        List<BankDTO> list=new ArrayList<>();
        for(Bank bank:bankList) {
            BankDTO bankDTO = new BankDTO();
            bankDTO.setAccountNo(bank.getAccountNo());
            bankDTO.setBankId(  bank.getBankId());
            bankDTO.setAddress(bank.getAddress());
            bankDTO.setBankAccountNo(bank.getBankAccountNo());
            bankDTO.setBankEmail(bank.getBankEmail());
            bankDTO.setBankName(bank.getBankName());
            bankDTO.setiFSCCode(bank.getiFSCCode());
            bankDTO.setBranchName(bank.getBranchName());
            bankDTO.setDescription(bank.getDescription());
            bankDTO.setBankPhoneNo(bank.getBankPhoneNo());
            bankDTO.setStatus(bank.getStatus());
            list.add(bankDTO);
        }
        return list;
    }


    public static List<VisitorEntryPojo> mapVisitorEntityToPojo(List<VistorEntry> vistorEntryList){
        List<VisitorEntryPojo> list=new ArrayList<>();
        for(VistorEntry vistorEntry:vistorEntryList) {
            VisitorEntryPojo visitorEntryPojo = new VisitorEntryPojo();
            visitorEntryPojo.setVistorId(vistorEntry.getVistorId());
            visitorEntryPojo.setVisitorNo(  vistorEntry.getVisitorNo());
            visitorEntryPojo.setVisitorName(vistorEntry.getVisitorName());
            visitorEntryPojo.setVisitorMobile(vistorEntry.getVisitorMobile());
            visitorEntryPojo.setVisitorAddress(vistorEntry.getVisitorAddress());
            visitorEntryPojo.setVisitorEmailID(vistorEntry.getVisitorEmailID());
            visitorEntryPojo.setVisitorLogin(vistorEntry.getVisitorLogin());
            visitorEntryPojo.setVisitorPurpose(vistorEntry.getVisitorPurpose());
            visitorEntryPojo.setVisitorToMeet(vistorEntry.getVisitorToMeet());
            visitorEntryPojo.setVistorStatus(vistorEntry.getVistorStatus());

            list.add(visitorEntryPojo);
        }
        return list;
    }
    public static List<PermissionPojo> mapPerEntityToPojo(List<Permission> List) {
            List<PermissionPojo> list = new ArrayList<>();
            for (Permission permission : List) {
                PermissionPojo pojo = new PermissionPojo();
                pojo.setPermissionId(permission.getPermissionId());
                pojo.setPermissionName(permission.getPermissionName());
                pojo.setParentId(permission.getParentId());
                pojo.setStatus(permission.getStatus());
                list.add(pojo);
            }
            return list;
        }

    public static Permission mapPerPojoToEntity(PermissionPojo permissionPojo){
        Permission permission = new Permission();
        permission.setPermissionId(permissionPojo.getPermissionId());
        permission.setPermissionName(permissionPojo.getPermissionName());
        permission.setStatus(permissionPojo.getStatus());
        return permission;
    }

    public static List<MarksSubmissionPojo> mapEntityToPojo(List<MarksSubmission> list){
        List<MarksSubmissionPojo> marksSubmissionPojos = new ArrayList<>();
        for (MarksSubmission marks : list){
            MarksSubmissionPojo pojo = new MarksSubmissionPojo();
            pojo.setId(marks.getId());
            pojo.setLevelId(marks.getLevelId());
            pojo.setClassId(marks.getClassId());
            pojo.setSubjectId(marks.getSubjectId());
            pojo.setEmployee(marks.getEmployee());
            pojo.setStudentName(marks.getStudentName());
            pojo.setQuestionId(marks.getQuesyionId());
            pojo.setTopicDetails(marks.getTopicDetails());
            marksSubmissionPojos.add(pojo);
        }
        return marksSubmissionPojos;
    }
}