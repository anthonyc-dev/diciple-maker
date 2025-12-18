import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Events = () => {
  return (
    <div className="flex flex-col h-full p-6">
      <Card className="flex-1 shadow-lg border border-gray-200 dark:border-gray-700">
        <CardHeader className="bg-gray-50 dark:bg-gray-800 rounded-t-lg">
          <CardTitle className="text-3xl text-gray-900 dark:text-gray-100">
            Events
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 dark:text-gray-300">
            Under developement piece... 😁
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Events;
