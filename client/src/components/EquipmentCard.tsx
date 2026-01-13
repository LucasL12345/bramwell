import { Equipment } from "@shared/schema";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2, AlertCircle } from "lucide-react";

interface EquipmentCardProps {
  item: Equipment;
}

export function EquipmentCard({ item }: EquipmentCardProps) {
  const isAvailable = item.available;

  return (
    <Card className="group overflow-hidden border-border/50 shadow-sm hover:shadow-md transition-all duration-300 bg-white flex flex-col h-full">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <Badge 
            variant={isAvailable ? "default" : "destructive"} 
            className={isAvailable ? "bg-green-600 hover:bg-green-700" : ""}
          >
            {isAvailable ? "Available" : "On Hire"}
          </Badge>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-4">
          <h3 className="font-display text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
            {item.name}
          </h3>
          <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
            {item.description}
          </p>
        </div>

        <div className="mt-auto space-y-4">
          <div className="flex items-center justify-between py-3 border-y border-border/50">
            <div>
              <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">Daily</p>
              <p className="font-bold text-lg text-primary">£{(item.pricePerDay / 100).toFixed(2)}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">Weekly</p>
              <p className="font-bold text-lg text-primary">£{(item.pricePerWeek / 100).toFixed(2)}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAvailable ? (
              <CheckCircle2 className="w-4 h-4 text-green-600" />
            ) : (
              <AlertCircle className="w-4 h-4 text-red-500" />
            )}
            <span className="text-xs font-medium text-slate-600">
              {isAvailable ? "Ready for immediate dispatch" : "Check back soon"}
            </span>
          </div>

          <Button className="w-full font-semibold" asChild>
            <Link href={`/contact?equipment=${encodeURIComponent(item.name)}`}>
              Enquire Now
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}
