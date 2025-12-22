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
import { Calendar as CalendarIcon, MapPin, Clock, Plus } from "lucide-react";
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
import { format } from "date-fns";
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
import { supabase } from "@/supabaseClient";
type TrainingStatus = "scheduled" | "ongoing" | "completed" | "cancelled";

interface TrainingSession {
  id: string;
  title: string;
  description: string;
  training_date: string; // "YYYY-MM-DD"
  training_time: string; // "HH:MM:SS"
  location: string;
  status: TrainingStatus;
  created_at?: string;
  updated_at?: string;
}

type RightPanelMode = "addTraining" | "viewDetails" | "initial";

const ScheduleTraining = () => {
  const [trainingSessions, setTrainingSessions] = useState<TrainingSession[]>(
    []
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newTraining, setNewTraining] = useState<Omit<TrainingSession, "id">>({
    title: "",
    description: "",
    training_date: "", // Will be set on date selection or Add Manually
    training_time: "",
    location: "",
    status: "scheduled",
  });
  const [rightPanelMode, setRightPanelMode] =
    useState<RightPanelMode>("initial");

  // Fetch trainings from Supabase
  useEffect(() => {
    const fetchTrainings = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("training")
        .select("*")
        .order("training_date", { ascending: true });
      if (!error && data) {
        setTrainingSessions(data as TrainingSession[]);
      }
      setLoading(false);
    };
    fetchTrainings();
  }, []);

  // Effect to update newTraining.training_date when selectedDate changes
  useEffect(() => {
    if (selectedDate) {
      setNewTraining((prev) => ({
        ...prev,
        training_date: format(selectedDate, "yyyy-MM-dd"),
      }));
    } else {
      setNewTraining((prev) => ({ ...prev, training_date: "" }));
    }
  }, [selectedDate]);

  const trainingsByDate = useMemo(() => {
    const map = new Map<string, TrainingSession[]>();
    trainingSessions.forEach((session) => {
      const dateKey = session.training_date;
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !newTraining.training_date ||
      !newTraining.title ||
      !newTraining.training_time ||
      !newTraining.description ||
      !newTraining.location
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const insertData = {
      ...newTraining,
    };

    const { data, error } = await supabase
      .from("training")
      .insert([insertData])
      .select()
      .single();

    if (error) {
      alert("Failed to add training: " + error.message);
      return;
    } else if (data) {
      setTrainingSessions((prev) =>
        [...prev, data as TrainingSession].sort(
          (a, b) =>
            new Date(a.training_date).getTime() -
            new Date(b.training_date).getTime()
        )
      );
    }
    setNewTraining({
      title: "",
      description: "",
      training_date: selectedDate ? format(selectedDate, "yyyy-MM-dd") : "",
      training_time: "",
      location: "",
      status: "scheduled",
    });
    setIsDialogOpen(false);

    if (selectedDate) {
      setRightPanelMode("viewDetails");
    }
  };

  const selectedDayTrainings = selectedDate
    ? trainingsByDate.get(format(selectedDate, "yyyy-MM-dd")) || []
    : [];

  const upcomingSessions = useMemo(() => {
    const today = new Date();
    return trainingSessions
      .filter((session) => new Date(session.training_date) >= today)
      .sort(
        (a, b) =>
          new Date(a.training_date).getTime() -
          new Date(b.training_date).getTime()
      );
  }, [trainingSessions]);

  const pastSessions = useMemo(() => {
    const today = new Date();
    return trainingSessions
      .filter((session) => new Date(session.training_date) < today)
      .sort(
        (a, b) =>
          new Date(b.training_date).getTime() -
          new Date(a.training_date).getTime()
      );
  }, [trainingSessions]);

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
                  training_date: selectedDate
                    ? format(selectedDate, "yyyy-MM-dd")
                    : "",
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
                <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                  <Label htmlFor="title" className="md:text-right text-left">
                    Title
                  </Label>
                  <Input
                    id="title"
                    value={newTraining.title}
                    onChange={handleInputChange}
                    className="md:col-span-3 col-span-full"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                  <Label
                    htmlFor="description"
                    className="md:text-right text-left"
                  >
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    value={newTraining.description}
                    onChange={handleInputChange}
                    className="md:col-span-3 col-span-full"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                  <Label
                    htmlFor="training_date"
                    className="md:text-right text-left"
                  >
                    Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal md:col-span-3 col-span-full",
                          !newTraining.training_date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {newTraining.training_date ? (
                          format(new Date(newTraining.training_date), "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={
                          newTraining.training_date
                            ? new Date(newTraining.training_date)
                            : undefined
                        }
                        onSelect={handleDateSelect}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                  <Label
                    htmlFor="training_time"
                    className="md:text-right text-left"
                  >
                    Time
                  </Label>
                  <Input
                    id="training_time"
                    type="time"
                    value={newTraining.training_time}
                    onChange={handleInputChange}
                    className="md:col-span-3 col-span-full"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                  <Label htmlFor="location" className="md:text-right text-left">
                    Location
                  </Label>
                  <Input
                    id="location"
                    value={newTraining.location}
                    onChange={handleInputChange}
                    className="md:col-span-3 col-span-full"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                  <Label htmlFor="status" className="md:text-right text-left">
                    Status
                  </Label>
                  <Select
                    value={newTraining.status}
                    onValueChange={(value) =>
                      handleSelectChange(value, "status")
                    }
                  >
                    <SelectTrigger className="md:col-span-3 col-span-full">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="scheduled">Scheduled</SelectItem>
                      <SelectItem value="ongoing">Ongoing</SelectItem>
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
                        training_date: selectedDate
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
                        <Label htmlFor="training_date" className="text-right">
                          Date
                        </Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full justify-start text-left font-normal col-span-3",
                                !newTraining.training_date &&
                                  "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {newTraining.training_date ? (
                                format(
                                  new Date(newTraining.training_date),
                                  "PPP"
                                )
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={
                                newTraining.training_date
                                  ? new Date(newTraining.training_date)
                                  : undefined
                              }
                              onSelect={handleDateSelect}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="training_time" className="text-right">
                          Time
                        </Label>
                        <Input
                          id="training_time"
                          type="time"
                          value={newTraining.training_time}
                          onChange={handleInputChange}
                          className="col-span-3"
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
                            <SelectItem value="scheduled">Scheduled</SelectItem>
                            <SelectItem value="ongoing">Ongoing</SelectItem>
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
                          session.status === "scheduled"
                            ? "default"
                            : session.status === "ongoing"
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
                        {session.training_time}
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
          {loading ? (
            <p className="text-muted-foreground">Loading...</p>
          ) : upcomingSessions.length > 0 ? (
            upcomingSessions.map((session, index) => (
              <React.Fragment key={session.id}>
                <Card className="shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-xl font-semibold">
                      {session.title}
                    </CardTitle>
                    <Badge
                      variant={
                        session.status === "scheduled"
                          ? "default"
                          : session.status === "ongoing"
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
                      <CalendarIcon className="mr-2 h-4 w-4" />{" "}
                      {format(new Date(session.training_date), "yyyy-MM-dd")}
                    </div>
                    <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <Clock className="mr-2 h-4 w-4" /> {session.training_time}
                    </div>
                    <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <MapPin className="mr-2 h-4 w-4" /> {session.location}
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
                      <CalendarIcon className="mr-2 h-4 w-4" />{" "}
                      {format(new Date(session.training_date), "yyyy-MM-dd")}
                    </div>
                    <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <Clock className="mr-2 h-4 w-4" /> {session.training_time}
                    </div>
                    <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <MapPin className="mr-2 h-4 w-4" /> {session.location}
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
