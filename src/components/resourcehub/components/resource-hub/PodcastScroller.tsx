import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, Headphones, Mic, Music3, Podcast } from "lucide-react";

// Mock data for podcasts
const PODCASTS = [
  {
    id: 1,
    title: "Managing Supply Chain Challenges",
    series: "Hard Hat Chat",
    duration: "32 min",
    description:
      "Industry experts discuss strategies for navigating material shortages and delivery delays.",
    icon: <Headphones className="h-5 w-5" />,
    slug: "/podcasts/hard-hat-chat/supply-chain",
  },
  {
    id: 2,
    title: "Building Daily Success Habits",
    series: "Mindset Monday",
    duration: "24 min",
    description:
      "Learn the daily routines and mental frameworks that successful contractors use to stay on top.",
    icon: <Podcast className="h-5 w-5" />,
    slug: "/podcasts/mindset-monday/success-habits",
  },
  {
    id: 3,
    title: "From Subcontractor to Owner",
    series: "The Owners Perspective",
    duration: "45 min",
    description:
      "Hear the journey of how one contractor built a multi-million dollar construction company.",
    icon: <Mic className="h-5 w-5" />,
    slug: "/podcasts/owners-perspective/subcontractor-to-owner",
  },
  {
    id: 4,
    title: "Mastering Client Communication",
    series: "Hard Hat Chat",
    duration: "29 min",
    description:
      "Effective communication strategies that reduce conflicts and increase client satisfaction.",
    icon: <Headphones className="h-5 w-5" />,
    slug: "/podcasts/hard-hat-chat/client-communication",
  },
  {
    id: 5,
    title: "Overcoming Decision Fatigue",
    series: "Mindset Monday",
    duration: "21 min",
    description:
      "Practical techniques to make better decisions faster throughout your workday.",
    icon: <Music3 className="h-5 w-5" />,
    slug: "/podcasts/mindset-monday/decision-fatigue",
  },
];

export function PodcastScroller() {
  return (
    <Carousel className="w-full" opts={{ loop: true }}>
      <CarouselContent>
        {PODCASTS.map((podcast) => (
          <CarouselItem
            key={podcast.id}
            className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
          >
            <Card className="flex h-full flex-col">
              <CardHeader>
                <div className="mb-2 flex items-center gap-3">
                  <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full">
                    {podcast.icon}
                  </div>
                  <span className="text-primary font-semibold">
                    {podcast.series}
                  </span>
                </div>
                <CardTitle className="line-clamp-2">{podcast.title}</CardTitle>
                <div className="text-muted-foreground mt-2 flex items-center text-sm">
                  <Clock className="mr-1 h-4 w-4" />
                  {podcast.duration}
                </div>
                <div className="text-muted-foreground mt-2 line-clamp-2 text-sm">
                  {podcast.description}
                </div>
              </CardHeader>
              <CardFooter className="mt-auto">
                <Link to={podcast.slug} className="w-full">
                  <Button variant="outline" className="w-full">
                    Listen Now
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="mt-4 flex justify-end gap-2">
        <CarouselPrevious className="static" />
        <CarouselNext className="static" />
      </div>
    </Carousel>
  );
}
