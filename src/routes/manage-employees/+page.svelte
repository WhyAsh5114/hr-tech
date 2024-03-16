<script>
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
</script>

<div class="grid grid-cols-3 gap-4">
  {#each data.employeeData as employee}
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
      </Card>
    </a>
  {/each}
</div>
