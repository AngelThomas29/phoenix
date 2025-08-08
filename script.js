const drinks = {
  happy: {
    name: "Mango Smoothie",
    image: "https://chartwellsk12.in/wp-content/uploads/2022/07/mango-smoothie.jpg",
    history: "Mango smoothies originated in tropical regions where mangoes are abundant. They're a modern twist on traditional mango lassi from India.",
    recipe: `
      <strong>Ingredients:</strong>
      <ul>
        <li>1 ripe mango</li>
        <li>1 cup yogurt</li>
        <li>1/2 cup milk</li>
        <li>1 tbsp honey</li>
        <li>Ice cubes</li>
      </ul>
      <strong>Steps:</strong>
      <ol>
        <li>Peel and chop the mango.</li>
        <li>Blend mango, yogurt, milk, and honey until smooth.</li>
        <li>Add ice cubes and blend again.</li>
        <li>Serve chilled.</li>
      </ol>
    `
  },
  sad: {
    name: "Hot Chocolate",
    image: "https://bakerbynature.com/wp-content/uploads/2024/01/Hot-Chocolate-3.jpg",
    history: "Hot chocolate dates back to the Mayans and Aztecs, who drank a bitter version of it. Europeans later sweetened it and made it a comfort drink.",
    recipe: `
      <strong>Ingredients:</strong>
      <ul>
        <li>2 cups milk</li>
        <li>2 tbsp cocoa powder</li>
        <li>2 tbsp sugar</li>
        <li>1/4 tsp vanilla extract</li>
        <li>Whipped cream (optional)</li>
      </ul>
      <strong>Steps:</strong>
      <ol>
        <li>Heat milk in a saucepan.</li>
        <li>Whisk in cocoa powder and sugar.</li>
        <li>Stir until smooth and hot.</li>
        <li>Add vanilla and serve with whipped cream.</li>
      </ol>
    `
  },
  tired: {
    name: "Espresso",
    image: "https://www.seriouseats.com/thmb/MS_5p-UVwIHCrr5MaXonYJajP7o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2018__06__20180613-coffee-vs-espresso-vicky-wasik-3-1500x1125-418fa2a14e7249b18040c2c34bf8569c.jpg",
    history: "Espresso was invented in Italy in the early 1900s as a quick way to brew coffee. It's now a staple in cafes worldwide.",
    recipe: `
      <strong>Ingredients:</strong>
      <ul>
        <li>Fresh ground coffee beans</li>
        <li>Water</li>
        <li>Espresso machine</li>
      </ul>
      <strong>Steps:</strong>
      <ol>
        <li>Fill the portafilter with ground coffee.</li>
        <li>Tamp the coffee evenly.</li>
        <li>Lock the portafilter and start the machine.</li>
        <li>Serve the shot immediately.</li>
      </ol>
    `
  },
  relaxed: {
    name: "Chamomile Tea",
    image: "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/chamomile-tea.jpg?w=1155&h=1528",
    history: "Chamomile tea has been brewed since ancient Egyptian times for its calming and healing properties. The dried flowers of the chamomile plant are steeped in hot water to make a naturally caffeine-free drink.",
    recipe: `
      <strong>Ingredients:</strong>
      <ul>
        <li>1 tsp dried chamomile flower</li>
        <li>1 cup(240ml) water</li>
        <li>honey or lemon</li>
      </ul>
      <strong>Steps:</strong>
      <ol>
        <li>Bring water to a gentle boil.</li>
        <li>Pour hot water over chamomile in a teapot.</li>
        <li>Cover and steep 5-7 minutes(longer for stronger flavour).</li>
        <li>Strain out the flowers.</li>
        <li>Sweeten with honey or add a slice of lemon if desired.Serve warm<li>
      </ol>
    `
  },
  romantic: {
    name: "Strawberry Milkshake",
    image: "https://foodwithfeeling.com/wp-content/uploads/2021/06/strawberry-milkshake-9.jpg",
    history: "Strawberry milkshakes became popular in the early 1900s in American diners. Originally made with fresh strawberries, milk, and ice cream, they became a symbol of classic soda fountain culture.",
    recipe: `
      <strong>Ingredients:</strong>
      <ul>
        <li>Frozen strawberries</li>
        <li>Vanilla icecream</li>
        <li>Chilled milk</li>
        <li>Sugar or honey<li>
        <li>Whipped cream(optional)<li>
      </ul>
      <strong>Steps:</strong>
      <ol>
        <li>If using fresh strawberries, hull and halve them. If frozen, thaw a little.</li>
        <li>Put strawberries, ice cream, milk, and sweetener into a blender.</li>
        <li>Blend until smooth and creamy (20-30 sec)</li>
        <li>Pour into a chilled glass and top with whipped cream or a strawberry slice.</li>
      </ol>
    `
  },
  stressed: {
    name: "Green Tea",
    image: "https://st.depositphotos.com/1325564/4463/i/450/depositphotos_44631625-stock-photo-tea-service.jpg",
    history: " Green tea has been enjoyed for over 4,000 years, originating in China. It is made from unoxidized tea leaves, preserving its antioxidants and light, fresh taste. Japanese tea ceremonies often feature it as a symbol of mindfulness.",
    recipe: `
      <strong>Ingredients:</strong>
      <ul>
        <li>Green tea bag or loose green tea</li>
        <li>1 cup (240 ml) water at about 75–80°C (not boiling)</li>
        <li>Honey and lemon(optional)/li>
      </ul>
      <strong>Steps:</strong>
      <ol>
        <li>Heat water until just below boiling (let boiling water rest ~1–2 minutes).</li>
        <li>Pour hot water over the green tea.</li>
        <li>Steep 2-3 minutes (short steep for lighter taste; 3-4 for stronger).</li>
        <li>Remove the bag/strain leaves, add sweetener or lemon if desired, and serve</li>
      </ol>
    `
  },
  sleepy: {
    name: "Warm Milk",
    image: "https://media.istockphoto.com/id/906774304/photo/holi-festival-thandai-or-sardai-cold-drink.jpg?s=612x612&w=0&k=20&c=UmvLAdtNDSWgpmxNd5j3yBUYuc1NmhBvrPBNCiNa1kc=",
    history: " The idea of drinking warm milk for relaxation dates back to ancient times. Many cultures believed that the natural amino acid tryptophan in milk helped promote better sleep. It’s still a classic bedtime drink worldwide ",
    recipe: `
      <strong>Ingredients:</strong>
      <ul>
        <li>1 cup milk</li>
        <li>¼ tsp ground cinnamon or a pinch of nutmeg (optional)</li>
        <li>1 tsp honey or sugar (optional)</li>
      </ul>
      <strong>Steps:</strong>
      <ol>
        <li>Pour milk into a small saucepan.</li>
        <li>Warm it over low–medium heat, stirring, until it’s hot but not boiling (2–4 minutes)</li>
        <li>Remove from heat, stir in honey and cinnamon if using.</li>
        <li>Pour into a mug and sip slowly</li>
      </ol>
    `
  },
  bored: {
    name: "Cold Brew Coffee",
    image: "https://www.shutterstock.com/image-photo/ice-coffee-tall-glass-cream-600nw-2330060877.jpg",
    history: " Cold brew traces its roots to Kyoto, Japan, in the 1600s, where coffee was slowly dripped through cold water. Today, it’s loved for its smooth, less acidic taste compared to hot coffee.",
    recipe: `
      <strong>Ingredients:</strong>
      <ul>
        <li>1 cup coarsely ground coffee (about 85–100 g</li>
        <li>4 cups cold water (1:4 ratio for concentrate) — or 1:8 for ready-to-drink strength</li>
        <li>Ice, milk, or water to serve</li>
      </ul>
      <strong>Steps:</strong>
      <ol>
        <li>Combine coarsely ground coffee and cold water in a large jar or pitcher; stir to saturate grounds.</li>
        <li>Cover and steep in the fridge or at room temperature for 12–18 hours (longer = stronger).</li>
        <li>Strain through a fine mesh, cheesecloth, or coffee filter into another container. (If you used the 1:4 concentrate ratio, dilute 1:1 with water or milk to serve.)</li>
        <li>Serve over ice, add milk or sweetener if desired</li>
      </ol>
    `
  },
    nervous: {
    name: "Peppermint Tea",
    image: "https://t3.ftcdn.net/jpg/10/69/19/60/360_F_1069196002_UpegRGkJfjUSW99qBEFsLzgUjWy6oUj3.jpg",
    history: " Peppermint tea has been used for centuries as a soothing herbal infusion. Ancient Egyptians, Greeks, and Romans valued it for its digestive and calming benefits. It’s naturally caffeine-free and refreshing.",
    recipe: `
      <strong>Ingredients:</strong>
      <ul>
        <li>6-8 fresh peppermint leaves or 1 peppermint tea bag (or 1 tsp dried leaves)</li>
        <li>1 cup (240 ml) boiling water</li>
        <li>Honey (optional)</li>
      </ul>
      <strong>Steps:</strong>
      <ol>
        <li>Place fresh leaves or the tea bag in a cup.</li>
        <li>Pour boiling water over the leaves/bag and cover.</li>
        <li>Steep 5-7 minutes for a robust, cooling flavo</li>
        <li>Strain (if using leaves), sweeten to taste, and enjoy hot or let cool for iced peppermint tea.</li>
      </ol>
    `
  },
  excited: {
    name: "Bubble Tea",
    image: "https://teacultureoftheworld.com/cdn/shop/articles/taiwan-milk-tea-with-boba-bubble-pearl-on-plastic-2024-02-05-02-27-11-utc.jpg?crop=center&height=1200&v=1714023533&width=1200",
    history: "Bubble tea originated in Taiwan in the 1980s. It combines tea, milk, and chewy tapioca pearls for a fun and flavorful experience.",
    recipe: `
      <strong>Ingredients:</strong>
      <ul>
        <li>1 cup brewed black tea</li>
        <li>1/2 cup milk</li>
        <li>2 tbsp sugar</li>
        <li>1/4 cup cooked tapioca pearls</li>
        <li>Ice cubes</li>
      </ul>
      <strong>Steps:</strong>
      <ol>
        <li>Cook tapioca pearls as per package instructions.</li>
        <li>Mix tea, milk, and sugar.</li>
        <li>Add ice and pearls to a glass.</li>
        <li>Pour tea mixture over and serve with a wide straw.</li>
      </ol>
    `
  }
};

const moodSelector = document.getElementById("moodSelector");
const drinkDisplay = document.getElementById("drinkDisplay");
const drinkName = document.getElementById("drinkName");
const drinkImage = document.getElementById("drinkImage");
const drinkInfo = document.getElementById("drinkInfo");
document.getElementById("drinkDisplay").classList.remove("hidden");
document.getElementById("drinkDisplay").scrollIntoView({ behavior: "smooth" });

moodSelector.addEventListener("change", () => {
  const mood = moodSelector.value;
  if (drinks[mood]) {
    const drink = drinks[mood];
    drinkName.textContent = drink.name;
    drinkImage.src = drink.image;
    drinkImage.alt = drink.name;
    drinkInfo.classList.add("hidden");
    drinkDisplay.classList.remove("hidden");
  } else {
    drinkDisplay.classList.add("hidden");
  }
});

function showHistory() {
  const mood = moodSelector.value;
  drinkInfo.innerHTML = `<h3>History & Origin</h3><p>${drinks[mood].history}</p>`;
  drinkInfo.classList.remove("hidden");
}

function showRecipe() {
  const mood = moodSelector.value;
  drinkInfo.innerHTML = `<h3>Recipe</h3>${drinks[mood].recipe}`;
  drinkInfo.classList.remove("hidden");
}
