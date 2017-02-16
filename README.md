# TimeSheet-React-Redux-Webpack-
Time Sheet. A component that will draw a weekly cycle

Project via ReactJS. Requirements: To write a component that will draw a weekly cycle (calendar for the week). 
Input data JSON 
{
"mo": [ { "bt": 240, "et": 779 } ],
"tu": [ ],
"we": [ ],
"th": [ { "bt": 240, "et": 779 }, { "bt": 1140, "et": 1319 } ],
"fr": [ { "bt": 660, "et": 1019 } ],
"sa": [ { "bt": 0, "et": 1439 } ],
"su": []
} 
The interval of the one cell is one hour. In JSON file pass 59 minutes. 
Sample: Interval of hours 1:00 to 2:00 = 60 to 119 Minute of the all day (0 - 1439). 
Also, the component must be clickable, that is to give the user the opportunity to select the desired interval 
(in this case are hours) and return json file in the same form as the input data (based on of the interval what 
selected by user). The selected cell is a darker color, than non-selected cell. Should be a possible to select 
the desired range holding the left button of the mouse. Selected range should become dark color. 
When we toggle click on the column "all day" all cells of the interval should become selected or non-selected. 
Output object you can see in console
