import React, { useState, useMemo, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Calendar as CalendarIcon,
  MapPin,
  User2,
  Clock,
  Plus,
  Edit,
  Trash2,
} from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { format, isSameDay } from "date-fns";
import { v4 as uuidv4 } from "uuid";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

const initialTrainingSessions: TrainingSession[] = [
  {
    id: "ts1",
    title: "Foundations of Discipleship",
    date: "2024-12-20",
    time: "10:00 AM - 12:00 PM",
    description:
      "An introductory course on the core principles of discipleship, focusing on spiritual growth and biblical understanding.",
    location: "Online (Zoom)",
    trainer: "Pastor John Doe",
    status: "upcoming",
  },
  {
    id: "ts2",
    title: "Evangelism & Outreach Workshop",
    date: "2025-01-15",
    time: "06:00 PM - 08:00 PM",
    description:
      "Practical strategies and tools for effective evangelism in your community. Learn to share your faith confidently.",
    location: "Community Church Hall",
    trainer: "Evangelist Jane Smith",
    status: "upcoming",
  },
  {
    id: "ts3",
    title: "Leadership Development for Disciple Makers",
    date: "2025-02-10",
    time: "09:00 AM - 01:00 PM",
    description:
      "Equipping leaders to multiply disciples and establish thriving ministry groups. Advanced principles of spiritual leadership.",
    location: "City Conference Center, Room 301",
    trainer: "Dr. Peter Jones",
    status: "upcoming",
  },
  {
    id: "ts4",
    title: "Advanced Biblical Studies: Book of Romans",
    date: "2025-03-05",
    time: "07:00 PM - 09:00 PM",
    description:
      "A deep dive into the theological richness of the Apostle Paul's letter to the Romans. Requires prior biblical knowledge.",
    location: "Online (Google Meet)",
    trainer: "Prof. Mary Brown",
    status: "upcoming",
  },
];

type RightPanelMode = "addTraining" | "viewDetails" | "initial";

const ScheduleTraining = () => {
  const [trainingSessions, setTrainingSessions] = useState<TrainingSession[]>(
    initialTrainingSessions
  );
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newTraining, setNewTraining] = useState<Omit<TrainingSession, "id">>({
    title: "",
    date: "", // Will be set on date selection or Add Manually
    time: "",
    description: "",
    location: "",
    trainer: "",
    status: "upcoming",
  });
  const [rightPanelMode, setRightPanelMode] =
    useState<RightPanelMode>("initial");

  // Effect to update newTraining.date when selectedDate changes (for dialog pre-fill)
  useEffect(() => {
    if (selectedDate) {
      setNewTraining((prev) => ({
        ...prev,
        date: format(selectedDate, "yyyy-MM-dd"),
      }));
    } else {
      setNewTraining((prev) => ({ ...prev, date: "" }));
    }
  }, [selectedDate]);

  const trainingsByDate = useMemo(() => {
    const map = new Map<string, TrainingSession[]>();
    trainingSessions.forEach((session) => {
      const dateKey = session.date;
      if (!map.has(dateKey)) {
        map.set(dateKey, []);
      }
      map.get(dateKey)?.push(session);
    });
    return map;
  }, [trainingSessions]);

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date) {
      const dateKey = format(date, "yyyy-MM-dd");
      if (trainingsByDate.has(dateKey)) {
        setRightPanelMode("viewDetails");
      } else {
        setRightPanelMode("addTraining");
      }
    } else {
      setRightPanelMode("initial");
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setNewTraining((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (value: string, id: string) => {
    setNewTraining((prev) => ({
      ...prev,
      [id]: value as TrainingSession["status"],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !newTraining.date ||
      !newTraining.title ||
      !newTraining.time ||
      !newTraining.description ||
      !newTraining.location ||
      !newTraining.trainer
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const newSession: TrainingSession = {
      ...newTraining,
      id: uuidv4(),
    };

    setTrainingSessions((prev) =>
      [...prev, newSession].sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      )
    );
    setNewTraining({
      title: "",
      date: selectedDate ? format(selectedDate, "yyyy-MM-dd") : "",
      time: "",
      description: "",
      location: "",
      trainer: "",
      status: "upcoming",
    });
    setIsDialogOpen(false);
    // After adding, if a date was selected, switch to view details for that date
    if (selectedDate) {
      setRightPanelMode("viewDetails");
    }
  };

  const selectedDayTrainings = selectedDate
    ? trainingsByDate.get(format(selectedDate, "yyyy-MM-dd")) || []
    : [];

  const upcomingSessions = trainingSessions
    .filter((session) => new Date(session.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const pastSessions = trainingSessions
    .filter((session) => new Date(session.date) < new Date())
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const renderAddTrainingForm = (title: string, description: string) => (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl">{title}</CardTitle>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setNewTraining((prev) => ({
                  ...prev,
                  date: selectedDate ? format(selectedDate, "yyyy-MM-dd") : "",
                }));
              }}
            >
              <Plus className="mr-2 h-4 w-4" /> Add Training
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Training Session</DialogTitle>
              <DialogDescription>
                Fill in the details for the new training session.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="title" className="text-right">
                    Title
                  </Label>
                  <Input
                    id="title"
                    value={newTraining.title}
                    onChange={handleInputChange}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right">
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    value={newTraining.description}
                    onChange={handleInputChange}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="date" className="text-right">
                    Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal col-span-3",
                          !newTraining.date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {newTraining.date ? (
                          format(new Date(newTraining.date), "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={handleDateSelect}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="time" className="text-right">
                    Time
                  </Label>
                  <Input
                    id="time"
                    value={newTraining.time}
                    onChange={handleInputChange}
                    className="col-span-3"
                    placeholder="e.g., 10:00 AM - 12:00 PM"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="location" className="text-right">
                    Location
                  </Label>
                  <Input
                    id="location"
                    value={newTraining.location}
                    onChange={handleInputChange}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="trainer" className="text-right">
                    Trainer
                  </Label>
                  <Input
                    id="trainer"
                    value={newTraining.trainer}
                    onChange={handleInputChange}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="status" className="text-right">
                    Status
                  </Label>
                  <Select
                    value={newTraining.status}
                    onValueChange={(value) =>
                      handleSelectChange(value, "status")
                    }
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="upcoming">Upcoming</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save Training</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );

  return (
    <div className="flex flex-col h-full p-6 bg-gray-50 dark:bg-gray-900 overflow-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Training Calendar</CardTitle>
            <CardDescription>
              Select a date to view or schedule training sessions.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleDateSelect}
              className="rounded-md border"
              modifiers={{
                hasTrainings: Array.from(trainingsByDate.keys()).map(
                  (dateStr) => new Date(dateStr)
                ),
              }}
              modifiersClassNames={{
                hasTrainings: "has-trainings",
              }}
              // onDayClick will be handled by onSelect
            />
          </CardContent>
        </Card>

        {rightPanelMode === "viewDetails" &&
        selectedDate &&
        selectedDayTrainings.length > 0 ? (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-2xl">
                Trainings on {format(selectedDate, "PPP")}
              </CardTitle>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setNewTraining((prev) => ({
                        ...prev,
                        date: selectedDate
                          ? format(selectedDate, "yyyy-MM-dd")
                          : "",
                      }))
                    }
                  >
                    <Plus className="mr-2 h-4 w-4" /> Add Training
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Add Training Session</DialogTitle>
                    <DialogDescription>
                      Fill in the details for the new training session.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="title" className="text-right">
                          Title
                        </Label>
                        <Input
                          id="title"
                          value={newTraining.title}
                          onChange={handleInputChange}
                          className="col-span-3"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="description" className="text-right">
                          Description
                        </Label>
                        <Textarea
                          id="description"
                          value={newTraining.description}
                          onChange={handleInputChange}
                          className="col-span-3"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="date" className="text-right">
                          Date
                        </Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full justify-start text-left font-normal col-span-3",
                                !newTraining.date && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {newTraining.date ? (
                                format(new Date(newTraining.date), "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={selectedDate}
                              onSelect={handleDateSelect}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="time" className="text-right">
                          Time
                        </Label>
                        <Input
                          id="time"
                          value={newTraining.time}
                          onChange={handleInputChange}
                          className="col-span-3"
                          placeholder="e.g., 10:00 AM - 12:00 PM"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="location" className="text-right">
                          Location
                        </Label>
                        <Input
                          id="location"
                          value={newTraining.location}
                          onChange={handleInputChange}
                          className="col-span-3"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="trainer" className="text-right">
                          Trainer
                        </Label>
                        <Input
                          id="trainer"
                          value={newTraining.trainer}
                          onChange={handleInputChange}
                          className="col-span-3"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="status" className="text-right">
                          Status
                        </Label>
                        <Select
                          value={newTraining.status}
                          onValueChange={(value) =>
                            handleSelectChange(value, "status")
                          }
                        >
                          <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="upcoming">Upcoming</SelectItem>
                            <SelectItem value="active">Active</SelectItem>
                            <SelectItem value="completed">Completed</SelectItem>
                            <SelectItem value="cancelled">Cancelled</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Save Training</Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </CardHeader>
            <CardContent className="grid gap-4">
              {selectedDayTrainings.map((session, index) => (
                <React.Fragment key={session.id}>
                  <Card className=" p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-xl text-foreground">
                        {session.title}
                      </h4>
                      <Badge
                        variant={
                          session.status === "upcoming"
                            ? "default"
                            : session.status === "active"
                            ? "secondary"
                            : "outline"
                        }
                      >
                        {session.status.charAt(0).toUpperCase() +
                          session.status.slice(1)}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {session.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4 text-hero-accent" />{" "}
                        {session.time}
                      </div>
                      <div className="flex items-center">
                        <User2 className="mr-2 h-4 w-4 text-hero-accent" />{" "}
                        {session.trainer}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-2 h-4 w-4 text-hero-accent" />{" "}
                        {session.location}
                      </div>
                    </div>
                  </Card>
                  {index < selectedDayTrainings.length - 1 && (
                    <Separator className="my-4" />
                  )}
                </React.Fragment>
              ))}
            </CardContent>
          </Card>
        ) : (
          renderAddTrainingForm(
            selectedDate
              ? `Add Training on ${format(selectedDate, "PPP")}`
              : "Add New Training",
            selectedDate
              ? "Fill in the details below to schedule a training session on this day."
              : "Click the 'Add Training' button to manually schedule a new training session."
          )
        )}
      </div>

      <Card className="flex-1">
        <CardHeader>
          <CardTitle className="text-3xl">Upcoming Training Sessions</CardTitle>
          <CardDescription>
            View the schedule of upcoming training programs designed to equip
            you as a disciple maker.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          {upcomingSessions.length > 0 ? (
            upcomingSessions.map((session, index) => (
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
                      {session.status.charAt(0).toUpperCase() +
                        session.status.slice(1)}
                    </Badge>
                  </CardHeader>
                  <CardContent className="grid gap-2">
                    <p className="text-muted-foreground text-sm">
                      {session.description}
                    </p>
                    <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <CalendarIcon className="mr-2 h-4 w-4" /> {session.date}
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
                {index < upcomingSessions.length - 1 && <Separator />}
              </React.Fragment>
            ))
          ) : (
            <p className="text-muted-foreground">
              No upcoming training sessions. Add one using the calendar or the
              "Add Training" button!
            </p>
          )}
        </CardContent>
      </Card>

      {pastSessions.length > 0 && (
        <Card className="mt-6 flex-1">
          <CardHeader>
            <CardTitle className="text-3xl">Past Training Sessions</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6">
            {pastSessions.map((session, index) => (
              <React.Fragment key={session.id}>
                <Card className="shadow-sm hover:shadow-md transition-shadow opacity-70">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-xl font-semibold">
                      {session.title}
                    </CardTitle>
                    <Badge
                      variant={
                        session.status === "completed" ? "default" : "secondary"
                      }
                    >
                      {session.status.charAt(0).toUpperCase() +
                        session.status.slice(1)}
                    </Badge>
                  </CardHeader>
                  <CardContent className="grid gap-2">
                    <p className="text-muted-foreground text-sm">
                      {session.description}
                    </p>
                    <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <CalendarIcon className="mr-2 h-4 w-4" /> {session.date}
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
                {index < pastSessions.length - 1 && <Separator />}
              </React.Fragment>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ScheduleTraining;
