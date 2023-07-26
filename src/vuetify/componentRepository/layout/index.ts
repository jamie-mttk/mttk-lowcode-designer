import { layoutTransform } from "./transform";
import {widgetUtil} from 'mttk-lowcode'
//
export const layoutConfig = {
  key: "veutify_layout",
  name: "Layout",
  description: "",
  icon: "mdiViewGridPlus",
  transform: layoutTransform,
  editor: [
    widgetUtil.createSelect('align-content',["end", "start", "center",  "stretch",'space-between','space-around','space-evenly']),
    widgetUtil.createSelect('justify',["end", "start", "center",  "stretch",'space-between','space-around','space-evenly']),
    widgetUtil.createSelect('align',["end", "start", "center", "baseline", "stretch"]),
    widgetUtil.createSwitch('dense'),
    widgetUtil.createSwitch('no-gutters'),
    {
      "~component": "lc-editable-list",
      "~label": "cols",
      "~prop": "_container",
      labelColumn: "cols",
      editConfig: [
        widgetUtil.createInput('cols'),
        widgetUtil.createInput('offset'),
        widgetUtil.createSelect('align-self',["end", "start", "center", "auto", "baseline", "stretch"]),
      ],
    },
  ],
  initConfig: {
    props: {
       align: "start",
      "align-content": "start",
      justify: "start",
      _container: [
        { cols: "6", offset: "0", "align-self": "center" },
        { cols: "6", offset: "0", "align-self": "center" },
        { cols: "12", offset: "0", "align-self": "center" },
      ],
    },
  },
  initStyles: {},
};
