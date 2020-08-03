package com.hyva.bsfms.bs.bsrespositories;

import com.hyva.bsfms.bs.bsentities.Chapters;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import schemasMicrosoftComOfficeOffice.STInsetMode;

import java.util.List;

public interface ChapterRepository extends JpaRepository<Chapters,Long> {
    Chapters findByChapterName(String name);
    Chapters findByChapterId(Long Id);
    Chapters findAllByLevelIdAndClassIdAndSubjectIdAndChapterName(Long levelid, Long classid, Long subjectId, String name);
    Chapters findAllByLevelIdAndClassIdAndSubjectIdAndChapterNameAndChapterIdNotIn(Long levelid, Long classid, Long subjectId, String name,Long id);
    List<Chapters> findAllByChapterName(String name);
    List<Chapters> findAllBySubjectId(Long id);
    List<Chapters> findAllBySubjectIdAndStatus(Long id,String status);
    List<Chapters> findAllByChapterNameContainingAndStatus(String name,String status);
    Chapters findFirstByChapterNameContainingAndStatus(String name, String status, Sort sort);
    List<Chapters> findAllByChapterNameContainingAndStatus(String name, String status, Pageable pageable);
    Chapters findFirstByStatus(String status,Sort sort);
    List<Chapters> findAllByStatus(String status, Pageable pageable);
    List<Chapters> findAllByStatus(String status);



}
