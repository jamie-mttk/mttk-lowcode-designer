import { toolbarTransform } from "./transform";
import {widgetUtil} from 'mttk-lowcode'
import * as ui from '../share/ui'
//
export const toolbarConfig = {
  key: "veutify_toolbar",
  name: "Toolbar",
  description: "",
  icon: "mdiTools",
  transform: toolbarTransform,
  editor: [
    widgetUtil.createInput('title'),
    ui.color,
    ui.density,
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
      title:'Toolbar title'
    },
  },
  initStyles: {},
};
