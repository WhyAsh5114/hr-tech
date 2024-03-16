<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Badge } from "$lib/components/ui/badge/index.js";
  import * as Card from "$lib/components/ui/card";
  export let data;
</script>

<h2
  class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 mb-6"
>
  Hiring employees
</h2>

<div class="grid grid-cols-2 gap-4">
  {#each data.employeeData as item}
    <Card.Root class="shadow-md">
      <div class="grid grid-cols-3">
        <div class="border flex flex-col">
          <img src={item.image} alt={`${item.name} profile picture`} />
          <Card.Title class="ml-2 mt-auto mb-2">{item.name}</Card.Title>
          <Card.Description class="ml-2 mb-4">{item.designation}</Card.Description>
        </div>
        <div class="flex flex-col col-span-2">
          <Card.Header>
            <Card.Title>Tech skills</Card.Title>
            <Card.Description>
              <div class="flex flex-wrap gap-1 py-2">
                {#each item.skills as skill}
                  <Badge variant="secondary">{skill}</Badge>
                {/each}
              </div>
            </Card.Description>
            <Card.Title class="pt-4">Work experience</Card.Title>
            <Card.Description>
              {item.experience.toFixed(1)} years
            </Card.Description>
          </Card.Header>

          <Card.Footer>
            <Button class="ml-auto">View</Button>
          </Card.Footer>
        </div>
      </div>
    </Card.Root>
  {/each}
</div>
