import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ScheduleTraining = () => {
  return (
    <div className="flex flex-col h-full p-6">
      <Card className="flex-1">
        <CardHeader>
          <CardTitle className="text-3xl">Schedule Training</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Content for Schedule Training goes here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ScheduleTraining;
