# MTTK low code Developer Manual

NOT UPDATE TO DATE, I am working on it!

## Preliminary

### Context

Context is a variable to interact between low code system and user script. There are three context with different scope.

|Context|Scrope|
|---|---|
|GlobalContext|Global|
|AppContext|Application|
|PageContext|Page|

#### GlobalContext

As it is shared among all the application, only one instance for each client is created during low code startup.

Below is the method to create a global context

~~~ sh
function createGlobalContext(baseUrl: string = '', vueApp: App,routerInit:Router)
~~~

|Parameter|Description|
|---|---|
|baseUrl|Base URL to create axios requester|
|vueApp|Vue3 app instance, returned by calling createApp|
|routerInit|Vue router 4.x instance, returned by calling createRouter|

It has the following properties/methods. To distinguish between attributes and methods, the method will be followed by parentheses.

|Propertiy/Method|Description|
|---|---|
|request|[axios](https://github.com/axios/axios) instance|
|vueApp|Vue 3 app instance|
|router|Vue router 4.x instance|

#### AppContext

AppContext will create for each application with the below function

~~~ sh
function createAppContext(globalContext: object)
~~~

The only parameter is GlobalContext

|Propertiy/Method|Description|
|---|---|
|app|Vue 3 app instance, wrapped by ref|
|key|A unique string,, wrapped by ref|
|getGlobalContext()|return GlobalContext|
|mitt|[mitt instance](https://github.com/developit/mitt) used to mitt or listen events|
|queryPages()|Return a promise with all the pages of this application|
|loadPage(id)|Load page souce by page id|
|loadPageByName(name)|Load page source by page name|
|loadDeployedMenus()|Load all the deployed menu tree|

#### PageContext

If it is not specially mentioned later, it is called as context. And it is very important in programming in pager designer.

~~~ sh
function createContext(modeInit: string,appContext:object,contextParentInit:object)
~~~

|Parameter|Description|
|---|---|
|modeInit|Init mode, refer to runnning mode chapter|
|appContext|AppContxt instnace|
|contextParentInit|If the page A is opened by another page B, this is the page context of page B|


|Propertiy/Method|Description|
|---|---|
|key|A unique string to identify this page context|
|mode|Runnig mode warpped by ref|
|contextParent| The paramter of contextParentInit,wrapped by ref|
|cp|Shortcut of contextParent|
|repositoryManager|Refer to proper chapter below|
|functionManager|Refer to proper chapter below|
|f|Shortcut of functionManager|
|getAppContext()|Returnn app context|
|mitt| Mitt instance to mitt/subsribe events among page|
|dataManager|Refer to proper chapter below|
|d|Shortchut of dataManager|
|computedManager|Refer to proper chapter below|
|c|Shortcut of computedManager|
|methodManager|Refer to proper chapter below|
|m|Shortcut of methodManager|
|apiManager|Refer to proper chapter below|
|a|Shortcut of apiManager|
|The below items are not recommended to use, low code system internally used only|
|codeManager|Code manager|
|param|Use to transfer data during opening new page|
|choosedManager|Component choosed management|

##### Running mode

|Mode|Description|
|edit|Edit page in page designer, switch to view mode by pressing button "Switch to preview"|
|view|Preview in page designer or present in lauched screen|

#### repositoryManager

Manage the folders and widgets which will be shown in the pallet of page designer.
Refer to the "Build customized component and functions" chapter for more detail.

#### functionManager

Manage the functions. 
Refer to the "Build customized component and functions" chapter for more detail.

#### dataManager

Get/Set the value of data.

|Propertiy/Method|Description|
|---|---|
|getData()|Return the data value, the first paramter is the data key, the second is path(optional.) For example, if data value is {a: b :{c :123]}},the path is a.b.c getData will return 123. If no init data is set, the getData will return a proper value according to data type.|
|g()|Shortcut of getData|
|setData()|Set the data value, the first paramter is the data key, the second is value to set ,the third one is path(optional)|
|s()|Shortcut of setData|
|clearData()|Reset data to init value, the paramter is the data key|
|c()|Shortcut of clearData|

Below are same examples, variable "c" is page context instance.

~~~ sh
//Get the value of data content
c.d.g('content')
//Set the value of data content to 'Hello world'
c.d.s('content',)
~~~


#### computedManager

Get/Reset the computed
|Propertiy/Method|Description|
|---|---|
|get()|Get the computed value, the only parameter is computed key.|
|g()|Shortcut of get|
|reset()|Reset the computed value, so the incoming get() call will evaluate again|

#### methodManager

Call defined method

|Propertiy/Method|Description|
|---|---|
|methodCall()|The first paramter is method indicator, the remainder paramters are method paramters. If the first parameter is a string, it is considered as method key; otherwise, consider it is an object and try to get method key from property method.|
|m()|Shortcut of methodCall|
|scriptCall()|The first parameter is script indicator, and the remainder paramters are script paramters which means they can be referenced directly.If the first parameter is a string, it is considered as script body; otherwise, consider it is an object and try to get script body from property code.|
|s()|Shortcut of scriptCall|
|openPage()|The parameter is a object, refer to the below table|

Open page paramter properties
|Property|Description|
|---|---|
|pageId|The page id to show|
|pageName|The page name to show, the priority of pageId is higher than pageName|
|openPageType|'dialog'/'drawer'|
|param|The parameter tranfer to the page to open, the opened page can retrieve from pageContext.param|
|Others|Other properties will be set the properties of el-dialog/el-drawer depends on openPageType|


#### apiManager

Invoke defined API
|Propertiy/Method|Description|
|---|---|
|invoke|Invoke the API, the parameter is the API key|
|i|Shortcut of invoke|

### Expression

Expression is used to dynamically config properties. it is a string with a special prefix, and the remainder string will be explained accordingly as described in the below table
|Prefix|Remainder string|
|---|---|
|___data:|Explained as the data key|
|___computed:|Explained as the computed ke|
|___script:|Explained as a script, the script eval value will be set to the property|

### Script evaluation

Normally there are two ways of evaluation script. The first one is [eval funciton](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval); the second one is [function constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)
This project eval script with the second way. Let's say there is a piece of script as below

~~~ sh
const base=100
return x+y+base
~~~

x and y is passed from caller. So the below function will be constructed and called,assume x is assinge to 5 and y is assigned to 6. code is the script above.

~~~ sh
const result=new Function (x,y,code)(5,6)
~~~

### VueWrapper context

VueWrapper is the fundamental technology of this project. Refer to [vueWrapper developer manual](https://github.com/jamie-mttk/vueWrapper/blob/master/MANUAL.md), 

## Coding in page designer

Since the coding is simpl jav script, this chapter will focus the parameters which can be used in script.
Tips: If you don't know the parameters, just use the below script to show 

~~~ sh
console.log(arguments)
~~~

### Computed

|Parameter|Description|
|---|---|
|c|PageContext|

### Method

|Parameter|Description|
|---|---|
|c|PageContext|
|Parameters|And the parameters in method definition|

### Lifecycle

|Parameter|Description|
|---|---|
|c|PageContext|

### Event

|Parameter|Description|
|---|---|
|c|PageContext|
|wrapperContext|WrapperContext|
|argx|x is 1,2,3,4,etc. These are the original event arguments.|

Notice: wrapperContext.props.slotParaStack can get the slotParaStack

### Icons

[Material Design Icons](https://pictogrammers.com/library/mdi/) is internally suported, and the icon picker fullly supoort mdi icons choose.
Component 'lcIcon' can display mdi icons.

## Render deployed pages in your own project

Refer to [Demo project](https://github.com/jamie-mttk/mttk-lowcode-demo)

## Using page desiner in your project

Refer to [Designer demo project](https://github.com/jamie-mttk/mttk_lowcode_designer)
And this project also demostrate how to wirte your own components.

## Build customized component

Customized component is a way to extend the build-in components. It can be a simple component (such as a input) or it can be a complex component. Anyway it is the same way to embed it into low code system.

### Configuration

Refer to the [Element Button as a sample](https://github.com/jamie-mttk/mttk_lowcode_ui/blob/master/packages/componentRepository/element/button/index.ts)
A JS object is needed to describe the component, the properties are described below
|Property|Description|
|---|---|
|key|Unickly identify this component|
|name||
|description||
|icon|Icon name,refer to icon chapter|
|sequence|The sequnce to display in the pallet|
|transform|Refer to "transform" chapter|
|editor|Refer to "UI define" chapter|
|initConfig|Init configuration, normally used to set the init component properties|
|initStyles|Init styles|
|events|An string array to define the event list which can be choosed in property editor event form|

### UI definition

The editor vaule can be a function or an array, each item is a property definition of vueWrapper syntax. 
If it is function ,the paramters are below
|Paramter|Description|
|---|---|
|data|The form data value wrapped with ref|

Normally using funciton as a editor value is to dynamically show/display items. Refer to [el-input](https://github.com/jamie-mttk/mttk_lowcode_ui/blob/master/packages/componentRepository/element/input/index.ts) ,the property "rows" is only shown if property "type" is area

~~~ sh
    uiUtil.createInputNumber('rows',undefined,{ '~show': computed(() => unref(data).type == 'textarea')}),
~~~

The function return should be an array,below is an example

~~~ sh
[{
      "~component": "el-input",
      "~prop": "image",
      "~label": "Image",
      "clearable": true
    },
    {
      "~component": "el-select",
      "~prop": "rounded",
      "~label": "Rounded",
      "clearable": true,
      "~options": [
        "0",
        "xs",
        "sm",
        "x-large",
        "lg",
        "xl"
      ]
    },
    {
      "~component": "el-switch",
      "~prop": "border",
      "~label": "Border",
    }]
~~~

|Property|Description|
|---|---|
|~component|Normally 'el-input'/'el-input-number'/'el-select'/'el-switch'/'el-color-picker/'lc-icon-picker'/'baceeditor'(JS code editor)|
|~prop|The key to store the property|
|~label|Label shown in the property editor|
|~description|Optional, if provided a quesiton mark icon will shown after label. Move the mouse to the icon will show the description|
|...|Other properties|

#### widgetUtil

To simplify the UI definition, some utility functions can be used.

First import widgetUtil

~~~ sh
import {widgetUtil} from 'mttk-lowcode'
~~~

Then coding as below

~~~ sh
 widgetUtil.createInput('title'),
widgetUtil.createSwitch('border'),
~~~

createInput/createInputNumber/createSwitch/createColorPicker/lc-icon-picker has same parameters.
|Parameter|Description|
|---|---|
|prop|The key to store the property|
|label|Optional, if empty try to convert prop to proper format|
|other|Optional,object,other properties|

createSelect has one additional paramter after prop which is the options, it can be a string array or string seperated with ','

createBase is a more common function 

~~~ sh
 function createBase(component:string,prop: string, label?: string, other?: object)
~~~

### Transform

Transform is a function to generate the vuewrapper format config. 
Refer to [Element form transform](https://github.com/jamie-mttk/mttk_lowcode_ui/blob/master/packages/componentRepository/element/form/transform.ts)  to learn more.

The function has following paramters

|Parameter|Description|
|---|---|
|props|The object(key/value) user input in the property editor|
|data|The model value of the component|
|context|Page context|
|wrapperContext|Wrapper Context|

#### widgetTransformUtil

To simplify the transform, some useful funcitons are available in widgetTransformUtil

First import  'widgetTransformUtil'

~~~ sh
import {widgetTransformUtil} from 'mttk-lowcode'
~~~

Refer to the below functions and comments

~~~ sh 
//Build  a widget with given widget
//widget can be a string(name) or imported component
//value will be set to modelValue
export function buildWidget(widget: any, config: any, value?: any) 

//Return a function which is a buildWidget
export function buildWidgetFunc(widget: any,callback?:Function) 

//Has a default slot children
export function buildWidgetWithSlotChildren(
  widget: any,  config: any,  value?: any,  option?: object)

//Build a panel under parameter c
export function buildPanel(c)

~~~

### Registrations

Refer to [Veutify component registration](https://github.com/jamie-mttk/mttk_lowcode_designer/blob/master/src/vuetify/componentRepository/index.ts)

## Build customized function

Customized functions is a way to add new functions into low code system. As we mentioned before, the script are evaluated with function constructor, but it has a restriction that "import" is not supported. For example if you wan to use some functions in [Lodash](https://lodash.com/)

Refer to [Veutify functions](https://github.com/jamie-mttk/mttk_lowcode_designer/blob/master/src/vuetify/functionRepository/index.ts), create function and export them.
And then register in [main.ts](https://github.com/jamie-mttk/mttk_lowcode_designer/blob/master/src/main.ts)

~~~ sh
useFunctionRepository().registBatch(veutify_funcs)
~~~

Call customize function

~~~ sh
c.f.get('veutify_test1')(111,123)
~~~

## Build-in functions

|Category|Function|Description|
|---|---|---|
|Element Plus|ElMessage|Elemenet plus ElMessage function|
|Element Plus|ElMessageBox|Elemenet plus ElMessageBox function|
|Element Plus|methodOpenPage|Same as openPage in methodManager|
|Echarts|registerTheme|Echarts registerTheme, the default theme is 'light', so changing the them of 'light' will change the default display|

