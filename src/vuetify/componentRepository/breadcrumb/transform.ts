import {unref} from 'vue'
import { widgetTransformUtil } from "mttk-lowcode";

export function breadcrumbTransform(config: any, value: any) {
  const result = widgetTransformUtil.buildWidget("v-breadcrumbs", config);

  if (value && unref(value) && Array.isArray(unref(value)) && unref(value).length>1) {
    result.props.items = value;
  } else {
    //sample data
    result.props.items =['Sample 1', 'Sample 2', 'Sample 3']
  }
  return result;
}
