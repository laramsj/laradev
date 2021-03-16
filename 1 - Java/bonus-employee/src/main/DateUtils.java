package main;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateUtils {
    //Date pattern generated
	private static final DateFormat DATE_FORMAT = new SimpleDateFormat("yyyy-MM-dd");
	//Date format from string to DAte
	public static Date createDateFromString(String dateInput) {
		Date date = null;
		//if date input is different of null.. try convert
		if(null != dateInput) {
			try {
				date = DATE_FORMAT.parse(dateInput);
				//error during conversion
			}catch (ParseException pe) {
				date = new Date();
			}
		}else {
			//if date null, variable date will receive a todays date
			date = new Date();
		}
		return date;
	}

}
