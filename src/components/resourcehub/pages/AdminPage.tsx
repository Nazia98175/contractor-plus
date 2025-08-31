import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  BarChart,
  TrendingUp,
  Users,
  Link as LinkIcon,
  Shield,
} from "lucide-react";

// Mock data for search activities
const searchActivities = [
  {
    id: "1",
    query: "Drywall Panel",
    timestamp: "2023-06-15T14:32:00Z",
    ip: "192.168.1.1",
    userAgent: "Chrome/Windows",
    userId: null,
  },
  {
    id: "2",
    query: "PVC Pipe 1-in",
    timestamp: "2023-06-15T14:28:00Z",
    ip: "192.168.1.2",
    userAgent: "Safari/Mac",
    userId: "user123",
  },
  {
    id: "3",
    query: "Wire Romex 12-2",
    timestamp: "2023-06-15T14:25:00Z",
    ip: "192.168.1.3",
    userAgent: "Firefox/Windows",
    userId: null,
  },
  {
    id: "4",
    query: "Lumber 2x4x8",
    timestamp: "2023-06-15T14:20:00Z",
    ip: "192.168.1.4",
    userAgent: "Chrome/Mac",
    userId: "user456",
  },
  {
    id: "5",
    query: "Circuit Breaker",
    timestamp: "2023-06-15T14:15:00Z",
    ip: "192.168.1.5",
    userAgent: "Edge/Windows",
    userId: null,
  },
];

// Mock data for click activities
const clickActivities = [
  {
    id: "1",
    store: "Home Depot",
    product: "Drywall Panel 4x8",
    timestamp: "2023-06-15T14:35:00Z",
    ip: "192.168.1.1",
    userId: null,
  },
  {
    id: "2",
    store: "Lowe's",
    product: "PVC Pipe 1-in",
    timestamp: "2023-06-15T14:30:00Z",
    ip: "192.168.1.2",
    userId: "user123",
  },
  {
    id: "3",
    store: "Menards",
    product: "Wire Romex 12-2",
    timestamp: "2023-06-15T14:27:00Z",
    ip: "192.168.1.3",
    userId: null,
  },
  {
    id: "4",
    store: "Home Depot",
    product: "Lumber 2x4x8",
    timestamp: "2023-06-15T14:22:00Z",
    ip: "192.168.1.4",
    userId: "user456",
  },
  {
    id: "5",
    store: "Lowe's",
    product: "Circuit Breaker",
    timestamp: "2023-06-15T14:18:00Z",
    ip: "192.168.1.5",
    userId: null,
  },
];

// Mock data for IP blacklist
const ipBlacklist = [
  {
    ip: "203.0.113.1",
    reason: "Excessive requests",
    timestamp: "2023-06-10T10:30:00Z",
  },
  {
    ip: "198.51.100.2",
    reason: "Scraping attempts",
    timestamp: "2023-06-09T15:45:00Z",
  },
  { ip: "192.0.2.3", reason: "API abuse", timestamp: "2023-06-08T08:20:00Z" },
];

// Mock data for stats
const statsData = {
  searches: {
    today: 458,
    weekly: 2341,
    monthly: 9876,
  },
  clicks: {
    today: 182,
    weekly: 982,
    monthly: 4123,
  },
  signups: {
    today: 24,
    weekly: 156,
    monthly: 587,
  },
  revenue: {
    today: 157.82,
    weekly: 892.45,
    monthly: 3456.78,
  },
};

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [blacklistIP, setBlacklistIP] = useState("");
  const [blacklistReason, setBlacklistReason] = useState("");

  const handleAddToBlacklist = () => {
    // This would typically make an API call
    alert(
      `Added IP ${blacklistIP} to blacklist for reason: ${blacklistReason}`,
    );
    setBlacklistIP("");
    setBlacklistReason("");
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  console.log("Rendering AdminPage component");

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="container flex-grow px-4 py-8 md:px-6">
        <div className="flex flex-col items-start space-y-4 pb-6">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">
            Monitor searches, track affiliate links, and manage your material
            comparison tool.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6 grid grid-cols-1 md:grid-cols-4">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="search-activity">Search Activity</TabsTrigger>
            <TabsTrigger value="click-tracking">Click Tracking</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-muted-foreground text-sm font-medium">
                    Total Searches
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">
                      {statsData.searches.today.toLocaleString()}
                    </div>
                    <div className="bg-primary/10 rounded-full p-2">
                      <BarChart className="text-primary h-5 w-5" />
                    </div>
                  </div>
                  <div className="text-muted-foreground mt-1 text-xs">
                    <span className="font-medium text-green-500">+5.2%</span>{" "}
                    from yesterday
                  </div>
                  <div className="mt-4 flex items-center justify-between text-xs">
                    <div>
                      <div className="text-muted-foreground">This Week</div>
                      <div className="font-medium">
                        {statsData.searches.weekly.toLocaleString()}
                      </div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">This Month</div>
                      <div className="font-medium">
                        {statsData.searches.monthly.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-muted-foreground text-sm font-medium">
                    Affiliate Clicks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">
                      {statsData.clicks.today.toLocaleString()}
                    </div>
                    <div className="bg-primary/10 rounded-full p-2">
                      <LinkIcon className="text-primary h-5 w-5" />
                    </div>
                  </div>
                  <div className="text-muted-foreground mt-1 text-xs">
                    <span className="font-medium text-green-500">+3.8%</span>{" "}
                    from yesterday
                  </div>
                  <div className="mt-4 flex items-center justify-between text-xs">
                    <div>
                      <div className="text-muted-foreground">This Week</div>
                      <div className="font-medium">
                        {statsData.clicks.weekly.toLocaleString()}
                      </div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">This Month</div>
                      <div className="font-medium">
                        {statsData.clicks.monthly.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-muted-foreground text-sm font-medium">
                    New Signups
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">
                      {statsData.signups.today.toLocaleString()}
                    </div>
                    <div className="bg-primary/10 rounded-full p-2">
                      <Users className="text-primary h-5 w-5" />
                    </div>
                  </div>
                  <div className="text-muted-foreground mt-1 text-xs">
                    <span className="font-medium text-green-500">+7.1%</span>{" "}
                    from yesterday
                  </div>
                  <div className="mt-4 flex items-center justify-between text-xs">
                    <div>
                      <div className="text-muted-foreground">This Week</div>
                      <div className="font-medium">
                        {statsData.signups.weekly.toLocaleString()}
                      </div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">This Month</div>
                      <div className="font-medium">
                        {statsData.signups.monthly.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-muted-foreground text-sm font-medium">
                    Affiliate Revenue
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">
                      ${statsData.revenue.today.toLocaleString()}
                    </div>
                    <div className="bg-primary/10 rounded-full p-2">
                      <TrendingUp className="text-primary h-5 w-5" />
                    </div>
                  </div>
                  <div className="text-muted-foreground mt-1 text-xs">
                    <span className="font-medium text-green-500">+4.5%</span>{" "}
                    from yesterday
                  </div>
                  <div className="mt-4 flex items-center justify-between text-xs">
                    <div>
                      <div className="text-muted-foreground">This Week</div>
                      <div className="font-medium">
                        ${statsData.revenue.weekly.toLocaleString()}
                      </div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">This Month</div>
                      <div className="font-medium">
                        ${statsData.revenue.monthly.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>
                  The most recent searches and clicks on your platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2 text-sm font-semibold">
                      Recent Searches
                    </h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Query</TableHead>
                          <TableHead>Time</TableHead>
                          <TableHead>IP Address</TableHead>
                          <TableHead>User</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {searchActivities.slice(0, 3).map((activity) => (
                          <TableRow key={activity.id}>
                            <TableCell className="font-medium">
                              {activity.query}
                            </TableCell>
                            <TableCell>
                              {formatDate(activity.timestamp)}
                            </TableCell>
                            <TableCell>{activity.ip}</TableCell>
                            <TableCell>
                              {activity.userId ? (
                                <Badge variant="outline">
                                  {activity.userId}
                                </Badge>
                              ) : (
                                <span className="text-muted-foreground">
                                  Anonymous
                                </span>
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>

                  <div>
                    <h3 className="mb-2 text-sm font-semibold">
                      Recent Affiliate Clicks
                    </h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Store</TableHead>
                          <TableHead>Product</TableHead>
                          <TableHead>Time</TableHead>
                          <TableHead>User</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {clickActivities.slice(0, 3).map((activity) => (
                          <TableRow key={activity.id}>
                            <TableCell className="font-medium">
                              {activity.store}
                            </TableCell>
                            <TableCell>{activity.product}</TableCell>
                            <TableCell>
                              {formatDate(activity.timestamp)}
                            </TableCell>
                            <TableCell>
                              {activity.userId ? (
                                <Badge variant="outline">
                                  {activity.userId}
                                </Badge>
                              ) : (
                                <span className="text-muted-foreground">
                                  Anonymous
                                </span>
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="search-activity">
            <Card>
              <CardHeader>
                <CardTitle>Search Activity Log</CardTitle>
                <CardDescription>
                  View all material searches performed on your platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Query</TableHead>
                      <TableHead>Time</TableHead>
                      <TableHead>IP Address</TableHead>
                      <TableHead>User Agent</TableHead>
                      <TableHead>User</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {searchActivities.map((activity) => (
                      <TableRow key={activity.id}>
                        <TableCell className="font-medium">
                          {activity.query}
                        </TableCell>
                        <TableCell>{formatDate(activity.timestamp)}</TableCell>
                        <TableCell>{activity.ip}</TableCell>
                        <TableCell>{activity.userAgent}</TableCell>
                        <TableCell>
                          {activity.userId ? (
                            <Badge variant="outline">{activity.userId}</Badge>
                          ) : (
                            <span className="text-muted-foreground">
                              Anonymous
                            </span>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="click-tracking">
            <Card>
              <CardHeader>
                <CardTitle>Affiliate Link Click Tracking</CardTitle>
                <CardDescription>
                  Monitor clicks on affiliate links to track conversions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Store</TableHead>
                      <TableHead>Product</TableHead>
                      <TableHead>Time</TableHead>
                      <TableHead>IP Address</TableHead>
                      <TableHead>User</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {clickActivities.map((activity) => (
                      <TableRow key={activity.id}>
                        <TableCell className="font-medium">
                          {activity.store}
                        </TableCell>
                        <TableCell>{activity.product}</TableCell>
                        <TableCell>{formatDate(activity.timestamp)}</TableCell>
                        <TableCell>{activity.ip}</TableCell>
                        <TableCell>
                          {activity.userId ? (
                            <Badge variant="outline">{activity.userId}</Badge>
                          ) : (
                            <span className="text-muted-foreground">
                              Anonymous
                            </span>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>IP Blacklist</CardTitle>
                  <CardDescription>
                    Block access from problematic IP addresses
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>IP Address</TableHead>
                        <TableHead>Reason</TableHead>
                        <TableHead>Date Added</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {ipBlacklist.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">
                            {item.ip}
                          </TableCell>
                          <TableCell>{item.reason}</TableCell>
                          <TableCell>{formatDate(item.timestamp)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Add to Blacklist</CardTitle>
                  <CardDescription>
                    Block an IP address from accessing the platform
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="ip" className="text-sm font-medium">
                        IP Address
                      </label>
                      <Input
                        id="ip"
                        placeholder="e.g., 192.168.1.1"
                        value={blacklistIP}
                        onChange={(e) => setBlacklistIP(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="reason" className="text-sm font-medium">
                        Reason
                      </label>
                      <Input
                        id="reason"
                        placeholder="e.g., Excessive requests"
                        value={blacklistReason}
                        onChange={(e) => setBlacklistReason(e.target.value)}
                      />
                    </div>
                    <Button
                      onClick={handleAddToBlacklist}
                      disabled={!blacklistIP || !blacklistReason}
                      className="w-full"
                    >
                      <Shield className="mr-2 h-4 w-4" />
                      Add to Blacklist
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default AdminPage;
