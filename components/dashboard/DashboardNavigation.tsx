import Link from "next/link";
import React from "react";

type Props = {};

const NAV_LINKS = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Orders",
    href: "/dashboard/orders",
  },
  {
    name: "Products",
    href: "/dashboard/products",
  },
  {
    name: "Categories",
    href: "/dashboard/categories",
  },
];

const DashboardNavigation: React.FC<Props> = ({}) => {
  return (
    <>
      {NAV_LINKS.map((link) => (
        <Link key={link.href} href={link.href}>
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default DashboardNavigation;
