import { useQuery } from "@tanstack/react-query";
import { CalendarDays } from "lucide-react";
import { format } from "date-fns";
import { toast } from "../ui/use-toast";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Button } from "../ui/button";

// Fallback data in case the API fetch fails
const FALLBACK_POSTS = [
  {
    id: 1,
    title: "7 Ways to Improve Your Construction Company's Cash Flow",
    excerpt:
      "Managing cash flow effectively is crucial for construction businesses. Learn proven strategies to improve your liquidity.",
    date: "May 15, 2023",
    category: "Finance",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    link: "https://contractorplus.app/blog/improve-cash-flow",
  },
  {
    id: 2,
    title: "The Complete Guide to Construction Management Software",
    excerpt:
      "Discover how the right software can transform your construction business operations and increase profitability.",
    date: "April 28, 2023",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    link: "https://contractorplus.app/blog/construction-management-software",
  },
  {
    id: 3,
    title:
      "Construction Labor Shortage: Strategies for Recruitment and Retention",
    excerpt:
      "Learn effective approaches to attract and keep skilled workers in today's challenging labor market.",
    date: "March 12, 2023",
    category: "Hiring",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    link: "https://contractorplus.app/blog/labor-shortage-solutions",
  },
  {
    id: 4,
    title:
      "Understanding Construction Contracts: What Every Contractor Should Know",
    excerpt:
      "Avoid legal pitfalls and protect your business by mastering the essential elements of construction contracts.",
    date: "February 5, 2023",
    category: "Legal",
    image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c",
    link: "https://contractorplus.app/blog/construction-contracts",
  },
  {
    id: 5,
    title: "5 Construction Estimating Mistakes That Cost You Money",
    excerpt:
      "Learn how to avoid common estimating errors that can significantly impact your project profitability.",
    date: "January 22, 2023",
    category: "Estimating",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    link: "https://contractorplus.app/blog/estimating-mistakes",
  },
];

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  link: string;
}

interface WPPost {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  link: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url?: string;
    }>;
    "wp:term"?: Array<
      Array<{
        name: string;
      }>
    >;
  };
}

// WordPress API credentials and base URL
const WP_API_BASE = "https://contractorplus.app/wp-json/wp/v2";
const WP_AUTH = "Basic " + btoa("contractorplus:bAZ3 4e1J 43x2 m9M2 SaJn gX1v");

// Function to fetch blog posts from WordPress REST API
const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    // Fetch posts with embedded featured media and categories
    const response = await fetch(
      `${WP_API_BASE}/posts?_embed=wp:featuredmedia,wp:term&per_page=10`,
      {
        headers: {
          Authorization: WP_AUTH,
          "Content-Type": "application/json",
        },
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch WordPress posts");
    }

    const posts: WPPost[] = await response.json();

    // Transform WordPress posts to our BlogPost format
    return posts.map((post) => {
      // Extract featured image URL or use a placeholder
      let imageUrl =
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d";
      if (
        post._embedded &&
        post._embedded["wp:featuredmedia"] &&
        post._embedded["wp:featuredmedia"][0] &&
        post._embedded["wp:featuredmedia"][0].source_url
      ) {
        imageUrl = post._embedded["wp:featuredmedia"][0].source_url;
      }

      // Extract category
      let category = "General";
      if (
        post._embedded &&
        post._embedded["wp:term"] &&
        post._embedded["wp:term"][0] &&
        post._embedded["wp:term"][0][0]
      ) {
        category = post._embedded["wp:term"][0][0].name;
      }

      // Format the date
      let formattedDate = "Unknown date";
      try {
        if (post.date) {
          const date = new Date(post.date);
          formattedDate = format(date, "MMM d, yyyy");
        }
      } catch (error) {
        console.error("Error parsing date:", error);
      }

      // Strip HTML from excerpt
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = post.excerpt.rendered;
      const excerpt =
        tempDiv.textContent?.substring(0, 150) + "..." ||
        "No description available";

      return {
        id: post.id,
        title: post.title.rendered,
        excerpt: excerpt,
        date: formattedDate,
        category: category,
        image: imageUrl,
        link: post.link,
      };
    });
  } catch (error) {
    console.error("Error fetching WordPress posts:", error);
    throw error;
  }
};

export function BlogPostScroller() {
  const {
    data: blogPosts,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["blog-posts-wp"],
    queryFn: fetchBlogPosts,
    staleTime: 1000 * 60 * 30, // 30 minutes
    retry: 1,
    refetchOnWindowFocus: false,
    meta: {
      errorHandler: (error: Error) => {
        console.error("Failed to fetch blog posts:", error);
        toast({
          title: "Couldn't load blog posts",
          description: "Using fallback data instead.",
          variant: "destructive",
        });
      },
    },
  });

  // Use the error handler directly here as well for immediate effect
  if (isError) {
    console.error("Failed to fetch blog posts from WordPress API");
  }

  // Use fallback data if loading fails
  const posts = isError ? FALLBACK_POSTS : blogPosts || FALLBACK_POSTS;

  return (
    <div>
      {isLoading ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="h-full">
              <div className="relative aspect-video overflow-hidden">
                <Skeleton className="h-full w-full" />
              </div>
              <CardHeader>
                <Skeleton className="mb-2 h-4 w-32" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="mt-2 h-4 w-full" />
                <Skeleton className="mt-1 h-4 w-2/3" />
              </CardHeader>
              <CardFooter>
                <Skeleton className="h-10 w-full" />
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {posts.slice(0, 5).map((post) => (
              <CarouselItem
                key={post.id}
                className="sm:basis-1/2 md:basis-1/3 lg:basis-1/3"
              >
                <Card className="flex h-full flex-col">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-all hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d";
                      }}
                    />
                    <div className="bg-romanRed font-myriad absolute top-2 right-2 rounded px-2 py-1 text-xs text-white">
                      {post.category}
                    </div>
                  </div>

                  <CardHeader className="flex-grow">
                    <div className="text-aliceBlue mb-2 flex items-center text-sm">
                      <CalendarDays className="mr-1 h-4 w-4" />
                      {post.date}
                    </div>
                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="mt-2 line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>

                  <CardFooter>
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button variant="outline" className="w-full">
                        Read Article
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-14 flex justify-end gap-2">
            <CarouselPrevious className="static" />
            <CarouselNext className="static" />
          </div>
        </Carousel>
      )}
    </div>
  );
}
