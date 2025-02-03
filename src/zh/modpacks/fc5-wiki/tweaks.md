# Hostile mob spawns

- Hostile mob spawn is turned off for overworld under normal difficulty. Spawners should still work.
  - To spawn hostile mobs, you can change your difficulty to hard, or delete this file: `kubejs\server_scripts\remove_hostile_spawns.js`
  - Many mob drops from hostile mobs can be purchased in the market

# Global Game Rules

- Following gamerules are set for all saves in this modpack:
  - `doInsomnia`: false
  - `doPatrolSpawning`: false
  - `disableRaids`: true
  - `playersSleepingPercentage`: 0
  - `doTraderSpawning`: false
- If you wish to modify this, either delete or modify the file at `kubejs\server_scripts\global_game_rules.js`

# Item Stacks

- Most items will stack up to 100 in your inventory
  - This is mostly for Miles Tickets so they can be easily groups in to groups of 100. However, the mod I have access to that modify stacksizes (Stackable127) only increases the stack sizes for all items at the same time.

# Visual Tweaks

- All resource packs in the resource pack folder are included by default. This is so that I can enable resource packs I get from curseforge and have the modpack still pass their moderation system.
  - If you don't want this to be the case you can modify the `[resourcepacks]` section in `config\global_data_and_resourcepacks.toml` to not contain `"resourcepacks/"` (make sure to remove the comma from the line above this)
- Minecraft villagers and FarmingForBlockheads market villager are retextured to animals by default. (from the Farming Crossing 4 resource pack)

# Crafting Tweaks

- farmingForBlockheads market from miles tickets
- Campfire using only logs and sticks
- Campfire using charcoal
- Melon from melon slices
- Clay blocks from clay ball
- Feather from eggs
- Concrete from concrete powder
- Nether wart from nether wart block
- Cobblestone from cobbled deepslate
- Chest from logs
- Sticks from logs
- Bells are craftable
