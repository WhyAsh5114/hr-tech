<script lang="ts">
  import { page } from "$app/stores";
  import * as Select from "$lib/components/ui/select/index.js";
  export let data;

  const actions = [
    { value: "offer", label: "Offer" },
    { value: "rejection", label: "Rejection" },
    { value: "layoff", label: "Layoff" },
  ];
  let selectedAction = actions.find(
    (action) => action.value === $page.url.searchParams.get("action")
  );

  $: toList =
    selectedAction?.value === "layoff"
      ? data.currentEmployees.map((emp) => {
          return { value: emp.name, label: emp.name };
        })
      : data.hiringEmployees.map((emp) => {
          return { value: emp.name, label: emp.name };
        });
  const toParam = $page.url.searchParams.get("to");
  let selectedEmployee = toParam
    ? {
        value: toParam,
        label: toParam,
      }
    : undefined;
</script>

<h2
  class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 mb-6"
>
  Take action
</h2>

<div class="grid grid-rows-2 grid-cols-2 grid-flow-col items-end gap-1 w-fit">
  <span class="text-sm font-semibold ml-2">Action</span>
  <Select.Root bind:selected={selectedAction}>
    <Select.Trigger class="w-[180px]">
      <Select.Value placeholder="Select an action" />
    </Select.Trigger>
    <Select.Content>
      <Select.Group>
        {#each actions as action}
          <Select.Item value={action.value} label={action.label}>
            {action.label}
          </Select.Item>
        {/each}
      </Select.Group>
    </Select.Content>
    <Select.Input name="favoriteFruit" />
  </Select.Root>
  
  <span class="text-sm font-semibold ml-2">To</span>
  <Select.Root bind:selected={selectedEmployee}>
    <Select.Trigger class="w-[180px]">
      <Select.Value placeholder="Select an action" />
    </Select.Trigger>
    <Select.Content>
      <Select.Group>
        {#each toList as employee}
          <Select.Item value={employee.value} label={employee.label}>
            {employee.label}
          </Select.Item>
        {/each}
      </Select.Group>
    </Select.Content>
    <Select.Input name="favoriteFruit" />
  </Select.Root>
</div>
