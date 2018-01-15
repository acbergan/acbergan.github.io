---
layout: post
date: 2013-08-15
title: "Cutting Carbon Epoxy Laminates"
---

<!--excerpt.start-->
Recently I needed to machine carbon/epoxy composite test specimens for my PhD research. With very limited composites machining capability in my University’s machine shop, I was left on my own. How hard could it be? Use some carbide tools and your good to go right?

Sort of. I needed to hit a tolerance of ±0.003 inch parallel over a 12-inch-long cut and using Harbor Freight tile saw.<!--excerpt.end--> Sounds completely ridiculous I know.


The difficulty in machining carbon/epoxy is that the fiber and matrix materials behave quite differently when machined. The fibers are very hard and abrasive, requiring high tool speed and very hard cutting tool material. In contrast, the matrix is very soft and has a tendency to clog the cutting tool, especially as cutting tool temperature increases. Unlike machining metals, where the metal chips dissipate a significant amount of heat, the lower thermal conductivity of composites makes heat buildup occur more rapidly. An associated issue is that the matrix is quite weak compared to the fibers and susceptible to damage due to excessive forces and/or high temperatures during machining. It’s quite easy to end up with edge delaminations, fiber breaks, and extensive matrix cracking during machining. While the resulting edge may be unsuitable for a variety of applications, it is particularly problematic for mechanical testing, where damage from machining can significantly affect test outcomes due premature failure triggered by stress concentrations at the damaged locations. The ideal conditions for machining composites are high cutting tool speed, low feed rates, and small depth of cut.

{% include image.html name="cut-comparison.png" alt="Cut Comparison" %}

In the spectrum of cutting tool materials from high speed steel to diamond, carbides and harder materials are required. Diamond is preferred, but carbide will do if short tool life is acceptable.

If you’ve got access to any tool your heart desires (wouldn’t that be nice), you would probably use a water jet for your composite machining needs. A water jet uses a small diameter, high speed jet of an abrasive cutting solution to cut just about anything through an erosion process (waterjets.org has some great info if you want to learn more about how water jets work). Usually the size of a small room, computer controlled, and loud, a water jet machine is a very impressive piece of equipment. The advantages of using a water jet for machining composites are a very clean (consistently delamination-free) edge, minimal force is exerted on the part, and virtually no heat is generated during the cutting process. Besides the expense of the equipment (which is substantial), other disadvantages are noise and slight curvature on cut edges (i.e., taper) due to flaring of the cutting jet as it passes through the material.

Standard machine shop equipment like mills, routers, and surface grinders can be used to create high quality cuts (with perfectly normal edges, unlike the curved edges from a water jet). These tools are often used in production structural composites. They are well suited for trimming operations, which are common in a composite production environment, where the part is usually designed as a single unit with some excess material around the edges for molding that needs to be trimmed after the part has cured. Unfortunately, these techniques are not ideal when several pieces are cut from a large panel, as in my case where I needed to cut several test specimens from a single large panel.

The budget friendly option is a manually operated grinder. A diamond or carbide cutting wheel on an air die grinder will create an aesthetically acceptable edge finish. However, this method usually performed dry, which makes it less ideal for structural applications. Additionally, cutting dry creates carbon dust which is both a health hazard and electrically conducting (will wreak havoc on electronics). If you must cut dry, wear complete eye, ear, breathing, and skin protection and use a shop vac for dust collection if a proper dust collection system is not available.

Some test specimens I needed to machine were for tensile strength tests, which are very sensitive to the edge condition. The preferred means of cutting is using a CNC surface grinder with a diamond impregnated circular blade.

{% include image.html name="cnc-surface-grinder.jpg" alt="CNC Surface Grinder" %}

An alternative two-step procedure is to cut slightly over-sized specimens using a water jet, and then trimming the perimeter with a carbide or diamond mill. Unfortunately this was too expensive and time-consuming for my project: the water-jet and milling estimate was more than $5k.

Thanks to a suggestion from someone who has a whole lot more experience machining composites than me, I decided to use a tile saw with a diamond impregnated blade. At first glance you might think that a tile saw is quite a bit different from a surface grinder, but they are actually very similar. Both spin a circular blade a high speed with a linear guide system to move the material through the blade (or the blade through the material). Also, tile saws are designed for wet cutting, so they have a coolant jet and pump built in.

{% include image.html name="harbor-freight-saw.jpg" alt="Harbor Freight Tile Saw" %}

In retrospect the guy who suggested the tile saw may have spent the most money improving a harbor freight tool in history. I never got a chance to see his setup, but he did say that he made a variety of custom steel tooling for it. Not wanting to reinvent the wheel, I decide to buy some saw from harbor fright. As Harbor Fright products go, this saw is somewhere in the middle of the spectrum from utterly unusable to good enough for occasional use. Maybe the Rigid, MK, QEP, or some other saw would have been better, but hey, the Harbor Freight saw is only $185 — definitely a deal, and really quite a good setup with some modifications.

The specific challenge I faced was the tolerance for parallel along the length of the cut: the target was a 12-inch cut to within 0.003 inches parallel per the ASTM standard for the mechanical testing I needed to do. While the saw’s linear guides seemed capable of this, the table was certainly not. In fact, the two halves of the table were over ¼ inch out of flat and generally much too small for the material I needed to support. The most critical piece for meeting the parallel tolerance, the fence, was completely useless: it was a struggle to maintain ±1/8 inch parallel. I guess that’s close enough for a kitchen or bath tile installation. Some other more minor adjustments were also needed, for example, I had to make a blade arbor adapter because the blade arbor was 1 inch while the saw was 5/8 inches.

I designed a new table and back stop, with an adjustable fence and some clamps to hold the material in place. I designed the table as a grid as opposed to a solid table for coolant drainage, extra clamping locations, and reduced material cost. The side-to-side clearance for the blade was kept narrow with about 1/16 inch kerf to provide maximum support for material edge near the cut. I considered designing the fence to be rigidly square to the table at any position, but decided for a less constrained design knowing it would very difficult to precisely align the saw blade to the table-fence assembly, and much easier to make small adjusts to the fence each time I changed its position. I made the table from 6061 aluminum. This table is probably overkill for most applications, but it certainly did help meet the relatively tight tolerances I was aiming for. The model file is available on github (disclaimer: there are probably less expensive designs, this is just the compromise I came up with for the time, money, tools, and materials available).

{% include image.html name="2013-03-04-10.37.39.jpg" alt="Modified Harbor Freight Tile Saw" %}

[more photos of the saw here]

The saw operated well. Slow constant feeds produce great surface finishes on both carbon/epoxy and fiberglass. Here’s video of the saw in action:

<iframe width="100%" height="480" src="https://www.youtube.com/embed/j4bjpG9LzjE" frameborder="0" allowfullscreen></iframe>

Aligning the new table to the saw, and getting the fence in position took several hours of measuring, moving, re-measuring, test cuts, etc. Since I needed to make several 1-inch wide cuts, I machined an aluminum spacer to help set the fence in place. I also made a simple tool to fine tune the position of the fence: a piece of scrap aluminum with a cleanly machined side and drilled and tapped a hole for ¼-20 screw. I clamped this piece to the table near the end of the fence and threaded in a long screw. Turning the screw moved the position of one end of the fence in one direction slowly and precisely. Using the spacer block, I could relatively consistently position the fence for ±0.01 inch over a 12-inch cut. With the adjustment screw trick, I could get to ±0.005 inch over 12-inches. Occasionally I did better, but after a couple cuts I always ended up at ±0.005 inch, which I decided was good enough.

While it probably wasn’t necessary, I modified the water coolant system as well. The existing system sprayed the water onto the blade near the top of the blade safety cover, which was well before the point where the blade contacted the material (in a circumferential sense). Applying water jets to the blade just before it reaches the material is ideal. I used some loc-line to create two water jets. I aimed one at the leading edge of the blade just before it reached the material and the second at the trailing edge just where it exited the material. I’m not sure that this really made much difference, but the loc-line was fun to play with.

{% include image.html name="loc-line.jpg" alt="Loc Line for cooling" %}

After cutting somewhere around 700 linear inches of carbon-epoxy (anywhere from 0.1 to 0.25 inch-thick), I’m very happy with how this saw has worked. The motor shows no signs of quitting yet and I’m still able to maintain acceptable tolerances. Even with the rather considerable amount of work in designing and building the replacement table, it was still significantly less expensive than purchasing a used surface grinder. The photo below is an edge cut with the saw described here (as was the high quality edge photo at the beginning of the post). Examination of the cut edge with 10x magnification showed no sign of damage.

{% include image.html name="2013-08-15-17.13.58.jpg" alt="High quality surface finish on a sample cut" %}

Concluding advice for those working on budget strapped projects: if you ever need to cut rectangular pieces out of a panel of composite material, think about adapting a tile saw; for most conventional trimming operations, the hand operated air-grinder is the way to go.

Special thanks to Karl for providing the saw blade and excellent recommendations!