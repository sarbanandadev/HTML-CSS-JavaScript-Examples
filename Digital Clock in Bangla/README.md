# Bangla Date Calculation Algorithm Explanation:

### Two key points need to be noted before dive in:
Bangla Year always starts at 14th April and that is the 'Pahela Boishakh'

If a Gregorian/English year is Leap year the 'Falgun' Month will be 31 days, otherwise it will always be 30 days.

### From a given Gregorian year X, we can find the bangla year from the formula:

- BanglaYear = X - 593 (the logic explains later)
So, if a Gregorian Date is given we first need to find out if it is before the 14th April of the current Gregorian Year.

Let's say the given date is 01-05-2018. So, this is after the 14th April of current Gregorian year 2018. So, to calculate what Bangla Year is this we can easily use the formula:

- BanglaYear = X - 593 (where, X = 2018)

But if the given date is 01-04-2018, that means before the 14th April, then we can calculate the Banglayear by considering X = 2017.

Now, after calculating the Starting Gregorian Year, let's say it's X, for the Bangla Year we need to find how many total days passed from beginning of that banglaYear.

It can be calculated easily from the difference between the given Gregorian date and the 13th April of the X, let's call it 'diff'.

### As we know the Total days of each Bangla Months and which is following:

- totalMonthDays = [31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 30, 30]
- 
- we can now easily traverse through this list to find where the 'diff' resides and as a result we will find the Bangla Month and the Day.