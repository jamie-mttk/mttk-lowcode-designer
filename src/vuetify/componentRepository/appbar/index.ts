import { appbarTransform } from "./transform";
import {widgetUtil} from 'mttk-lowcode'
import * as ui from '../share/ui'
//
export const appbarConfig = {
  key: "veutify_appbar",
  name: "Appbar",
  description: "",
  icon: "mdiApplicationBracketsOutline",
  transform: appbarTransform,
  editor: [
    widgetUtil.createInput('title'),
    ui.color,
    ui.density2,
    ui.elevation,
    widgetUtil.createSwitch('extended'),
    widgetUtil.createInput('extension-height'),
    // widgetUtil.createSwitch('flat'),
    // widgetUtil.createSwitch('floating'),
    widgetUtil.createInput('height'),
    widgetUtil.createInput('image'),
    ui.rounded,
    widgetUtil.createSwitch('border'),
    widgetUtil.createSwitch('collapse'),
    
  ],
  initConfig: {
    props: {
      title:'Applbar title',
      'scroll-behavior':'elevate fade-image', //Please note it can not be edited, so it can assume to be fix set
    },
  },
  initStyles: {},
};
//
// console.log(JSON.stringify(appbarConfig,null,2))