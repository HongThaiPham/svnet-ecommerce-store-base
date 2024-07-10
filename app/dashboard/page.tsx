import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

type Props = {};

const DashboardPage: React.FC<Props> = ({}) => {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Revenue</CardTitle>
          </CardHeader>
        </Card>
      </div>
    </>
  );
};

export default DashboardPage;
