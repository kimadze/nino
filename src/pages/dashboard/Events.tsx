import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link, useNavigate } from "react-router-dom";
import { Plus, Search, CalendarDays, Users, Loader2, MapPin, ExternalLink, LayoutGrid, List } from "lucide-react";
import { useEvents } from "@/hooks/useEvents";
import { useRegistrations } from "@/hooks/useRegistrations";
import { format } from "date-fns";

const statusColors: Record<string, string> = {
  live: "bg-success text-success-foreground",
  draft: "bg-muted text-muted-foreground",
  past: "bg-secondary/20 text-secondary",
};

const Events = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [viewMode, setViewMode] = useState<"list" | "grid">("grid");
  const { data: events, isLoading } = useEvents(search || undefined);
  const { data: registrations } = useRegistrations();

  const regCounts: Record<string, number> = {};
  registrations?.forEach((r) => {
    regCounts[r.event_id] = (regCounts[r.event_id] || 0) + 1;
  });

  const filtered = events?.filter(e => statusFilter === "all" || e.status === statusFilter);

  // Upcoming events: future-dated, sorted by date, take first 4
  const upcoming = events
    ?.filter(e => e.event_date && new Date(e.event_date) >= new Date())
    .sort((a, b) => new Date(a.event_date!).getTime() - new Date(b.event_date!).getTime())
    .slice(0, 4);

  const EventCard = ({ event, variant = "default" }: { event: NonNullable<typeof events>[number]; variant?: "default" | "upcoming" }) => {
    const count = regCounts[event.id] || 0;
    const isUpcoming = variant === "upcoming";

    return (
      <div
        className="group cursor-pointer rounded-2xl border border-border/80 bg-card p-3 shadow-[0_20px_50px_-45px_rgba(35,31,24,.55)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_22px_60px_-38px_rgba(35,31,24,.35)]"
        onClick={() => navigate(`/dashboard/events/${event.id}`)}
      >
        {/* Image */}
        <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-muted mb-4">
          {event.background_image_url ? (
            <img
              src={event.background_image_url}
              alt={event.name}
              className="w-full h-full object-cover saturate-[.75] transition duration-500 group-hover:scale-105 group-hover:saturate-100"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <CalendarDays className="w-8 h-8 text-muted-foreground/30" />
            </div>
          )}
          {/* Price / status badge */}
          <div className="absolute top-3 left-3">
            {event.ticket_price && event.ticket_price > 0 ? (
              <span className="bg-card text-foreground text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                ${event.ticket_price}
              </span>
            ) : (
              <span className="bg-card text-foreground text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                უფასო
              </span>
            )}
          </div>
        </div>
        {/* Info below image */}
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              {event.event_date ? format(new Date(event.event_date), "EEE, MMM d") : "თარიღი არ არის"}
            </p>
            {!isUpcoming && (
              <Badge className={`${statusColors[event.status] || "bg-muted text-muted-foreground"} border-0 capitalize text-[10px]`}>
                {event.status}
              </Badge>
            )}
          </div>
          <h3 className="font-display font-bold text-base leading-snug group-hover:text-primary transition-colors">
            {event.name}
          </h3>
          {!isUpcoming && (
            <div className="flex flex-col gap-0.5 text-xs text-muted-foreground pt-1">
              <span className="flex items-center gap-1"><Users className="w-3 h-3" />{count} მონაწილე</span>
              {event.location_value && (
                <span className="flex items-center gap-1 truncate"><MapPin className="w-3 h-3" />{event.location_value}</span>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-5 border-b border-border pb-8">
        <div>
          <p className="eyebrow mb-2">MIX HALL · მართვის სივრცე</p>
          <h1 className="text-3xl font-display font-bold sm:text-4xl">ღონისძიებები</h1>
          <p className="mt-2 text-muted-foreground">შექმენი და მართე ღონისძიებების რეგისტრაციის გვერდები.</p>
        </div>
        <Button className="w-full sm:w-auto rounded-full bg-foreground px-6 text-background hover:bg-primary hover:text-primary-foreground" asChild>
          <Link to="/dashboard/events/create">
            <Plus className="w-4 h-4 mr-2" /> ახალი ღონისძიება
          </Link>
        </Button>
      </div>

      {/* Upcoming Events Row */}
      {upcoming && upcoming.length > 0 && (
        <div>
          <h2 className="mb-4 text-xs font-bold uppercase tracking-[.2em] text-muted-foreground">მოახლოებული</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {upcoming.map((event) => (
              <EventCard key={event.id} event={event} variant="upcoming" />
            ))}
          </div>
        </div>
      )}

      {/* Filters + View Toggle */}
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
        <div className="relative max-w-sm flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="ძიება ღონისძიებებში…" className="h-11 pl-10 rounded-full bg-card" value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="h-11 w-40 rounded-full bg-card">
            <SelectValue placeholder="სტატუსი" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">ყველა სტატუსი</SelectItem>
            <SelectItem value="draft">დრაფტი</SelectItem>
            <SelectItem value="live">გამოქვეყნებული</SelectItem>
            <SelectItem value="past">წარსული</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex bg-muted rounded-full p-1 sm:ml-auto">
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 rounded-full transition-colors ${viewMode === "list" ? "bg-card shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"}`}
          >
            <List className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded-full transition-colors ${viewMode === "grid" ? "bg-card shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"}`}
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="w-6 h-6 animate-spin text-primary" />
        </div>
      ) : filtered && filtered.length > 0 ? (
        viewMode === "list" ? (
          /* LIST VIEW — borderless horizontal cards */
          <div className="space-y-6">
            {filtered.map((event) => {
              const count = regCounts[event.id] || 0;
              const shortDesc = event.description
                ? event.description.replace(/[*#_~`>]/g, "").split(/(?<=\.)\s+/).filter(Boolean).slice(0, 2).join(" ").slice(0, 250)
                : "";

              return (
                <div
                  key={event.id}
                  className="group flex flex-col sm:flex-row gap-4 cursor-pointer"
                  onClick={() => navigate(`/dashboard/events/${event.id}`)}
                >
                  <div className="sm:w-56 flex-shrink-0 aspect-video sm:aspect-[16/10] rounded-xl overflow-hidden bg-muted">
                    {event.background_image_url ? (
                      <img src={event.background_image_url} alt={event.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <CalendarDays className="w-10 h-10 text-muted-foreground/30" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 flex flex-col justify-center gap-1.5 py-1">
                    <div className="flex items-center gap-2">
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        {event.event_date ? format(new Date(event.event_date), "EEE, MMM d") : "თარიღი არ არის"}
                      </p>
                      <Badge className={`${statusColors[event.status] || "bg-muted text-muted-foreground"} border-0 capitalize text-[10px]`}>
                        {event.status}
                      </Badge>
                    </div>
                    <h3 className="font-display font-bold text-xl leading-tight group-hover:text-primary transition-colors">{event.name}</h3>
                    {shortDesc && <p className="text-sm text-muted-foreground line-clamp-2">{shortDesc}</p>}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground pt-1">
                      <span className="flex items-center gap-1"><Users className="w-3 h-3" />{count} მონაწილე</span>
                      {event.location_value && (
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{event.location_value}</span>
                      )}
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button variant="outline" size="sm" className="text-xs rounded-full" asChild onClick={(e) => e.stopPropagation()}>
                        <Link to={`/register/${event.slug}`}><ExternalLink className="w-3 h-3 mr-1" />ნახე გვერდი</Link>
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs rounded-full" asChild onClick={(e) => e.stopPropagation()}>
                        <Link to={`/dashboard/events/${event.id}`}>მართვა</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* GRID VIEW — lander-style cards */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )
      ) : (
        <div className="lux-card text-center py-20 px-6">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-muted">
            <CalendarDays className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold mb-2">ჯერ ღონისძიებები არ არის</h3>
          <p className="text-muted-foreground mb-4">შექმენი შენი პირველი ღონისძიება და დაიწყე.</p>
          <Button className="rounded-full bg-foreground text-background hover:bg-primary hover:text-primary-foreground" asChild>
            <Link to="/dashboard/events/create"><Plus className="w-4 h-4 mr-2" /> ახალი ღონისძიება</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Events;
