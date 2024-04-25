# MTTK low code User Manual

## Main screen

![Main screen](https://github.com/jamie-mttk/mttk_lowcode_ui/blob/master/src/screenCaptures/main.png)

The first screen show all the applications and page widgets.

### Application management 

Move the cursor to the proper application area to show the below operations:
|Operation|Description|
|---|---|
|Design|Design the menus and pages under this app, navigate to application edit screen|
|Launch|Lauch the deployed application|
|Setting|Change application name, icon,color|
|Delete|Delete this application. The operation is unrecoverable.|

### Launch

![Larunch](https://github.com/jamie-mttk/mttk_lowcode_ui/blob/master/src/screenCaptures/launch.png)

Click lauch button to display the deployed application.

### Page widget

![Page widget](https://github.com/jamie-mttk/mttk_lowcode_ui/blob/master/src/screenCaptures/pageWidget.png)

Page widget is a component which can be used in page designer as normal component, but it is created by page widget wizard from a created page. 
Here you can add/edit/delete page widgets. 

#### Update page

Since the page widget has the source code of original page, the modification of original page will not affect the page widget.
Update page will replace the source code of original page to the updated copy.

#### Wizard

![Page widget wizard](https://github.com/jamie-mttk/mttk_lowcode_ui/blob/master/src/screenCaptures/pageWidget_wizard.png)

|Step|Description|
|---|---|
|Basic|Unique Key identify this page widget which can not be change later|
|UI properties|Choose the UI properties which can be configed|
|Data|Choose the data which can be configed|
|Model value|Optional. Define the data in original page which can be set as model value in the created page widget.|
|Event|Map the events in the components of original page to the created page widget event|

## Application edit screen

![App](https://github.com/jamie-mttk/mttk_lowcode_ui/blob/master/src/screenCaptures/app.png)

Manage menus and pages.

### Deploy

Deploy all the update of the application. 

## Page designer

![Designer](https://github.com/jamie-mttk/mttk_lowcode_ui/blob/master/src/screenCaptures/designer.png)


|Area|Description|
|---|---|
|Pallet|Click to drag widget to user interface area|
|Source tree|Display all the components of the page. And you can choose componet here if it is invisible or hard to choose in user interface area. And you can also drag/drop to change component hierachy.|
|User interface|Main area, described later|
|Data|Same concept as Vue data|
|Computed|Same concept as Vue computed, so far only readable computed is supported.|
|Method|Create methods which can be used in event handler or inside script|
|API|Define a remote API call|
|Lifecycle|Same concept as Vue lifecycle|

Regarding how to write Javascript code refer to "Developer Manual"

### User Interface

Choose the proper component to edit at right.
|Tab|Description|
|---|---|
|Basic|Componnet properties|
|Data|Only available if the component has model value defined |
|Events|Define event handler|
|Display|Class and style|

#### Expression and raw mode

Normally properties can be set by raw mode, for example, the Type property of el-input is a select, you can choose primary/success/... directly.
But if you want to set this property by program, expression mode is necessary. Bind the property to a expression, for example, a data, and then change the data value by program.

The description of expression  can be found in developer manual
