import { Navigation } from "@/components/Navigation";

const PlayBigger = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Play Bigger
            </h1>
            <p className="text-xl text-muted-foreground">
              Content coming soon
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PlayBigger;
