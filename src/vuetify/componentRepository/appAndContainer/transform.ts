import { computed } from "vue";
import { lcPanel } from "mttk-lowcode";

export function appAndContainerTransform(config: any) {
  //
  let result = {
    "~component": "v-app",
    "full-height": !!config["full-height"],
    "#": {
      "~component": "v-container",
      fluid: !!config["fluid"],
      "#": {
        "~component": lcPanel,
        "~modelValue": computed({
          get() {
            return config["_children"] || [];
          },
          set(value) {
            config["_children"] = value;
          },
        }),
      },
    },
  };
  //

  //
  return result;
}
