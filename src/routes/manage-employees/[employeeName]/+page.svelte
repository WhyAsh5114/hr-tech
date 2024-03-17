<script lang="ts">
  import { page } from "$app/stores";
  import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "$lib/components/ui/avatar";
  import { Button } from "$lib/components/ui/button";
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "$lib/components/ui/card";
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "$lib/components/ui/dropdown-menu";
  import { Line } from "svelte-chartjs";

  export let data;

  import { Progress } from "$lib/components/ui/progress";
  import {
    ArcElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
  } from "chart.js";
  import { Pie } from "svelte-chartjs";

  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale,
    ArcElement
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

  let cost = [];

  cost.push(data.employee?.budget.CTC);
  cost.push(data.employee?.budget.taxes);
  cost.push(data.employee?.budget.trainingCost);
  cost.push(data.employee?.budget.additionalCertificationCost);

  const pieData = {
    labels: ["CTC", "Taxes", "Training Cost", "Additional Certification Cost"],
    datasets: [
      {
        data: cost,
        backgroundColor: [
          "#F7464A",
          "#46BFBD",
          "#FDB45C",
          "#949FB1",
          "#4D5360",
          "#AC64AD",
        ],
        hoverBackgroundColor: [
          "#FF5A5E",
          "#5AD3D1",
          "#FFC870",
          "#A8B3C5",
          "#616774",
          "#DA92DB",
        ],
      },
    ],
  };

  function calculateAttritionPercentage(timesTaken: number[]) {
    let totalIssues = 0;
    let issuesClosedBeyondThreshold = 0;
    timesTaken.forEach((timeTaken) => {
      totalIssues++;
      if (timeTaken > 12) {
        issuesClosedBeyondThreshold++;
      }
    });

    const attritionPercentage =
      (issuesClosedBeyondThreshold / totalIssues) * 100;
    return attritionPercentage;
  }
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
      <CardDescription
        >{data.employee?.designation} ({data.employee
          ?.username})</CardDescription
      >
    </CardHeader>
  </Card>
</div>
<div class="flex gap-2 justify-evenly items-center">
  <div class="grid grid-cols-2 w-2/3">
    <Line
      data={chartData}
      options={{ scales: { x: { grid: { display: false } } } }}
    />
  </div>
  <div class="grid grid-cols-2 gap-2">
    <Card class="w-48 h-48 shadow-md">
      <CardHeader>
        <CardTitle>Issues Solved</CardTitle>
      </CardHeader>
      <CardContent>
        <p class="text-5xl font-bold">
          {data.timesTakenToCloseIssue.length}<span
            class="text-3xl text-muted-foreground font-bold"
            >/{data.openIssues + data.timesTakenToCloseIssue.length}</span
          >
        </p>
      </CardContent>
      <CardFooter>
        <Progress
          value={data.timesTakenToCloseIssue.length}
          max={data.openIssues + data.timesTakenToCloseIssue.length}
          class="bg-muted-foreground"
        />
      </CardFooter>
    </Card>
    <Card class="w-48 h-48 shadow-md">
      <CardHeader>
        <CardTitle>Total Commits</CardTitle>
      </CardHeader>
      <CardContent>
        <p class="text-5xl font-bold">{data.totalCommits}</p>
      </CardContent>
    </Card>
    <Card class="w-48 h-48 shadow-md">
      <CardHeader>
        <CardTitle>Avg time spent</CardTitle>
      </CardHeader>
      <CardContent>
        <p class="text-3xl font-bold">
          {Math.floor(Math.random() * (60 - 40 + 1) + 40)}
          <br />
          hrs<span class="text-2xl text-muted-foreground">/week</span>
        </p>
      </CardContent>
    </Card>
    <Card class="w-48 h-48 shadow-md">
      <CardHeader>
        <CardTitle>Attrition percentage</CardTitle>
      </CardHeader>
      <CardContent>
        <p class="text-4xl font-bold">
          {calculateAttritionPercentage(data.timesTakenToCloseIssue).toFixed(2)}%
        </p>
      </CardContent>
    </Card>
    <DropdownMenu>
      <DropdownMenuTrigger asChild let:builder>
        <Button builders={[builder]} class="col-span-2 mt-2">Take Action</Button
        >
      </DropdownMenuTrigger>
      <DropdownMenuContent side="right" align="end">
        <DropdownMenuItem
          ><a
            href="/take-action?action=increment&to={data.employee
              ?.email}&name={data.employee?.name}">Increment</a
          >
        </DropdownMenuItem>
        <DropdownMenuItem
          ><a
            href="/take-action?action=decrement&to={data.employee
              ?.email}&name={data.employee?.name}">Decrement</a
          >
        </DropdownMenuItem>
        <DropdownMenuItem
          ><a
            href="/take-action?action=layoff&to={data.employee
              ?.email}&name={data.employee?.name}">Layoff</a
          ></DropdownMenuItem
        >
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</div>

<h1 class="text-4xl font-bold mt-24 mb-4">Expenses</h1>

<div class="flex justify-between gap-10">
  <div class="flex flex-col basis-2/3 gap-2">
    <Card class="text-2xl grow">
      <CardContent>
        <p class="m-4">
          <span class="font-bold">CTC:</span>
          {data.employee?.budget.CTC}
        </p>
        <p class="m-4">
          <span class="font-bold">Taxes:</span>
          {data.employee?.budget.taxes}
        </p>
        <p class="m-4">
          <span class="font-bold">Training Cost: </span>{data.employee?.budget
            .trainingCost}
        </p>
        <p class="m-4">
          <span class="font-bold">Additional Cerfication Cost:</span>
          {data.employee?.budget.additionalCertificationCost}
        </p>
      </CardContent>
    </Card>
    <Card class="text-2xl">
      <CardContent>
        <p class="m-4">
          <span class="font-bold">CTC:</span>
          {data.employee?.budget.CTC}
        </p>
      </CardContent>
    </Card>
  </div>
  <div class="w-96">
    <Card>
      <Pie data={pieData} />
    </Card>
  </div>
</div>
