import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

type Props = {};

const RecentTransactionsCard: React.FC<Props> = ({}) => {
  return (
    <Card className="xl:col-span-2">
      <CardHeader>
        <CardTitle>Transactions</CardTitle>
        <CardDescription>Recent transactions on your store</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default RecentTransactionsCard;
