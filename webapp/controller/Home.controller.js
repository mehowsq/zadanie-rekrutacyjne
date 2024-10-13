sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  return Controller.extend("recruitment.task.controller.Home", {
    onShowCustomers: function () {
      var oRouter = this.getOwnerComponent().getRouter();
      oRouter.navTo("customers");
    },
  });
});
