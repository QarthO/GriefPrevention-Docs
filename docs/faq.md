---
sidebar_position: 3
---

# FAQ

Frequently Asked Questions

<br />
<details markdown="block">
<summary><b>Pressure Plates can be activated/Wooden Buttons can be pressed with Arrows!</b></summary>
    <div> 
        This is by design. To protect buttons, use stone buttons instead - these _cannot_ be depressed by arrows.

        [https://www.spigotmc.org/threads/griefprevention.35615/page-31#post-728722](https://www.spigotmc.org/threads/griefprevention.35615/page-31#post-728722)

        > Players like to use pressure plates with monsters and dropped items, so turning those activators off would be creating a problem by taking away game elements players really enjoy. As long as they're on, any player who I stop from directly activating a plate by standing on it can use either of those as a workaround. Similarly for wooden buttons (arrows). So I allow them outright because otherwise players would get a false sense of security, then feel violated when a clever griefer uses a workaround.

        [https://www.spigotmc.org/threads/griefprevention.35615/page-19#post-567357](https://www.spigotmc.org/threads/griefprevention.35615/page-19#post-567357)

        > There's no option to lock pressure plates. Lots of players like to have an option to activate redstone with monsters (monster grinders) or items. If you were to lock them all over your server, those gameplay elements wouldn't be available. So buttons/levers are lockable while touchplates are not - this gives players options so they can create their own exemptions to access rules without having to subdivide their land claims. For example having a door that the public can open (touchplate) and another that only their friends can activate (button/lever). Also monsters and items will never have permission to do anything in a land claim, so by using touchplates, players can let monsters and items activate traps and other gadgets.

        Additionally, it is not technically feasible to determine the projectile that pushed the button - see this comment by Jikoo: [https://github.com/TechFortress/GriefPrevention/issues/647#issuecomment-544924873](https://github.com/TechFortress/GriefPrevention/issues/647#issuecomment-544924873)

        > Wooden button usage by projectiles is actually not possible to directly detect via Spigot's API, you have to guess based on which entities are nearby. It becomes a mess - under what circumstances do we block access by other entities?
    </div>
</details>
<br />
<details markdown="block">
    <summary><strong>Claims owned by inactive players aren't expiring!</strong></summary>
    <div>
        The inactive claims check runs very slowly. It has been improved recently but it is still intentionally slow to avoid any performance impact to the server. If you want this check to run faster, modify the `Advanced.ClaimExpirationCheckRate` config node at your own risk.

        [https://www.spigotmc.org/threads/griefprevention.35615/page-31#post-728722](https://www.spigotmc.org/threads/griefprevention.35615/page-31#post-728722)

        > It's slow to work, because I want to keep the CPU cost down. About once per minute, GP looks at one land claim to see if it has expired. Slowly over time, old claims from inactive players will disappear.

        Note: The method has been modified to now look at a single claim _owner_ per minute instead of a single claim.
    </div>
</details>
<br />
<details markdown="block">
<summary><b>How do I remove a message from messages.yml?</b></summary>
    <div>
        Simply modify the line to contain only a blank string, and GP will ignore printing the line. Use two quotes (single or double quotes). E.g.

        ```yml
        IgnoringClaims:
            Text: ""
        ```
    </div>
</details>
<br />
<details markdown="block">
<summary><b>Players are not receiving claim blocks!</b></summary>
    <div>
        AFK players do not receive claim blocks (unless configured in the `Advanced` section of the config). Enable debug logs in the GP config to see information about accrued claimblock deliveries, which occur every 10 minutes.
    </div>
</details>
<br />
<details markdown="block">
<summary><b>/claimexplosions does not persist when the claim owner logs off/server restarts</b></summary>
    <div>
        `/claimexplosions` is a temporary toggle to allow players to use explosions in their claim to mine, clear out blocks, or whichever temporal reason.

        [https://www.spigotmc.org/threads/griefprevention.35615/page-63#post-1079544](https://www.spigotmc.org/threads/griefprevention.35615/page-63#post-1079544)

        > Yeah sorry, it's meant to be temporary. The usual usage case is "I want to temporarily enable explosions to do some quick digging". So with that case in mind, I automatically disable that setting when the owner player logs off (or the server reboots) so that players don't forget and accidentally leave their claims open to potential grief by TNT-toting or creeper-baiting trolls. 
    </div>
</details>
<br />
<details markdown="block">
<summary><b>The ground underneath my player's claims isn't being protected!</b></summary>
    <div>
        Read the documentation for `ExtendIntoGroundDistance`:

        [https://docs.griefprevention.com/configuration/#claim-limits](https://docs.griefprevention.com/configuration/#claim-limits)
    </div>
</details>
<br />
<details markdown="block">
<summary><b>Can I have /ignoreclaims be on by default?</b></summary>
    <div>
        GriefPrevention is designed to be self-service with minimal administrative intervention. Additionally, the "least permission principle" is a best practice for administration, meaning that permissions should only be elevated when necessary. Thus, no option for a default admin mode will be considered in GriefPrevention directly. However, you can easily add this functionality via an addon or by other methods.

        See more on this subject here: [https://github.com/TechFortress/GriefPrevention/discussions/991#discussioncomment-171621](https://github.com/TechFortress/GriefPrevention/discussions/991#discussioncomment-171621)

        > No, there's no option for that. You have to turn it on each time you log in. This is a safety feature - it's sometimes easy to not realize you're in someone's land claim when you are. By defaulting to off, you get a "warning" that tells you you're about to change someone's land claim. Then you can explicitly opt-into ignoring claims if that's what you really want to do. I think most admins actually like it this way - some have even asked me to automatically turn /ic off after some time to ensure they don't forget and leave it on.

        > That's by design. GP won't let an admin accidentally change a claimed area. The way it does that is by insisting admins type /ic before they make changes where players have protected. If you want to risk shooting yourself in the foot by unintentionally wrecking someone's build and thus incurring the wrath of your players, then the cost for that will be four keystrokes per login.
    </div>
</details>