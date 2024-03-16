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
  <Line
    data={chartData}
    options={{ scales: { x: { grid: { display: false } } } }}
  />
</div>
