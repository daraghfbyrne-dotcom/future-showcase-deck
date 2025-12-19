import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const Conclusion = () => {
  return (
    <section id="conclusion" className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="h-8 w-1 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full" />
        <h2 className="text-2xl font-bold text-slate-900">Conclusion</h2>
      </div>

      <Card className="bg-gradient-to-br from-slate-50 to-white border-slate-200 shadow-sm">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-green-100 rounded-lg flex-shrink-0">
              <CheckCircle2 className="h-6 w-6 text-green-600" />
            </div>
            <div className="space-y-4">
              <p className="text-slate-700 leading-relaxed">
                This phased strategy positions SoftCo to scale our partner ecosystem in a controlled, 
                high-impact way. By leading with <span className="text-green-700 font-medium">low-friction 
                referral partnerships in 2025</span> and gradually layering in <span className="text-blue-700 font-medium">VARs 
                later in 2026</span>, we can align with internal capacity, learn from early partner 
                engagements, and ensure each partner type is properly enabled to contribute meaningfully 
                to our growth goals.
              </p>
              <div className="grid md:grid-cols-3 gap-4 pt-2">
                <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-3xl font-bold text-green-600">2025</p>
                  <p className="text-sm text-slate-600">Referral Focus</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-3xl font-bold text-blue-600">H2 2026</p>
                  <p className="text-sm text-slate-600">VAR Expansion</p>
                </div>
                <div className="text-center p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <p className="text-3xl font-bold text-amber-600">2029</p>
                  <p className="text-sm text-slate-600">30% ARR Target</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Conclusion;
