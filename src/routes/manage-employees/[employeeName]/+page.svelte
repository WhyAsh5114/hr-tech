<script>
  import { page } from "$app/stores";
  import { Line } from "svelte-chartjs";
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "$lib/components/ui/card";
  import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "$lib/components/ui/avatar";
  import { Button } from "$lib/components/ui/button";

  export let data;

  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale,
  } from "chart.js";
  import { Progress } from "$lib/components/ui/progress";

  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale
  );

  const chartData = {
    labels: data.timesTakenToCloseIssue.map((_, idx) => {
      return idx;
    }),
    datasets: [
      {
        label: "Times taken to complete task",
        fill: true,
        lineTension: 0.3,
        backgroundColor: "rgba(225, 204,230, .3)",
        borderColor: "#45b6fe",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgb(124, 124, 124)",
        pointBackgroundColor: "rgb(255, 255, 255)",
        pointBorderWidth: 7.5,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgb(0, 0, 0)",
        pointHoverBorderColor: "rgba(220, 220, 220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: data.timesTakenToCloseIssue,
      },
    ],
  };
</script>

<div>
  <Card
    class="flex items-center justify-start px-6 py-2 border-t-0 border-x-0 mb-6"
  >
    <Avatar class="h-16 w-16">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    <CardHeader class="flex-col">
      <CardTitle>{$page.params.employeeName}</CardTitle>
      <CardDescription>{data.employee?.designation}</CardDescription>
    </CardHeader>
  </Card>
</div>
<div class="flex gap-2 justify-evenly">
  <div class="grid grid-cols-2 w-2/3">
    <Line
    data={chartData}
    options={{ scales: { x: { grid: { display: false } } } }}
  />
  </div>
  <div class="grid grid-cols-2 gap-2">
    <Card class="w-48 h-48">
      <CardHeader>
        <CardTitle>Issues Solved</CardTitle>
      </CardHeader>
      <CardContent>
        <p class="text-5xl font-bold">
          {data.timesTakenToCloseIssue.length}<span
            class="text-3xl text-muted-foreground font-normal"
            >/{data.openIssues + data.timesTakenToCloseIssue.length}</span
          >
        </p>
      </CardContent>
    </Card>
    <Card class="w-48 h-48">
      <CardHeader>
        <CardTitle>Total Commits</CardTitle>
      </CardHeader>
      <CardContent>
        <p class="text-5xl font-bold">{data.totalCommits}</p>
      </CardContent>
    </Card>
    <Card class="w-48 h-48">
      <CardHeader>
        <CardTitle>Avg Time Spent</CardTitle>
      </CardHeader>
      <CardContent>
        <p class="text-3xl font-bold">
          {Math.floor(Math.random() * (60 - 40 + 1) + 40)}
          <br />
          hrs<span class="text-2xl text-muted-foreground">/week</span>
        </p>
      </CardContent>
    </Card>
    <Card class="w-48 h-48">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
    </Card>
  </div>
</div>
