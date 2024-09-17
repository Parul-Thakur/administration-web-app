import React, { useEffect } from "react";
import Layout from "./Components/Layout";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Login from "./Pages/Login/Login";
import ProtectedRoute from "./utils/ProtectedRoutes";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Server from "./Pages/Server/Server";
import serverData from "./Pages/Server/ServerData";
import AddUser from "./Pages/Users/AddUser/AddUser";
import AccessCode from "./Pages/Users/AccessCode/AccessCode";
import Alias from "./Pages/Users/Alias/Alias";
import PrintDocs from "./Pages/Users/PrintDocs/PrintDocs";
import EditUser from "./Pages/Users/EditUser/EditUser";
import Devices from "./Pages/Devices/Devices";
import EditDevice from "./Pages/Devices/EditDevice";
import { devicesData } from "./Pages/Devices/devicesData";
import DeviceGroups from "./Pages/Devices/DeviceGroups";
import AddDevice from "./Pages/Devices/AddDevice";
import { useTheme } from "./utils/ThemeContext";
import EditPage from "./Pages/Server/EditServer/EditServer";
import PrintQueues from "./Pages/PrintQueues/PrintQueues";
import Department from "./Pages/Department/Department";
import UserGroup from "./Pages/Users/UserGroup/UserGroup";
import OrganizationalUnit from "./Pages/OrganizationalUnit/OrganizationalUnit";
import CostCodes from "./Pages/Cost Codes/CostCodes";
import DeviceImports from "./Pages/Imports/DeviceImports.jsx/DeviceImports";
import UserImports from "./Pages/Imports/UserImports/UserImports";
import EditUserImport from "./Pages/Imports/EditUserImport/EditUserImport";
import { deviceImportData, userImportData } from "./Pages/Imports/ImportData";
import AddUserImport from "./Pages/Imports/AddUserImport/AddUserImport";
import AddDeviceImport from "./Pages/Imports/AddDeviceImport/AddDeviceImport";
import EditDeviceImport from "./Pages/Imports/EditDeviceImport/EditDeviceImport";
// import ScheduledReports from "./Pages/Reports/ScheduledReports/ScheduledReports";
// import AddScheduledReports from "./Pages/Reports/AddScheduledReports/AddScheduledReports";
// import TemplateReport from "./Pages/Reports/TemplateReports/TemplateReports";
// import AddTemplateReports from "./Pages/Reports/AddTemplateReports/AddTemplateReports";
// import { scheduledData, templateData } from "./Pages/Reports/ReportData";
// import EditTemplateReport from "./Pages/Reports/EditTemplateReports/EditTemplateReports";
// import EditScheduledReport from "./Pages/Reports/EditScheduledReport/EditScheduledReports";
import AddReports from "./Pages/Reports/AddReports";
import Statistics from "./Pages/Statistics/Statistics";
import EmailTemplate from "./Pages/EmailTemplate/EmailTemplate";
import emailData from "./Pages/EmailTemplate/emailData";
import AddEmailTemplate from "./Pages/EmailTemplate/AddEmailTemplate";
import EditEmailTemplate from "./Pages/EmailTemplate/EditEmailTemplate";
import PricingConfig from "./Pages/Pricing/PricingConfig";
import AssignPricingConfig from "./Pages/Pricing/AssignPricingConfig";
import { pricingConfigData } from "./Pages/Pricing/pricingData";
import EditPriceScheme from "./Pages/Pricing/EditPriceScheme";
import AddPriceScheme from "./Pages/Pricing/AddPriceScheme";
import Cashier from "./Pages/Cashier/Cashier";
import CustomPrint from "./Pages/CustomPrint/CustomPrint";
import Settings from "./Pages/Settings/Settings";
import Logs from "./Pages/Logs/Logs";
import About from "./Pages/About/About";
import Groups from "./Pages/Groups/Groups";
import Report from "./Pages/Reports/Report";
import EditReport from "./Pages/Reports/EditReport";
import ScrollToTop from "./utils/ScrollToTop";
import Users from "./Pages/Users/Users/Users";
import UserData from "./Pages/Users/Users/UserData";
import "./App.css";
import DeviceSetting from "./Pages/Settings/DeviceSetting";
import OptionSetting from "./Pages/Settings/OptionSetting";
import WinAuth from "./Pages/Settings/WinAuth";
import LicenseInfo from "./Pages/Licence/LicenseInfo";
import LicenseDetails from "./Pages/Licence/LicenceDetails";
import LicenseFeature from "./Pages/Licence/LicenseFeature";
import LLA from "./Pages/LLA/LLA";
import Api from "./Pages/API/Api";
import AzureDetails from "./Pages/Settings/AzureDetails";

export default function App() {
  const location = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <AnimatePresence mode="wait">
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        {/* <Route path="/" element={<Layout />}> */}
        {/* <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          /> */}
        <Route path="/server" element={<Server />} />
        <Route
          path="/server/edit/:serverId"
          element={<EditPage data={serverData} />}
        />
        <Route path="/users" element={<Users />} />
        <Route path="/users/add-user" element={<AddUser />} />
        <Route
          path="/users/edit/access-code/:userId"
          element={<AccessCode data={UserData} />}
        />
        <Route
          path="/users/edit/:userId"
          element={<EditUser data={UserData} />}
        />
        <Route
          path="/users/edit/alias/:userId"
          element={<Alias data={UserData} />}
        />
        <Route
          path="/users/edit/group/:userId"
          element={<UserGroup data={UserData} />}
        />
        <Route
          path="/users/edit/print-docs/:userId"
          element={<PrintDocs data={UserData} />}
        />

        <Route path="/devices" element={<Devices />} />
        <Route path="/devices/add-device" element={<AddDevice />} />
        <Route
          path="/devices/edit/:deviceId"
          element={<EditDevice data={devicesData} />}
        />
        <Route path="/devices/groups/:deviceId" element={<DeviceGroups />} />
        <Route path="/queues" element={<PrintQueues />} />
        <Route path="/departments" element={<Department />} />
        <Route path="/groups/user-groups" element={<Groups />} />
        <Route path="/groups/device-groups" element={<Groups />} />
        <Route path="/cost-codes" element={<CostCodes />} />
        <Route path="/organizational-unit" element={<OrganizationalUnit />} />

        <Route path="/user-imports" element={<UserImports />} />
        <Route path="/user-imports/add-user" element={<AddUserImport />} />
        <Route
          path="/user-imports/edit/:userId"
          element={<EditUserImport data={userImportData} />}
        />
        <Route path="/device-imports" element={<DeviceImports />} />
        <Route
          path="/device-imports/add-device"
          element={<AddDeviceImport />}
        />
        <Route
          path="/device-imports/edit/:deviceId"
          element={<EditDeviceImport data={deviceImportData} />}
        />

        <Route path="/reports/scheduled-reports" element={<Report />} />
        <Route path="/add-report" element={<AddReports />} />
        {/* <Route
            path="/scheduled-reports/add-report"
            element={<AddScheduledReports />}
          /> */}
        <Route
          path="/edit-report/:reportType/edit/:userId"
          element={<EditReport />}
        />
        <Route path="/reports/template-reports" element={<Report />} />
        {/* <Route
            path="/template-reports/add-template"
            element={<AddTemplateReports />}
          />
          <Route
            path="/template-reports/edit/:tempId"
            element={<EditTemplateReport data={templateData} />}
          /> */}
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/email-templates" element={<EmailTemplate />} />
        <Route
          path="/email-templates/add-template"
          element={<AddEmailTemplate />}
        />
        <Route
          path="/email-templates/edit/:emailId"
          element={<EditEmailTemplate data={emailData} />}
        />
        <Route path="/pricing-configuration" element={<PricingConfig />} />
        <Route
          path="/pricing-configuration/add-price"
          element={<AddPriceScheme />}
        />
        <Route
          path="/pricing-configuration/edit/:priceId"
          element={<EditPriceScheme data={pricingConfigData} />}
        />
        <Route
          path="/assign-pricing-configuration"
          element={<AssignPricingConfig />}
        />
        <Route path="/cashier" element={<Cashier />} />
        <Route path="/custom-print-page" element={<CustomPrint />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/device-setting" element={<DeviceSetting />} />
        <Route path="/option-setting" element={<OptionSetting />} />
        <Route path="/winauth-setting" element={<WinAuth />} />
        <Route path="/azure-setting" element={<AzureDetails />} />
        <Route path="/license-info" element={<LicenseInfo />} />
        <Route path="/license-detail" element={<LicenseDetails />} />
        <Route path="/license-feature" element={<LicenseFeature />} />
        <Route path="/core-application-logs" element={<Logs />} />
        <Route path="/oxpd-application-logs" element={<Logs />} />
        <Route path="/about" element={<About />} />
        <Route path="/lla" element={<LLA />} />
        <Route path="/api" element={<Api />} />
        {/* </Route> */}
      </Routes>
    </AnimatePresence>
  );
}
