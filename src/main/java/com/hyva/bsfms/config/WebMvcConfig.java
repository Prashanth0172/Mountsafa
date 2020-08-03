package com.hyva.bsfms.config;

import com.hyva.bsfms.Interceptor.UserInterceptor;
import com.hyva.bsfms.util.FileSystemOperations;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import java.io.File;

@Configuration
public class WebMvcConfig extends WebMvcConfigurerAdapter{

    Logger logger = Logger.getLogger(com.hyva.bsfms.config.WebMvcConfig.class);
    @Autowired
    UserInterceptor requestInterceptor;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(requestInterceptor)
                .addPathPatterns("/**");
    }
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        String imageDir = FileSystemOperations.getImagesDirWithoutTenant();
        registry.addResourceHandler("/image/**")
                .addResourceLocations("file:" + imageDir + File.separator);
    }
}
