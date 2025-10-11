import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Play, Heart, Sparkles } from "lucide-react";

const StoriesHub = () => {
  const { t } = useLanguage();

  const stories = [
    {
      id: 1,
      title: "From 10 Rejections to a Role at ADNOC",
      duration: "2 min",
      theme: "Hope",
      color: "gradient-hope",
      icon: Sparkles,
    },
    {
      id: 2,
      title: "Balancing Family & Dreams in AI",
      duration: "1.5 min",
      theme: "Courage",
      color: "gradient-warm",
      icon: Heart,
    },
    {
      id: 3,
      title: "Finding My Voice After Anxiety",
      duration: "2 min",
      theme: "Growth",
      color: "gradient-calm",
      icon: Play,
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-foreground">{t('realStories')}</h2>
        <p className="text-muted-foreground">{t('anonymousVoices')}</p>
      </div>

      <div className="space-y-4">
        {stories.map((story) => (
          <Card
            key={story.id}
            className="p-6 shadow-card hover:shadow-soft transition-smooth cursor-pointer group"
          >
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl ${story.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-smooth`}>
                <story.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-2">
                <h3 className="font-semibold text-foreground leading-tight">
                  {story.title}
                </h3>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span>{story.duration}</span>
                  <span>•</span>
                  <span>{story.theme}</span>
                </div>
              </div>

              {/* Play button */}
              <Button
                size="icon"
                variant="ghost"
                className="shrink-0 hover:bg-primary/10 hover:text-primary"
              >
                <Play className="w-5 h-5" />
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <Button variant="outline" className="w-full">
        Share Your Story (Anonymous)
      </Button>
    </div>
  );
};

export default StoriesHub;
