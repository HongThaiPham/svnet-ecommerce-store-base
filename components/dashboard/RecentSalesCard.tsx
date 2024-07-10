import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback } from "../ui/avatar";

type Props = {};

const RecentSalesCard: React.FC<Props> = ({}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent sales</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <Avatar className="hidden sm:flex h-9 w-9">
            <AvatarFallback>LP</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium">Leo Pham</p>
            <p className="text-sm text-muted-foreground">dev@svnet.dev</p>
          </div>
          <p className="ml-auto font-medium">+$1,990.00</p>
        </div>
        <div className="flex items-center gap-4">
          <Avatar className="hidden sm:flex h-9 w-9">
            <AvatarFallback>LP</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium">Leo Pham</p>
            <p className="text-sm text-muted-foreground">dev@svnet.dev</p>
          </div>
          <p className="ml-auto font-medium">+$1,990.00</p>
        </div>
        <div className="flex items-center gap-4">
          <Avatar className="hidden sm:flex h-9 w-9">
            <AvatarFallback>LP</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium">Leo Pham</p>
            <p className="text-sm text-muted-foreground">dev@svnet.dev</p>
          </div>
          <p className="ml-auto font-medium">+$1,990.00</p>
        </div>
        <div className="flex items-center gap-4">
          <Avatar className="hidden sm:flex h-9 w-9">
            <AvatarFallback>LP</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium">Leo Pham</p>
            <p className="text-sm text-muted-foreground">dev@svnet.dev</p>
          </div>
          <p className="ml-auto font-medium">+$1,990.00</p>
        </div>
        <div className="flex items-center gap-4">
          <Avatar className="hidden sm:flex h-9 w-9">
            <AvatarFallback>LP</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium">Leo Pham</p>
            <p className="text-sm text-muted-foreground">dev@svnet.dev</p>
          </div>
          <p className="ml-auto font-medium">+$1,990.00</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentSalesCard;
