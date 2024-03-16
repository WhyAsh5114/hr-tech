<script>
  import "../app.pcss";
  import * as Menubar from "$lib/components/ui/menubar";
  import { ModeWatcher, toggleMode } from "mode-watcher";
</script>

<ModeWatcher />
<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
  Welcome, HR
</h1>
<Menubar.Root class="mb-6">
  <Menubar.Menu>
    <Menubar.Trigger class="grow justify-center">
      <a href="/">Hiring</a>
    </Menubar.Trigger>
  </Menubar.Menu>
  <Menubar.Menu>
    <Menubar.Trigger class="grow justify-center">
      <a href="/manage-employees">Manage</a>
    </Menubar.Trigger>
  </Menubar.Menu>
  <Menubar.Menu>
    <Menubar.Trigger class="grow justify-center">
      Expense management
    </Menubar.Trigger>
    <Menubar.Content>
      <Menubar.Item>For individual employee</Menubar.Item>
      <Menubar.Item>For department</Menubar.Item>
    </Menubar.Content>
  </Menubar.Menu>
  <Menubar.Menu>
    <Menubar.Trigger class="grow justify-center">Account</Menubar.Trigger>
    <Menubar.Content>
      <Menubar.Item on:click={toggleMode}>Change theme</Menubar.Item>
      <Menubar.Item class="text-red-500">Logout</Menubar.Item>
    </Menubar.Content>
  </Menubar.Menu>
</Menubar.Root>
<slot />
