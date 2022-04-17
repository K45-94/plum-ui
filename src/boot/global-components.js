import { boot } from "quasar/wrappers";

const globalComponents = {
  page: require("components/PagePlumComponent/Page").default,
  pageHeader: require("components/PagePlumComponent/PageHeader").default,
  pageHeaderButtonBackLeft:
    require("components/PagePlumComponent/PageHeaderButtonBackLeft").default,
  pageHeaderButtonForwardRight:
    require("components/PagePlumComponent/PageHeaderButtonForwardRight")
      .default,
  pageBody: require("components/PagePlumComponent/PageBody").default,
};

export default boot(async ({ app }) => {
  for (const key in globalComponents) {
    app.component(key, globalComponents[key]);
  }
});
