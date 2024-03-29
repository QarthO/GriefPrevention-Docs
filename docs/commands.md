---
sidebar_position: 4
---
# Commands

# Player Commands

All of the permissions below start with "griefprevention.". For example, "restorenature" is "griefprevention.restorenature".  See the [full list of permissions for more details](/docs/permissions).

| Command | Description | Alias | Perm  |
| -------------    |:-------------:| -----:| -----:|
| /AbandonClaim | Deletes the claim you're standing in. | | claims |
| /ClaimExplosions | Toggles if explosions are allowed in the claim. | | claims |
| /Trust | Gives another player permission to edit in your claim. | /t | claims |
| /UnTrust | Revokes any permissions granted to a player in your claim. | /ut | claims |
| /AccessTrust | Gives a player permission to use your buttons, levers, and beds. | /at | claims |
| /ContainerTrust | Gives a player permission to use your buttons, levers, beds, crafting gear, containers, and animals. | /ct | claims |
| /TrustList | Lists the permissions for the claim you're standing in. | | claims |
| /SubdivideClaims | Switches your shovel to subdivision mode, so you can subdivide your claims. | /sc | claims |
| /RestrictSubclaim | Restricts a subclaim, so that it inherits no permissions from the parent claim. | /rsc | claims |
| /BasicClaims | Puts your shovel back in basic claims mode. | /bc | claims |
| /PermissionTrust | Grants a player permission to share his permission level with others. | /pt | claims |
| /Untrust All | Removes all permissions for all players in your claim. | | claims |
| /AbandonAllClaims | Deletes all of your claims. | | claims |
| /BuyClaimBlocks | Converts server money to claim blocks. | /BuyClaim | buysellclaimblocks |
| /SellClaimBlocks | Converts claim blocks to server money. | /SellClaim | buysellclaimblocks |
| /GivePet | Gives away a tamed animal. | | givepet |
| /ClaimsList | Lists a player's claims and claim block details. | | claims |
| /IgnorePlayer | Ignores a target player's chat messages. | /Ignore | ignore |
| /UnIgnorePlayer | Un-ignores a target player's chat messages. | /UnIgnore | ignore |
| /IgnoredPlayerList | Lists all players currently ignored. | /IgnoreList | ignore |
| /Siege | Besieges a player (disabled by default). | | siege |
| /Trapped | Gets a player out of a land claim he's trapped inside. | | trapped |
| /UnlockDrops | Allows other players to pick up items you dropped when you died. | | unlockdrops |

# Admin Commands

All of the permissions below start with "griefprevention.". For example, "restorenature" is "griefprevention.restorenature".  See the [full list of permissions for more details](/docs/permissions).

| Command | Description | Alias | Perm  |
| -------------    |:-------------:| -----:| -----:|
| /RestoreNature | Switches the shovel tool to restoration mode. | /rn | restorenature |
| /RestoreNatureAggressive | Switches the shovel tool to aggressive restoration mode. | /rna | restorenatureaggressive |
| /RestoreNatureFill &lt;Radius&gt; | Switches the shovel tool to fill mode. | /rnf | restorenatureaggressive |
| /IgnoreClaims | Toggles ignore claims mode. | /ic | ignoreclaims |
| /AdminClaims | Switches the shovel tool to administrative claims mode. | /ac | adminclaims |
| /DeleteAllAdminClaims | Deletes all administrative claims. | | adminclaims |
| /AdminClaimsList | Lists all administrative claims. | | adminclaims |
| /AdjustBonusClaimBlocks &lt;Player&gt; &lt;Amount&gt; | Adds or subtracts bonus claim blocks for a player. | /acb | adjustclaimblocks |
| /AdjustBonusClaimBlocksAll &lt;Player&gt; &lt;Amount&gt; | Adds or subtracts bonus claim blocks for all online players. | | adjustclaimblocks |
| /SetAccruedClaimBlocks &lt;Player&gt; vAmount&gt; | Updates a player's accrued claim block total. | /scb | adjustclaimblocks |
| /DeleteClaim | Deletes the claim you're standing in, even if it's not your claim. | /dc | deleteclaims |
| /DeleteAllClaims &lt;Player&gt; | Deletes all of another player's claims. | | deleteclaims |
| /DeathBlow | | | deathbow |
| /SoftMute &lt;Player&gt; | Toggles whether a player's messages will only reach other soft-muted players. | | softmute |
| /GPreload | Reloads Grief Prevention's configuration settings.  Does NOT totally reload the entire plugin. | | reload |
| /TransferClaim &lt;Player&gt; | Converts an administrative claim to a private claim. | | transferclaim |
| /ClaimsList &lt;Player&gt; | Lists information about a player's claim blocks and claims. | | claimslistother |
| /Separate &lt;Player1&gt; &lt;Player2&gt; | Forces two players to ignore each other in chat. | | separate |
| /ClaimBook &lt;Player&gt; | Gives a player a manual about claiming land. | | claimbook |
| /DeleteClaimsInWorld &lt;World&gt; | Deletes all the claims in a world.  Only usable at the server console. | | deleteclaimsinworld |
| /DeleteUserClaimsInWorld &lt;world&gt; | Deletes all the non-admin claims in a world.  Only usable at the server console. | | deleteclaimsinworld |
| /UnlockDrops | | | unlockothersdrops |