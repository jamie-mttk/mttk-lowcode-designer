# MTTK Lowcode Engine and MTTK Open BI User Manual

## How to use

### Access URL

Using this system only requires a modern browser! The default URL is  http://%your server ip%:8825

![Login](https://github.com/jamie-mttk/mttk-lowcode-designer/blob/master/src/screenCaptures/login.png)

### Login

Login screen will automatically appear if not login or login token is expired.
Input username and passowrd. Defautl account is admin/123456

### Application

After login the application list screen is shown. Here you can add a new application. 

![App list](https://github.com/jamie-mttk/mttk-lowcode-designer/blob/master/src/screenCaptures/app_list.png)

Below is the operations of existing application.

|Operation|Description|
|---|---|
|Design|Developer can edit resources under application,such as menu,page,JDBC conneciton,data model|
|Lauch|End user can view the charts grouped by menus/pages|
|Setting|Application properties,such as name,icon,etc.|
|Delete|Delete application and all resources associated|
|Data auth|Authorize application access|

### JDBC connection

Standard JDBC configuration. Regarding JDBC driver refer to chapter "DB support" below.

### Data model

It is a tree/star architecture, each node is a table/view or SQL dragged from left panel.
For each node you can edit basic info/relation and choose columns.

![Data model](https://github.com/jamie-mttk/mttk-lowcode-designer/blob/master/src/screenCaptures/data_model.png)

#### Expression field

It is the field which is not existed directly in datase table. Below are some key points:

- Expression is the raw SQL expression which is supported by target database. Engine is simply add expression into the SQL generated.
- To avoid column conflict it is recommanded to put table alias before column. For example using "order_details.unitPrice*order_details.quantity" instead of "unitPrice*order_quantity-discount" . Table alias is set in table info screen.
- Entity should be set to figure out the entities the columns in expression are come from. So the engine will automatically add these entities into SQL FROM list if the expression field is used.

### Menu and page

Menus are used to organize pages.

Page has two layout strategy,one is flex ,the other is absolute. They can simply consider as CSS "display:flex" and "display:absolute".
Flex strategy is recommanded to use,the chart will automatically extend to fit the screen width.
Absolute strategy has fixed width and height, but it can be configured to fullfil the screen width/height or both. It is useful to build a dashboard/Larg screen to display in fullscreen mode. 

![Design](https://github.com/jamie-mttk/mttk-lowcode-designer/blob/master/src/screenCaptures/design.png)

### Page design

#### UI

![Page design](https://github.com/jamie-mttk/mttk-lowcode-designer/blob/master/src/screenCaptures/single_page.png)

The top area display the page name and some buttons.

The left panel has pallet and component tree. Pallet contains all the components which can be drag to main panel. Component tree display the component structure of the page, component can be moved up/down or inside/outside panel directly.

The right panel is the property editor. If no component is choosed(By click any empty area in main panel or click page title on the top ),page config is shown;otherwise the property of the choosed component is shown.

The middle area is the main panel to show the component of the page. Moving component up/down or inside/outside panel is supported. And in abosolute mode, resize/change position is supported ;in flex mode, changing height is suported.

#### Component

The component in the left panel can be added by plugin mechenism,Refer to Developer Manual.

In main panel component can be orgnized by container component. The typical components are tabs/layout/card/etc.

The components under BI are BI related components,the property editor support data model/basic/display. Data model tab config which data model is used and the logic of how to retrieve data from data model, detail is described below. The basic tab config the behavior of chart, such as theme/title/etc. Display tab is used to set the CSS style of the chart.

### Property editor - data

Some components, for example input/form need to set data.The type of data set must match the required data type.Data can be set by multiple modes as below

|Mode|Description|
|---|---|
|Data|Data defined in data editor."Data path" is used to retrieve a sub set from data. Read and write.|
|Computed|Computed defined in computed editor. Read and write.|
|Method|The return value of the method as data, read only.|
|Fixed|Fixed value, will try to conform to required data type. Read only.|

### Property editor - event

Event can defined the behavior once component emit event. The event name can be select from list or input manually and then press Enter.
Mutiple modes are supported to handle event
|Mode|Description|
|---|---|
|Script|Call script directly. The first parameter is page contex, the second one is wrapper contex, the others are event original parameters. Page context and wrap context refer to later chapter "advanced topics"|
|Method|Call method defined in method editor.Parameter defines is same as script above.|
|API|Directly call an API defined in API editor|

### Page design of BI

#### Config data model 

For each config, moving mouse to quesiton icon will show the meaning of the choosed chart

|Config|Description|
|---|---|
|Dimension| Normally it can be consider as the value of X axis|
|Metric| Normally it can be consider as the value of Y axis|
|Drilling| Only supported by some charts, refer chapter "Drilling"|
|Filter|Filter the data model just for the choosed componnet|
|Row limit|Limit the rows returned from server|
|Pagination|Refer to pagination|
|Auto refresh|Auto reload data from server and repaint chart, need to reenter page to take affect|

#### SQL generation

BI engine will generate SQL based on the configuration. The generated SQL can be shown by click "Show SQL". A rough logic is described below.

1. Find all the entities(table/view/SQL) where the columns of dimension/metric/filter come from.
2. Join all the entities found.
3. Columns of dimension/metric will append to SELECT field list.
4. Generate filter to WHERE if filter is available
5. All the columns of dimension will append to GROUP BY if metic is not empty. THIS IS THE ONLY DIFFERENT BETWEEN Dimension AND Metric.

#### Drilling

Refer to "Drilling demo" of the sample project. For example to shown the sales data, the first can be country, the second level can be city ,the third level can be customer, drilling means drill down/up by click on the proper data.

#### Filter component

It is used to filter the data lively in view mode. 

The logic is data model based. All the chart with the same data model of the filter componet will be filtered automatically.

#### Pagination

Server pagination means the pagination is done at server side, only the needed rows is returned from server. 

Client pagination means all the data are returned from server and then do pagination inside browser. 

## Authentication and authorization

### Terminology

|Name|Description|
|---|---|
|Resource| The object to grant authorization.For example, application, menu, page ,data model,etc. |
|Account| The user using this system.|
|Role| Role defined the operations to the resource. One account can have multiple roles.|
|Account group| Group is used to simplify the authorization. Users with the same user group as the resource owner can obtain access/edit/del permissions for the resource [Can also revoke manually]. One account can belong to multiple groups.|
|Resource owner| Each resource has one or multiple owners. Defautly the owner is the resource creator.|

### Resource authority

Each resouce type has the below authorities to grant.

|Name|Description|
|---|---|
|Access| User can show the resource without any change|
|Add| Create new resource|
|Edit| Edit  authorized resources|
|Delete|Delete authorized resource|
|Authorize|Chanage resource authorization|
|Full control| Have full control of all the resource (of this type) even if it is not explicitly granted|
|All read| Can access all the resource (of this type) even if it is not explicitly granted|

### Management screens

Account
![Account](https://github.com/jamie-mttk/mttk-lowcode-designer/blob/master/src/screenCaptures/account.png)

Account group
![Account group](https://github.com/jamie-mttk/mttk-lowcode-designer/blob/master/src/screenCaptures/account_group.png)

Role
![Account](https://github.com/jamie-mttk/mttk-lowcode-designer/blob/master/src/screenCaptures/role.png)

This is the screen of authorizing single resource
![Account](https://github.com/jamie-mttk/mttk-lowcode-designer/blob/master/src/screenCaptures/data_auth.png)

### Rules

The below rules are used to find out whether the account are authoirzed to the given resource

- If the resource (For example page, data model) is under an application ,the application should be authorized
- If any role of the account has "Full control" of the given resource type, account can acess/add/edit/delete/authorize any resource of this resource type without explicitly granted
- If any role of the account has "All read" of the given resource type, account can acess any resource of this resource type without explicitly granted. And the account may have explicitly granted add/edit/delete/authorized following the rules below.
- If the role of the account don't have the given authorization, for example page_edit(Functional authorization). The account can not edit any page even if some pages are explicitly granted edit authorization(Data authorization). On the other word, both functional authorization and data authorization are mandatory.
- Data authorization
  First resource owners have full control of the resource; Second owner groups have access/edit/del (Can manually revoked); Any account groups/accont can manually granted as demand.

## Other topics

### DB support

So far the below database are supported, more database will be supported later.

- MySQL
- PostgreSQL
- Oracle
- DB2
- Microsoft SQL Server
- Informix

Supporting a database includes two parts:

- Database dialect  is a java class to handle the functionalities which is not included in standard SQL. 
- JDBC driver.  The last version of JDBC driver is packed into lowcode.jar. If it does not mach your DB, you may need to manually update into lowcode.jar at /BOOT_INF/lib
  
Since backend will be redesigned, so the DB support will be pluggable later.

### Performance 

 The performance depends on the SQL excution time in target database server. So the performance can be tuned by analyze the SQL generated.

### Plugin development

Refer to Developer Manual.

### System architecture

Below is a flow to describe how the chart is rendered
![Architecture](https://github.com/jamie-mttk/mttk-bi/blob/master/src/architecture.png)

## Know issues

### Backend optimize

The backend server is not well defined and will be optimized later. 

- Database support(dialect/JDBC driver) is not pluggable
- Lowcode engine plugin, for example BI plugins is not pluggable

### Type script support

Although all the front end code are .ts file, in fact they are JS not conform to type script.
