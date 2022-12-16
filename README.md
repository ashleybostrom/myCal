# myCal Scheduler

This application serves users that are employees with busy schedules who would like to have a visual representation of a daily planner that they can add, edit, or delete important events to and from in order to more effectively manage their time. The application will have hours of time shown in columns that will display in different colors based on status: grey for time that has already passed; red upon the current hour; green for time and tasks yet to be completed. This way the users will be able to have a very clear interface where they can more effectively and efficiently manage their time, energy, and focus.

USER STORY
```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

ACCEPTANCE CRITERIA
```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```
