package com.hyva.bsfms.bs.bsendpoints;
import com.google.gson.Gson;
import com.hyva.bsfms.Interceptor.UserInterceptor;
import com.hyva.bsfms.bs.bsentities.*;
import com.hyva.bsfms.bs.bsentities.Class;
import com.hyva.bsfms.bs.bspojo.*;
import com.hyva.bsfms.bs.bsrespositories.*;
import com.hyva.bsfms.bs.bsservice.BsUserService;
import com.hyva.bsfms.bs.bspojo.EntityResponse;
import com.hyva.bsfms.bs.bsservice.SmsService;
import com.sun.org.apache.xml.internal.utils.StringToIntTable;
import javafx.util.StringConverter;
import javafx.util.converter.LongStringConverter;
import org.apache.commons.lang3.StringUtils;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.node.ObjectNode;
import org.json.JSONObject;
import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Date;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;
import javax.servlet.http.*;
import java.util.function.LongToIntFunction;
import java.util.stream.Collectors;
@RestController
@RequestMapping("/bs")
public class BsController extends HttpServlet{
    @Autowired
    BsUserService bsUserService;
    @Autowired
    UserInterceptor userInterceptor;
    @Autowired
    CartMasterRepository cartMaster;
    @Autowired
    BsStudentRepository studentRepository;
    @Autowired
    SmsService smsService;
    @Autowired
    BsAcademicYearMasterRepository bsAcademicYearMasterRepository;
    @Autowired
    BsGrademasterRepository bsGrademasterRepository;
    @Autowired
    BsFeeTypeMasterRepository bsFeeTypeMasterRepository;
    @Autowired
    TopicRepository topicRepository;
    @Autowired
    TopicDetailsRepository topicDetailsRepository;
    @Autowired
    ChapterRepository chapterRepository;
    @Autowired
    ComponentRepository componentRepository;
    @Autowired
    TermRepository termRepository;
    @Autowired
    BsClassRepository bsClassRepository;

    @Value("${php_domainame}")


    private String PROPERTY_SAAS_DOMAIN;
    @RequestMapping(value = "/login",method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public EntityResponse login(@RequestBody User credentials){
        String accessToken = "12345";
        if (StringUtils.isBlank(credentials.getEmail()) || StringUtils.isBlank(credentials.getUserName()) || StringUtils.isBlank(credentials.getPasswordUser())) {
            return new EntityResponse(HttpStatus.OK.value(), "Invalid User");
        }
        return new EntityResponse(HttpStatus.OK.value(), "success", credentials);
    }

    @RequestMapping(value = "/saveGeneral", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity saveGeneral(@RequestBody SettingsPojo settingsPojo) throws Exception {
        Settings master = null;
        master = bsUserService.SaveGeneralSettings(settingsPojo);
        return ResponseEntity.status(200).body(master);
    }
    @RequestMapping(value = "/getGeneralSettingsDetailsList", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public EntityResponse getGeneralSettingsDetailsList() {
        Settings generalSettingsPojoList = bsUserService.generalSettingsList();
        return new EntityResponse(HttpStatus.OK.value(), " success", generalSettingsPojoList);
    }


    @RequestMapping(value = "/saveLoginDetails", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public User saveLoginDetails(@RequestBody BsUserPojo bsUserPojo) {
        return bsUserService.saveUserDetails(bsUserPojo);
    }


    @RequestMapping(value = "/saveHoliday",method = RequestMethod.POST,consumes = "application/json",produces = "application/json")
    public ResponseEntity saveHoliday(@RequestBody HolidayPojo holidayPojo){
        return ResponseEntity.status(200).body(bsUserService.saveHoliday(holidayPojo));
    }


    @RequestMapping(value = "/saveTrainer",method = RequestMethod.POST,consumes = "application/json",produces = "application/json")
    public ResponseEntity saveTrainer(@RequestBody TrainerPojo trainerPojo){
        return ResponseEntity.status(200).body(bsUserService.saveTrainer(trainerPojo));
    }




    @RequestMapping(value = "/userValidate", method = RequestMethod.POST,consumes = "application/json", produces = "application/json")
    public User userValidate(@RequestBody BsUserPojo bsUserPojo,HttpServletResponse response,HttpServletRequest request,Object handler) throws Exception {
        User user = bsUserService.userValidate(bsUserPojo);
//        if(user == null){
//            RestTemplate restTemplate = new RestTemplate();
//            String url = PROPERTY_SAAS_DOMAIN + "desktoplogin";
//            ObjectMapper mapper = new ObjectMapper();
//            ObjectNode objectNode = mapper.createObjectNode();
//            objectNode.put("branchcode", bsUserPojo.getBranchCode());
//            objectNode.put("password", bsUserPojo.getPasswordUser());
//            objectNode.put("username", bsUserPojo.getUserName());
//            HttpHeaders headers = new HttpHeaders();
//            headers.setContentType(MediaType.APPLICATION_JSON);
//            HttpEntity<String> entity = new HttpEntity<String>(objectNode.toString(), headers);
//            ResponseEntity<String> responseEntity=restTemplate.exchange(url , HttpMethod.POST,entity,String.class);
//            String jsonString = responseEntity.getBody();
//            JSONObject jsonObject = new JSONObject(jsonString);
//            if(!StringUtils.equalsIgnoreCase(jsonObject.getString("status"),"fail")) {
//                String loginData = jsonObject.getString("data");
//                JSONObject loginDataObj = new JSONObject(loginData);
//                BsUserPojo userPojo = new BsUserPojo();
//                userPojo.setBranchCode(loginDataObj.getString("branch_code"));
//                if(!StringUtils.isNotEmpty(loginDataObj.getString("primaryemail"))) {
//                    if (!StringUtils.equalsIgnoreCase(loginDataObj.getString("primaryemail"), "null")) {
//                        userPojo.setEmail(loginDataObj.getString("primaryemail"));
//                    }
//                }
//                if(!StringUtils.isNotEmpty(loginDataObj.getString("primarycontactnumber"))) {
//                    if (!StringUtils.equalsIgnoreCase(loginDataObj.getString("primarycontactnumber"), "null")) {
//                        userPojo.setPhone(loginDataObj.getString("primarycontactnumber"));
//                    }
//                }
//                userPojo.setPasswordUser(loginDataObj.getString("plain_pass"));
//                userPojo.setUserName(loginDataObj.getString("username"));
//                userPojo.setBranchId(loginDataObj.getLong("fk_branchid"));
//                userPojo.setOrganizationId(loginDataObj.getLong("fk_organisationid"));
//                bsUserService.saveUserDetails(userPojo);
//                CartMaster cartmaster=new CartMaster();
//                cartmaster.setEmail("company Email");
//                cartmaster.setUserName(" userName");
//                cartmaster.setPassword(" Password");
//                cartMaster.save(cartmaster);
//                HttpSession session = request.getSession();
//                session.setAttribute("email", userPojo.getUserName());
////              Cookie c = new Cookie("email",userPojo.getUserName());
////              response.addCookie(c);
//                userInterceptor.preHandle(request, response, handler);
//            }
//        }
        return bsUserService.userValidate(bsUserPojo);
    }


    @RequestMapping(value = "/getUserDetailsList", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public EntityResponse getUserDetailsList() {
        List<BsUserPojo> bsUserPojos = bsUserService.sassUserList();
        return new EntityResponse(HttpStatus.OK.value(), " success", bsUserPojos);
    }
  @RequestMapping(value = "/getholidayList", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public EntityResponse getholidayList() {
        List<HolidayPojo> holidayPojos = bsUserService.getholidayList();
        return new EntityResponse(HttpStatus.OK.value(), " success", holidayPojos);
    }

    @RequestMapping(value = "/getGradeListNormal", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public EntityResponse getGradeListNormal(@RequestParam(value = "status",required = false) String status) {
        List<GradeMasterPojo> gradeMasterPojos = bsUserService.getGradeList();
        return new EntityResponse(HttpStatus.OK.value(), " success", gradeMasterPojos);
    }

    @RequestMapping(value = "/getAllDetails",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity getAllDetails(@RequestParam(value = "fromDate",required = false)String fromDate,@RequestParam(value = "toDate",required = false)String toDate,@RequestParam(value = "studentGrade")String studentGrade,@RequestParam(value = "class")String classa,@RequestParam(value = "subjectId")String subjectId,@RequestParam(value = "chapterId")String chapterId){
        return ResponseEntity.status(200).body(bsUserService.getAllDetails(fromDate,toDate,studentGrade,classa,subjectId,chapterId));
    }

    @RequestMapping(value = "/getSubject", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getSubject() {
      return ResponseEntity.status(200).body(bsUserService.getSubject());
    }
    @RequestMapping(value = "/getChapter", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getChapter() {
        return ResponseEntity.status(200).body(bsUserService.getChapter());
    }
    @RequestMapping(value = "/getTrainerList", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public EntityResponse getTrainerList() {
        List<TrainerPojo> getTrainerList = bsUserService.getTrainerList();
        return new EntityResponse(HttpStatus.OK.value(), " success", getTrainerList);
    }

    @RequestMapping(value = "/saveNewStudent", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity saveNewStudent(@RequestBody StudentPojo saveStudentDetails) throws Exception {
        StudentPojo student = null;
        student = bsUserService.SaveStudentDetails(saveStudentDetails);
        return ResponseEntity.status(200).body(student);
    }
    @RequestMapping(value = "/saveGradeMasterImport" ,method = RequestMethod.POST)
    public ResponseEntity saveGradeMasterImport(@RequestAttribute String userId,@RequestParam("myFile") MultipartFile uploadfiles) throws Exception {
        System.out.println(uploadfiles.getOriginalFilename());
        try {
            XSSFWorkbook workbook = new XSSFWorkbook(uploadfiles.getInputStream());
            XSSFSheet sheet = workbook.getSheetAt(0);
            for (int i = 1; i < sheet.getLastRowNum() + 1; i++) {
                org.apache.poi.ss.usermodel.Row row = sheet.getRow(i);
                if(row==null)
                    break;
                if(row!=null) {
                    GradeMasterPojo gradeMasterPojo = new GradeMasterPojo();
                    String name = row.getCell(0).toString();
                    Cell desc = row.getCell(1);
                    gradeMasterPojo.setGradeName(name);
                    gradeMasterPojo.setGradeDescription(desc==null?"":desc.toString());
                    gradeMasterPojo.setGradeStatus("Active");
                    saveNewGradeMaster(userId,gradeMasterPojo);
                }
            }
        }catch (Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity(HttpStatus.OK);
    }
    @RequestMapping(value= "/sendSMS", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity sendSMS(@RequestBody List<String> phoneNumber,@RequestParam(value = "type")String type){
        String message=null;
        if(StringUtils.equalsIgnoreCase("Admission",type)){
            message="bbb";
        }else {
            message="aaa";
        }
        String studentObj=null;
        for(String str:phoneNumber){
            studentObj = smsService.sendSms(str,message);
        }
        return ResponseEntity.status(200).body(studentObj);
    }


    @RequestMapping(value = "/studentImportSave" ,method = RequestMethod.POST)
    public ResponseEntity studentImportSave(@RequestParam("myFile") MultipartFile uploadfiles) throws Exception {
        System.out.println(uploadfiles.getOriginalFilename());
        try {
            XSSFWorkbook workbook = new XSSFWorkbook(uploadfiles.getInputStream());
            XSSFSheet sheet = workbook.getSheetAt(0);
            for (int i = 1; i < sheet.getLastRowNum() + 1; i++) {
                org.apache.poi.ss.usermodel.Row row = sheet.getRow(i);
                if(row==null)
                    break;
                if(row!=null) {
                    StudentPojo pojo = new StudentPojo();
                    Cell accyr = row.getCell(0);
                    AcademicYearMaster academicYearMaster=bsAcademicYearMasterRepository.findByAcdyrName(accyr.toString());
                    Cell date = row.getCell(1);
                    Cell formNo = row.getCell(2);
                    Cell grade = row.getCell(3);
                    Cell classes = row.getCell(4);
                    Class cls= bsClassRepository.findByClassName(classes.toString());
                    Cell jngdate = row.getCell(5);
                    Cell name = row.getCell(6);
                    Cell perAddrs = row.getCell(7);
                    Cell dob = row.getCell(8);
                    Cell localAddrs = row.getCell(9);
                    Cell gender = row.getCell(10);
                    Cell phyCon = row.getCell(11);
                    Cell adharNo = row.getCell(12);
                    Cell religion = row.getCell(13);
                    Cell fatherName = row.getCell(14);
                    Cell fatherId = row.getCell(15);
                    Cell fatherMobile = row.getCell(16);
                    Cell fatherOcupt = row.getCell(17);
                    Cell motherName = row.getCell(18);
                    Cell motherId = row.getCell(19);
                    Cell motherMobile = row.getCell(20);
                    Cell motherOcupt = row.getCell(21);
                    Cell primaryContNo = row.getCell(22);
                    Cell guadianName = row.getCell(23);
                    Cell parentsAnulIncm = row.getCell(24);
                    Cell guadianNo = row.getCell(25);
                    Cell status=row.getCell(26);

                    //getting values
                       pojo.setAcdYearId(academicYearMaster.getAcdyrId());

                       DateFormat sdf = new SimpleDateFormat("dd-MMM-yyyy");
                    java.util.Date date1 = sdf.parse(date.toString());
                    pojo.setDateOfAdmission(new java.sql.Date(date1==null?null:date1.getTime()));
                    pojo.setAdmissionFormNo(formNo==null?null:formNo.toString());
                    pojo.setStudentName(name==null?null:name.toString());
                    java.util.Date date2 = sdf.parse(dob.toString());
                    pojo.setDateofbirth(new java.sql.Date(date2==null?null:date2.getTime()));
                    pojo.setGender(gender==null?null:gender.toString());
                    pojo.setReligion(religion==null?null:religion.toString());
                    pojo.setAadhaarNo(adharNo==null?null:adharNo.toString());
                    pojo.setFatherName(fatherName==null?null:fatherName.toString());
                    pojo.setFatherContactNo(fatherMobile==null?null:fatherMobile.toString());
                    pojo.setMotherName(motherName==null?null:motherName.toString());
                    pojo.setMotherContactNo(motherMobile==null?null:motherMobile.toString());
                    pojo.setPrimaryContactNo(primaryContNo==null?null:primaryContNo.toString());
//                    pojo.setAnnualIncome(parentsAnulIncm==null?null:Double.parseDouble(parentsAnulIncm.toString()));
                    pojo.setStudentStatus(status==null ? "Active" :status.toString());
                    if(StringUtils.equalsIgnoreCase(pojo.getStudentStatus(),"Active")){
                        pojo.setStudentStatus("true");
                    }else {
                        pojo.setStudentStatus("false");
                    }
                    GradeMaster gradeMaster = bsGrademasterRepository.findByGradeName(grade.toString());
                    if (gradeMaster == null) {
                        GradeMasterPojo gradeMasterPojo = new GradeMasterPojo();
                        gradeMasterPojo.setGradeDescription(grade.toString());
                        gradeMasterPojo.setGradeName(grade.toString());
                        gradeMasterPojo.setGradeStatus("Active");
                        saveGrade(gradeMasterPojo);
                    }
                    if(grade!=null) {
                        GradeMaster gradeMaster1 = bsGrademasterRepository.findByGradeName(grade.toString());
                        pojo.setGradeId(gradeMaster1.getGradeId());
                    }
                    pojo.setClsId(cls.getClassId());
                    java.util.Date date3 = sdf.parse(jngdate.toString());
                    pojo.setDateOfJoining(new java.sql.Date(date3==null?null:date3.getTime()));
                    pojo.setPermanentAddress(perAddrs==null?null:perAddrs.toString());
                    pojo.setPresentAddress(localAddrs==null?null:localAddrs.toString());
                    pojo.setPhysicalCondition(phyCon==null?null:phyCon.toString());
                    pojo.setFatherEmailId(fatherId==null?"":fatherId.toString());
                    pojo.setFatherOccupation(fatherOcupt==null?null:fatherOcupt.toString());
                    pojo.setMotherEmailId(motherId==null?"":motherId.toString());
                    pojo.setMotherOccupation(motherOcupt==null?null:motherOcupt.toString());
                    pojo.setGaurdianName(guadianName==null?null:guadianName.toString());
                    pojo.setGaurdianNumber(guadianNo==null?null:guadianNo.toString());
                    saveNewStudent(pojo);
                }
            }
        }catch (Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity(HttpStatus.OK);
    }


    @RequestMapping(value = "/feeImportSave" ,method = RequestMethod.POST)
    public ResponseEntity feeImportSave(@RequestParam("myFile") MultipartFile uploadfiles) throws Exception {
        System.out.println(uploadfiles.getOriginalFilename());
        try {
            XSSFWorkbook workbook = new XSSFWorkbook(uploadfiles.getInputStream());
            XSSFSheet sheet = workbook.getSheetAt(0);
            for (int i = 1; i < sheet.getLastRowNum() + 1; i++){
                org.apache.poi.ss.usermodel.Row row = sheet.getRow(i);
                if(row==null)
                    break;
                if(row!=null) {
                    StudentPojo pojo = new StudentPojo();
                    Cell name = row.getCell(0);
                    Cell profileId = row.getCell(1);
                    Cell feeTypeName = row.getCell(2);
                    Cell status = row.getCell(3);
                    Cell feeAmt = row.getCell(4);
                    Cell payFee = row.getCell(5);
                    Cell payable = row.getCell(6);
                    Cell discount = row.getCell(7);
                    Cell value = row.getCell(8);
                    Cell remark = row.getCell(9);
                    Cell installment = row.getCell(10);
                    Student student=studentRepository.findByStudentNameAndStudentProfileId(name.toString(),profileId.toString());
                    FeeTypeMaster feeTypeMaster=bsFeeTypeMasterRepository.findByFeeTypeNameAndLevelAndAcdyrmasterAndFeeAmount(feeTypeName.toString(),student.getLevel(),student.getAcademicYearMaster(),feeAmt.getNumericCellValue());
                    FeeTypeMasterPojo feeTypeMasterPojo=new FeeTypeMasterPojo();
                    feeTypeMasterPojo.setInstallments(new Double(installment.toString()).intValue());
                    feeTypeMasterPojo.setFeeTypeName(feeTypeMaster.getFeeTypeName());
                    feeTypeMasterPojo.setPayingFee(feeTypeMaster.getPayingFee());
                    feeTypeMasterPojo.setFeeAmount(feeTypeMaster.getFeeAmount());
                    feeTypeMasterPojo.setFeeTypeId(feeTypeMaster.getFeeTypeId());
                    feeTypeMasterPojo.setStatus(feeTypeMaster.getStatus());
                    feeTypeMasterPojo.setLevel(student.getLevel());
                    feeTypeMasterPojo.setAcdyrmaster(student.getAcademicYearMaster());
                    feeTypeMasterPojo.setPayable(payable.getNumericCellValue());
                    feeTypeMasterPojo.setDiscount(discount.getNumericCellValue());
                    feeTypeMasterPojo.setDiscountRemarks(remark==null?null:remark.toString());
                    feeTypeMasterPojo.setCheckBox(true);
                    feeTypeMasterPojo.setValue("true");
                    List<InstallmentsPojo> installmentsPojos=new ArrayList<>();
                    for(int j=11;j<34;j++){
                        InstallmentsPojo installmentsPojo=new InstallmentsPojo();
                        if(row.getCell(j)!=null&&row.getCell(j+1)!=null&&feeTypeMasterPojo.getInstallments()>installmentsPojos.size()){
                            installmentsPojo.setInstallmentsAmount(row.getCell(j).getNumericCellValue());
                            String date=row.getCell(++j).toString();
                            if(!StringUtils.isEmpty(date)) {
                                java.util.Date date1 = new SimpleDateFormat("dd-MMM-yyyy").parse(date);
                                installmentsPojo.setDueDate(new java.sql.Date(date1.getTime()));
                            }
                            installmentsPojos.add(installmentsPojo);
                        }else {
                            break;
                        }
                    }
                    feeTypeMasterPojo.setInstallmentsPojosList(installmentsPojos);
                    List<FeeTypeMasterPojo> feeTypeMasterPojos=new ArrayList<>();
                    feeTypeMasterPojos.add(feeTypeMasterPojo);
                    pojo.setStudentName(name==null?null:name.toString());
                    pojo.setStudentProfileId(profileId==null?null:profileId.toString());
                    pojo.setFeeTypeMasterPojoList(feeTypeMasterPojos);
                    bsUserService.SaveStudentfeee(pojo);
                }
            }
        }catch (Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(value = "/saveFeeTypeImport" ,method = RequestMethod.POST)
    public ResponseEntity saveFeeTypeImport(@RequestAttribute String userId,@RequestParam("myFile") MultipartFile uploadfiles) throws Exception {
        System.out.println(uploadfiles.getOriginalFilename());
        try {
            XSSFWorkbook workbook = new XSSFWorkbook(uploadfiles.getInputStream());
            XSSFSheet sheet = workbook.getSheetAt(0);
            for (int i = 1; i < sheet.getLastRowNum() + 1; i++) {
                org.apache.poi.ss.usermodel.Row row = sheet.getRow(i);
                if(row==null)
                    break;
                if(row!=null) {
                    FeeTypeMasterPojo feeTypeMasterPojo = new FeeTypeMasterPojo();
                    String name = row.getCell(0).toString();
                    String amount = row.getCell(1).toString();
                    String acedemicYear = row.getCell(2).toString();
                    String grade = row.getCell(3).toString();
                    feeTypeMasterPojo.setFeeTypeName(name);
                    feeTypeMasterPojo.setFeeAmount(Double.valueOf(amount));
                    feeTypeMasterPojo.setAcdyrName(acedemicYear);
                    feeTypeMasterPojo.setGradeName(grade);
                    feeTypeMasterPojo.setStatus("Active");
                    feeTypeMasterPojo.setValue("true");
                    saveNewFeeMaster(feeTypeMasterPojo);
                }
            }
        }catch (Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity(HttpStatus.OK);
    }

 @RequestMapping(value = "/saveSowImportMaster" ,method = RequestMethod.POST)
    public ResponseEntity saveSowImportMaster(@RequestParam(value = "levelId")String levelId,
                                              @RequestParam(value = "semester")String semester,
                                              @RequestParam(value = "term")String term,
                                              @RequestParam(value = "chapter")String chapter,
                                              @RequestParam(value = "classes")String classes,
                                              @RequestParam(value = "subjectId")String subjectId,
                                              @RequestParam("myFile") MultipartFile uploadfiles) throws Exception {
        System.out.println(uploadfiles.getOriginalFilename());
        try {
            XSSFWorkbook workbook = new XSSFWorkbook(uploadfiles.getInputStream());
            XSSFSheet sheet = workbook.getSheetAt(0);
            List<Map<String,String>> mapList = new ArrayList<>();
            SowPojo sowPojo = new SowPojo();
            sowPojo.setLevel(Long.parseLong(levelId));
            sowPojo.setTerm(Long.parseLong(term));
            sowPojo.setChapter(Long.parseLong(chapter));
            sowPojo.setClasses(Long.parseLong(classes));
            sowPojo.setSubject(Long.parseLong(subjectId));
            sowPojo.setSemester(Long.parseLong(semester));
            for (int i = 1; i < sheet.getLastRowNum() + 1; i++) {
                org.apache.poi.ss.usermodel.Row row = sheet.getRow(i);
                if(row==null)
                    break;
                if(row!=null) {
                    Map<String,String> map = new HashMap<>();
                    String name = row.getCell(0).toString();
                    if(StringUtils.isNotEmpty(name)){
                        TopicDetails topicDetails=topicDetailsRepository.findAByChapterAndTopicName(chapter,name);
                        map.put("topicId",topicDetails.getId().toString());
                    }
                    String fromweek = row.getCell(1).toString();
                    String toweek = row.getCell(2).toString();
                    String pageNo = row.getCell(3).toString();
                    String totalPages = row.getCell(4).toString();
                    String activity = row.getCell(5).toString();
//                    map.put("topicName",name);
                    map.put("pageNo",pageNo);
                    map.put("totalPages",totalPages);
                    map.put("activity",activity);
                    map.put("fromweek",fromweek);
                    map.put("toweek",toweek);
                    mapList.add(map);
                }
            }
            Gson json = new Gson();
            sowPojo.setSowList(json.toJson(mapList));
            saveSow(sowPojo);
        }catch (Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity(HttpStatus.OK);
    }
 @RequestMapping(value = "/saveLessonPlanImportMaster" ,method = RequestMethod.POST)
 public ResponseEntity saveLessonPlanImportMaster(@RequestParam(value = "levelId") String levelId,
                                                  @RequestParam(value = "subjectId") String subjectId,
                                                  @RequestParam("myFile") MultipartFile uploadfiles) throws Exception {
        System.out.println(uploadfiles.getOriginalFilename());
        try {
            XSSFWorkbook workbook = new XSSFWorkbook(uploadfiles.getInputStream());
            XSSFSheet sheet = workbook.getSheetAt(0);
            List<Map<String,String>> mapList = new ArrayList<>();
            LessonPlanPojo lessonPlanPojo = new LessonPlanPojo();
            lessonPlanPojo.setLevel(levelId);
            lessonPlanPojo.setSubject(subjectId);
            for (int i = 1; i < sheet.getLastRowNum() + 1; i++) {
                org.apache.poi.ss.usermodel.Row row = sheet.getRow(i);
                if(row==null)
                    break;
                if(row!=null) {
                    String chapter = row.getCell(0).toString();
                    String topic = row.getCell(1).toString();
//                    String fromWeek = row.getCell(2).toString();
//                    String toWeek = row.getCell(3).toString();
                    String term = row.getCell(2).toString();
                    Cell learningOutcomes = row.getCell(3);
                    Cell resources = row.getCell(4);
                    Cell activities = row.getCell(5);
                    Cell islamicIntegration = row.getCell(6);
                    Cell thinkingCompLevel = row.getCell(7);
                    Cell remarks = row.getCell(8);
                    String maxMarks = row.getCell(9).toString();
                    String assesment = row.getCell(10).toString();
                    String component = row.getCell(11).toString();
                    Cell checkedBy = row.getCell(12);
                    String date = row.getCell(13).toString();
// Chapters chapters=chapterRepository.findByChapterName(chapter);
// if(chapters==null){
// ChapterPojo chapterPojo = new ChapterPojo();
// chapterPojo.setLevelId(Long.parseLong(levelId));
// chapterPojo.setClassId(Long.valueOf("null"));
// chapterPojo.setSubjectId(Long.valueOf(subjectId));
// chapterPojo.setChapterName(chapter);
// chapterPojo.setStatus("Active");
// saveChapter(chapterPojo);
// }
                    if(chapter!=null) {
                        Chapters chapters = chapterRepository.findByChapterName(chapter);
                        lessonPlanPojo.setChapter(chapters.getChapterId().toString());
                    }if(component!=null) {
                        Components components = componentRepository.findByComponentName(component);
                        lessonPlanPojo.setComponent(components.getComponentId().toString());
                    }
                    if(topic!=null){
                        TopicDetails topics = topicDetailsRepository.findAllByTopicName(topic);
                        lessonPlanPojo.setTopic(topics.getTopicId().toString());
                    }
                    if(term!=null){
                        Term terms = termRepository.findByTermName(term);
                        lessonPlanPojo.setTerm(terms.getTermId().toString());
                    }
                    Map<String,String> map = new HashMap<>();
                    map.put("Assignment",component==null?null:component.toString());
                    map.put("chapterName",chapter);
//                    map.put("toWeek",toWeek);
                    map.put("TopicName",topic);
//                    map.put("fromWeek",fromWeek);
                    map.put("status","Active");
                    mapList.add(map);
//                    lessonPlanPojo.setWeekText(fromWeek);
//                    lessonPlanPojo.setToWeekText(toWeek);
                    lessonPlanPojo.setLessonPlanning(learningOutcomes==null?null:learningOutcomes.toString());
                    lessonPlanPojo.setLearningOutcomes(resources==null?null:resources.toString());
                    lessonPlanPojo.setObjective(activities==null?null:activities.toString());
                    lessonPlanPojo.setIntroduction(islamicIntegration==null?null:islamicIntegration.toString());
                    lessonPlanPojo.setImmersion(thinkingCompLevel==null?null:thinkingCompLevel.toString());
                    lessonPlanPojo.setExplanation(remarks==null?null:remarks.toString());
                    lessonPlanPojo.setAssessment(assesment);
                    lessonPlanPojo.setMaxMarks(Double.parseDouble(maxMarks));
                    Components components=componentRepository.findByComponentName(component.toString());
                    if(components==null){
                        ComponentPojo componentPojo = new ComponentPojo();
                        componentPojo.setComponentName(component==null?null:component.toString());
// componentPojo.setWeightage(wei);
                        componentPojo.setStatus("Active");
                        saveComponent(componentPojo);
                    }
                    lessonPlanPojo.setComponent(component==null?null:component.toString());
                    lessonPlanPojo.setCheckedBy(checkedBy==null?null:checkedBy.toString());
                    DateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
                    java.util.Date date1 = sdf.parse(date.toString());
                    lessonPlanPojo.setLessonPlanDate(new java.sql.Date(date1==null?null:date1.getTime()));
                    saveLessonPlan(lessonPlanPojo);

                }
            }
        }catch (Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity(HttpStatus.OK);
    }


    @RequestMapping(value = "/saveDes", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveDes(@RequestBody DesignationPojo designationPojo) {
        return ResponseEntity.status(200).body(bsUserService.saveDes(designationPojo));
    }

    @RequestMapping(value = "/saveAssignment", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveAssignment(@RequestBody AssignmentPojo assignmentPojo) {
        return ResponseEntity.status(200).body(bsUserService.saveAssignment(assignmentPojo));
    }

    @RequestMapping(value = "/saveLeaveForm", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveLeaveForm(@RequestBody LeaveFormDTO leaveFormDTO) {
        return ResponseEntity.status(200).body(bsUserService.saveLeaveForm(leaveFormDTO));
    }

    @RequestMapping(value = "/saveContact", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveContact(@RequestBody OtherContactsDTO otherContactsDTO) {
        return ResponseEntity.status(200).body(bsUserService.saveContact(otherContactsDTO));
    }

    @RequestMapping(value = "/saveSarDetails", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveSarDetails(@RequestBody EmployeesarPojo employeesarPojo) {
        return ResponseEntity.status(200).body(bsUserService.saveSarDetails(employeesarPojo));
    }
    @RequestMapping(value = "/saveAssessorDetails", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveAssessorDetails(@RequestBody AssessorPojo assessorPojo) {
        return ResponseEntity.status(200).body(bsUserService.saveAssessorDetails(assessorPojo));
    }

    @RequestMapping(value = "/getDesList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getDesList(@RequestParam(value = "type", required = false) String type,
                                     @RequestParam(value = "searchText", required = false) String searchText){
        return ResponseEntity.status(200).body(bsUserService.getDesList(type, searchText));
    }

    @RequestMapping(value = "/getSarApplicList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getSarApplicList(@RequestParam(value = "type", required = false) String type,
                                     @RequestParam(value = "searchText", required = false) String searchText){
        return ResponseEntity.status(200).body(bsUserService.getSarApplicList(type, searchText));
    }

    @RequestMapping(value = "/getAssessorList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getAssessorList(@RequestParam(value = "type", required = false) String type,
                                     @RequestParam(value = "searchText", required = false) String searchText){
        return ResponseEntity.status(200).body(bsUserService.getAssessorList(type, searchText));
    }

    @RequestMapping(value = "/getLeaveFormList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getLeaveFormList(@RequestParam(value = "type", required = false) String type,
                                     @RequestParam(value = "searchText", required = false) String searchText) {
        return ResponseEntity.status(200).body(bsUserService.getLeaveFormList(type, searchText));
    }
    @RequestMapping(value = "/getAssignmentList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getAssignmentList() {
        return ResponseEntity.status(200).body(bsUserService.getAssignmentList());
    }
    @RequestMapping(value = "/getTopicList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getTopicList() {
        return ResponseEntity.status(200).body(bsUserService.getTopicList());
    }
    @RequestMapping(value = "/getpaginatedAssignmentList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getpaginatedAssignmentList(@RequestParam(value = "type", required = false) String type,
                                              @RequestParam(value = "searchText", required = false) String searchText,
                                              @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getpaginatedAssignmentList(type, basePojo, searchText));
    }

    @RequestMapping(value = "/saveClass", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveClass(@RequestBody ClassPojo classPojo) {
        return ResponseEntity.status(200).body(bsUserService.saveClass(classPojo));
    }
    @RequestMapping(value = "/saveTimeTable", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveTimeTable(@RequestBody TimeTablePojo timeTablePojo) {
        return ResponseEntity.status(200).body(bsUserService.saveTimeTable(timeTablePojo));
    }

    @RequestMapping(value = "/getClassList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getClassList(@RequestParam(value = "type", required = false) String type,
                                     @RequestParam(value = "searchText", required = false) String searchText) {
        return ResponseEntity.status(200).body(bsUserService.getClassList(type, searchText));
    }


    @RequestMapping(value = "/deleteClass", method = RequestMethod.POST, produces = "application/json")
    public void deleteClass(@RequestParam(value = "classId", required = false) Long id) {
        bsUserService.deleteClass(id);
    }
   @RequestMapping(value = "/deleteAssessment", method = RequestMethod.POST, produces = "application/json")
    public void deleteAssessment(@RequestParam(value = "id", required = false) Long id) {
        bsUserService.deleteAssessment(id);
    }

    @RequestMapping(value = "/getCreatorList",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity getCreatorList(){
        return ResponseEntity.status(200).body(bsUserService.getCreatorList());
    }

    @RequestMapping(value = "/getStudentAssesmentList",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity getStudentAssesmentList(){
        return ResponseEntity.status(200).body(bsUserService.getStudentAssesmentList());
    }

    @RequestMapping(value = "/deleteAssignment", method = RequestMethod.POST, produces = "application/json")
    public void deleteAssignment(@RequestParam(value = "assignmentId", required = false) Long id) {
        bsUserService.deleteAssignment(id);
    }

    @RequestMapping(value = "/saveSemester", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveSemester(@RequestBody SemesterPojo semesterPojo) {
        return ResponseEntity.status(200).body(bsUserService.saveSemester(semesterPojo));
    }
    @RequestMapping(value = "/saveEditSemester", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveEditSemester(@RequestBody SemesterPojo semesterPojo) {
        return ResponseEntity.status(200).body(bsUserService.editSemester(semesterPojo));
    }

    @RequestMapping(value = "/getSemesterList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getSemesterList(@RequestParam(value = "type", required = false) String type,
                                       @RequestParam(value = "searchText", required = false) String searchText) {
        return ResponseEntity.status(200).body(bsUserService.getSemesterList(type, searchText));
    }


    @RequestMapping(value = "/deleteSemester", method = RequestMethod.POST, produces = "application/json")
    public void deleteSemester(@RequestParam(value = "semesterId", required = false) Long id) {
        bsUserService.deleteSemester(id);
    }



    @RequestMapping(value = "/saveRemainders", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveRemainders(@RequestBody RemaindersPojo remaindersPojo) {
        return ResponseEntity.status(200).body(bsUserService.saveRemainders(remaindersPojo));
    }

    @RequestMapping(value = "/getRemaindersList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getRemaindersList(@RequestParam(value = "type", required = false) String type,
                                          @RequestParam(value = "searchText", required = false) String searchText) {
        return ResponseEntity.status(200).body(bsUserService.getRemaindersList(type, searchText));
    }

    @RequestMapping(value = "/deleteRemainder", method = RequestMethod.POST, produces = "application/json")
    public void deleteRemainder(@RequestParam(value = "remainderId", required = false) Long id) {
        bsUserService.deleteRemainder(id);
    }



    @RequestMapping(value = "/saveSuppliers", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveSuppliers(@RequestBody SuppliersPojo suppliersPojo) {
        return ResponseEntity.status(200).body(bsUserService.saveSuppliers(suppliersPojo));
    }

    @RequestMapping(value = "/getSuppliersList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getSuppliersList(@RequestParam(value = "type", required = false) String type,
                                            @RequestParam(value = "searchText", required = false) String searchText) {
        return ResponseEntity.status(200).body(bsUserService.getSuppliersList(type, searchText));
    }

    @RequestMapping(value = "/deleteSuppliers", method = RequestMethod.POST, produces = "application/json")
    public void deleteSuppliers(@RequestParam(value = "suppliersId", required = false) Long id) {
        bsUserService.deleteSuppliers(id);
    }


    @RequestMapping(value = "/saveAcademicYearImport" ,method = RequestMethod.POST)
    public ResponseEntity saveAcademicYearImport(@RequestAttribute String userId,@RequestParam("myFile") MultipartFile uploadfiles) throws Exception {
        System.out.println(uploadfiles.getOriginalFilename());
        try {
            XSSFWorkbook workbook = new XSSFWorkbook(uploadfiles.getInputStream());
            XSSFSheet sheet = workbook.getSheetAt(0);
            for (int i = 1; i < sheet.getLastRowNum() + 1; i++) {
                org.apache.poi.ss.usermodel.Row row = sheet.getRow(i);
                if(row==null)
                    break;
                if(row!=null) {
                    AcademicYearMasterPojo academicYearMasterPojo = new AcademicYearMasterPojo();
                    String name = row.getCell(0).toString();
                    Cell desc = row.getCell(1);
                    String fromDate = row.getCell(2).toString();
                    String toDate = row.getCell(3).toString();
                    SimpleDateFormat parseFormat =
                            new SimpleDateFormat("yyyy/MM/dd");
                    java.util.Date startDate = parseFormat.parse(fromDate);
                    java.util.Date endDate = parseFormat.parse(toDate);
                    academicYearMasterPojo.setAcdyrName(name);
                    academicYearMasterPojo.setAcdyrDescription(desc==null?null:desc.toString());
                    academicYearMasterPojo.setFromDate(new java.sql.Date(startDate.getTime()));
                    academicYearMasterPojo.setToDate(new java.sql.Date(endDate.getTime()));
                    academicYearMasterPojo.setStatus("Active");
                    saveAcademicMaster(academicYearMasterPojo);
                }
            }
        }catch (Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity(HttpStatus.OK);
    }
    @RequestMapping(value = "/saveScheduler", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity saveScheduler(@RequestBody MailSchedulerData mailSchedulerData)throws Exception {
        bsUserService.saveMailSchedule(mailSchedulerData);
        return ResponseEntity.status(HttpStatus.OK).body(mailSchedulerData );
    }

    @RequestMapping(value = "/schedulerList", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity schedulerList() {
        return ResponseEntity.status(HttpStatus.OK).body(bsUserService.getSchedulerList());
    }

    @RequestMapping(value = "/deleteMailScheduler", method = RequestMethod.POST)
    public ResponseEntity deleteMailScheduler(@RequestParam(value = "searchSchedulerText") String schedulerSearch){
        bsUserService.deleteMailSchedulerDetails(schedulerSearch);
        return null;

    }

    @RequestMapping(value = "/saveNewFeeMaster", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity saveNewFeeMaster(@RequestBody FeeTypeMasterPojo saveFeeDetails) throws Exception {
        FeeTypeMaster master = null;
        master = bsUserService.SaveFeeTypeMaster(saveFeeDetails);
        return ResponseEntity.status(200).body(master);
    }

    @RequestMapping(value = "/saveNewGradeMaster", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity saveNewGradeMaster(@RequestAttribute String userId,@RequestBody GradeMasterPojo saveGradeDetails) throws Exception {
        GradeMaster master = null;
        saveGradeDetails.setUserId(userId);
        master = bsUserService.SaveGradeMaster(saveGradeDetails);
        return ResponseEntity.status(200).body(master);
    }
    @RequestMapping(value = "/saveGrade",method = RequestMethod.POST,consumes = "application/json",produces = "application/json")
    public ResponseEntity saveGrade(@RequestBody GradeMasterPojo gradeMasterPojo){
        return ResponseEntity.status(200).body(bsUserService.saveGrade(gradeMasterPojo));
    }
    @RequestMapping(value = "/saveNewTrainingModule",method = RequestMethod.POST,consumes ="application/json")
    public ResponseEntity saveNewTrainingModule(@RequestBody TrainingModulePojo trainingModulePojo ) throws Exception  {
        TrainingModule master = null;
        master =  bsUserService.saveNewTrainingModule(trainingModulePojo);
        return ResponseEntity.status(200).body(master);
    }
    @RequestMapping(value = "/saveNewEmailMaster",method = RequestMethod.POST,consumes ="application/json")
    public ResponseEntity saveNewEmailMaster(@RequestBody EmailTemplatePojo emailTemplatePojo ) throws Exception  {
        EmailTemplateMaster master = null;
        master =  bsUserService.saveNewEmailMaster(emailTemplatePojo);
        return ResponseEntity.status(200).body(master);
    }

    @RequestMapping(value = "/saveNewNotification",method = RequestMethod.POST,consumes ="application/json")
    public ResponseEntity saveNewNotification(@RequestBody NotificationPojo notificationPojo ) throws Exception  {
        Notification master = null;
        master =  bsUserService.saveNewNotification(notificationPojo);
        return ResponseEntity.status(200).body(master);
    }

    @RequestMapping(value = "/saveNewQualificationMaster",method = RequestMethod.POST,consumes ="application/json")
    public ResponseEntity saveNewQualificationMaster(@RequestBody QualificationPojo qualificationPojo) throws Exception  {
        Qualification master = null;
        master =  bsUserService.saveNewQualificationMaster(qualificationPojo);
        return ResponseEntity.status(200).body(master);
    }

    @RequestMapping(value = "/saveNewDoctorMaster",method = RequestMethod.POST,consumes ="application/json")
    public ResponseEntity saveNewDoctorMaster(@RequestBody DoctorpanelPojo doctorpanelPojo ) throws Exception {
        DoctorPanelMaster master = null;
        master =  bsUserService.saveNewDoctorMaster(doctorpanelPojo);
        return ResponseEntity.status(200).body(master);
    }

    @RequestMapping(value = "/saveAcademicMaster", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity saveAcademicMaster(@RequestBody AcademicYearMasterPojo saveAcademicMaster) throws Exception {
        AcademicYearMaster master = null;
        master = bsUserService.SaveAcademicYearMaster(saveAcademicMaster);
        return ResponseEntity.status(200).body(master);
    }
    @RequestMapping(value = "/saveDiscountType", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity saveDiscountType(@RequestBody DiscountTypePojo discountTypePojo) {
        DiscountType type = null;
        type = bsUserService.saveDiscountType(discountTypePojo);
        return ResponseEntity.status(200).body(type);
    }

    @RequestMapping(value = "/getDiscountTypeList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getDiscountTypeList(@RequestParam(value = "searchText", required = false) String searchText) {
        return ResponseEntity.status(200).body(bsUserService.getDiscountTypeList(searchText));
    }

    @RequestMapping(value = "/getSearch", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getSearch(@RequestParam(value = "studentGrade", required = false) String studentGrade,
                                    @RequestParam(value = "classes", required = false) String classes,
                                    @RequestParam(value = "month", required = false) String month) {
        return ResponseEntity.status(200).body(bsUserService.getAttendanceStudList(studentGrade,classes));
    }


    @RequestMapping(value = "/generateReport", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity generateReport(@RequestParam(value = "LevelName", required = false) String LevelName,
                                         @RequestParam(value = "classId", required = false) String classId) {
        return ResponseEntity.status(200).body(bsUserService.generateReport(LevelName,classId));
    }

    @RequestMapping(value = "/generateTeacherReport", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity generateTeacherReport(@RequestParam(value = "teacherName", required = false) String teacherName){
        return ResponseEntity.status(200).body(bsUserService.generateTeacherReport(teacherName));
    }

    @RequestMapping(value = "/generateMasterReport", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity generateMasterReport(@RequestParam(value = "weekday", required = false) String weekday){
        return ResponseEntity.status(200).body(bsUserService.generateMasterReport(weekday));
    }


    @RequestMapping(value = "/deleteDiscountType", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity deleteDiscountType(@RequestBody DiscountTypePojo details) {
        return ResponseEntity.status(200).body(bsUserService.deleteDiscountDetails(details));
    }

    @RequestMapping(value = "/savecartmasterdetails", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity savecartmasterdetails(@RequestBody CartMasterPojo cartMasterPojo) throws Exception {
        CartMaster master = null;
        master = bsUserService.Cartmastersave(cartMasterPojo);
        return ResponseEntity.status(200).body(master);
    }

    @RequestMapping(value = "/saveSchoolBranchDetails", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity saveSchoolBranchDetails(@RequestBody SchoolBranchDetailsPojo saveBranchDetails) throws Exception {
        SchoolBranchDetails master = null;
        master = bsUserService.SaveSchoolBranchDetails(saveBranchDetails);
        return ResponseEntity.status(200).body(master);
    }

    //getSchoolBranchDetailsList
    @RequestMapping(value = "/getSchoolBranchDetailsList", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public EntityResponse getSchoolBranchDetailsList() {
        List<SchoolBranchDetailsPojo> schoolBranchDetailsPojos = bsUserService.schoolBranchDetailsList();
        return new EntityResponse(HttpStatus.OK.value(), " success", schoolBranchDetailsPojos);
    }

    @RequestMapping(value = "/saveStudentFee", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity saveStudentFee(@RequestBody StudentFeeDto saveStudentFee) throws JSONException, IOException {
        return ResponseEntity.status(200).body(bsUserService.saveStudentFeeDetails(saveStudentFee));
    }
    @RequestMapping(value = "/receiptNoReport", method = RequestMethod.POST)
    public ResponseEntity receiptNoReport(@RequestBody ReportPojo reportPojo) {
        return ResponseEntity.status(200).body(bsUserService.receiptNoReport(reportPojo));
    }

    @RequestMapping(value = "/getReceiptDetails", method = RequestMethod.POST)
    public ResponseEntity getReceiptDetails(@RequestParam(value = "id") Long id,@RequestParam(value = "feeType")String feeType) {
        return ResponseEntity.status(200).body(bsUserService.getReceiptDetails(id,feeType));
    }

    @RequestMapping(value = "/getReportReceiptDetails", method = RequestMethod.POST)
    public ResponseEntity getReportReceiptDetails(@RequestBody ReportPojo reportPojo) {
        return ResponseEntity.status(200).body(bsUserService.getReportDetails(reportPojo));
    }

    @RequestMapping(value = "/getStudentDueReportList", method = RequestMethod.POST)
    public ResponseEntity getStudentDueReportList(@RequestBody ReportPojo reportPojo) {
        return ResponseEntity.status(200).body(bsUserService.getStudentDueList(reportPojo));
    }

    @RequestMapping(value = "/feeCollectedReportExcel", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity feeCollectedReportExcel(@RequestParam(value = "fromDate", required = false) String fromDate,
                                                  @RequestParam(value = "toDate", required = false) String toDate,
                                                  @RequestParam(value = "academicYear", required = false) String academicYear,
                                                  @RequestParam(value = "gradeIds", required = false) String gradeIds) throws ParseException {
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        ReportPojo reportPojo = new ReportPojo();
        reportPojo.setFromDate(new Date(new SimpleDateFormat("yyyy-MM-dd").parse(fromDate).getTime()));
        reportPojo.setToDate(new Date(new SimpleDateFormat("yyyy-MM-dd").parse(toDate).getTime()));
        reportPojo.setAcademicYearId(academicYear);
        if (gradeIds.length() > 0) {
            String g = gradeIds.substring(1, gradeIds.length() - 1);
            if (!StringUtils.isEmpty(g)) {
                List<Long> grades = Arrays.asList(g.split(",")).stream().map(s -> Long.parseLong(s.trim())).collect(Collectors.toList());
                reportPojo.setGradeIds(grades);
            }
        }
        bsUserService.downloadFeeCollectedReportExcel(outputStream, reportPojo);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition", "attachment; filename=\"" + "FeeCollectedReport.xls" + "\"");
        ByteArrayResource byteArrayResource = new ByteArrayResource(outputStream.toByteArray());
        return ResponseEntity.ok()
                .headers(headers)
                .contentLength(byteArrayResource.contentLength())
                .contentType(MediaType.parseMediaType("application/vnd.ms-excel"))
                .body(byteArrayResource);
    }
    @RequestMapping(value = "/assesmentsExcel", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity assesmentsExcel(@RequestParam(value = "level", required = false) String level,
                                          @RequestParam(value = "subject", required = false) String subject) {
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        bsUserService.downloadassesmentsExcelExcel(outputStream,subject,level);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition", "attachment; filename=\"" + "Assesment.xls" + "\"");
        ByteArrayResource byteArrayResource = new ByteArrayResource(outputStream.toByteArray());
        return ResponseEntity.ok()
                .headers(headers)
                .contentLength(byteArrayResource.contentLength())
                .contentType(MediaType.parseMediaType("application/vnd.ms-excel"))
                .body(byteArrayResource);
    }

    @RequestMapping(value = "/feeCollectedReportPdf", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity feeCollectedReportPdf(@RequestParam(value = "fromDate", required = false) String fromDate,
                                                @RequestParam(value = "toDate", required = false) String toDate,
                                                @RequestParam(value = "academicYear", required = false) String academicYear,
                                                @RequestParam(value = "gradeIds", required = false) String gradeIds) throws ParseException {
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        ReportPojo reportPojo = new ReportPojo();
        reportPojo.setFromDate(new Date(new SimpleDateFormat("yyyy-MM-dd").parse(fromDate).getTime()));
        reportPojo.setToDate(new Date(new SimpleDateFormat("yyyy-MM-dd").parse(toDate).getTime()));
        reportPojo.setAcademicYearId(academicYear.toString());
        if (gradeIds.length() > 0) {
            String g = gradeIds.substring(1, gradeIds.length() - 1);
            if (!StringUtils.isEmpty(g)) {
                List<Long> grades = Arrays.asList(g.split(",")).stream().map(s -> Long.parseLong(s.trim())).collect(Collectors.toList());
                reportPojo.setGradeIds(grades);
            }
        }
        bsUserService.downloadFeeCollectedReportPdf(outputStream, reportPojo);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition", "attachment; filename=\"" + "FeeCollectedReport.pdf" + "\"");
        ByteArrayResource byteArrayResource = new ByteArrayResource(outputStream.toByteArray());
        return ResponseEntity.ok()
                .headers(headers)
                .contentLength(byteArrayResource.contentLength())
                .contentType(MediaType.parseMediaType("application/vnd.ms-excel"))
                .body(byteArrayResource);
    }

    @RequestMapping(value = "/feeDueReportExcel", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity feeDueReportExcel(@RequestParam(value = "fromDate", required = false) String fromDate,
                                            @RequestParam(value = "toDate", required = false) String toDate,
                                            @RequestParam(value = "academicYear", required = false) String academicYear,
                                            @RequestParam(value = "gradeIds", required = false) String gradeIds,
                                            @RequestParam(value="feeType",required = false) String feeType) throws ParseException {
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        ReportPojo reportPojo = new ReportPojo();
        reportPojo.setFromDate(new Date(new SimpleDateFormat("yyyy-MM-dd").parse(fromDate).getTime()));
        reportPojo.setToDate(new Date(new SimpleDateFormat("yyyy-MM-dd").parse(toDate).getTime()));
        reportPojo.setAcademicYearId(academicYear);
        reportPojo.setFeeType(feeType);
        if (gradeIds.length() > 0) {
            String g = gradeIds.substring(1, gradeIds.length() - 1);
            if (!StringUtils.isEmpty(g)) {
                List<Long> grades = Arrays.asList(g.split(",")).stream().map(s -> Long.parseLong(s.trim())).collect(Collectors.toList());
                reportPojo.setGradeIds(grades);
            }
        }
        bsUserService.downloadFeeDueReportExcel(outputStream, reportPojo);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition", "attachment; filename=\"" + "FeeDueReport.xls" + "\"");
        ByteArrayResource byteArrayResource = new ByteArrayResource(outputStream.toByteArray());
        return ResponseEntity.ok()
                .headers(headers)
                .contentLength(byteArrayResource.contentLength())
                .contentType(MediaType.parseMediaType("application/vnd.ms-excel"))
                .body(byteArrayResource);
    }

    @RequestMapping(value = "/feeDueReportPdf", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity feeDueReportPdf(@RequestParam(value = "fromDate", required = false) String fromDate,
                                          @RequestParam(value = "toDate", required = false) String toDate,
                                          @RequestParam(value = "academicYear", required = false) String academicYear,
                                          @RequestParam(value = "gradeIds", required = false) String gradeIds,
                                          @RequestParam(value="feeType",required = false) String feeType) throws ParseException {
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        ReportPojo reportPojo = new ReportPojo();
        reportPojo.setFromDate(new Date(new SimpleDateFormat("yyyy-MM-dd").parse(fromDate).getTime()));
        reportPojo.setToDate(new Date(new SimpleDateFormat("yyyy-MM-dd").parse(toDate).getTime()));
        reportPojo.setAcademicYearId(academicYear);
        reportPojo.setFeeType(feeType);
        if (gradeIds.length() > 0) {
            String g = gradeIds.substring(1, gradeIds.length() - 1);
            if (!StringUtils.isEmpty(g)) {
                List<Long> grades = Arrays.asList(g.split(",")).stream().map(s -> Long.parseLong(s.trim())).collect(Collectors.toList());
                reportPojo.setGradeIds(grades);
            }
        }
        bsUserService.downloadFeeDueReportPdf(outputStream, reportPojo);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition", "attachment; filename=\"" + "FeeDueReport.pdf" + "\"");
        ByteArrayResource byteArrayResource = new ByteArrayResource(outputStream.toByteArray());
        return ResponseEntity.ok()
                .headers(headers)
                .contentLength(byteArrayResource.contentLength())
                .contentType(MediaType.parseMediaType("application/vnd.ms-excel"))
                .body(byteArrayResource);
    }

    @RequestMapping(value = "/getReportCollected", method = RequestMethod.POST)
    public ResponseEntity getReportCollected(@RequestBody ReportPojo reportPojo) {
        return ResponseEntity.status(200).body(bsUserService.getReportCollected(reportPojo));
    }

    @RequestMapping(value = "/getDuplicateReceipt", method = RequestMethod.POST)
    public ResponseEntity getDuplicateReceipt(@RequestParam(value = "id") Long id) {
        return ResponseEntity.status(200).body(bsUserService.getDuplicateReceipt(id));
    }
    @RequestMapping(value = "/getAllPrintReceipt", method = RequestMethod.POST)
    public ResponseEntity getAllPrintReceipt(@RequestParam(value = "id") Long id,
                                             @RequestParam(value="feeType") String feeType) {
        return ResponseEntity.status(200).body(bsUserService.getAllPrintReceipt(id,feeType));
    }

    @RequestMapping(value = "/studentDetailsExcel", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity studentDetailsExcel(@RequestParam(value = "studentId") Long studentId)  {
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        StudentFee studentDetails = bsUserService.getStudentDetails(studentId);
        List<StudentFeeDetails> studentFeeDetails = bsUserService.getStudentFeeDetails(studentDetails);
        bsUserService.downloadStudentDetailsExcel(outputStream, studentDetails, studentFeeDetails);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition", "attachment; filename=\"" + "StudentDetails.xls" + "\"");
        ByteArrayResource byteArrayResource = new ByteArrayResource(outputStream.toByteArray());
        return ResponseEntity.ok()
                .headers(headers)
                .contentLength(byteArrayResource.contentLength())
                .contentType(MediaType.parseMediaType("application/vnd.ms-excel"))
                .body(byteArrayResource);
    }

    @RequestMapping(value = "/saveMail", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity saveMail(@RequestBody MailDTO saveMailDetails) {
        MailDTO camDTO = null;
        camDTO = bsUserService.createSaveMailDetails(saveMailDetails);
        return ResponseEntity.status(200).body(camDTO);
    }

    @RequestMapping(value = "/studentExportToExcel", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity studentExportToExcel(@RequestParam(value = "searchText") String searchText,
                                               @RequestParam(value = "grade") String grade,
                                               @RequestParam(value = "student") String student,
                                               @RequestParam(value = "checkboxStatusForStudent") String checkboxStatusForStudent) {
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        List<Student> studentDetails = bsUserService.getStudentExportToExcelList(searchText, grade, student, checkboxStatusForStudent);
        bsUserService.downloadStudentListExportToExcel(outputStream, studentDetails);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition", "attachment; filename=\"" + "StudentExportToExcel.xls" + "\"");
        ByteArrayResource byteArrayResource = new ByteArrayResource(outputStream.toByteArray());
        return ResponseEntity.ok()
                .headers(headers)
                .contentLength(byteArrayResource.contentLength())
                .contentType(MediaType.parseMediaType("application/vnd.ms-excel"))
                .body(byteArrayResource);
    }
    @RequestMapping(value = "/feeExcel", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity feeExcel(@RequestParam(value = "searchText") String searchText,
                                   @RequestParam(value = "grade") String grade,
                                   @RequestParam(value = "student") String student) {
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        List<StudentFee> studentDetails = bsUserService.getStudentFeeExportToExcel(searchText, grade, student);
        bsUserService.downloadFeeListExcel(outputStream, studentDetails);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition", "attachment; filename=\"" + "FeeExcel.xls" + "\"");
        ByteArrayResource byteArrayResource = new ByteArrayResource(outputStream.toByteArray());
        return ResponseEntity.ok()
                .headers(headers)
                .contentLength(byteArrayResource.contentLength())
                .contentType(MediaType.parseMediaType("application/vnd.ms-excel"))
                .body(byteArrayResource);
    }

    @RequestMapping(value = "/studentDetailsPdf", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity studentDetailsPdf(@RequestParam(value = "studentId") Long studentId) throws ParseException {
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        StudentFee studentDetails = bsUserService.getStudentDetails(studentId);
        List<StudentFeeDetails> studentFeeDetails = bsUserService.getStudentFeeDetails(studentDetails);
        bsUserService.downloadStudentDetailsPdf(outputStream, studentDetails, studentFeeDetails);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition", "attachment; filename=\"" + "StudentDetails.pdf" + "\"");
        ByteArrayResource byteArrayResource = new ByteArrayResource(outputStream.toByteArray());
        return ResponseEntity.ok()
                .headers(headers)
                .contentLength(byteArrayResource.contentLength())
                .contentType(MediaType.parseMediaType("application/vnd.ms-excel"))
                .body(byteArrayResource);
    }

    @RequestMapping(value = "/getStudentDetails", method = RequestMethod.POST)
    public ResponseEntity getStudentDetails(@RequestParam(value = "studentId") Long studentId,
                                            @RequestParam(value = "type") String type,
                                            @RequestParam(value = "id" ,required = false) Long receiptId,
                                            @RequestParam(value = "feeType",required = false) String feeType) {
        StudentFeeDto student = null;
        student = bsUserService.getStudentFeeDetailsList(studentId, type,feeType,receiptId);
        return ResponseEntity.status(200).body(student);
    }

    @RequestMapping(value = "/getStudentAttendenceDetails", method = RequestMethod.POST)
    public ResponseEntity getStudentAttendenceDetails(@RequestParam(value = "studentAttendenceId") Long studentAttendenceId,
                                            @RequestParam(value = "type") String type,
                                            @RequestParam(value = "id" ,required = false) Long receiptId,
                                            @RequestParam(value = "feeType",required = false) String feeType) {
        StudentAttendencePojo student = null;
        student = bsUserService.getStudentAttendenceDetails(studentAttendenceId, type);
        return ResponseEntity.status(200).body(student);
    }

    @RequestMapping(value = "/deleteStudent", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity deleteStudent(@RequestBody StudentPojo studentDetails) {
        return ResponseEntity.status(200).body(bsUserService.deleteStudentDetails(studentDetails));
    }

    @RequestMapping(value = "/deleteGradeMaster", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity deleteGradeMaster(@RequestBody GradeMasterPojo details) {
        return ResponseEntity.status(200).body(bsUserService.deleteGradeDetails(details));
    }

//    @RequestMapping(value = "/deleteTrainingmodule", method = RequestMethod.POST, consumes = "application/json")
//    public ResponseEntity deleteTrainingmodule(@RequestBody TrainingModulePojo details) {
//        return ResponseEntity.status(200).body(bsUserService.deleteTrainingmodule(details));
//    }

    @RequestMapping(value = "/deleteAcademics", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity deleteAcademics(@RequestBody AcademicYearMasterPojo details) {
        return ResponseEntity.status(200).body(bsUserService.deleteAcademicDetails(details));
    }

    @RequestMapping(value = "/deleteFeeType", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity deleteFeeType(@RequestBody FeeTypeMasterPojo details) {
        return ResponseEntity.status(200).body(bsUserService.deleteFeeDetails(details));
    }

    @RequestMapping(value = "/getGradeList", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public EntityResponse getGradeList() {
        List<GradeMasterPojo> gradeMasters = bsUserService.gradeMasterList();
        return new EntityResponse(HttpStatus.OK.value(), " success", gradeMasters);
    }

    @RequestMapping(value = "/getAcademicGradeList", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public EntityResponse getAcademicGradeList(@RequestParam(value = "academicId") Long academicID) {
        List<GradeMasterPojo> gradeMasterPojos = bsUserService.gradeList(academicID);
        return new EntityResponse(HttpStatus.OK.value(), " success", gradeMasterPojos);
    }
    @RequestMapping(value = "/getGradeList2", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public EntityResponse getGradeList2(@RequestAttribute String userId,@RequestParam(value = "searchText") String searchText, @RequestParam(value = "checkboxForInActive") String checkboxForInActive) {
        List<GradeMasterPojo> gradeMasters = bsUserService.gradeMasterList2(searchText, checkboxForInActive,userId);
        return new EntityResponse(HttpStatus.OK.value(), " success", gradeMasters);
    }
    @RequestMapping(value = "/getCartmasterList", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public EntityResponse getCartmasterList()  {
        List<CartMasterPojo> cartMasters = bsUserService.cartMasterList();
        return new EntityResponse(HttpStatus.OK.value(), " success", cartMasters);
    }

    @RequestMapping(value = "/getGradeListBasedOnInactive", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public EntityResponse getGradeListBasedOnInactive() {
        List<GradeMasterPojo> gradeMasters = bsUserService.gradeMasterListBasedOnInactive();
        return new EntityResponse(HttpStatus.OK.value(), " success", gradeMasters);
    }

    @RequestMapping(value = "/studentFeeDetailsList", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public EntityResponse studentFeeDetailsList(@RequestParam(value = "studentId") String studentId) {
        List<StudentFeeDetails> studentFeeDetails = bsUserService.getStudentFeeDetails(studentId);
        return new EntityResponse(HttpStatus.OK.value(), " success", studentFeeDetails);
    }

    @RequestMapping(value = "/getAcademicYearList", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public EntityResponse getacdemicYearList() {
        List<AcademicYearMasterPojo> academicList = bsUserService.getAcademicYearList();
        return new EntityResponse(HttpStatus.OK.value(), " success", academicList);
    }

    @RequestMapping(value = "/getAcdemicYearList", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public EntityResponse getAcdemicYearList2(@RequestParam(value = "searchText") String searchText, @RequestParam(value = "checkboxStatus") String checkboxStatus) {
        List<AcademicYearMasterPojo> academicList = bsUserService.getAcademicYear2List(searchText, checkboxStatus);
        return new EntityResponse(HttpStatus.OK.value(), " success", academicList);
    }
    @RequestMapping(value = "/getPaginatedAcdemicYearList", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getPaginatedAcdemicYearList(@RequestParam(value = "searchText") String searchText,
                                              @RequestParam(value = "type") String status,
                                              @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getPaginatedAcdemicYearList(searchText, status,basePojo));
        }
    @RequestMapping(value = "/getPaginatedFeeTypeList", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getPaginatedFeeTypeList(@RequestParam(value = "searchText") String searchText,
                                                @RequestParam(value = "type") String type,
                                                @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getPaginatedFeeTypeList(searchText, type,basePojo));
    }
    @RequestMapping(value = "/getPaginatedDiscountTypeList", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getPaginatedDiscountTypeList(@RequestParam(value = "searchText") String searchText,
                                                  @RequestParam(value = "type") String type,
                                                  @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getPaginatedDiscountTypeList(searchText, type,basePojo));
    }
    @RequestMapping(value = "/getPaginatedStudentList", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getPaginatedStudentList(@RequestParam(value = "searchText") String searchText,
                                                  @RequestParam(value = "checkboxStatusForStudent") String checkboxStatusForStudent,
                                                  @RequestParam(value = "gradeSearch") String gradeSearch,
                                                  @RequestParam(value = "studentSearch") String studentSearch,
                                                  @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getPaginatedStudentList(searchText, checkboxStatusForStudent,gradeSearch,studentSearch,basePojo));
    }
    @RequestMapping(value = "/getStudentList", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public EntityResponse getStudentListBasedOnGrade(@RequestParam(value = "searchText") String searchText,
                                                     @RequestParam(value = "grade") String grade,
                                                     @RequestParam(value = "student") String student,
                                                     @RequestParam(value = "checkboxStatusForStudent") String checkboxStatusForStudent) {
        List<StudentPojo> studentlist = bsUserService.getStudentList(searchText, grade, student, checkboxStatusForStudent);
        return new EntityResponse(HttpStatus.OK.value(), " success", studentlist);
    }

    //getFeeTypeList
    @RequestMapping(value = "/getFeeTypeMasterList", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public EntityResponse getFeeTypeMasterList() {
        List<FeeTypeMasterPojo> feeTypeMasterPojos = bsUserService.feeTypeMasterList();
        return new EntityResponse(HttpStatus.OK.value(), " success", feeTypeMasterPojos);
    }

    @RequestMapping(value = "/getFeeList", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public EntityResponse getFeeList(@RequestParam(value = "academicId") Long academicId,
                                     @RequestParam(value = "gradeId") Long gradeId) {
        List<FeeTypeMasterPojo> feeTypeMasterPojos = bsUserService.feeListOfAcademicAndGrade(academicId, gradeId);
        return new EntityResponse(HttpStatus.OK.value(), " success", feeTypeMasterPojos);
    }

    @RequestMapping(value = "/getFeeTypeMasterList2", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public EntityResponse getFeeTypeMasterList2(@RequestParam(value = "searchText") String searchText, @RequestParam(value = "checkboxforInActive") String checkboxforInActive) {
        List<FeeTypeMasterPojo> feeTypeMasterPojos = bsUserService.feeTypeMasterList2(searchText, checkboxforInActive);
        return new EntityResponse(HttpStatus.OK.value(), " success", feeTypeMasterPojos);
    }

    @RequestMapping(value = "/getStudentFeeList", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public EntityResponse getStudentFeeList(@RequestParam(value = "searchText") String searchText,
                                            @RequestParam(value = "grade") String grade,
                                            @RequestParam(value = "feeType") String feeType,
                                            @RequestParam(value = "student") String student) {
        List<StudentFeePojo> feeTypeMasterPojos = bsUserService.studentFeeList(searchText, grade, student,feeType);
        Gson json = new Gson();
        return new EntityResponse(HttpStatus.OK.value(), " success", json.toJson(feeTypeMasterPojos));
    }

    // getStudentListBasedOnGrade
    @RequestMapping(value = "/getStudentListBasedOnGrade", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public EntityResponse getStudentListBasedOnGrade(@RequestParam(value = "searchText") String searchText) {
        List<StudentPojo> student = bsUserService.getStudentBasedOnGradeList(searchText);
        return new EntityResponse(HttpStatus.OK.value(), " success", student);
    }

    @RequestMapping(value = "/getStudentListBasedOnStatus", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public EntityResponse getStudentListBasedOnStatus(@RequestParam(value = "searchText") String searchText) {
        List<GradeMasterPojo> gradeMasterPojos = bsUserService.getStudentBasedOnStatusList(searchText);
        return new EntityResponse(HttpStatus.OK.value(), " success", gradeMasterPojos);
    }

    @RequestMapping(path = "/feeTypeExcel", method = RequestMethod.GET)
    public ResponseEntity feeTypeExcel(@RequestParam(value = "type") String type,
                                       @RequestParam(value = "val") String searchText) {
        HttpHeaders headers = new HttpHeaders();
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        bsUserService.downloadFeeTypeExcel(outputStream,searchText,type);
        headers.add("Content-Disposition", "attachment; filename=\"" + "FeeType.xls" + "\"");
        ByteArrayResource byteArrayResource = new ByteArrayResource(outputStream.toByteArray());
        return ResponseEntity.ok()
                .headers(headers)
                .contentLength(byteArrayResource.contentLength())
                .contentType(MediaType.parseMediaType("application/vnd.ms-excel"))
                .body(byteArrayResource);
    }

    @RequestMapping(path = "/gradeMasterExcel", method = RequestMethod.GET)
    public ResponseEntity gradeMasterExcel(@RequestParam(value = "type") String type,
                                       @RequestParam(value = "val") String searchText,
                                           @RequestAttribute String userId ) {
        HttpHeaders headers = new HttpHeaders();
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        bsUserService.downloadGradeMasterExcel(outputStream,searchText,type,userId);
        headers.add("Content-Disposition", "attachment; filename=\"" + "GradeMaster.xls" + "\"");
        ByteArrayResource byteArrayResource = new ByteArrayResource(outputStream.toByteArray());
        return ResponseEntity.ok()
                .headers(headers)
                .contentLength(byteArrayResource.contentLength())
                .contentType(MediaType.parseMediaType("application/vnd.ms-excel"))
                .body(byteArrayResource);
    }

    @RequestMapping(path = "/acdYearExcel", method = RequestMethod.GET)
    public ResponseEntity acdYearExcel(@RequestParam(value = "type") String type,
                                           @RequestParam(value = "val") String searchText) {
        HttpHeaders headers = new HttpHeaders();
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        if(StringUtils.equalsIgnoreCase(type,"Active")){
            type="false";
        }
        bsUserService.downloadAcademicYearExcel(outputStream,searchText,type);
        headers.add("Content-Disposition", "attachment; filename=\"" + "AcdYear.xls" + "\"");
        ByteArrayResource byteArrayResource = new ByteArrayResource(outputStream.toByteArray());
        return ResponseEntity.ok()
                .headers(headers)
                .contentLength(byteArrayResource.contentLength())
                .contentType(MediaType.parseMediaType("application/vnd.ms-excel"))
                .body(byteArrayResource);
    }

    @RequestMapping(value = "/saveCountry", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveCountry(@RequestBody CountryDTO countryDTO) {
        return ResponseEntity.status(200).body(bsUserService.saveCountry(countryDTO));
    }
    @RequestMapping(value = "/savePeriod", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity savePeriod(@RequestBody PeriodsDTO periodsDTO) {
        return ResponseEntity.status(200).body(bsUserService.savePeriod(periodsDTO));
    }

    @RequestMapping(value = "/savePosition", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity savePosition(@RequestBody PositionPojo positionPojo) {
        return ResponseEntity.status(200).body(bsUserService.savePosition(positionPojo));
    }

    @RequestMapping(value = "/saveInstruments", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveInstruments(@RequestBody InstrumentsPojo instrumentsPojo) {
        return ResponseEntity.status(200).body(bsUserService.saveInstruments(instrumentsPojo));
    }

    @RequestMapping(value = "/saveAssessmentType", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveAssessmentType(@RequestBody AssessmentTypePojo assessmentTypePojo) {
        return ResponseEntity.status(200).body(bsUserService.saveAssessmentType(assessmentTypePojo));
    }

    @RequestMapping(value = "/saveSubComponent", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveSubComponent(@RequestBody SubComponentPojo subComponentPojo) {
        return ResponseEntity.status(200).body(bsUserService.saveSubComponent(subComponentPojo));
    }

    @RequestMapping(value = "/saveCustomApprover", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveCustomApprover(@RequestBody CustomApproverPojo customApproverPojo) {
        return ResponseEntity.status(200).body(bsUserService.saveCustomApprover(customApproverPojo));
    }


    @RequestMapping(value = "/saveAccountType", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveAccountType(@RequestBody AccountTypePojo accountTypePojo) {
        return ResponseEntity.status(200).body(bsUserService.saveAccountType(accountTypePojo));
    }
    @RequestMapping(value = "/saveAccountGroup", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveAccountGroup(@RequestBody AccountGroupPojo accountGroupPojo) {
        return ResponseEntity.status(200).body(bsUserService.saveAccountGroup(accountGroupPojo));
    }
    @RequestMapping(value = "/saveAdmission", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveAdmission(@RequestBody StudentDTO studentDTO) throws JSONException, ParseException, IOException{
        return ResponseEntity.status(200).body(bsUserService.saveStudent(studentDTO));
    }
    @RequestMapping(value = "/saveHrApplication", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveHrApplication(@RequestBody HrApplicationPojo hrApplicationPojo) throws JSONException, ParseException, IOException{
        return ResponseEntity.status(200).body(bsUserService.saveHrApplication(hrApplicationPojo));
    }
    @RequestMapping(value = "/getSecondInterviewDetails", method = RequestMethod.POST,  produces = "application/json")
    public ResponseEntity getSecondInterviewDetails(@RequestParam(value = "hrId") Long id){
        return ResponseEntity.status(200).body(bsUserService.getSecondInterviewDetails(id));
    }
    @RequestMapping(value = "/saveIhesEditMarks", method = RequestMethod.POST,  produces = "application/json")
    public ResponseEntity saveIhesEditMarks(@RequestBody IhesLessonPlanPojo ihesLessonPlanPojo){
        return ResponseEntity.status(200).body(bsUserService.saveIhesEditMarks(ihesLessonPlanPojo));
    }
 @RequestMapping(value = "/saveKIVDetails", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveKIVDetails(@RequestBody HrApplicationPojo hrApplicationPojo) throws JSONException, ParseException, IOException{
        return ResponseEntity.status(200).body(bsUserService.saveKIVApplication(hrApplicationPojo));
    }
    @RequestMapping(value = "/saveInterviewDetails", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveInterviewDetails(@RequestBody HrApplicationPojo hrApplicationPojo) throws JSONException, ParseException, IOException{
        return ResponseEntity.status(200).body(bsUserService.saveInterviewApplication(hrApplicationPojo));
    }
    @RequestMapping(value = "/saveInterviewSchedDetails", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveInterviewSchedDetails(@RequestBody HrApplicationPojo hrApplicationPojo) throws JSONException, ParseException, IOException{
        return ResponseEntity.status(200).body(bsUserService.saveInterviewschApplication(hrApplicationPojo));
    }
    @RequestMapping(value = "/savesecondInterviewDetails", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity savesecondInterviewDetails(@RequestBody HrApplicationPojo hrApplicationPojo) throws JSONException, ParseException, IOException{
        return ResponseEntity.status(200).body(bsUserService.savesecondInterviewDetails(hrApplicationPojo));
    }

    @RequestMapping(value = "/getCountryList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getCountryList(@RequestParam(value = "searchText", required = false) String searchText){
        return ResponseEntity.status(200).body(bsUserService.getCountryList(searchText));
    }
    @RequestMapping(value = "/getAccountTypeList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getAccountTypeList(@RequestParam(value = "searchText", required = false) String searchText) {
        return ResponseEntity.status(200).body(bsUserService.getAccountTypeList(searchText));
    }
    @RequestMapping(value = "/getAccountGroupList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getAccountGroupList(@RequestParam(value = "searchText", required = false) String searchText) {
        return ResponseEntity.status(200).body(bsUserService.getAccountGroupList(searchText));
    }
    @RequestMapping(value = "/getAccountMasterList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getAccountMasterList(@RequestParam(value = "searchText", required = false) String searchText) {
        return ResponseEntity.status(200).body(bsUserService.getAccountMasterList(searchText));
    }
    @RequestMapping(value = "/getAccountMasterListBasedOnReport", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getAccountMasterListBasedOnReport(@RequestParam(value = "searchText", required = false) String searchText) {
        return ResponseEntity.status(200).body(bsUserService.getAccountMasterListBasedOnReport(searchText));
    }
    @RequestMapping(value = "/getSchoolbranchDetails", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getSchoolbranchDetails(){
        return ResponseEntity.status(200).body(bsUserService.getSchoolbranchDetails());
    }

    @RequestMapping(value = "/saveOrUpDateChartOfAcc", produces = "application/json", method = RequestMethod.POST)
    public ResponseEntity saveOrUpDateChartOfAcc(@RequestBody PostChartOfAccountDto accountDto){
        List<ListChatOfAccountDto> listChatOfAccountDto = null;
        listChatOfAccountDto = bsUserService.saveCreateChartAcc(accountDto);
        return ResponseEntity.status(HttpStatus.OK).body(listChatOfAccountDto);
    }

    @RequestMapping(value = "/editCreateChartOfAccount",method = RequestMethod.POST)
    public ResponseEntity editCreateChartOfAccount(@RequestParam(value = "accountid") Long accountId){
        return ResponseEntity.status(HttpStatus.OK).body(bsUserService.editAccountMAsterObj(accountId));
    }

    @RequestMapping(value = "/editCheckList",method = RequestMethod.POST)
    public ResponseEntity editCheckList(@RequestParam(value = "accountid") Long accountId){
        return ResponseEntity.status(HttpStatus.OK).body(bsUserService.editAccountMAsterObj(accountId));
    }
    @RequestMapping(value = "/editChartOfAcc", produces = "application/json", method = RequestMethod.POST)
    public ResponseEntity editChartOfAcc(@RequestBody PostChartOfAccountDto accountDto){
        AccountMaster listChatOfAccountDto = null;
        listChatOfAccountDto = bsUserService.editChartOfAccounts(accountDto);
        return ResponseEntity.status(HttpStatus.OK).body(listChatOfAccountDto);
    }

    @RequestMapping(value = "/editcheck", produces = "application/json", method = RequestMethod.POST)
    public ResponseEntity editcheck(@RequestBody PostChartOfAccountDto accountDto){
        AccountMaster listChatOfAccountDto = null;
        listChatOfAccountDto = bsUserService.editCheck(accountDto);
        return ResponseEntity.status(HttpStatus.OK).body(listChatOfAccountDto);
    }
    @RequestMapping(value = "/getAdmissionList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getAdmissionList(@RequestParam(value = "searchText", required = false) String searchText) {
        return ResponseEntity.status(200).body(bsUserService.getAdmissionList(searchText));
    }
    @RequestMapping(value = "/getHrApplicList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getHrApplicList(@RequestParam(value = "searchText", required = false) String searchText) {
        return ResponseEntity.status(200).body(bsUserService.getHrAppliList(searchText));
    }

    @RequestMapping(value = "/deletePosition", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity deletePosition(@RequestBody PositionPojo details) {
        return ResponseEntity.status(200).body(bsUserService.deletePosition(details));
    }

    @RequestMapping(value = "/deleteInstruments", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity deleteInstruments(@RequestBody InstrumentsPojo details) {
        return ResponseEntity.status(200).body(bsUserService.deleteInstruments(details));
    }

    @RequestMapping(value = "/deleteAssessmentType", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity deleteAssessmentType(@RequestBody AssessmentTypePojo assessmentTypePojo) {
        return ResponseEntity.status(200).body(bsUserService.deleteAssessmentType(assessmentTypePojo));
    }

    @RequestMapping(value = "/deleteSubComponent", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity deleteSubComponent(@RequestBody SubComponentPojo subComponentPojo) {
        return ResponseEntity.status(200).body(bsUserService.deleteSubComponent(subComponentPojo));
    }

    @RequestMapping(value = "/deleteCustomApprover", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity deleteCustomApprover(@RequestBody CustomApproverPojo details) {
        return ResponseEntity.status(200).body(bsUserService.deleteCustomApprover(details));
    }

    @RequestMapping(value = "/deleteAdmission", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity deleteAdmission(@RequestParam(value = "id", required = false) Long id) {
        return ResponseEntity.status(200).body(bsUserService.deleteAdmission(id));
    }
    @RequestMapping(value = "/saveState", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveState(@RequestBody StateDTO stateDTO) {
        return ResponseEntity.status(200).body(bsUserService.saveState(stateDTO));
    }
    @RequestMapping(value = "/deleteState", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity deleteState(@RequestBody StateDTO details) {
        return ResponseEntity.status(200).body(bsUserService.deleteState(details));
    }
    @RequestMapping(value = "/saveCity", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveCity(@RequestBody CityDTO cityDTO) {
        return ResponseEntity.status(200).body(bsUserService.saveCity(cityDTO));
    }

    @RequestMapping(value = "/saveCheck", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveCheck(@RequestBody CheckListMasterPojo checkListMasterPojo) throws Exception {
        return ResponseEntity.status(200).body(bsUserService.saveCheck(checkListMasterPojo));
    }
    @RequestMapping(value = "/saveLeave", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveCity(@RequestBody LeaveDTO leaveDTO) {
        return ResponseEntity.status(200).body(bsUserService.saveLeave(leaveDTO));
    }
    @RequestMapping(value = "/getCheckList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getCheckList(@RequestParam(value = "searchText", required = false) String searchText) {
        return ResponseEntity.status(200).body(bsUserService.getCheckList(searchText));
    }
     @RequestMapping(value = "/getLeaveList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getLeaveList(@RequestParam(value = "searchText", required = false) String searchText) {
        return ResponseEntity.status(200).body(bsUserService.getLeaveList(searchText));
    }

    @RequestMapping(value = "/getContactsList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getContactsList(@RequestParam(value = "searchText", required = false) String searchText) {
        return ResponseEntity.status(200).body(bsUserService.getContactsList(searchText));
    }
    @RequestMapping(value = "/deleteCity", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity deleteCity(@RequestBody CityDTO details) {
        return ResponseEntity.status(200).body(bsUserService.deleteCity(details));
    }
    @RequestMapping(value = "/deleteLeave", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity deleteLeave(@RequestBody LeaveDTO details) {
        return ResponseEntity.status(200).body(bsUserService.deleteLeave(details));
    }

    @RequestMapping(value = "/deleteContact", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity deleteContact(@RequestBody OtherContactsDTO details) {
        return ResponseEntity.status(200).body(bsUserService.deleteContact(details));
    }
    @RequestMapping(value = "/deleteAccountType", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity deleteLeave(@RequestBody AccountTypePojo details) {
        return ResponseEntity.status(200).body(bsUserService.deleteAccountType(details));
    }
    @RequestMapping(value = "/deleteAccountGroup", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity deleteAccountGroup(@RequestBody AccountGroupPojo details) {
        return ResponseEntity.status(200).body(bsUserService.deleteAccountGroup(details));
    }
    @RequestMapping(value = "/deleteLeaveForm", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity deleteLeaveForm(@RequestBody LeaveFormDTO details) {
        return ResponseEntity.status(200).body(bsUserService.deleteLeaveForm(details));
    }
    @RequestMapping(value = "/saveBranches", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveBranches(@RequestBody BranchesPojo branchesPojo) {
        return ResponseEntity.status(200).body(bsUserService.saveBranches(branchesPojo));
    }
    @RequestMapping(value = "/getBranchesList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getBranchesList(@RequestParam(value = "searchText", required = false) String searchText) {
        return ResponseEntity.status(200).body(bsUserService.getBranchesList(searchText));
    }
    @RequestMapping(value = "/getDoctorList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getDoctorList(@RequestParam(value = "searchText", required = false) String searchText) {
        return ResponseEntity.status(200).body(bsUserService.getDoctorList(searchText));
    }
    @RequestMapping(value = "/getEmailList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getEmailList(@RequestParam(value = "searchText", required = false) String searchText) {
        return ResponseEntity.status(200).body(bsUserService.getEmailList(searchText));
    }

    @RequestMapping(value = "/getQualificationList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getQualificationList(@RequestParam(value = "searchText", required = false) String searchText) {
        return ResponseEntity.status(200).body(bsUserService.getQualificationList(searchText));
    }
@RequestMapping(value = "/getPaginatedQualificationList", method = RequestMethod.POST, produces = "application/json")
public ResponseEntity getPaginatedQualificationList(@RequestParam(value = "type", required = false) String type,
                                               @RequestParam(value = "searchText", required = false) String searchText,
                                               @RequestBody BasePojo basePojo) {
    return ResponseEntity.status(200).body(bsUserService.getPaginatedQualificationList(type, basePojo, searchText));
}

    @RequestMapping(value = "/getpaginatedcountry", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getpaginatedcountry(@RequestParam(value = "type", required = false) String type,
                                               @RequestParam(value = "searchText", required = false) String searchText,
                                               @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getcountrypagelist(type, basePojo, searchText));
    }
    @RequestMapping(value = "/getpaginatedPeriod", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getpaginatedPeriod(@RequestParam(value = "type", required = false) String type,
                                               @RequestParam(value = "searchText", required = false) String searchText,
                                               @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getPeriodpagelist(type, basePojo, searchText));
    }

    @RequestMapping(value = "/getAssessmentTypePagination", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getAssessmentTypePagination(@RequestParam(value = "type", required = false) String type,
                                              @RequestParam(value = "searchText", required = false) String searchText,
                                              @RequestBody BasePojo basePojo) {

        return ResponseEntity.status(200).body(bsUserService.getassessmentTypepagelist(type, basePojo, searchText));
    }

    @RequestMapping(value = "/getSubComponentPagination", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getSubComponentPagination(@RequestParam(value = "type", required = false) String type,
                                                      @RequestParam(value = "searchText", required = false) String searchText,
                                                      @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getsubComponentpagelist(type, basePojo, searchText));
    }

    @RequestMapping(value = "/getpaginatedposition", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getpaginatedposition(@RequestParam(value = "type", required = false) String type,
                                               @RequestParam(value = "searchText", required = false) String searchText,
                                               @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getpositionpagelist(type, basePojo, searchText));
    }

    @RequestMapping(value = "/getpaginatedInstruments", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getpaginatedInstruments(@RequestParam(value = "type", required = false) String type,
                                               @RequestParam(value = "searchText", required = false) String searchText,
                                               @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getinstrumentspagelist(type, basePojo, searchText));
    }

    @RequestMapping(value = "/getpaginatedcustom", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getpaginatedcustom(@RequestParam(value = "type", required = false) String type,
                                               @RequestParam(value = "searchText", required = false) String searchText,
                                               @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getcustomApproverlist(type, basePojo, searchText));
    }

    @RequestMapping(value = "/getpaginatedstate", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getpaginatedstate(@RequestParam(value = "type", required = false) String type,
                                              @RequestParam(value = "searchText", required = false) String searchText,
                                              @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getpaginatedstatelist(type, basePojo, searchText));
    }
    @RequestMapping(value = "/getpaginatedcity", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getpaginatedcity(@RequestParam(value = "type", required = false) String type,
                                            @RequestParam(value = "searchText", required = false) String searchText,
                                            @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getpaginatedcitylist(type, basePojo, searchText));
    }


    @RequestMapping(value = "/getpaginatedbranch", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getpaginatedbranch(@RequestParam(value = "type", required = false) String type,
                                           @RequestParam(value = "searchText", required = false) String searchText,
                                           @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getpaginatedbranchlist(type, basePojo, searchText));
    }
    @RequestMapping(value = "/getpaginatedrole", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getpaginatedrole(@RequestParam(value = "type", required = false) String type,
                                             @RequestParam(value = "searchText", required = false) String searchText,
                                             @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getpaginatedrolelist(type, basePojo, searchText));
    }
    @RequestMapping(value = "/getpaginatedresource", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getpaginatedresource(@RequestParam(value = "type", required = false) String type,
                                           @RequestParam(value = "searchText", required = false) String searchText,
                                           @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getpaginatedresourcelist(type, basePojo, searchText));
    }
    @RequestMapping(value = "/getpaginatedresources", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getpaginatedresources(@RequestParam(value = "type", required = false) String type,
                                               @RequestParam(value = "searchText", required = false) String searchText,
                                               @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getpaginatedresourceslist(type, basePojo, searchText));
    }
    @RequestMapping(value = "/getpaginateddepart", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getpaginateddepart(@RequestParam(value = "type", required = false) String type,
                                                @RequestParam(value = "searchText", required = false) String searchText,
                                                @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getpaginateddepartmentlist(type, basePojo, searchText));
    }

    @RequestMapping(value = "/getpaginatedadmission", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getpaginatedadmission(@RequestParam(value = "type", required = false) String type,
                                             @RequestParam(value = "searchText", required = false) String searchText,
                                             @RequestParam(value = "className", required = false) Long className,
                                             @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getpaginatedadmission(type, basePojo, searchText,className));
    }

   @RequestMapping(value = "/getpaginatedsowList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getpaginatedsowList(@RequestParam(value = "searchText", required = false) String searchText,
                                                @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getpaginatedsowList(basePojo, searchText));
    }

    @RequestMapping(value = "/getPaginationCompList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getPaginationCompList(@RequestParam(value = "type", required = false) String type,
                                                @RequestParam(value = "searchText", required = false) String searchText,
                                                @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getPaginationCompList(type, basePojo, searchText));
    }
    @RequestMapping(value = "/getpaginatedage", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getpaginatedage(@RequestParam(value = "type", required = false) String type,
                                             @RequestParam(value = "searchText", required = false) String searchText,
                                             @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getpaginatedagelist(type, basePojo, searchText));
    }
    @RequestMapping(value = "/getpaginatedgrade", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getpaginatedgrade(@RequestParam(value = "type", required = false) String type,
                                          @RequestParam(value = "searchText", required = false) String searchText,
                                          @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getpaginatedgradelist(type, basePojo, searchText));
    }

    @RequestMapping(value = "/getpaginatedLesssonPlan", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getpaginatedLesssonPlan(@RequestParam(value = "searchText", required = false) String searchText,@RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getpaginatedLesssonPlan(basePojo,searchText));
    }

    @RequestMapping(value = "/getpaginatedAssesmentCreator", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getpaginatedAssesmentCreator(@RequestParam(value = "searchText", required = false) String searchText,@RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getpaginatedAssesmentCreator(basePojo,searchText));
    }

    @RequestMapping(value = "/getpaginatedAssessQues", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getpaginatedAssessQues(@RequestParam(value = "searchText", required = false) String searchText,@RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getpaginatedAssessQues(basePojo,searchText));
    }

    @RequestMapping(value ="/getMarksSubList",  method = RequestMethod.POST , produces = "application/json")
    public ResponseEntity getMarksSubList(@RequestParam(value = "searchText", required = false) String searchText,
                                          @RequestBody BasePojo basePojo){
        return ResponseEntity.status(200).body(bsUserService.getMarksSubList(basePojo,searchText));
    }

    @RequestMapping(value = "/deleteMarksSub", method = RequestMethod.POST, produces = "application/json")
    public void deleteMarksSub(@RequestParam(value = "id", required = false) Long id) {
        bsUserService.deleteMarksSub(id);
    }

    @RequestMapping(value = "/editMarksSub",method =RequestMethod.POST,produces = "application/json")
    public ResponseEntity editMarksSub(@RequestParam(value = "id")Long id){
        return ResponseEntity.status(200).body(bsUserService.editMarksSub(id));
    }

    @RequestMapping(value = "/getpaginatedholiday", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getpaginatedholiday(@RequestParam(value = "type", required = false) String type,
                                            @RequestParam(value = "searchText", required = false) String searchText,
                                            @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getpaginatedholidaylist(type, basePojo, searchText));
    }


    @RequestMapping(value = "/getNotificationList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getNotificationList(@RequestParam(value = "searchText", required = false) String searchText) {
        return ResponseEntity.status(200).body(bsUserService.getNotificationList(searchText));
    }

    @RequestMapping(value = "/getTrainingModuleList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getTrainingModuleList(@RequestParam(value = "searchText", required = false) String searchText) {
        return ResponseEntity.status(200).body(bsUserService.getTrainingModuleList(searchText));
    }

    @RequestMapping(value = "/deleteBranches", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity deleteBranches(@RequestBody BranchesPojo details) {
        return ResponseEntity.status(200).body(bsUserService.deleteBranches(details));
    }
    @RequestMapping(value = "/deleteHoliday", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity deleteHoliday(@RequestBody HolidayPojo holidayPojo) {
        return ResponseEntity.status(200).body(bsUserService.deleteHoliday(holidayPojo));
    }
    @RequestMapping(value = "/deleteTrainer", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity deleteTrainer(@RequestBody TrainerPojo trainerPojo) {
        return ResponseEntity.status(200).body(bsUserService.deleteTrainer(trainerPojo));
    }

    @RequestMapping(value = "/deleteEmail", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity deleteEmail(@RequestBody EmailTemplatePojo details) {
        return ResponseEntity.status(200).body(bsUserService.deleteEmail(details));
    }

    @RequestMapping(value = "/deleteDoctor", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity deleteDoctor(@RequestBody DoctorpanelPojo details) {
        return ResponseEntity.status(200).body(bsUserService.deleteDoctor(details));
    }

    @RequestMapping(value = "/deleteQualification", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity deleteQualification(@RequestBody QualificationPojo details) {
        return ResponseEntity.status(200).body(bsUserService.deleteQualification(details));
    }

    @RequestMapping(value = "/DeleteNotification", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity DeleteNotification(@RequestBody NotificationPojo details) {
        return ResponseEntity.status(200).body(bsUserService.DeleteNotification(details));
    }

    @RequestMapping(value = "/deleteTrainingmodule", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity deleteTrainingmodule(@RequestBody TrainingModulePojo details) {
        return ResponseEntity.status(200).body(bsUserService.deleteTrainingmodule(details));
    }

    @RequestMapping(value = "/saveRoles", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveRoles(@RequestBody RolesPojo rolesPojo) {
        return ResponseEntity.status(200).body(bsUserService.saveRoles(rolesPojo));
    }

    @RequestMapping(value = "/saveApproval", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveRoles(@RequestBody ApprovalPojo approvalPojo) {
        return ResponseEntity.status(200).body(bsUserService.saveApproval(approvalPojo));
    }

    @RequestMapping(value = "/saveComponent", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveComponent(@RequestBody ComponentPojo componentPojo) {
        return ResponseEntity.status(200).body(bsUserService.saveComponent(componentPojo));
    }

    @RequestMapping(value = "/getRolesList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getRolesList(@RequestParam(value = "searchText", required = false) String searchText) {
        return ResponseEntity.status(200).body(bsUserService.getRolesList(searchText));
    }

    @RequestMapping(value = "/getApprovalList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getApprovalList(@RequestParam(value = "searchText", required = false) String searchText) {
        return ResponseEntity.status(200).body(bsUserService.getApprovalList(searchText));
    }
    @RequestMapping(value = "/getComponentList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getComponentList() {
        return ResponseEntity.status(200).body(bsUserService.getComponentList());
    }

    @RequestMapping(value = "/deleteRoles", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity deleteRoles(@RequestBody RolesPojo details) {
        return ResponseEntity.status(200).body(bsUserService.deleteRoles(details));
    }

    @RequestMapping(value = "/saveResourceCategory", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveResourceCategory(@RequestBody ResourceCategoryPojo resourceCategoryPojo) {
        return ResponseEntity.status(200).body(bsUserService.saveResourceCategory(resourceCategoryPojo));
    }

    @RequestMapping(value = "/getResourceCategoryList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getResourceCategoryList(@RequestParam(value = "searchText", required = false) String searchText) {
        return ResponseEntity.status(200).body(bsUserService.getResourceCategoryList(searchText));
    }

    @RequestMapping(value = "/deleteResourceCategory", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity deleteResourceCategory(@RequestBody ResourceCategoryPojo details) {
        return ResponseEntity.status(200).body(bsUserService.deleteResourceCategory(details));
    }

    @RequestMapping(value = "/saveResource", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveResource(@RequestBody ResourcePojo resourcePojo) {
        return ResponseEntity.status(200).body(bsUserService.saveResource(resourcePojo));
    }

    @RequestMapping(value = "/getResourceList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getResourceList(@RequestParam(value = "searchText", required = false) String searchText) {
        return ResponseEntity.status(200).body(bsUserService.getResourceList(searchText));
    }

    @RequestMapping(value = "/deleteResource", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity deleteResource(@RequestBody ResourcePojo details) {
        return ResponseEntity.status(200).body(bsUserService.deleteResource(details));
    }

    @RequestMapping(value = "/saveDepartment", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveDepartment(@RequestBody DepartmentPojo departmentPojo) {
        return ResponseEntity.status(200).body(bsUserService.saveDepartment(departmentPojo));
    }

    @RequestMapping(value = "/getDepartmentList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getDepartmentList(@RequestParam(value = "searchText", required = false) String searchText) {
        return ResponseEntity.status(200).body(bsUserService.getDepartmentList(searchText));
    }
    @RequestMapping(value = "/getAssesmentSubList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getAssesmentSubList() {
        return ResponseEntity.status(200).body(bsUserService.getAssesmentSubList());
    }
    @RequestMapping(value = "/editAssesmentSub", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity editAssesmentSub(@RequestParam(value = "id")Long id) {
        return ResponseEntity.status(200).body(bsUserService.editAssesmentSub(id));
    }

    @RequestMapping(value = "/deleteDepartment", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity deleteDepartment(@RequestBody DepartmentPojo details) {
        return ResponseEntity.status(200).body(bsUserService.deleteDepartment(details));
    }

    @RequestMapping(value = "/saveWeekday", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveWeekday(@RequestBody WeekdayPojo weekdayPojo) {
        return ResponseEntity.status(200).body(bsUserService.saveWeekday(weekdayPojo));
    }
    @RequestMapping(value = "/getWeekdayList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getWeekdayList() {
        return ResponseEntity.status(200).body(bsUserService.getWeekdayList());
    }
    @RequestMapping(value = "/getWeekday", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getWeekday() {
        return ResponseEntity.status(200).body(bsUserService.getWeekday());
    }
    @RequestMapping(value = "/deleteWeekday", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity deleteWeekday(@RequestBody WeekdayPojo details) {
        return ResponseEntity.status(200).body(bsUserService.deleteWeekday(details));
    }
    @RequestMapping(value = "/saveFacility", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveFacility(@RequestBody FacilityDetailsPojo pojo) {
        return ResponseEntity.status(200).body(bsUserService.saveFacility(pojo));
    }
    @RequestMapping(value = "/saveIhes", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveIhes(@RequestBody IhesLessonPlanPojo pojo) {
        return ResponseEntity.status(200).body(bsUserService.saveIhes(pojo));
    }
    @RequestMapping(value = "/getFacilityDetails", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getFacilityDetails() {
        return ResponseEntity.status(200).body(bsUserService.getFacilityDetails());
    }
    @RequestMapping(value = "/getTimetable", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getTimetable() {
        return ResponseEntity.status(200).body(bsUserService.getTimetable());
    }
    @RequestMapping(value = "/getIhesPlanList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getIhesPlanList() {
        return ResponseEntity.status(200).body(bsUserService.getIhesPlanList());
    }
    @RequestMapping(value = "/deleteFacility", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity deleteFacility(@RequestBody FacilityDetailsPojo details) {
        return ResponseEntity.status(200).body(bsUserService.deleteFacility(details));
    }

    @RequestMapping(value = "/deleteIhes", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity deleteIhes(@RequestBody IhesLessonPlanPojo details) {
        return ResponseEntity.status(200).body(bsUserService.deleteIhes(details));
    }
    @RequestMapping(value = "/getCountryState", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getCountryState(@RequestParam(value = "countryId", required = false) Long countryName) {
        return ResponseEntity.status(200).body(bsUserService.getCountryState(countryName));
    }
    @RequestMapping(value = "/getdeptEmp", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getdeptEmp(@RequestParam(value = "depId", required = false) String depId) {
        return ResponseEntity.status(200).body(bsUserService.getdeptEmp(depId));
    }

    @RequestMapping(value = "/getStudentListBasedOnClass", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getStudentListBasedOnClass(@RequestParam(value = "id", required = false) Long id) {
        return ResponseEntity.status(200).body(bsUserService.getStudentListBasedOnClass(id));
    }

    @RequestMapping(value = "/getclassSubject", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getclassSubject(@RequestParam(value = "classId", required = false) String classId) {
        return ResponseEntity.status(200).body(bsUserService.getclassSubject(classId));
    }

    @RequestMapping(value = "/getComponentValue", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getComponentValue(@RequestParam(value = "component", required = false) Long component) {
        return ResponseEntity.status(200).body(bsUserService.getcomponentvalue(component));
    }
    @RequestMapping(value="/getMakrs",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity getMakrs(@RequestParam(value ="name")String name){
        return  ResponseEntity.status(200).body(bsUserService.getMakrs(name));
    }
    @RequestMapping(value="/getMarksBasedOnSimpleAssesment",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity getMarksBasedOnSimpleAssesment(@RequestParam(value ="name")String name,@RequestParam(value ="subComponent")String subComponent){
        return  ResponseEntity.status(200).body(bsUserService.getMarksBasedOnSimpleAssesment(name,subComponent));
    }

    @RequestMapping(value="/getMarksStudentAss",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity getMarksStudentAss(@RequestParam(value ="name") Long name){
        return  ResponseEntity.status(200).body(bsUserService.getMarksStudentAss(name));
    }

    @RequestMapping(value = "/getcheckList1", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getcheckList1() {
        return ResponseEntity.status(200).body(bsUserService.getcheckList1());
    }

    @RequestMapping(value = "/getcheckList2", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getcheckList2(@RequestParam(value = "level1Id", required = false) Long level1) {
        return ResponseEntity.status(200).body(bsUserService.getcheckList2(level1));
    }

    @RequestMapping(value = "/getcheckList3", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getcheckList3(@RequestParam(value = "level2Id", required = false) Long level2) {
        return ResponseEntity.status(200).body(bsUserService.getcheckList3(level2));
    }
    @RequestMapping(value = "/getEmployeeCode", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getEmployeeCode(@RequestParam(value = "employeeName", required = false) String employeeName) {
        return ResponseEntity.status(200).body(bsUserService.getEmployeeCode(employeeName));
    }
    @RequestMapping(value = "/getChapterSubject", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getChapterSubject(@RequestParam(value = "subjectId", required = false) String subjectId) {
        return ResponseEntity.status(200).body(bsUserService.getChapterSubject(subjectId));
    }
    @RequestMapping(value = "/getSubCompBasedOnComp", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getSubCompBasedOnComp(@RequestParam(value = "componentId", required = false) Long componentId) {
        return ResponseEntity.status(200).body(bsUserService.getSubCompBasedOnComp(componentId));
    }
    @RequestMapping(value = "/getSubBasedOnClass", method = RequestMethod.POST, produces = "application/json",consumes = "application/json")
    public ResponseEntity getSubBasedOnClass(@RequestBody List<Long> stringList) {
        return ResponseEntity.status(200).body(bsUserService.getSubBasedOnClass(stringList));
    }

    @RequestMapping(value = "/getTermsList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getTermsList(@RequestParam(value = "searchText", required = false) String searchText) {
        return ResponseEntity.status(200).body(bsUserService.getTermsList(searchText));
    }

    @RequestMapping(value = "/getTopicBasedOnChapter", method = RequestMethod.POST, produces = "application/json",consumes = "application/json")
    public ResponseEntity getTopicBasedOnChapter(@RequestBody List<Long> stringList) {
        return ResponseEntity.status(200).body(bsUserService.getTopicBasedOnChapter(stringList));
    }
    @RequestMapping(value = "/getQuesBasedOnTopic", method = RequestMethod.POST, produces = "application/json",consumes = "application/json")
    public ResponseEntity getQuesBasedOnTopic(@RequestBody List<Long> stringList) {
        return ResponseEntity.status(200).body(bsUserService.getQuesBasedOnTopic(stringList));
    }
    @RequestMapping(value = "/getQuesBasedOnTopicAndSubComponent", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getQuesBasedOnTopicAndSubComponent(@RequestParam(value = "topicId", required = false) Long topicId,
                                                             @RequestParam(value = "subComponentId", required = false) Long subComponentId
//                                                             @RequestParam(value = "componentId", required = false) Long componentId ,
//                                                             @RequestParam(value = "lessonPlanId", required = false) Long lessonPlanId
    ) {
        return ResponseEntity.status(200).body(bsUserService.getQuesBasedOnTopicAndSubComponent(topicId,subComponentId));
    }
    @RequestMapping(value = "/getQuesBasedOnSubject", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getQuesBasedOnSubject(@RequestParam(value = "topicId", required = false) Long topicId,
                                                             @RequestParam(value = "subjectId", required = false) Long subjectId) {
        return ResponseEntity.status(200).body(bsUserService.getQuesBasedOnSubject(subjectId));
    }
    @RequestMapping(value = "/getQuesAnswerList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getQuesBasedOnSubject(@RequestParam(value = "questionId", required = false) Long questionId) {
        return ResponseEntity.status(200).body(bsUserService.getQuesAnsweList(questionId));
    }
    @RequestMapping(value = "/getTermSemester", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getTermSemester(@RequestParam(value = "semesterId", required = false) String id) {
        return ResponseEntity.status(200).body(bsUserService.getTermSemester(id));
    }
    @RequestMapping(value = "/getTopicDetails", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getTopicDetails(@RequestParam(value = "levelId", required = false) Long levelId,
                                          @RequestParam(value = "termId", required = false) Long termId,
                                          @RequestParam(value = "subjectId", required = false) Long subjectId,
                                          @RequestParam(value = "chapterId", required = false) Long chapterId,@RequestParam(value = "topicId", required = false) Long topicId) {
        return ResponseEntity.status(200).body(bsUserService.getTopicDetailsList(levelId,termId,subjectId,chapterId,topicId));
    }
    @RequestMapping(value = "/getGradingList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getGradingList() {
        return ResponseEntity.status(200).body(bsUserService.getGradingList());
    }

    @RequestMapping(value = "/getFirstLevelAccountMaster", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getFirstLevelAccountMaster(@RequestParam(value = "accountType", required = false) String subjectName) {
        return ResponseEntity.status(200).body(bsUserService.getFirstLevelAccountMaster(Long.parseLong(subjectName)));
    }
    @RequestMapping(value = "/getSecoundLevelAccount", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getSecoundLevelChartOfAccount(@RequestParam(value = "firstLevelId", required = false) String firstLevelId) {
        return ResponseEntity.status(200).body(bsUserService.secoundLevelChartOfAccount(Long.parseLong(firstLevelId)));
    }

    @RequestMapping(value = "/getClassLevel", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getClassLevel(@RequestParam(value = "levelId", required = false) Long id) {
        return ResponseEntity.status(200).body(bsUserService.getClassLevel(id));
    }

    @RequestMapping(value = "/getSubjectClass", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getSubjectClass(@RequestParam(value = "classesId", required = false) Long classesId) {
        return ResponseEntity.status(200).body(bsUserService.getSubjectClass(classesId));
    }

    @RequestMapping(value = "/getTermListbySemester", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getTermList(@RequestParam(value="semesterId",required = false) String semester) {
        return ResponseEntity.status(200).body(bsUserService.getTermList(semester));
    }
    @RequestMapping(value = "/saveAssessmentQuestions",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity saveAssessmentQuestions(@RequestBody AssessmentQuestionsPojo assessmentQuestionsPojo){
        return ResponseEntity.status(200).body(bsUserService.saveAssessmentQuestions(assessmentQuestionsPojo));
    }

    @RequestMapping(value = "/getAssessmentQuestionsList",method =RequestMethod.POST,produces = "application/json")
    public ResponseEntity getAssessmentQuestionsList(){
        return ResponseEntity.status(200).body(bsUserService.getAssessmentQuestionsList());
    }
    @RequestMapping(value = "/getInstrumentList",method =RequestMethod.POST,produces = "application/json")
    public ResponseEntity getInstrumentList(){
        return ResponseEntity.status(200).body(bsUserService.getInstrumentList());
    }
    @RequestMapping(value = "/editAssessmentQuestions",method =RequestMethod.POST,produces = "application/json")
    public ResponseEntity editAssessmentQuestions(@RequestParam(value = "id")Long id){
        return ResponseEntity.status(200).body(bsUserService.editAssessmentQuestions(id));
    }

    @RequestMapping(value = "/getStateCity", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getStateCity(@RequestParam(value = "stateId", required = false) String stateId) {
        return ResponseEntity.status(200).body(bsUserService.getStateCity(stateId));
    }
    @RequestMapping(value = "/getTopicListbyChapter", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getTopicListbyChapter(@RequestParam(value = "chapterId", required = false) String chapterId) {
        return ResponseEntity.status(200).body(bsUserService.getTopicListbyChapter(chapterId));
    }


    @RequestMapping(value = "/getAssesmentListBasedOnAll", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getAssesmentListBasedOnAll(@RequestParam(value = "semesterId", required = false) String semesterId,
                                                        @RequestParam(value = "term", required = false) String term,
                                                        @RequestParam(value = "level", required = false) String level,
                                                        @RequestParam(value = "classId", required = false) String classId,
                                                        @RequestParam(value = "subject", required = false) String subject,
                                                        @RequestParam(value = "chapterId", required = false) String chapterId,
                                                        @RequestParam(value = "topicId", required = false) String topicId) {
        return ResponseEntity.status(200).body(bsUserService.getAssesmentListBasedOnAll(semesterId,term,level,classId,subject,chapterId,topicId));
    }

    @RequestMapping(value = "/saveAgegroup", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveAgegroup(@RequestBody AgegroupPojo agegroupPojo) {
        return ResponseEntity.status(200).body(bsUserService.saveAgegroup(agegroupPojo));
    }

    @RequestMapping(value = "/getAgegroupList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getAgegroupList(@RequestParam(value = "searchText", required = false) String searchText) {
        return ResponseEntity.status(200).body(bsUserService.getAgegroupList(searchText));
    }
    @RequestMapping(value = "/getStudentAttendanceList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getStudentAttendanceList(@RequestParam(value = "type", required = false) String type,
                                                   @RequestParam(value = "searchText", required = false) String searchText) {
        return ResponseEntity.status(200).body(bsUserService.getStudentAttendanceList(type, searchText));
    }
    @RequestMapping(value = "/deleteAgegroup", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity deleteAgegroup(@RequestBody AgegroupPojo details) {
        return ResponseEntity.status(200).body(bsUserService.deleteAgegroup(details));
    }

    @RequestMapping(value = "/EnquiryFormSave", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity EnquiryFormSave(@RequestBody EnquiryFormPOJO enquiryFormPOJO) throws Exception {

        EnquiryFormPOJO enquiryForm = bsUserService.saveEnqForm(enquiryFormPOJO);
        return ResponseEntity.status(200).body(enquiryForm);
    }
    @RequestMapping(value = "/enquiryDelete", method = RequestMethod.POST)
    public ResponseEntity enquiryDelete(@RequestParam (value = "enqId")Long id) {
        return ResponseEntity.status(200).body(bsUserService.deleteEnqform(id));
    }
    @RequestMapping(value = "/generateEnqNo", method = RequestMethod.POST,
            produces = "text/plain")
    public ResponseEntity generateEnqNo() {
        String abc = bsUserService.generateEnq();
        return ResponseEntity.status(200).body(abc);
    }
    @RequestMapping(value = "/generateEmpNo", method = RequestMethod.POST,
            produces = "text/plain")
    public ResponseEntity generateEmpNo() {
        String abc = bsUserService.generateEmp();
        return ResponseEntity.status(200).body(abc);
    }

    @RequestMapping(value = "/getVisGenNo", method = RequestMethod.POST, produces = "text/plain")
    public ResponseEntity getVisGenNo() {
        String abc = bsUserService.generateVis();
        return ResponseEntity.status(200).body(abc);
    }


    @RequestMapping(value = "/getEnqList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getEnqList(@RequestParam(value = "status") String status,
                                     @RequestParam(value = "grade") String grade) {
        return ResponseEntity.status(200).body(bsUserService.getEnqList(status,grade));
    }

    @RequestMapping(value = "/getFeeLists", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public EntityResponse getFeeLists(
                                     @RequestParam(value = "gradeId") Long gradeId) {
        List<FeeTypeMasterPojo> feeTypeMasterPojos = bsUserService.feeListOfGrade(gradeId);
        return new EntityResponse(HttpStatus.OK.value(), " success", feeTypeMasterPojos);
    }

    @RequestMapping(value = "/AssessmentsSave", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity AssessmentsSave(@RequestBody AssessmentsPojo asessmentPojo) throws Exception {

        AssessmentsPojo assessments = bsUserService.saveAssessments(asessmentPojo);
        return ResponseEntity.status(200).body(assessments);
    }
    @RequestMapping(value = "/getAssessmentsList", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public EntityResponse getAssessmentsList(
            @RequestParam(value = "enquiryId") Long enq) {
        AssessmentsPojo assessments = bsUserService.getAssessMentList(enq);
        return new EntityResponse(HttpStatus.OK.value(), "success", assessments);
    }

    @RequestMapping(value = "/counslarSave", method = RequestMethod.POST)
    public ResponseEntity counslarSave(@RequestParam(value = "enquiryId") Long gradeId,
                                       @RequestParam(value = "remarks") String remarks,
                                       @RequestParam(value = "grade") String grade) throws Exception {

        bsUserService.saveCounslar(gradeId,remarks,grade);
        return ResponseEntity.status(200).body("Success");
    }

    @RequestMapping(value = "/saveTerm", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveTerm(@RequestBody TermPojo termPojo) {
        return ResponseEntity.status(200).body(bsUserService.saveTerm(termPojo));
    }

    @RequestMapping(value = "/saveList", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveList(@RequestBody GradingMasterPojo gradingMasterPojo) {
        return ResponseEntity.status(200).body(bsUserService.saveList(gradingMasterPojo));
    }

    @RequestMapping(value = "/saveAcceptance", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveAcceptance(@RequestBody BankDetailsPojo bankDetailsPojo) {
        return ResponseEntity.status(200).body(bsUserService.saveAcceptance(bankDetailsPojo));
    }
@RequestMapping(value = "/saveAssCre", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveAssCre(@RequestBody AssesmentCreatorPojo assesmentCreatorPojo) {
        return ResponseEntity.status(200).body(bsUserService.saveAssCre(assesmentCreatorPojo));
    }

 @RequestMapping(value = "/saveEmployee", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveEmployee(@RequestBody EmployeePojo employeePojo) {
        return ResponseEntity.status(200).body(bsUserService.saveEmployee(employeePojo));
    }

    @RequestMapping(value = "/getEmployeeList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getEmployeeList(@RequestParam(value = "searchText", required = false) String searchText) {
        return ResponseEntity.status(200).body(bsUserService.getEmployeeList(searchText));
    }
    @RequestMapping(value = "/getPeriodList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getPeriodList() {
        return ResponseEntity.status(200).body(bsUserService.getPeriodList());
    }
    @RequestMapping(value = "/saveTeachingObservation", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveTeachingObservation(@RequestBody TeachingObservationDTO teachingObservationDTO) {
        return ResponseEntity.status(200).body(bsUserService.saveTeachingObservation(teachingObservationDTO));
    }

    @RequestMapping(value = "/saveTeacherClearance", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveTeacherClearance(@RequestBody TeacherPojo teacherClearanceDTO) {
        return ResponseEntity.status(200).body(bsUserService.saveTeacherClearance(teacherClearanceDTO));
    }

    @RequestMapping(value = "/getTeacherObservationList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getTeacherObservationList(@RequestParam(value = "searchText", required = false) String searchText) {
        return ResponseEntity.status(200).body(bsUserService.getTeacherObservationList(searchText));
    }


    @RequestMapping(value = "/getTeacherClearanceList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getTeacherClearanceList(@RequestParam(value = "searchText", required = false) String searchText) {
        return ResponseEntity.status(200).body(bsUserService.getTeacherClearanceList(searchText));
    }

    @RequestMapping(value = "/deleteTerm", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity deleteTerm(@RequestBody TermPojo details) {
        return ResponseEntity.status(200).body(bsUserService.deleteTerm(details));
    }
//    @RequestMapping(value = "/deleteCreator", method = RequestMethod.POST, consumes = "application/json")
//    public ResponseEntity deleteCreator(@RequestParam (value = "acreatorId")Long id) {
//        return ResponseEntity.status(200).body(bsUserService.deleteCreator(id));
//    }


    @RequestMapping(value = "/deleteTeacherClearance", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity deleteTeacherClearance(@RequestBody TeacherPojo details) {
        return ResponseEntity.status(200).body(bsUserService.deleteTeacherClearance(details));
    }

    @RequestMapping(value = "/DeleteTeacherObservation", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity DeleteTeacherObservation(@RequestBody TeachingObservationDTO details) {
        return ResponseEntity.status(200).body(bsUserService.DeleteTeacherObservation(details));
    }

    @RequestMapping(value = "/deleteEmployee", method = RequestMethod.POST, produces = "application/json")
    public void deleteEmployee(@RequestParam(value = "employeeId", required = false) Long id) {
        bsUserService.deleteEmployee(id);
    }

    @RequestMapping(value = "/deleteApproval", method = RequestMethod.POST, produces = "application/json")
    public void deleteApproval(@RequestParam(value = "approvalId", required = false) Long id) {
        bsUserService.deleteApproval(id);
    }

    @RequestMapping(value = "/saveSubject", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveSubject(@RequestBody SubjectPojo subjectPojo) {
        return ResponseEntity.status(200).body(bsUserService.saveSubject(subjectPojo));
    }

 @RequestMapping(value = "/saveSubjectCategory", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveSubjectCategory(@RequestBody SubjectCategoryPojo subjectCategoryPojo) {
        return ResponseEntity.status(200).body(bsUserService.saveSubjectCategory(subjectCategoryPojo));
    }

    @RequestMapping(value = "/getSubjectList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getSubjectList(@RequestParam(value = "searchText", required = false) String searchText) {
        return ResponseEntity.status(200).body(bsUserService.getSubjectList(searchText));
    }

    @RequestMapping(value = "/getSubjectCategoryList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getSubjectCategoryList(@RequestParam(value = "searchText", required = false) String searchText) {
        return ResponseEntity.status(200).body(bsUserService.getSubjectCategoryList(searchText));
    }

    @RequestMapping(value = "/deleteSubject", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity deleteSubject(@RequestBody SubjectPojo details) {
        return ResponseEntity.status(200).body(bsUserService.deleteSubject(details));
    }

    @RequestMapping(value = "/deleteSubjectCategory", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity deleteSubjectCategory(@RequestBody SubjectCategoryPojo details) {
        return ResponseEntity.status(200).body(bsUserService.deleteSubjectCategory(details));
    }
    @RequestMapping(value = "/saveChapter", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveChapter(@RequestBody ChapterPojo chapterPojo) {
        return ResponseEntity.status(200).body(bsUserService.saveChapter(chapterPojo));
    }
    @RequestMapping(value = "/getChapterList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getChapterList(@RequestParam(value = "searchText", required = false) String searchText) {
        return ResponseEntity.status(200).body(bsUserService.getChapterList(searchText));
    }

    @RequestMapping(value = "/deleteChapter", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity deleteChapter(@RequestBody ChapterPojo details) {
        return ResponseEntity.status(200).body(bsUserService.deleteChapter(details));
    }
    @RequestMapping(value = "/saveTopic", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveTopic(@RequestBody TopicPojo topicPojo) {
        return ResponseEntity.status(200).body(bsUserService.saveTopic(topicPojo));
    }
    @RequestMapping(value = "/saveAssSub", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveAssSub(@RequestBody AssesmentSubPojo subPojo,@RequestParam(value = "id")Long id) {
        return ResponseEntity.status(200).body(bsUserService.saveAssSub(subPojo,id));
    }
    @RequestMapping(value = "/saveStudentAss", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveStudentAss(@RequestBody StudentAssesmentMarksPojo subPojo) {
        return ResponseEntity.status(200).body(bsUserService.saveStudentAss(subPojo));
    }
    @RequestMapping(value = "/saveMarksSubmission", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveMarksSubmission(@RequestBody MarksSubmissionPojo subPojo) {
        return ResponseEntity.status(200).body(bsUserService.saveMarksSubmission(subPojo));
    }
    @RequestMapping(value = "/saveAssLessonPlan", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveAss11(@RequestBody AssesmentSubPojo subPojo,@RequestParam(value = "id")Long id) {
        return ResponseEntity.status(200).body(bsUserService.saveAssLessonPlan(subPojo,id));
    }

    @RequestMapping(value = "/getPaginatedTopicList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getPaginatedTopicList(@RequestParam(value = "searchText", required = false) String searchText,@RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getPaginatedTopicList(basePojo,searchText));
    }


    @RequestMapping(value = "/edit",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity edit(@RequestParam(value = "id")Long id){
        return ResponseEntity.status(200).body(bsUserService.edit(id));
    }
    @RequestMapping(value = "/deleteTopic", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity deleteTopic(@RequestBody TopicPojo details) {
        return ResponseEntity.status(200).body(bsUserService.deleteTopic(details));
    }
 @RequestMapping(value = "/deleteTT", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity deleteTT(@RequestBody TimeTablePojo timeTablePojo) {
        return ResponseEntity.status(200).body(bsUserService.deleteTT(timeTablePojo));
    }

    @RequestMapping(value = "/deleteList", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity deleteList(@RequestBody GradingMasterPojo details) {
        return ResponseEntity.status(200).body(bsUserService.deleteList(details));
    }
    @RequestMapping(value = "/deleteDes", method = RequestMethod.POST, produces = "application/json")
    public void deleteDes(@RequestParam(value = "designationId", required = false) Long id) {
        bsUserService.deleteDes(id);
    }
    @RequestMapping(value = "/addKIVModal", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity addKIVModal(@RequestParam(value = "hrId", required = false) Long hrId) {
        return ResponseEntity.status(200).body(bsUserService.addKIVModal(hrId));
    }
    @RequestMapping(value = "/addInterviewModal", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity addInterviewModal(@RequestParam(value = "hrId", required = false) Long hrId) {
        return ResponseEntity.status(200).body(bsUserService.addInterviewModal(hrId));
    }
    @RequestMapping(value = "/add2InterviewModal", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity add2InterviewModal(@RequestParam(value = "hrId", required = false) Long hrId) {
        return ResponseEntity.status(200).body(bsUserService.add2InterviewModal(hrId));
    }
    @RequestMapping(value = "/offerLetterInterviewModal", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity offerLetterInterviewModal(@RequestParam(value = "hrId", required = false) Long hrId) {
        return ResponseEntity.status(200).body(bsUserService.offerLetterInterviewModal(hrId));
    }
    @RequestMapping(value = "/hrDetailsModal", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity hrDetailsModal(@RequestParam(value = "hrId", required = false) Long hrId) {
        return ResponseEntity.status(200).body(bsUserService.hrDetailsModal(hrId));
    }
    @RequestMapping(value = "/acceptanceDetails", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity acceptanceDetails(@RequestParam(value = "hrId", required = false) Long hrId){
        return ResponseEntity.status(200).body(bsUserService.acceptanceDetails(hrId));
    }


    @RequestMapping(value = "/saveLessonPlan", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveLessonPlan(@RequestBody LessonPlanPojo lessonPlanPojo) {
        return ResponseEntity.status(200).body(bsUserService.saveLessonPlan(lessonPlanPojo));
    }
    @RequestMapping(value = "/saveLessonPlanAssesmentDetails", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveLessonPlanAssesmentDetails(@RequestBody LessonPlanPojo lessonPlanPojo) {
        return ResponseEntity.status(200).body(bsUserService.saveLessonPlanDetails(lessonPlanPojo));
    }

    @RequestMapping(value = "/saveSow", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveSow(@RequestBody SowPojo sowPojo) {
        return ResponseEntity.status(200).body(bsUserService.saveSow(sowPojo));
    }
    @RequestMapping(value = "/getLessonPlanList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getLessonPlanList() {
        return ResponseEntity.status(200).body(bsUserService.getLessonPlanList());
    }


    @RequestMapping(value = "/getSowList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getSowList() {
        return ResponseEntity.status(200).body(bsUserService.getSowList());
    }

    @RequestMapping(value = "/deleteSow", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity deleteSow(@RequestBody SowPojo details) {
        return ResponseEntity.status(200).body(bsUserService.deleteSow(details));
    }
    @RequestMapping(value = "/deleteLessonPlan", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity deleteLessonPlan(@RequestBody LessonPlanPojo details) {
        return ResponseEntity.status(200).body(bsUserService.deleteLessonPlan(details));
    }
    @RequestMapping(value = "/getNotificatuiPaginatedList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getNotificatuiPaginatedList(@RequestParam(value = "type", required = false) String type,
                                                      @RequestParam(value = "searchText", required = false) String searchText,
                                                      @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getNotificatuiPaginatedList(type, basePojo, searchText));
    }
    @RequestMapping(value = "/getEmailPaginatedList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getEmailPaginatedList(@RequestParam(value = "type", required = false) String type,
                                                @RequestParam(value = "searchText", required = false) String searchText,
                                                @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getEmailPaginatedList(type, basePojo, searchText));
    }
    @RequestMapping(value = "/getTrainingModulePaginatedList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getTrainingModulePaginatedList(@RequestParam(value = "type", required = false) String type,
                                                         @RequestParam(value = "searchText", required = false) String searchText,
                                                         @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getTrainingModulePaginatedList(type, basePojo, searchText));
    }

    @RequestMapping(value = "/getDoctorPaginatedList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getDoctorPaginatedList(@RequestParam(value = "type", required = false) String type,
                                                 @RequestParam(value = "searchText", required = false) String searchText,
                                                 @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getDoctorPaginatedList(type, basePojo, searchText));
    }

    @RequestMapping(value = "/getSemesterPaginatedList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getSemesterPaginatedList(@RequestParam(value = "type", required = false) String type,
                                          @RequestParam(value = "searchText", required = false) String searchText,
                                          @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getSemesterPaginatedList(type, basePojo, searchText));
    }
    @RequestMapping(value = "/getClassPaginatedList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getClassPaginatedList(@RequestParam(value = "type", required = false) String type,
                                                @RequestParam(value = "searchText", required = false) String searchText,
                                                @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getClassPaginatedList(type, basePojo, searchText));
    }
    @RequestMapping(value = "/getSuppliersPaginatedList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getSuppliersPaginatedList(@RequestParam(value = "type", required = false) String type,
                                                    @RequestParam(value = "searchText", required = false) String searchText,
                                                    @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getSuppliersPaginatedList(type, basePojo, searchText));
    }
    @RequestMapping(value = "/getRemaindersPaginatedList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getRemaindersPaginatedList(@RequestParam(value = "type", required = false) String type,
                                                     @RequestParam(value = "searchText", required = false) String searchText,
                                                     @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getRemaindersPaginatedList(type, basePojo, searchText));
    }
    @RequestMapping(value = "/getDesignationPaginatedList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getDesignationPaginatedList(@RequestParam(value = "type", required = false) String type,
                                                   @RequestParam(value = "searchText", required = false) String searchText,
                                                   @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getDesignationPaginatedList(type, basePojo, searchText));
    }

    @RequestMapping(value = "/getPaginatedLeaveList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getPaginatedLeaveList(@RequestParam(value = "type", required = false) String type,
                                                   @RequestParam(value = "searchText", required = false) String searchText,
                                                   @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getPaginatedLeaveList(type, basePojo, searchText));
    }

  @RequestMapping(value = "/getContactList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getContactList(@RequestParam(value = "type", required = false) String type,
                                                   @RequestParam(value = "searchText", required = false) String searchText,
                                                   @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getContactList(type, basePojo, searchText));
    }

    @RequestMapping(value = "/getPaginatedAcctGrpList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getPaginatedAcctGrpList(@RequestParam(value = "type", required = false) String type,
                                                   @RequestParam(value = "searchText", required = false) String searchText,
                                                   @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getPaginatedAcctGrpList(type, basePojo, searchText));
    }

    @RequestMapping(value = "/getPaginatedAcctTypeList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getPaginatedAcctTypeList(@RequestParam(value = "type", required = false) String type,
                                                   @RequestParam(value = "searchText", required = false) String searchText,
                                                   @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getPaginatedAcctTypeList(type, basePojo, searchText));
    }
    @RequestMapping(value = "/getTrainerPaginatedList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getTrainerPaginatedList(@RequestParam(value = "type", required = false) String type,
                                                   @RequestParam(value = "searchText", required = false) String searchText,
                                                   @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getTrainerPaginatedList(type, basePojo, searchText));
    }

    @RequestMapping(value = "/getDetailsByName", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getDetailsByName(@RequestParam(value = "name") String name) {
        return ResponseEntity.status(200).body(bsUserService.getDetailsByName(name));
    }
    @RequestMapping(value = "/getDetailByName", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getDetailByName(@RequestParam(value = "name") String name) {
        return ResponseEntity.status(200).body(bsUserService.getDetailByName(name));
    }
    @RequestMapping(value = "/saveEarning", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveEarning(@RequestBody EarningsPojo earningsPojo) {
        return ResponseEntity.status(200).body(bsUserService.saveEarning(earningsPojo));
    }

    @RequestMapping(value = "/getEarningList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getEarningList(@RequestParam(value = "type", required = false) String type,
                                         @RequestParam(value = "searchText", required = false) String searchText) {
        return ResponseEntity.status(200).body(bsUserService.getEarningList(type, searchText));
    }
    @RequestMapping(value = "/deleteEarning", method = RequestMethod.POST, produces = "application/json")
    public void deleteEarning(@RequestParam(value = "earningId", required = false) Long id) {
        bsUserService.deleteEarning(id);
    }
    @RequestMapping(value = "/saveDeduction", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveDeduction(@RequestBody DeductionPojo deductionPojo) {
        return ResponseEntity.status(200).body(bsUserService.saveDeduction(deductionPojo));
    }
    @RequestMapping(value = "/getDeductionList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getDeductionList(@RequestParam(value = "type", required = false) String type,
                                           @RequestParam(value = "searchText", required = false) String searchText) {
        return ResponseEntity.status(200).body(bsUserService.getDeductionList(type, searchText));
    }
    @RequestMapping(value = "/deleteDeduction", method = RequestMethod.POST, produces = "application/json")
    public void deleteDeduction(@RequestParam(value = "deductionId", required = false) Long id) {
        bsUserService.deleteDeduction(id);
    }
    @RequestMapping(value = "/editEmployee", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity editEmployee(@RequestParam(value = "employeeName", required = false) String employeeName) {
        return ResponseEntity.status(200).body(bsUserService.editEmployee(employeeName));
    }

    @RequestMapping(value = "/saveForm", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveForm(@RequestBody ExitInterviewformPojo exitInterviewformPojo) {
        return ResponseEntity.status(200).body(bsUserService.saveForm(exitInterviewformPojo));
    }

    @RequestMapping(value = "/getEInterviewList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getEInterviewList(@RequestParam(value = "type", required = false) String type,
                                           @RequestParam(value = "searchText", required = false) String searchText) {
        return ResponseEntity.status(200).body(bsUserService.getEInterviewList(type, searchText));
    }

    @RequestMapping(value = "/deleteExitForm", method = RequestMethod.POST, produces = "application/json")
    public void deleteExitForm(@RequestParam(value = "einterviewFormId", required = false) Long id) {
        bsUserService.deleteExitForm(id);
    }

    @RequestMapping(value = "/savePayroll", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity savePayroll(@RequestBody PayrollPojo pojo) {
        return ResponseEntity.status(200).body(bsUserService.savePayroll(pojo));
    }

    @RequestMapping(value = "/getPayrollList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getPayrollList(@RequestParam(value = "type", required = false) String type,
                                         @RequestParam(value = "searchText", required = false) String searchText) {
        return ResponseEntity.status(200).body(bsUserService.getPayrollList(type, searchText));
    }

    @RequestMapping(value = "/DeletePayroll", method = RequestMethod.POST, produces = "application/json")
    public void DeletePayroll(@RequestParam(value = "EmpId", required = false) Long id) {
        bsUserService.DeletePayroll(id);
    }

    @RequestMapping(value = "/getPayrollByName", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getPayrollByName(@RequestParam(value = "name") String name) {
        return ResponseEntity.status(200).body(bsUserService.getPayrollByName(name));
    }
    @RequestMapping(value = "/getAssessorByName", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getAssessorByName(@RequestParam(value = "name") String name) {
        return ResponseEntity.status(200).body(bsUserService.getAssessorByName(name));
    }

    @RequestMapping(value = "/getEmployeeByName", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getEmployeeByName(@RequestParam(value = "name") String name) {
        return ResponseEntity.status(200).body(bsUserService.getEmployeeByName(name));
    }
    @RequestMapping(value = "/saveformsetup", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveformsetup(@RequestBody FormsetupDTO formsetupDTO) {
        return ResponseEntity.status(200).body(bsUserService.saveFormSetup(formsetupDTO));
    }
    @RequestMapping(value = "/getFormsetupList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getFormsetupList() {
        return ResponseEntity.status(200).body(bsUserService.getFormSetupList());
    }
    @RequestMapping(value = "/editFormSetupMethod", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity editFormSetupMethod(@RequestParam(value = "typeName", required = false) String typeName) {
        return ResponseEntity.status(200).body(bsUserService.editFormsetupMethod(typeName));
    }
    @RequestMapping(value = "/getPaginatedFormsetupList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getPaginatedFormSetupList(@RequestParam(value = "searchText")String searchText,
                                                    @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getPaginatedFormSetUpList(basePojo,searchText));
    }
    @RequestMapping(value = "/getPaymentMethodList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getPAymentMethodList(@RequestParam(value = "type", required = false) String type,
                                               @RequestParam(value="searchText",required = false)String searchText) {
        return ResponseEntity.status(200).body(bsUserService.getPaymentMethodList(type,searchText));
    }
    @RequestMapping(value = "/savePaymentMethod", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity savePaymentMethod(@RequestBody PaymentMethodDTO paymentMethodDTO) {
        return ResponseEntity.status(200).body(bsUserService.savePaymentMethod(paymentMethodDTO));
    }

    @RequestMapping(value = "/deletePaymentMethod", method = RequestMethod.POST, produces = "application/json")
    public void deletePaymentMethod(@RequestParam(value = "id", required = false) Long id) {
        bsUserService.deletePaymentMethod(id);
    }

    @RequestMapping(value = "/deleteAS", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity deleteAS(@RequestBody AssesmentSubPojo details) {
        return ResponseEntity.status(200).body(bsUserService.deleteAS(details));
    }

    @RequestMapping(value = "/deleteAssessmentCreator", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity deleteAssessmentCreator(@RequestParam(value = "id") Long id) {
        return ResponseEntity.status(200).body(bsUserService.deleteAssessmentCreator(id));
    }

    @RequestMapping(value = "/saveAttendance", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveAttendance(@RequestBody AttendanceMgtPojo attendanceMgtPojo) {
        return ResponseEntity.status(200).body(bsUserService.saveAttendance(attendanceMgtPojo));
    }

    @RequestMapping(value = "/saveStudentAttendance", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveStudentAttendance(@RequestBody StudentAttendencePojo studentAttendencePojo) {
        return ResponseEntity.status(200).body(bsUserService.saveStudentAttendance(studentAttendencePojo));
    }


    @RequestMapping(value = "/getAttendanceList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getAttendanceList(@RequestParam(value = "type", required = false) String type,
                                         @RequestParam(value = "searchText", required = false) String searchText) {
        return ResponseEntity.status(200).body(bsUserService.getAttendanceList(type, searchText));
    }
    @RequestMapping(value = "/deleteAttendance", method = RequestMethod.POST, produces = "application/json")
    public void deleteAttendance(@RequestParam(value = "aId", required = false) Long id) {
        bsUserService.deleteAttendance(id);
    }

    @RequestMapping(value = "/deleteStudentAttendence", method = RequestMethod.POST, produces = "application/json")
    public void deleteStudentAttendence(@RequestParam(value = "studentAttendenceId", required = false) Long studentAttendenceId) {
        bsUserService.deleteStudentAttendence(studentAttendenceId);
    }

    @RequestMapping(value = "/editPaymentMethod", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity editPaymentMethod(@RequestParam(value = "id", required = false) Long id) {
        return ResponseEntity.status(200).body(bsUserService.editPaymentMethod(id));
    }

    @RequestMapping(value = "/getPaginatedPayMethodList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getPaginatedPayMethodList(@RequestParam(value = "type", required = false) String type,
                                                    @RequestParam(value = "searchText",required = false) String searchText,
                                                    @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getPaginatedPayMethodList(type,basePojo,searchText));
    }

    @RequestMapping(value = "/getAccount",method = RequestMethod.GET,produces="application/json")
    public ResponseEntity getAccount(@RequestParam(value = "accountCode") String accountCode) {
        List<AccountMasterDTO> AccountDTOList = bsUserService.retrieveAccountMasterList(accountCode);
        return ResponseEntity.status(200).body(AccountDTOList);
    }

    @RequestMapping(value = "/getPaymentTypes", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getPaymentTypes() {
        return ResponseEntity.status(200).body(bsUserService.getPaymentTypes());
    }
    @RequestMapping(value = "/getPaginatedTermList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getPaginatedTermList(@RequestParam(value = "type", required = false) String type,
                                                   @RequestParam(value = "searchText", required = false) String searchText,
                                                   @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getPaginatedTermList(type, basePojo, searchText));
    }
    @RequestMapping(value = "/getPaginatedSubjectList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getPaginatedSubjectList(@RequestParam(value = "type", required = false) String type,
                                                   @RequestParam(value = "searchText", required = false) String searchText,
                                                   @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getPaginatedSubjectList(type, basePojo, searchText));
    }

   @RequestMapping(value = "/getPaginatedSubjectCategoryList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getPaginatedSubjectCategoryList(@RequestParam(value = "type", required = false) String type,
                                                   @RequestParam(value = "searchText", required = false) String searchText,
                                                   @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getPaginatedSubjectCategoryList(type, basePojo, searchText));
    }

    @RequestMapping(value = "/getList",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity getList(@RequestParam(value = "fromDate")String  fromdate,@RequestParam(value = "toDate")String todate) throws Exception{
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd/MM/yyyy");
        java.util.Date from= simpleDateFormat.parse(fromdate);
        java.util.Date to =simpleDateFormat.parse(todate);
     return ResponseEntity.status(200).body(bsUserService.getStudentAttendanceReportList(from,to));
    }

    @RequestMapping(value = "/getstdListBasedOnClassAndLevel",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity getstdListBasedOnClassAndLevel(@RequestParam(value = "level")String level,
                                                         @RequestParam(value = "class",required = false)String classes){
        return ResponseEntity.status(200).body(bsUserService.getstdListBasedOnClassAndLevel(level,classes));
    }
    @RequestMapping(value = "/getPaginatedChapterList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getPaginatedChapterList(@RequestParam(value = "type", required = false) String type,
                                                   @RequestParam(value = "searchText", required = false) String searchText,
                                                   @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getPaginatedChapterList(type, basePojo, searchText));
    }
    @RequestMapping(value = "/getPaginatedEarningList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getPaginatedEarningList(@RequestParam(value = "type", required = false) String type,
                                                   @RequestParam(value = "searchText", required = false) String searchText,
                                                   @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getPaginatedEarningList(type, basePojo, searchText));
    }
    @RequestMapping(value = "/getPaginatedDeductionList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getPaginatedDeductionList(@RequestParam(value = "type", required = false) String type,
                                                   @RequestParam(value = "searchText", required = false) String searchText,
                                                   @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getPaginatedDeductionList(type, basePojo, searchText));
    }
    @RequestMapping(value = "/getpaginatedCheckList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getpaginatedCheckList(@RequestParam(value = "type", required = false) String type,
                                                   @RequestParam(value = "searchText", required = false) String searchText,
                                                   @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getpaginatedCheckList(type, basePojo, searchText));
    }

    @RequestMapping(value = "/saveBank", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveBank(@RequestBody BankDTO bank) {
        return ResponseEntity.status(200).body(bsUserService.saveBank(bank));
    }

    @RequestMapping(value = "/getStudentNameList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getStudentNameList(@RequestParam(value = "name") String name) {
        return ResponseEntity.status(200).body(bsUserService.getStudentNameList(name));
    }

    @RequestMapping(value = "/deleteBank", method = RequestMethod.POST, produces = "application/json")
    public void deleteBank(@RequestParam(value = "bankName", required = false) String bankName) {
        bsUserService.deleteBank(bankName);
    }
    @RequestMapping(value = "/deleteVisitor", method = RequestMethod.POST, produces = "application/json")
    public void deleteVisitor(@RequestParam(value = "vistorId", required = false) Long vistorId) {
        bsUserService.deleteVisitor(vistorId);
    }

    @RequestMapping(value = "/deleteComponent", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity deleteComponent(@RequestBody ComponentPojo details) {
        return ResponseEntity.status(200).body(bsUserService.deleteComponent(details));
    }

    @RequestMapping(value = "/deleteCountry", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity deleteCountry(@RequestBody CountryDTO details) {
        return ResponseEntity.status(200).body(bsUserService.deleteCountry(details));
    }
    @RequestMapping(value = "/deletePeriod", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity deletePeriod(@RequestBody PeriodsDTO details) {
        return ResponseEntity.status(200).body(bsUserService.deletePeriod(details));
    }

    @RequestMapping(value = "/editBank", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity editBank(@RequestParam(value = "bankName", required = false) String bankName) {
        return ResponseEntity.status(200).body(bsUserService.editBank(bankName));
    }
    @RequestMapping(value = "/getPaginatedBankList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getPaginatedBankList(@RequestParam(value = "type", required = false) String type,
                                               @RequestParam(value = "searchText",required = false) String searchText,
                                               @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getPaginatedBankList(type,basePojo,searchText));
    }
    @RequestMapping(value = "/getBankList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getBankList(@RequestParam(value = "type", required = false) String type,
                                      @RequestParam(value = "searchText", required = false) String searchText) {
        return ResponseEntity.status(200).body(bsUserService.getBankList(type,searchText));
    }
    @RequestMapping(value = "/saveVisitor", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity saveVisitor(@RequestBody VisitorEntryPojo visitorEntryPojo) {
        return ResponseEntity.status(200).body(bsUserService.saveVisitor(visitorEntryPojo));
    }
    @RequestMapping(value = "/getVisitorList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getVisitorList(@RequestParam(value = "type", required = false) String type,
                                      @RequestParam(value = "searchText", required = false) String searchText) {
        return ResponseEntity.status(200).body(bsUserService.getVisitorList(type,searchText));
    }
    @RequestMapping(value = "/viewLedger", method = RequestMethod.GET)
    public List<ViewLedgerResponsePojo> getViewLedger(@RequestParam("accountMasterId") Long accountMasterId) {
        return bsUserService.getViewLedger(accountMasterId);
    }
    @RequestMapping(value = "/savePermission", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public ResponseEntity savePermission(@RequestBody PermissionPojo permissionPojo) throws Exception {
        return ResponseEntity.status(200).body(bsUserService.savePermission(permissionPojo));
    }
    @RequestMapping(value = "/getPaginationPermission", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getPaginationPermission(@RequestParam(value = "type", required = false) String type,
                                                  @RequestParam(value = "searchText", required = false) String searchText,
                                                  @RequestBody BasePojo basePojo) {
        return ResponseEntity.status(200).body(bsUserService.getPaginationPermission(type, basePojo, searchText));
    }
    @RequestMapping(value = "/getPermissionList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getPermissionList() {
        return ResponseEntity.status(200).body(bsUserService.getPermissionList());
    }
    @RequestMapping(value="/deletePermission", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity deletePermission(@RequestBody PermissionPojo pojo){
        return  ResponseEntity.status(200).body(bsUserService.deletePermission(pojo));
    }

    @RequestMapping(value = "/getPermissionLevelsList", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity getPermissionLevelsList() {
        return ResponseEntity.status(200).body(bsUserService.getPermissionLevelsList());
    }

//    @RequestMapping(value = "/trialBalance", method = RequestMethod.GET)
//    public List<ViewLedgerResponsePojo> getTrialBalance() {
//        return bsUserService.getTrialBalance();
//    }
}
