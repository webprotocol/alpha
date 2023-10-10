package com.example.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.SelectProvider;
import org.apache.ibatis.jdbc.SQL;

import com.example.model.Emp;

@Mapper
public interface EmpMapper {

	@Select("select * from emp")
	List<Emp> selectAll();
	
	@Select("""
				select *
				from emp
				where deptno = #{deptno}
			 """)
	List<Emp> selectByDeptno(Integer deptno);
	
	@SelectProvider(type = SqlProvider.class, method = "selectBySearch")
	List<Emp> selectBySearch(Integer deptno, String search);
	
	public static class SqlProvider {
		public static String selectBySearch(Integer deptno, String search) {
			var s = new SQL();
			s.SELECT("*")
			 .FROM("emp");
			
			if (deptno != null) {
				s.WHERE(String.format("deptno = %d", deptno));
			}
			
			if (search != null && !search.trim().equals("")) {
				s.AND();
				s.WHERE(String.format("ename like '%%%s%%' or job like '%%%s%%'", search, search));
			}
			
			return s.toString();
		}
	}
}
