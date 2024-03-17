<script lang="ts">
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
  import { Input } from "$lib/components/ui/input";
  import * as Select from "$lib/components/ui/select";

  export let data;
  let searchText = "";
  let employeeData = data.employeeData;
  const sorters = [
    { value: "issues closed", label: "Issues Closed" },
    { value: "commits", label: "Commits" },
  ];
  let selectedSorter: undefined | { value: string; label: string } = undefined;

  $: employeeData = data.employeeData.filter((employee) =>
    employee.name.toLowerCase().includes(searchText)
  );

  $: employeeData = employeeData.sort((b, a) => {
    if (selectedSorter?.value === "issues closed") {
      return a.issuesClosed - b.issuesClosed;
    } else if (selectedSorter?.value === "commits") {
      return a.commits - b.commits;
    } else {
      return Number(a.name) - Number(b.name);
    }
  });
</script>

<div class="flex gap-2">
  <Input
    class="mb-4"
    placeholder="Search for employee"
    bind:value={searchText}
  />
  <Select.Root bind:selected={selectedSorter}>
    <Select.Trigger class="basis-1/3">
      <Select.Value placeholder="Sort by" />
    </Select.Trigger>
    <Select.Content>
      <Select.Group>
        {#each sorters as sorter}
          <Select.Item value={sorter.value} label={sorter.label}
            >{sorter.label}</Select.Item
          >
        {/each}
      </Select.Group>
    </Select.Content>
    <Select.Input name="favoriteFruit" />
  </Select.Root>
</div>
<div class="grid grid-cols-3 gap-4">
  {#each employeeData as employee}
    <a href="/manage-employees/{employee.name}">
      <Card
        class="flex items-center justify-start px-6  hover:shadow-md transition-all"
      >
        <Avatar class="h-16 w-16">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <CardHeader class="flex-col">
          <CardTitle>{employee.name}</CardTitle>
          <CardDescription>{employee.designation}</CardDescription>
        </CardHeader>
        <CardDescription class="ml-auto font-semibold text-lg text-foreground">
          {#if selectedSorter?.value === "issues closed"}
            <span>{employee.issuesClosed}</span>
          {:else if selectedSorter?.value === "commits"}
            <span>{employee.commits}</span>
          {/if}
        </CardDescription>
      </Card>
    </a>
  {/each}
</div>
