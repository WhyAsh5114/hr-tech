<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Badge } from "$lib/components/ui/badge/index.js";
  import * as Card from "$lib/components/ui/card";
  export let data;
  import LlamaAI from "llamaai";

  let answer = "";

  async function generateResponse() {
    const apiToken =
      "LL-dlIgQVFTLtpQ66uuFfPlW2DMMtbq317E8KmWvS3l6CQv7KB6zmBaeuVKPBfWlyrC";
    const llamaAPI = new LlamaAI(apiToken);

    const apiRequestJson = {
      messages: [
        {
          role: "user",
          content:
            "generate a notice period for employee name 'John Doe', 4 weeks",
        },
      ],
      stream: false,
    };

    const messages = await llamaAPI.run(apiRequestJson);
    answer = messages.choices[0].message.content;
    console.log(answer);
    console.log(messages);
  }

  generateResponse();
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
          <img
            src={item.image ?? "/profileAlt.jpg"}
            alt={`${item.name} profile picture`}
            class="mb-auto h-48 w-48"
          />
          <Card.Title class="ml-2 mb-2 capitalize">
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
          <Button class="ml-auto">View</Button>
        </Card.Header>
      </div>
    </Card.Root>
  {/each}
</div>
