import { useRef } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tables } from "@/integrations/supabase/types";
import { CalendarDays, ImageIcon, Upload, Trash2, MapPin, Type, FileText, Globe } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface Props {
  event: Tables<"events">;
  onUpdate: (fields: Partial<Tables<"events">>) => void;
}

export default function EventQuickInfo({ event, onUpdate }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const ext = file.name.split(".").pop();
    const path = `event-images/${event.id}.${ext}`;

    const { error } = await supabase.storage
      .from("event-assets")
      .upload(path, file, { upsert: true });

    if (error) {
      toast.error("ფოტოს ატვირთვა ვერ მოხერხდა");
      return;
    }

    const { data: urlData } = supabase.storage
      .from("event-assets")
      .getPublicUrl(path);

    onUpdate({ background_image_url: urlData.publicUrl });
    toast.success("ფოტო განახლდა!");
  };

  const handleImageDelete = () => {
    onUpdate({ background_image_url: null });
    toast.success("ფოტო წაშლილია");
  };

  return (
    <div className="bg-card rounded-2xl p-4 sm:p-7">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Left column: Event Image */}
        <div className="space-y-2">
          <div className="w-full aspect-[16/10] lg:h-full lg:aspect-auto min-h-[200px] rounded-xl overflow-hidden bg-muted flex items-center justify-center relative group">
            {event.background_image_url ? (
              <>
                <img
                  src={event.background_image_url}
                  alt={event.name}
                  className="w-full h-full object-contain object-top"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <Button variant="secondary" size="sm" className="h-8 text-xs rounded-full" onClick={() => fileInputRef.current?.click()}>
                    <Upload className="w-3.5 h-3.5 mr-1" /> შეცვლა
                  </Button>
                  <Button variant="destructive" size="sm" className="h-8 text-xs rounded-full" onClick={handleImageDelete}>
                    <Trash2 className="w-3.5 h-3.5 mr-1" /> წაშლა
                  </Button>
                </div>
              </>
            ) : (
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                <ImageIcon className="w-8 h-8" />
                <span className="text-sm">ფოტოს ატვირთვა</span>
              </button>
            )}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
        </div>

        {/* Right column: All editable fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 content-start">
          <div className="space-y-1.5 sm:col-span-2">
            <Label className="text-xs flex items-center gap-1">
              <Type className="w-3 h-3" /> ღონისძიების სახელი
            </Label>
            <Input
              className="h-9 text-sm font-medium rounded-full"
              defaultValue={event.name}
              onBlur={(e) => {
                if (e.target.value.trim() && e.target.value !== event.name) {
                  onUpdate({ name: e.target.value.trim() });
                }
              }}
            />
          </div>
          <div className="space-y-1.5 sm:col-span-2">
            <Label className="text-xs flex items-center gap-1">
              <FileText className="w-3 h-3" /> აღწერა
            </Label>
            <Textarea
              className="text-sm min-h-[120px] resize-y rounded-2xl"
              defaultValue={event.description || ""}
              rows={5}
              onBlur={(e) => onUpdate({ description: e.target.value || null })}
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs flex items-center gap-1">
              <CalendarDays className="w-3 h-3" /> დაწყების თარიღი
            </Label>
            <Input
              type="datetime-local"
              className="h-9 text-sm rounded-full"
              defaultValue={event.event_date ? new Date(event.event_date).toISOString().slice(0, 16) : ""}
              onBlur={(e) => onUpdate({ event_date: e.target.value ? new Date(e.target.value).toISOString() : null })}
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs flex items-center gap-1">
              <CalendarDays className="w-3 h-3" /> დასრულების თარიღი
            </Label>
            <Input
              type="datetime-local"
              className="h-9 text-sm rounded-full"
              defaultValue={event.event_end_date ? new Date(event.event_end_date).toISOString().slice(0, 16) : ""}
              onBlur={(e) => onUpdate({ event_end_date: e.target.value ? new Date(e.target.value).toISOString() : null })}
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs flex items-center gap-1">
              <Globe className="w-3 h-3" /> ღონისძიების ტიპი
            </Label>
            <Select defaultValue={event.event_type || "webinar"} onValueChange={v => onUpdate({ event_type: v })}>
              <SelectTrigger className="h-9 text-sm rounded-full"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="webinar">დაბადების დღე</SelectItem>
                <SelectItem value="conference">კორპორატივი</SelectItem>
                <SelectItem value="workshop">ბანკეტი</SelectItem>
                <SelectItem value="hackathon">ბოლო ზარი</SelectItem>
                <SelectItem value="meetup">თემატური ზეიმი</SelectItem>
                <SelectItem value="other">სხვა</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs flex items-center gap-1">
              <MapPin className="w-3 h-3" /> ადგილის ტიპი
            </Label>
            <Select defaultValue={event.location_type || "virtual"} onValueChange={v => onUpdate({ location_type: v })}>
              <SelectTrigger className="h-9 text-sm rounded-full"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="virtual">ონლაინ</SelectItem>
                <SelectItem value="physical">ადგილზე</SelectItem>
                <SelectItem value="hybrid">ჰიბრიდული</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5 sm:col-span-2">
            <Label className="text-xs flex items-center gap-1">
              <MapPin className="w-3 h-3" /> ადგილი / ბმული
            </Label>
            <Input
              className="h-9 text-sm rounded-full"
              placeholder="მისამართი ან Zoom ბმული"
              defaultValue={event.location_value || ""}
              onBlur={(e) => onUpdate({ location_value: e.target.value || null })}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
