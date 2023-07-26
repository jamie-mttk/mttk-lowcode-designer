import {unref} from 'vue'
import { widgetTransformUtil } from "mttk-lowcode";

export function listTransform(config: any, value: any) {
  const result = widgetTransformUtil.buildWidget("v-list", config);

  if (value && unref(value) && Array.isArray(unref(value)) && unref(value).length>1) {
    result.props.items = value;
  } else {
    //sample data
    result.props.items = [
      {
        title: "Sample data item #1",
        value: 1,
      },
      {
        title: "Sample data item #2",
        value: 2,
      },
      {
        title: "Sample data item #3",
        value: 3,
      },
    ];
  }
  return result;
}
