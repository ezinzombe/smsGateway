package sms.co.zw.util;

import org.apache.commons.lang3.StringUtils;

/**
 * Created by ezinzombe on 2/25/18.
 */
public class StringFormatterUtil {

        public String firstLetterUpperCase(String s) {

            s = StringUtils.capitalize(s);
            return s;
        }
}
