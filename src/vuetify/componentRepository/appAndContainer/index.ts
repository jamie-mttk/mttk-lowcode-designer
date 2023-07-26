import { appAndContainerTransform } from "./transform";
import {widgetUtil} from 'mttk-lowcode'
//
export const appAndContainerConfig = {
  key: "veutify_app_container",
  name: "App and container",
  description: "Mixed v-app and v-container",
  icon: "mdiApplicationBracesOutline",
  transform: appAndContainerTransform,
  editor: [
    widgetUtil.createSwitch('full-height'),
    widgetUtil.createSwitch('fluid'),	
  ],
  initConfig: {
    props: {
		'full-height':true,
      fluid:true,
    },
  },
  initStyles: {},
};
