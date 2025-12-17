import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, MapPin, User2, Clock } from "lucide-react";

interface TrainingSession {
  id: string;
  title: string;
  date: string; // e.g., "YYYY-MM-DD"
  time: string; // e.g., "HH:MM AM/PM"
  description: string;
  location: string;
  trainer: string;
  status: "upcoming" | "active" | "completed" | "cancelled";
}

const dummyTrainingSessions: TrainingSession[] = [
  {
    id: "ts1",
    title: "Foundations of Discipleship",
    date: "2024-12-20",
    time: "10:00 AM - 12:00 PM",
    description: "An introductory course on the core principles of discipleship, focusing on spiritual growth and biblical understanding.",
    location: "Online (Zoom)",
    trainer: "Pastor John Doe",
    status: "upcoming",
  },
  {
    id: "ts2",
    title: "Evangelism & Outreach Workshop",
    date: "2025-01-15",
    time: "06:00 PM - 08:00 PM",
    description: "Practical strategies and tools for effective evangelism in your community. Learn to share your faith confidently.",
    location: "Community Church Hall",
    trainer: "Evangelist Jane Smith",
    status: "upcoming",
  },
  {
    id: "ts3",
    title: "Leadership Development for Disciple Makers",
    date: "2025-02-10",
    time: "09:00 AM - 01:00 PM",
    description: "Equipping leaders to multiply disciples and establish thriving ministry groups. Advanced principles of spiritual leadership.",
    location: "City Conference Center, Room 301",
    trainer: "Dr. Peter Jones",
    status: "upcoming",
  },
  {
    id: "ts4",
    title: "Advanced Biblical Studies: Book of Romans",
    date: "2025-03-05",
    time: "07:00 PM - 09:00 PM",
    description: "A deep dive into the theological richness of the Apostle Paul's letter to the Romans. Requires prior biblical knowledge.",
    location: "Online (Google Meet)",
    trainer: "Prof. Mary Brown",
    status: "upcoming",
  },
];

const ScheduleTraining = () => {
  return (
    <div className="flex flex-col h-full p-6 bg-gray-50 dark:bg-gray-900">
      <Card className="flex-1">
        <CardHeader>
          <CardTitle className="text-3xl">Upcoming Training Sessions</CardTitle>
          <CardDescription>
            View the schedule of upcoming training programs designed to equip you as a disciple maker.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          {dummyTrainingSessions.map((session, index) => (
            <React.Fragment key={session.id}>
              <Card className="shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-xl font-semibold">
                    {session.title}
                  </CardTitle>
                  <Badge
                    variant={
                      session.status === "upcoming"
                        ? "default"
                        : session.status === "active"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {session.status.charAt(0).toUpperCase() + session.status.slice(1)}
                  </Badge>
                </CardHeader>
                <CardContent className="grid gap-2">
                  <p className="text-muted-foreground text-sm">{session.description}</p>
                  <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                    <Calendar className="mr-2 h-4 w-4" /> {session.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                    <Clock className="mr-2 h-4 w-4" /> {session.time}
                  </div>
                  <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                    <MapPin className="mr-2 h-4 w-4" /> {session.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                    <User2 className="mr-2 h-4 w-4" /> {session.trainer}
                  </div>
                </CardContent>
              </Card>
              {index < dummyTrainingSessions.length - 1 && <Separator />}
            </React.Fragment>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default ScheduleTraining;