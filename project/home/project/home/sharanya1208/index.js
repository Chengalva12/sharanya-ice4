// === D3 Nature Scene (≥5 distinct elements) ===
const width = 700,
  height = 420;
const svg = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

// 1) Sky
svg
  .append("rect")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", width)
  .attr("height", height)
  .attr("fill", "#dff3ff");

// 2) Ground
svg
  .append("rect")
  .attr("x", 0)
  .attr("y", height - 110)
  .attr("width", width)
  .attr("height", 110)
  .attr("fill", "#9fe29b");

// 3) Sun (click to toggle color)
const sun = svg
  .append("circle")
  .attr("cx", 90)
  .attr("cy", 90)
  .attr("r", 38)
  .attr("fill", "#ffd34d")
  .style("cursor", "pointer");
let sunny = true;
sun.on("click", () => {
  sunny = !sunny;
  sun
    .transition()
    .duration(300)
    .attr("fill", sunny ? "#ffd34d" : "#ff9a3c");
});

// 4) Cloud (group of ellipses)
const cloud = svg.append("g").attr("transform", "translate(260,90)");
cloud
  .append("ellipse")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("rx", 40)
  .attr("ry", 24)
  .attr("fill", "#ffffff");
cloud
  .append("ellipse")
  .attr("cx", 34)
  .attr("cy", -10)
  .attr("rx", 32)
  .attr("ry", 20)
  .attr("fill", "#ffffff");
cloud
  .append("ellipse")
  .attr("cx", -34)
  .attr("cy", -8)
  .attr("rx", 28)
  .attr("ry", 18)
  .attr("fill", "#ffffff");

// 5) Tree (trunk + leaves)
svg
  .append("rect")
  .attr("x", 520)
  .attr("y", height - 170)
  .attr("width", 26)
  .attr("height", 60)
  .attr("fill", "#8b5a2b");
[
  [-18, -18],
  [15, -10],
  [-8, 8],
  [28, 5],
].forEach(([dx, dy]) => {
  svg
    .append("circle")
    .attr("cx", 533 + dx)
    .attr("cy", height - 180 + dy)
    .attr("r", 34)
    .attr("fill", "#2e8b57");
});

// 6) Flower (stem + center + petals)
svg
  .append("rect")
  .attr("x", 350)
  .attr("y", height - 150)
  .attr("width", 5)
  .attr("height", 60)
  .attr("fill", "#2e7d32");

svg
  .append("circle") // center
  .attr("cx", 352.5)
  .attr("cy", height - 155)
  .attr("r", 9)
  .attr("fill", "#ffb300");

// petals (8)
d3.range(8).forEach((i) => {
  const a = (i * Math.PI) / 4;
  svg
    .append("ellipse")
    .attr("cx", 352.5 + Math.cos(a) * 16)
    .attr("cy", height - 155 + Math.sin(a) * 16)
    .attr("rx", 7)
    .attr("ry", 11)
    .attr("fill", "#e91e63");
});

// 7) Pond
svg
  .append("ellipse")
  .attr("cx", 160)
  .attr("cy", height - 60)
  .attr("rx", 70)
  .attr("ry", 28)
  .attr("fill", "#8cd1ff");

// 8) Bird (simple polygon)
svg.append("polygon").attr("points", "460,120 485,130 460,140 470,135 470,125");

// Butterfly (two wings + body)
let butterfly = svg.append("g");

// Left wing
butterfly
  .append("ellipse")
  .attr("cx", 420) // X position
  .attr("cy", 150) // Y position
  .attr("rx", 20) // Horizontal radius
  .attr("ry", 12) // Vertical radius
  .attr("fill", "orange");

// Right wing
butterfly
  .append("ellipse")
  .attr("cx", 440) // X position
  .attr("cy", 150) // Y position
  .attr("rx", 20)
  .attr("ry", 12)
  .attr("fill", "orange");

// Body
butterfly
  .append("rect")
  .attr("x", 429)
  .attr("y", 140)
  .attr("width", 2)
  .attr("height", 20)
  .attr("fill", "black");

// Antennae
butterfly
  .append("line")
  .attr("x1", 430)
  .attr("y1", 140)
  .attr("x2", 425)
  .attr("y2", 130)
  .attr("stroke", "black")
  .attr("stroke-width", 1);

butterfly
  .append("line")
  .attr("x1", 430)
  .attr("y1", 140)
  .attr("x2", 435)
  .attr("y2", 130)
  .attr("stroke", "black")
  .attr("stroke-width", 1);
