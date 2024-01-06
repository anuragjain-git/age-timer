# Age Timer

A simple web application that calculates and displays your age in years and milliseconds based on your date of birth.

## Age Calculation Logic

The Age Timer calculates the user's age based on their date of birth using the following steps:

1. **Capture Current Date:** Create a new `Date` object representing the current date and time.

2. **Calculate Duration:** Determine the time difference in milliseconds between the current date and the user's date of birth.

3. **Convert to Years:** Convert the duration from milliseconds to years.

4. **Format Years and Milliseconds:** Ensure a fixed number of decimal places for years, convert to a string, and split into an array containing years and milliseconds.

5. **Return as Object:** Return an object with properties for whole years and milliseconds.

This logic allows the Age Timer to accurately display the user's age in both years and milliseconds.
