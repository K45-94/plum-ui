import { boot } from "quasar/wrappers";

const globalComponents = {
  pagePlum: require("components/PagePlumComponent/Page").default,
  pageHeader: require("components/PagePlumComponent/PageHeader").default,
  pageHeaderButtonBackLeft:
    require("components/PagePlumComponent/PageHeaderButtonBackLeft").default,
  pageBody: require("components/PagePlumComponent/PageBody").default,
};

export default boot(async ({ app }) => {
  for (const key in globalComponents) {
    app.component(key, globalComponents[key]);
  }
});
