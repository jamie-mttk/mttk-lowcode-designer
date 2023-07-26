import { expansionPanelTransform } from "./transform";
import {widgetUtil} from 'mttk-lowcode'
import * as ui from '../share/ui'
//
export const expansionPanelConfig = {
  key: "veutify_expansionPanel",
  name: "Expansion panel",
  description: "",
  icon: "mdiArrowExpandDown",
  transform: expansionPanelTransform,
  editor: [
    widgetUtil.createSelect('variant',['default' , 'inset' , 'accordion' , 'popout']),
    ui.color,
    widgetUtil.createSwitch('multiple'),
    widgetUtil.createSwitch('disabled'),
    {
      "~component": "lc-editable-list",
      "~label": "cols",
      "~prop": "_container",
      labelColumn: "title",
      editConfig: [
        widgetUtil.createInput('title'),
        widgetUtil.createInput('text'),
        ui.color,
        ui.bgColor,
        widgetUtil.createSwitch('disabled'),
        ui.elevation,
        widgetUtil.createSwitch('ripple'),
      ],
    },
  ],
  // dataConfig: {
  //   //readonly:true,
  //   type:'Number',
  // },
  initConfig: {
    props: {
      variant:'default',
      _container:[
        {title:'Title 1'},
        {title:'Title 2'},
        {title:'Title 3'},
      ]
    },
  },
  initStyles: {},
};
