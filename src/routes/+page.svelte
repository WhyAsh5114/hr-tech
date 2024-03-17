<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Badge } from "$lib/components/ui/badge/index.js";
  import * as Card from "$lib/components/ui/card";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import { Input } from "$lib/components/ui/input/index.js";
  export let data;

  let employeeData = data.employeeData;

  let searchText = "";
  const skills = data.skills.map((skill) => {
    return { name: skill, checked: false };
  });

  $: employeeData = data.employeeData.filter((employee) =>
    employee.name.toLowerCase().includes(searchText)
  );

  function filterBySkills(currentSkill: string) {
    employeeData = data.employeeData.filter((employee) => {
      let qualified = true;
      skills.forEach((skill) => {
        if (
          (skill.checked || skill.name === currentSkill) &&
          !employee.skills.includes(skill.name)
        ) {
          qualified = false;
        }
      });
      return qualified;
    });
  }

  $: employeeData = data.employeeData.filter((employee) =>
    employee.name.toLowerCase().includes(searchText)
  );
</script>

<h2
  class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 mb-6"
>
  Hiring employees
</h2>

<div class="flex gap-2">
  <Input
    class="mb-4"
    placeholder="Search for employee"
    bind:value={searchText}
  />
  <DropdownMenu.Root>
    <DropdownMenu.Trigger asChild let:builder>
      <Button variant="outline" builders={[builder]}>Select skills</Button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content class="w-56" align="end">
      {#each skills as skill}
        <DropdownMenu.CheckboxItem
          bind:checked={skill.checked}
          on:click={() => filterBySkills(skill.name)}
        >
          {skill.name}
        </DropdownMenu.CheckboxItem>
      {/each}
    </DropdownMenu.Content>
  </DropdownMenu.Root>
</div>

<div class="grid grid-cols-2 gap-4">
  {#each employeeData as item}
    <Card.Root class="shadow-md">
      <div class="grid grid-cols-3">
        <div class="border flex flex-col">
          <img
            src={item.image ?? "/profileAlt.jpg"}
            alt={`${item.name} profile picture`}
            class="mb-auto h-48 w-48"
          />
          <Card.Title class="ml-2 my-2 capitalize">
            {item.name.toLowerCase()}
          </Card.Title>
          <Card.Description class="ml-2 mb-4">
            {item.designation}
          </Card.Description>
        </div>
        <Card.Header class="flex flex-col col-span-2 justify-around">
          <div>
            <Card.Title>Tech skills</Card.Title>
            <Card.Description>
              <div class="flex flex-wrap gap-1 py-2">
                {#each item.skills as skill}
                  <Badge variant="secondary">{skill}</Badge>
                {/each}
              </div>
            </Card.Description>
          </div>
          <div>
            <Card.Title>Work experience</Card.Title>
            <Card.Description>
              {item.experience.toFixed(1)} years
            </Card.Description>
          </div>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild let:builder>
              <Button
                variant="secondary"
                builders={[builder]}
                class="w-fit ml-auto"
              >
                View
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content align="start">
              <DropdownMenu.Group>
                <DropdownMenu.Item
                  ><a href="/resumes/{item.resume}">View resume</a
                  ></DropdownMenu.Item
                >
                <DropdownMenu.Item>
                  <a
                    href="/take-action?action=offer&to={item.email}&name={item.name}"
                    >Send offer</a
                  >
                </DropdownMenu.Item>
                <DropdownMenu.Item class="text-red-500">
                  <a
                    href="/take-action?action=rejection&to={item.email}&name={item.name}"
                    >Send rejection</a
                  >
                </DropdownMenu.Item>
              </DropdownMenu.Group>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </Card.Header>
      </div>
    </Card.Root>
  {/each}
</div>
