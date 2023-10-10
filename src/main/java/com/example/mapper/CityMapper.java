package com.example.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.SelectProvider;
import org.apache.ibatis.jdbc.SQL;

import com.example.model.City;

@Mapper
public interface CityMapper {
	
	@Select("select * from city")
	List<City> selectAll();
	
	@Select("""
			  select * 
			    from city
			   where countrycode = #{code, jdbcType=VARCHAR}
			 """)
	List<City> selectAllByCode(String code);
	
	@Select("""
			  select code as "code", 
			  		  name as "name"
			    from country
			 """)
	List<Map<String, Object>> selectCountryCodes();
	
	@SelectProvider(type = SqlProvider.class, method = "searchAll")
	List<City> searchAll(String code, Long population);

	public static class SqlProvider {
		
		public static String searchAll(String code, Long population) {
			var s = new SQL();
			s.SELECT("*");
			s.FROM("city");
			if (code != null && !code.trim().equals(""))
				s.WHERE(String.format("countrycode = '%s'", code));
			if (population != null)
				s.WHERE(String.format("population >= %d", population));
			
			return s.toString();
		}
		
	}
	
}
