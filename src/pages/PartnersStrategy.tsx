import { Link } from "react-router-dom";
import { ArrowLeft, Users, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PartnersStrategy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Strategy</span>
            </Link>
            <h1 className="text-xl font-bold text-white">Partners Strategy</h1>
            <Badge variant="outline" className="border-emerald-500 text-emerald-400">
              2025-2026
            </Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center min-h-[60vh]">
          <Card className="bg-slate-800/50 border-slate-700 max-w-lg w-full">
            <CardContent className="pt-8 pb-8">
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-slate-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Partners Strategy</h2>
                <p className="text-slate-400">Content coming soon</p>
                <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
                  <Clock className="h-4 w-4" />
                  <span>Under development</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-700 mt-12 py-6">
        <div className="container mx-auto px-4 text-center text-slate-500 text-sm">
          SoftCo Partners Strategy 2025-2026
        </div>
      </footer>
    </div>
  );
};

export default PartnersStrategy;
