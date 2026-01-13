import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 p-4">
      <Card className="w-full max-w-md shadow-xl border-t-4 border-t-destructive">
        <CardContent className="pt-8 text-center">
          <div className="flex mb-6 justify-center">
            <div className="bg-red-50 p-4 rounded-full">
              <AlertCircle className="h-12 w-12 text-destructive" />
            </div>
          </div>

          <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">404 Page Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>

          <Button asChild className="w-full" size="lg">
            <Link href="/">
              Return Home
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
