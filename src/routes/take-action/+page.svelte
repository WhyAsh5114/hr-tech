<script lang="ts">
  import { page } from "$app/stores";
  import * as Select from "$lib/components/ui/select/index.js";
  import Textarea from "$lib/components/ui/textarea/textarea.svelte";
  import { Button } from "$lib/components/ui/button";
  import Reload from "svelte-radix/Reload.svelte";
  import LlamaAI from "llamaai";
  export let data;

  const actions = [
    { value: "offer", label: "Offer" },
    { value: "rejection", label: "Rejection" },
    { value: "layoff", label: "Layoff" },
    { value: "increment", label: "Increment" },
    { value: "decrement", label: "Decrement" },
  ];
  let selectedAction = actions.find(
    (action) => action.value === $page.url.searchParams.get("action")
  );

  $: toList =
    selectedAction?.value === "layoff"
      ? data.currentEmployees.map((emp) => {
          return { value: emp.email, label: emp.name };
        })
      : data.hiringEmployees.map((emp) => {
          return { value: emp.email, label: emp.name };
        });
  let selectedEmployee = data.toEmail
    ? {
        value: data.toEmail,
        label: data.toName,
      }
    : undefined;

  let answer = "";
  let generating = false;
  async function generateResponse() {
    const apiToken =
      "LL-dlIgQVFTLtpQ66uuFfPlW2DMMtbq317E8KmWvS3l6CQv7KB6zmBaeuVKPBfWlyrC";
    const llamaAPI = new LlamaAI(apiToken);

    let content = `generate a simple template ${selectedAction?.value} letter`;
    if (selectedAction?.value !== "layoff") {
      content += `for employee ${selectedEmployee?.label}`;
    }
    const apiRequestJson = {
      messages: [
        {
          role: "user",
          content,
        },
      ],
      stream: false,
    };
    generating = true;
    const messages = await llamaAPI.run(apiRequestJson);
    answer = messages.choices[0].message.content;
    generating = false;
  }
</script>

<h2
  class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 mb-6"
>
  Take action
</h2>

<div
  class="grid grid-rows-2 grid-cols-2 grid-flow-col items-end gap-1 w-fit mb-6"
>
  <span class="text-sm font-semibold ml-2">Action</span>
  <Select.Root bind:selected={selectedAction}>
    <Select.Trigger class="w-64">
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
    <Select.Trigger class="w-64">
      <Select.Value placeholder="Select an action" />
    </Select.Trigger>
    <Select.Content>
      <Select.Group>
        {#each toList as employee}
          <Select.Item value={employee.value} label={employee.label}>
            {employee.value}
          </Select.Item>
        {/each}
      </Select.Group>
    </Select.Content>
    <Select.Input name="favoriteFruit" />
  </Select.Root>
</div>

<span class="text-sm font-semibold ml-2">Email</span>
<Textarea class="h-64" bind:value={answer} />

<div class="flex mt-2 justify-between">
  <Button variant="secondary" disabled={generating} on:click={generateResponse}>
    {#if generating}
      <Reload class="mr-2 h-4 w-4 animate-spin" />
    {/if}
    Generate email
  </Button>
  <Button>Send email</Button>
</div>
