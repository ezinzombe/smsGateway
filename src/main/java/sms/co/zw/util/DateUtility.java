package sms.co.zw.util;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.Objects;

/**
 * Created by ezinzombe on 2/14/18.
 */

public class DateUtility {

    private static final Logger logger = LoggerFactory.getLogger(DateUtility.class);

    public static final DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
    public static final DateTimeFormatter dayAndMonthFormatter = DateTimeFormatter.ofPattern("dd/MM/");
    public static final DateTimeFormatter dayAndMonthNameAndYearFormatter = DateTimeFormatter.ofPattern("dd MMMM yyyy");

    public static long getPeriodLengthBetweenDates(final ChronoUnit chronoUnit,
                                                   LocalDate startDate, LocalDate endDate) {

        Objects.requireNonNull(startDate, "Start date is required");
        Objects.requireNonNull(endDate, "End date is required");
        Objects.requireNonNull(chronoUnit, "Chrono Unit is required");

        final long periodLength = startDate.until(endDate, chronoUnit);

        logger.debug("CouncilPeriod No of {} between dates {} to {} is {}", chronoUnit, startDate,
                endDate, periodLength);

        return Math.abs(periodLength);

    }

    public static LocalDate convertToLocalDate(Date date) {

        Objects.requireNonNull(date, "Date is required");

        return convertToLocalDateTime(date).toLocalDate();
    }

    public static LocalDateTime convertToLocalDateTime(Date date) {

        Objects.requireNonNull(date, "Date is required");

        final Instant instant = Instant.ofEpochMilli(date.getTime());

        return LocalDateTime.ofInstant(instant, ZoneId.systemDefault());
    }



}
