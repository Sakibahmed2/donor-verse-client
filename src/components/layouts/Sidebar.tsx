import { Layout, Menu } from "antd";
import { MoneyCollectOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const { Sider } = Layout;

const items = [
  {
    key: "Dashboard",
    label: <NavLink to="/dashboard">Dashboard</NavLink>,
  },
  {
    key: "Supplies",
    label: <NavLink to="/dashboard/supplies">Supplies</NavLink>,
  },
  {
    key: "Create supplies",
    label: <NavLink to="/dashboard/create-supply">Create supply</NavLink>,
  },
];

const Sidebar = () => {
  return (
    <Sider
      style={{ height: "100vh", position: "sticky", top: 0, left: 0 }}
      breakpoint="lg"
      collapsedWidth="0"
    >
      <div className="text-xl text-[#ADBC9F] font-semibold flex justify-center items-center mt-4 mb-8 gap-2">
        <NavLink to="/">
          <span>
            <MoneyCollectOutlined />
          </span>
          Donor verse
        </NavLink>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={items}
      />
    </Sider>
  );
};

export default Sidebar;
