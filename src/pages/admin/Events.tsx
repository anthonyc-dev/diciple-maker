import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Events = () => {
  return (
    <div className="flex flex-col h-full p-6">
      <Card className="flex-1">
        <CardHeader>
          <CardTitle className="text-3xl">Events</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Content for Events goes here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Events;
