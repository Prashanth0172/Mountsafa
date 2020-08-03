package com.hyva.bsfms.util;

import com.hyva.bsfms.bs.Quartz.TenantContext;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;

/**
 * Created by uday on 21/7/17.
 */
@Component("fileSystemOperations")
public class FileSystemOperations {
    private final Logger log = Logger.getLogger(getClass());

    private static String resourceDir;
    private static String imagesDir;
    private static String backupDir;

    @PostConstruct
    public String init() {
        if (!StringUtils.isBlank(resourceDir)) {
            File file = new File(resourceDir + File.separator + "MountSafa" + File.separator);
            file.mkdir();
        } else {
            resourceDir = System.getProperty("user.home") + File.separator + "MountSafa" + File.separator;
            File file = new File(resourceDir);
            if (!file.exists()) {
                file.mkdir();
            }

        }
        log.info("resourceDir = " + resourceDir);
        File file = new File(resourceDir + File.separator + "image" + File.separator);
        if (!file.exists()) {
            file.mkdir();
        }

        File backupFileDir = new File(resourceDir + File.separator + "BackupFolder" + File.separator);
        if (!backupFileDir.exists()) {
            backupFileDir.mkdir();
        }
        backupDir = backupFileDir.getAbsolutePath();
        imagesDir = file.getAbsolutePath();
        return resourceDir;
    }


    public static String getImagesDir(String fileName) {
        return imagesDir + File.separator + TenantContext.getCurrentTenant() + File.separator;
    }
    public static String getImagesDirItem() {
        File file=new File(imagesDir + File.separator + TenantContext.getCurrentTenant() + File.separator);
        file.mkdir();
        return imagesDir + File.separator + TenantContext.getCurrentTenant() + File.separator;
    }

    public static String getImagesDirWithoutTenant() {
        return imagesDir;
    }

    public static String getBackupDir() {
        return backupDir;
    }


    public static String deleteImage(String fileName) {
        File file = new File(resourceDir + fileName);
        if (file.exists()) {
            file.delete();
        }
        return file.getAbsolutePath();
    }

    public static String getResourceDir() {
        return resourceDir;
    }

    @Value("${file.system.dir}")
    public void setResourceDir(String resourceDir) {
        FileSystemOperations.resourceDir = resourceDir;
    }
}
