import { cardTransform } from "./transform";
import {widgetUtil} from 'mttk-lowcode'
import * as ui from '../share/ui'
//
export const cardConfig = {
  key: "veutify_card",
  name: "Card",
  description: "",
  icon: "mdiCreditCardOutline",
  transform: cardTransform,
  editor: [
    widgetUtil.createInput('title'),
    widgetUtil.createInput('subtitle'),
    widgetUtil.createInput('text'),
   ui.variant,
   ui.color,
   widgetUtil.createInput('prepend-icon'),
   widgetUtil.createInput('append-icon'),
   widgetUtil.createInput('width'),
   widgetUtil.createInput('height'),
   widgetUtil.createSwitch('disabled'),
  ui.density,
  ui.elevation,
  widgetUtil.createInput('image'),
  widgetUtil.createInput('max-width'),
  widgetUtil.createInput('max-height'),
  widgetUtil.createInput('min-width'),
  widgetUtil.createInput('min-height'),
  widgetUtil.createSelect('position',[ 'static','relative','fixed','absolute','sticky' ]),
  ],
  initConfig: {
    props: {
      title:'Card title',
      text:'Card content'
    },
  },
  initStyles: {},
};
