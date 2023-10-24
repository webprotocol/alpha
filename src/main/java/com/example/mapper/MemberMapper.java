package com.example.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.example.model.Member;

@Mapper
public interface MemberMapper {

	@Select("select * from member where id = #{id}")
	Member selectById(String id);
	
}
