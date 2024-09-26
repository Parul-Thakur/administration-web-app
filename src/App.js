import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useTheme } from "./utils/ThemeContext";
import "./App.css";
import Login from "./Pages/CaletaCore/Login/Login";
import Layout from "./Components/Common/Layout";
import Dashboard from "./Pages/CaletaCore/Dashboard/Dashboard";
import Server from "./Pages/CaletaCore/Server/Server";
import EditServer from "./Pages/CaletaCore/Server/EditServer";
import serverData from "./Pages/CaletaCore/Server/ServerData";
import Users from "./Pages/CaletaCore/Users/Users";
import AddUser from "./Pages/CaletaCore/Users/AddUser";
import AccessCode from "./Pages/CaletaCore/Users/AccessCode";
import EditUser from "./Pages/CaletaCore/Users/EditUser";
import Alias from "./Pages/CaletaCore/Users/Alias";
import UserGroup from "./Pages/CaletaCore/Users/UserGroup";
import PrintDocs from "./Pages/CaletaCore/Users/PrintDocs";
import Devices from "./Pages/CaletaCore/Devices/Devices";
import AddDevice from "./Pages/CaletaCore/Devices/AddDevice";
import EditDevice from "./Pages/CaletaCore/Devices/EditDevice";
import DeviceGroups from "./Pages/CaletaCore/Devices/DeviceGroups";
import PrintQueues from "./Pages/CaletaCore/PrintQueues/PrintQueues";
import Department from "./Pages/CaletaCore/Department/Department";
import Groups from "./Pages/CaletaCore/Groups/Groups";
import CostCodes from "./Pages/CaletaCore/Cost Codes/CostCodes";
import OrganizationalUnit from "./Pages/CaletaCore/OrganizationalUnit/OrganizationalUnit";
import UserImports from "./Pages/CaletaCore/Imports/UserImports";
import AddUserImport from "./Pages/CaletaCore/Imports/AddUserImport";
import EditUserImport from "./Pages/CaletaCore/Imports/EditUserImport";
import DeviceImports from "./Pages/CaletaCore/Imports/DeviceImports";
import AddDeviceImport from "./Pages/CaletaCore/Imports/AddDeviceImport";
import EditDeviceImport from "./Pages/CaletaCore/Imports/EditDeviceImport";
import Report from "./Pages/CaletaCore/Reports/Report";
import AddReport from "./Pages/CaletaCore/Reports/AddReport";
import EditReport from "./Pages/CaletaCore/Reports/EditReport";
import Statistics from "./Pages/CaletaCore/Statistics/Statistics";
import EmailTemplate from "./Pages/CaletaCore/EmailTemplate/EmailTemplate";
import AddEmailTemplate from "./Pages/CaletaCore/EmailTemplate/AddEmailTemplate";
import EditEmailTemplate from "./Pages/CaletaCore/EmailTemplate/EditEmailTemplate";
import { emailData } from "./Pages/CaletaCore/EmailTemplate/emailData";
import {
  deviceImportData,
  userImportData,
} from "./Pages/CaletaCore/Imports/ImportData";
import PricingConfig from "./Pages/CaletaCore/Pricing/PricingConfig";
import AddPriceScheme from "./Pages/CaletaCore/Pricing/AddPriceScheme";
import EditPriceScheme from "./Pages/CaletaCore/Pricing/EditPriceScheme";
import AssignPricingConfig from "./Pages/CaletaCore/Pricing/AssignPricingConfig";
import Cashier from "./Pages/CaletaCore/Cashier/CashierForm";
import CustomPrint from "./Pages/CaletaCore/CustomPrint/CustomPrint";
import Settings from "./Pages/CaletaCore/Settings/Settings";
import DeviceSetting from "./Pages/CaletaCore/Settings/DeviceSetting";
import OptionSetting from "./Pages/CaletaCore/Settings/OptionSetting";
import WinAuth from "./Pages/CaletaCore/Settings/WinAuth";
import AzureDetails from "./Pages/CaletaCore/Settings/AzureDetails";
import LicenseInfo from "./Pages/CaletaCore/Licence/LicenseInfo";
import LicenseDetails from "./Pages/CaletaCore/Licence/LicenceDetails";
import LicenseFeature from "./Pages/CaletaCore/Licence/LicenseFeature";
import Logs from "./Pages/CaletaCore/Logs/Logs";
import About from "./Pages/CaletaCore/About/About";
import LLA from "./Pages/CaletaCore/LLA/LLA";
import Api from "./Pages/CaletaCore/API/Api";
import UserData from "./Pages/CaletaCore/Users/UserData";
import ScrollToTop from "./utils/ScrollToTop";
import ProtectedRoute from "./utils/ProtectedRoutes";
import { devicesData } from "./Pages/CaletaCore/Devices/devicesData";
import { pricingConfigData } from "./Pages/CaletaCore/Pricing/pricingData";
import WebSetting from "./Pages/CaletaWeb/WebSetting/WebSetting";
import Customization from "./Pages/CaletaWeb/Customization/Customiztion";
import GeneralSetting from "./Pages/CaletaWeb/WebSetting/GeneralSetting";
import CustomMenu from "./Pages/CaletaWeb/Customization/CustomMenu";
import Lla from "./Pages/CaletaWeb/Lla/Lla";

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
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/server" element={<Server />} />
          <Route
            path="/server/edit/:serverId"
            element={<EditServer data={serverData} />}
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
          <Route path="/add-report" element={<AddReport />} />
          <Route
            path="/edit-report/:reportType/edit/:userId"
            element={<EditReport />}
          />
          <Route path="/reports/template-reports" element={<Report />} />
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

          <Route path="/web/web-setting" element={<WebSetting />} />
          <Route path="/web/general-setting" element={<GeneralSetting />} />
          <Route path="/web/custom" element={<Customization />} />
          <Route path="/web/custom-menu" element={<CustomMenu />} />
          <Route path="/web/lla" element={<Lla />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
