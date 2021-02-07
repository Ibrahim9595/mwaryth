const nodes = {
  relation: {
    mother: "live",
    father: "live",
    wife: "death",
    sons: ["live", "live"],
    daugthers: ["live"],
  },
};
let total = 1000;
const wifeCalulations = (totalAmount, nodes) => {
  if (
    nodes.relation.father === "death" &&
    nodes.relation.mother === "death" &&
    nodes.relation.sons === "death" &&
    nodes.relation.daughters === "death"
  ) {
    return totalAmount * (1 / 5);
  } else {
    return totalAmount * (1 / 8);
  }
};
const fatherCalulations = (totalAmount, nodes) => {
  if (
    nodes.relation.wife === "death" &&
    nodes.relation.sons === "death" &&
    nodes.relation.daugthers === "death"
  ) {
    return totalAmount * (2 / 3);
  } else if (
    nodes.relation.wife === "death" &&
    nodes.relation.mother === "death" &&
    nodes.relation.sons === "death"
  ) {
    return totalAmount * (1 / 4);
  } else {
    return totalAmount * (1 / 6);
  }
};
const motherCalulations = (totalAmount, nodes) => {
  if (
    nodes.relation.wife === "death" &&
    nodes.relation.sons === "death" &&
    nodes.relation.daugthers === "death"
  ) {
    return totalAmount * (1 / 3);
  } else {
    return totalAmount * (1 / 6);
  }
};
const childCalcultions = (remainaingTotal, nodes) => {
  const childNumber =
    nodes.relation.sons.length * 2 + nodes.relation.daugthers.length;
  const inheritPercent = remainaingTotal / childNumber;
  return { sonsAmount: inheritPercent * 2, daughtersAmount: inheritPercent };
};
const wifeInheritanceAmount = wifeCalulations(total, nodes);
const fatherInheritanceAmount = fatherCalulations(total, nodes);
const motherInheritanceAmount = motherCalulations(total, nodes);
const childInheritanceAmount = childCalcultions(
  total -
    wifeInheritanceAmount -
    fatherInheritanceAmount -
    motherInheritanceAmount,
  nodes
);
console.log("wifeInheritanceAmount", wifeInheritanceAmount);
console.log("fatherInheritanceAmount", fatherInheritanceAmount);
console.log("motherInheritanceAmount", motherInheritanceAmount);
console.log("childInheritanceAmount", childInheritanceAmount);
