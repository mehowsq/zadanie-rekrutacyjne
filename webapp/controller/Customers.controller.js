sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Sorter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
  ],
  function (Controller, Sorter, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("recruitment.task.controller.Customers", {
      onNavBack: function () {
        var oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("home", {}, true);
      },

      onFilterCity: function (oEvent) {
        var sQuery = oEvent.getParameter("query");
        var aFilters = [];

        if (sQuery && sQuery.length > 0) {
          aFilters.push(new Filter("City", FilterOperator.Contains, sQuery));
        }

        var oTable = this.byId("customersTable");
        var oBinding = oTable.getBinding("items");
        oBinding.filter(aFilters);
      },

      onSortCompanyName: function () {
        var oTable = this.byId("customersTable");
        var oBinding = oTable.getBinding("items");
        var oSorter = oBinding.aSorters[0];
        var bDescending =
          oSorter && oSorter.sPath === "CompanyName"
            ? !oSorter.bDescending
            : false;

        oBinding.sort(new Sorter("CompanyName", bDescending));
      },
    });
  }
);
