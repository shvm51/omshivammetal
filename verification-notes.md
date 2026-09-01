# Ingot Animation Verification Notes

The revised hero now opens from a stable cast-ingot pyramid with clear separation paths. During direct scroll testing, the individual ingots separated without intersecting; however, two scroll-story text plates were simultaneously visible at an intermediate scroll position. The final pass will narrow those text visibility windows so the ingot choreography remains the sole focal element at every scroll position.

After refining the visibility windows, direct testing confirmed that the late-stage “Built for Industry” message displays alone while the ingots remain separated on clear, non-intersecting paths. The hero now preserves a stable initial stack, a readable mid-separation material study, and a clean final scroll stage.

The long-ingot correction was validated at the initial and mid-scroll states. The hero now opens with clearly readable four-level horizontal rows on a pallet base; every ingot has a visible black clearance gap from adjacent pieces. At mid-scroll, each ingot follows an isolated outward path without crossing or appearing to intersect another object.

The dense rotating-stack revision now holds every ingot rigidly in its offset pallet layout. Direct scroll testing confirms the whole stack rotates as one assembly; the pallet and all four rows share the same controlled rotational movement, with no independent ingot drift.

The back-and-forth correction was checked at initial and mid-scroll positions. Alternating rows now sit at distinct front and rear depths, while upper rows bridge the seams of the lower row. As the stack rotates, this depth relationship remains rigid and visible; the pallet and all ingots turn together without separation.

The rebuilt deterministic scene was checked at the top and in the controlled separation phase. At scroll position zero, the ingots use computed layer heights and sit on the support deck. During separation, the stored original transforms and ordered motion sequence produce deliberate, non-random ingot movement; the surrounding stack does not receive idle drift or independent oscillation.

Reverse-scroll testing returned the hero to the exact original computed stack. The layer heights, contact positions, and fixed rotations restored without visible residual offsets, confirming that the state transformation is reversible rather than accumulative.

The animation optimization was verified through the live hero. Scroll progress now drives direct ingot and camera transform writes, while the prior compounded smoothing and high pixel/shadow settings have been reduced. The controlled separation stage tracked scroll without the previous delayed interpolation layer or independent motion loops.
