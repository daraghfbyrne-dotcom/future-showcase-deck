import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Users, DollarSign } from "lucide-react";
import { PipelineChart } from "@/components/charts/PipelineChart";

export const EventsCalendar = () => {
  const quarters = [
    {
      quarter: "Q1",
      events: [
        { name: "Executive Dinners", locations: ["Dublin", "London", "New York"], sqlCount: 3, pipeline: "€330K" },
        { name: "SSOW USA", location: "Orlando", sqlCount: 3, pipeline: "€330K" }
      ]
    },
    {
      quarter: "Q2",
      events: [
        { name: "Executive Dinners", locations: ["Dublin", "London", "New York"], sqlCount: 3, pipeline: "€330K" },
        { name: "SSOW Europe", location: "Lisbon", sqlCount: 3, pipeline: "€330K" },
        { name: "Gartner Finance Xpo", location: "Maryland", sqlCount: 3, pipeline: "€330K" }
      ]
    },
    {
      quarter: "Q3",
      events: [
        { name: "Executive Dinners", locations: ["Dublin", "London", "New York"], sqlCount: 3, pipeline: "€330K" },
        { name: "Gartner Finance Xpo", location: "London", sqlCount: 3, pipeline: "€330K" },
        { name: "SSOW Europe", location: "Amsterdam", sqlCount: 2, pipeline: "€220K" }
      ]
    },
    {
      quarter: "Q4",
      events: [
        { name: "Executive Dinners", locations: ["Dublin", "London", "New York"], sqlCount: 3, pipeline: "€330K" },
        { name: "Deloitte SSC", location: "TBC", sqlCount: 3, pipeline: "€330K" }
      ]
    }
  ];

  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
              2026 Events <span className="text-primary">Calendar</span>
            </h2>
            <div className="flex items-center justify-center gap-8 mt-6">
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">Total Pipeline</div>
                  <div className="text-xl font-bold">€2.97M</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-accent" />
                <div>
                  <div className="text-sm text-muted-foreground">Total Events</div>
                  <div className="text-xl font-bold">18</div>
                </div>
              </div>
            </div>
          </div>

          <PipelineChart />

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {quarters.map((quarter, index) => (
              <Card key={index} className="p-6 bg-card border-border">
                <h3 className="font-display font-bold text-2xl mb-4 text-primary">{quarter.quarter} 2026</h3>
                <div className="space-y-4">
                  {quarter.events.map((event, eventIndex) => (
                    <div key={eventIndex} className="border-l-2 border-primary/30 pl-4">
                      <h4 className="font-semibold mb-2">{event.name}</h4>
                      {event.locations ? (
                        <div className="flex items-start gap-2 mb-1">
                          <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            {event.locations.join(", ")}
                          </span>
                        </div>
                      ) : (
                        <div className="flex items-start gap-2 mb-1">
                          <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{event.location}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex items-center gap-1.5">
                          <Users className="w-4 h-4 text-success" />
                          <span className="text-sm font-medium">{event.sqlCount} SQLs</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <DollarSign className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium">{event.pipeline}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <Card className="mt-12 p-8 bg-primary/10 border-primary/30">
            <h3 className="font-semibold text-xl mb-4">Executive Dinner Strategy</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <div className="text-2xl font-bold text-primary mb-1">12</div>
                <div className="text-sm text-muted-foreground">Dinners per year</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent mb-1">3</div>
                <div className="text-sm text-muted-foreground">Per quarter</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-success mb-1">20%</div>
                <div className="text-sm text-muted-foreground">Expected drop-off</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-chart-4 mb-1">4-Stage</div>
                <div className="text-sm text-muted-foreground">Email sequence</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
