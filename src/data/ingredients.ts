export interface IngredientItem {
  id: string;
  name: string;
  gujaratiName: string;
  category: string;
  shortDesc: string;
  detailedRole: string;
  sourcing: string;
}

export const ingredientsData: IngredientItem[] = [
  {
    id: 'besan',
    name: 'Coarse Stone-Ground Besan',
    gujaratiName: 'જાડો ચણાનો લોટ (બેસન)',
    category: 'The Foundation',
    shortDesc: 'Specifically milled chana dal with a granular grit that ensures the signature texture.',
    detailedRole: 'Unlike silky fine flour used for batter, Mohanthal requires coarsely ground gram flour. When roasted, each grain toasts evenly to produce a deep nutty profile and distinct crumble.',
    sourcing: 'Locally sourced Gujarat farm chana dal stone-ground in small batches.',
  },
  {
    id: 'ghee',
    name: 'Pure Premium Ghee',
    gujaratiName: 'શુદ્ધ પ્રીમિયમ ઘી',
    category: 'The Soul',
    shortDesc: 'Aromatic golden clarified butter cooked slowly to release deep caramelised notes.',
    detailedRole: 'Pure premium ghee tenderises the grain during the roasting stage and gives Mohanthal its rich fragrance, glossy sheen, and natural long-lasting preservation.',
    sourcing: 'Slow-simmered pure premium milk fat prepared for unmatched culinary fragrance and rich golden aroma.',
  },
  {
    id: 'sugar',
    name: 'Single-String Chasni (Sugar)',
    gujaratiName: 'એક તારની ચાસણી (ખાંડ)',
    category: 'The Binder',
    shortDesc: 'Refined sulphurless sugar boiled to an exacting single-thread consistency.',
    detailedRole: 'The sugar syrup must hit an exact single-thread stage (ek taar). This crystallises the roasted besan mixture gently without turning it chewy or hard, securing the melt-in-mouth mouthfeel.',
    sourcing: 'Sulphur-free refined cane crystals sourced from premier western mills.',
  },
  {
    id: 'kesar',
    name: 'Kashmiri Mogra Saffron (Kesar)',
    gujaratiName: 'કાશ્મીરી કેસર',
    category: 'Royal Essence',
    shortDesc: 'Hand-picked deep crimson stigmas steeped in warm milk to infuse amber warmth.',
    detailedRole: 'Provides Mohanthal with its regal sunset-golden tint and a subtle, honeyed floral fragrance that lingers pleasantly on the palate.',
    sourcing: 'Grade-A pure Kashmiri Mogra saffron strands.',
  },
  {
    id: 'cardamom',
    name: 'Freshly Crushed Green Cardamom',
    gujaratiName: 'લીલી ઈલાયચી',
    category: 'Aromatic Harmony',
    shortDesc: 'Sun-dried Malabar green cardamom pods, freshly de-seeded and stone-pounded.',
    detailedRole: 'Cuts through the richness of ghee and sugar with a warm, refreshing sweet-citrus spice lift that defines authentic Gujarati celebratory sweets.',
    sourcing: 'Hand-sorted green cardamom pods from the Western Ghats of Kerala.',
  },
  {
    id: 'almonds',
    name: 'California Almonds (Badam)',
    gujaratiName: 'બદામના ફાડા',
    category: 'Crunch & Nutrition',
    shortDesc: 'Crisp, nutrient-dense whole almonds finely slivered across the top crust.',
    detailedRole: 'Lends a delightful roasted nut crunch against the soft, yielding texture of the sweet beneath.',
    sourcing: 'Premium selected California nonpareil almonds.',
  },
  {
    id: 'pistachios',
    name: 'Vibrant Iranian Pistachios (Pista)',
    gujaratiName: 'પીસ્તાની કતરણ',
    category: 'Festive Jewel',
    shortDesc: 'Emerald-green pistachio slivers providing an eye-catching visual and earthy nuttiness.',
    detailedRole: 'The vibrant green flakes contrast with the deep amber sweet, creating the unmistakable festive appearance of a royal Gujarati thaal.',
    sourcing: 'Naturally split green Iranian pistachio kernels.',
  },
];
