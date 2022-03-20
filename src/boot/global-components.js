import { boot } from "quasar/wrappers";

const globalComponents = {
  pagePlum: require("components/PagePlumComponent/Page").default,
};

export default boot(async ({ app }) => {
  for (const key in globalComponents) {
    app.component(key, globalComponents[key]);
  }
});
