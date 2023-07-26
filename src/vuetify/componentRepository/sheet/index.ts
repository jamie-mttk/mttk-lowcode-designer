import { sheetTransform } from "./transform";
import {widgetUtil} from 'mttk-lowcode'
import * as ui from '../share/ui'
//
export const sheetConfig = {
  key: "veutify_sheet",
  name: "Sheet",
  description: "",
  icon: "mdiAlertBoxOutline",
  transform: sheetTransform,
  editor: [
    ui.color,
    widgetUtil.createInput('width'),
    widgetUtil.createInput('height'),
    ui.elevation,
    widgetUtil.createSelect('position',[ 'static','relative','fixed','absolute','sticky' ]),
    ui.rounded,
    widgetUtil.createInput('min-width'),
    widgetUtil.createInput('min-height'),
    widgetUtil.createInput('max-width'),
    widgetUtil.createInput('max-height'), 
  ],
  initConfig: {
    props: {
      color:'secondary',
      height:'320px',
    },
  },
  initStyles: {},
};
