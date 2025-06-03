let skibidiObject = {
  name: "root",
  children: [
    {
      name: "parent A",
      children: [
        { name: "enfant A1" },
        {
          name: "enfant A2",
          children: [{ name: "petit-enfant A2.1" }],
        },
      ],
    },
    {
      name: "parent B",
      children: [{ name: "enfant B1" }],
    },
  ],
};
//ajouter une propriété level à chaque noeud: root à level 0 ses enfant au level 1, leur enfants au level 2 etc...
function skibidiLevel(obj, level = 0) {
  if (!obj) throw new Error("T'es con");
  if (obj.name && typeof obj.name === "string")
    obj.name = obj.name.toUpperCase();
  obj.level = level;
  if (Array.isArray(obj.children)) {
    obj.children.map((e) => {
      return skibidiLevel(e, level + 1);
    });
  }
  return obj;
}
try {
  console.log(JSON.stringify(skibidiLevel(skibidiObject), null, 4));
} catch (e) {
  console.log(e.message);
}
