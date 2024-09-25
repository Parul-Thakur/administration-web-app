// Navbar.jsx
import React from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import "./NavbarMini.css";
import { motion } from "framer-motion";

const NavbarMini = () => {
  const location = useLocation();
  const { deviceId, userId } = useParams();

  // Check if the current path is the groups page or the EditPage
  const isGroupsPage =
    location.pathname.startsWith("/groups") ||
    location.pathname.includes('/users/group"');
  const isDevivePage =
    location.pathname.includes("/devices/edit/") ||
    location.pathname.includes("/devices/groups/");
  const isImportPage =
    location.pathname.includes("/user-imports") ||
    location.pathname.includes("/device-imports");
  const isReportPage =
    location.pathname.includes("/reports/scheduled-reports") ||
    location.pathname.includes("/reports/template-reports");
  const isPricingPage =
    location.pathname.includes("/pricing-configuration") ||
    location.pathname.includes("/assign-pricing-configuration");
  const isLogsPage =
    location.pathname.includes("/core-application-logs") ||
    location.pathname.includes("/oxpd-application-logs");
  const isSettingPage =
    location.pathname.includes("/settings") ||
    location.pathname.includes("/option-setting") ||
    location.pathname.includes("/device-setting") ||
    location.pathname.includes("/winauth-setting") ||
    location.pathname.includes("/azure-setting");
  const isWebSettingPage =
    location.pathname.includes("/web/web-setting") ||
    location.pathname.includes("/web/general-setting");
    const isWebCustomPage =
    location.pathname.includes("/web/custom") ||
    location.pathname.includes("/web/custom-menu");
  return (
    <nav className="navbarMini" style={{ width: "100%" }}>
      <ul className="miniLinks">
        {isGroupsPage ? (
          <>
            <li>
              <NavLink
                to={`/groups/user-groups`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                User Groups
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/groups/device-groups`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Device Groups
              </NavLink>
            </li>
          </>
        ) : isLogsPage ? (
          <>
            <li>
              <NavLink
                to={`/core-application-logs`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Core Application Logs
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/oxpd-application-logs`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                OXPD Application Logs
              </NavLink>
            </li>
          </>
        ) : isPricingPage ? (
          <>
            <li>
              <NavLink
                to={`/pricing-configuration`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Pricing Configuration
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/assign-pricing-configuration`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Assign Pricing Configuration
              </NavLink>
            </li>
          </>
        ) : isDevivePage ? (
          <>
            <li>
              <NavLink
                to={`/devices/edit/${deviceId}`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Device Edit
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/devices/groups/${deviceId}`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Groups
              </NavLink>
            </li>
          </>
        ) : isImportPage ? (
          <>
            <li>
              <NavLink
                to={`/user-imports`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                User Imports
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/device-imports`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Device Imports
              </NavLink>
            </li>
          </>
        ) : isReportPage ? (
          <>
            <li>
              <NavLink
                to={`/reports/scheduled-reports`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Scheduled Reports
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/reports/template-reports`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Template Reports
              </NavLink>
            </li>
          </>
        ) : isSettingPage ? (
          <>
            <li>
              <NavLink
                to={`/settings`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Server Configuration
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/option-setting`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Options
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/device-setting`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Device
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/winauth-setting`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Windows Authentication Details
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/azure-setting`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Azure App Details
              </NavLink>
            </li>
          </>
        ) : isWebCustomPage ? (
          <>
            <li>
              <NavLink
                to={`/web/custom`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                 General
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/web/custom-menu`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
               Custom Menu
              </NavLink>
            </li>
          </>
        ) : isWebSettingPage ? (
          <>
            <li>
              <NavLink
                to={`/web/web-setting`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Office 365 Account
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/web/general-setting`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                General Settings
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink
                to={`/users/edit/${userId}`}
                className={({ isActive }) => (isActive ? "active" : "")}
                end
              >
                User Detail
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/users/edit/access-code/${userId}`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Access Code
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/users/edit/alias/${userId}`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Alias
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/users/edit/group/${userId}`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Group
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/users/edit/print-docs/${userId}`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Print Documents
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavbarMini;
