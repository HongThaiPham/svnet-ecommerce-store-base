import RecentSalesCard from "@/components/dashboard/RecentSalesCard";
import RecentTransactionsCard from "@/components/dashboard/RecentTransactionsCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Blocks,
  DollarSign,
  PartyPopper,
  ShoppingBag,
  User2,
} from "lucide-react";
import React from "react";

type Props = {};

const DashboardPage: React.FC<Props> = ({}) => {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total Revenue</CardTitle>
            <DollarSign className="w-6 h-6 text-green-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold ">$100.000</p>
            <p className="text-xs text-muted-foreground">
              Based on 100 charges
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total Sales</CardTitle>
            <ShoppingBag className="w-6 h-6 text-blue-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold ">+50</p>
            <p className="text-xs text-muted-foreground">
              Total sales on Store
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total Products</CardTitle>
            <Blocks className="w-6 h-6 text-indigo-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold ">48</p>
            <p className="text-xs text-muted-foreground">
              Total products created
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total Users</CardTitle>
            <User2 className="w-6 h-6 text-orange-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold ">59</p>
            <p className="text-xs text-muted-foreground">
              Total users registered
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 mt-10">
        <RecentTransactionsCard />
        <RecentSalesCard />
      </div>
    </>
  );
};

export default DashboardPage;
