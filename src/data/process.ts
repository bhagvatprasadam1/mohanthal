export interface ProcessStep {
  step: string;
  number: string;
  title: string;
  gujaratiTitle: string;
  summary: string;
  details: string;
  duration: string;
  craftSecret: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    number: 'Step 01',
    title: 'The Sacred "Dhrabo" Rub',
    gujaratiTitle: 'ધાબો આપવો',
    summary: 'Infusing coarse besan with warm melted ghee and warm milk by hand.',
    details: 'Coarse gram flour is rubbed vigorously between palms with warm ghee and milk until it forms tiny wet beads. It is then left covered for 30 minutes and passed through a brass sieve to yield an even, pearl-like granulation.',
    duration: '45 mins',
    craftSecret: 'This crucial ancestral step is the only way to achieve Mohanthal\'s signature grainy texture.',
  },
  {
    step: '02',
    number: 'Step 02',
    title: 'Slow Kadai Roasting',
    gujaratiTitle: 'ધીમા તાપે શેકવું',
    summary: 'Patient roasting in thick brass vessels over gentle, controlled heat.',
    details: 'The aerated besan pearls are continuously folded in heavy-bottomed cookware until the raw aroma transforms into a nutty, intoxicating fragrance and the colour shifts to warm sunset copper.',
    duration: '40 mins',
    craftSecret: 'Rushing heat burns the edges. True master confectioners roast slowly with relentless stirring.',
  },
  {
    step: '03',
    number: 'Step 03',
    title: 'Pure Premium Ghee Aeration',
    gujaratiTitle: 'પ્રીમિયમ ઘીની સુવાસ',
    summary: 'Allowing the roasted flour to blossom and foam in pure premium ghee.',
    details: 'Fresh golden premium ghee is folded in at precisely timed intervals. As the ghee warms through the roasted granules, the mixture rises into a soft, airy froth that seals in moisture.',
    duration: '15 mins',
    craftSecret: 'The temperature must never smoke the ghee, preserving its medicinal vitamins and nutty aroma.',
  },
  {
    step: '04',
    number: 'Step 04',
    title: 'Single-String Chasni',
    gujaratiTitle: 'એક તારની ચાસણી',
    summary: 'Boiling pure sugar syrup to an exacting single-thread viscosity.',
    details: 'Refined sugar is boiled with filtered water and tested manually between index finger and thumb to achieve a continuous single filament (ek taar). Any deviation changes the soft bite completely.',
    duration: '20 mins',
    craftSecret: 'If the syrup is too thick, the sweet hardens; if too thin, it stays mushy. Exact timing is paramount.',
  },
  {
    step: '05',
    number: 'Step 05',
    title: 'Kesar & Cardamom Infusion',
    gujaratiTitle: 'કેસર-ઈલાયચીનું મિશ્રણ',
    summary: 'Steeping warm saffron milk and freshly ground green cardamom into the syrup.',
    details: 'Warm milk infused with vibrant Kashmiri saffron stigmas is poured into the syrup alongside stone-crushed green cardamom. The warm amber mixture turns into a fragrant royal nectar.',
    duration: '10 mins',
    craftSecret: 'Cardamom is ground fresh immediately before folding to retain volatile aromatic oils.',
  },
  {
    step: '06',
    number: 'Step 06',
    title: 'Harmonious Folding & Garnish',
    gujaratiTitle: 'મેવો અને સજાવટ',
    summary: 'Combining hot syrup with roasted besan and blanketing with sliced nuts.',
    details: 'The hot aromatic syrup is poured into the warm roasted besan and stirred briskly until the glossy mass leaves the sides of the pan. It is poured into greased brass trays and immediately topped with slivered almonds and pistachios.',
    duration: '15 mins',
    craftSecret: 'Nuts are lightly pressed into the warm surface so they adhere permanently during slicing.',
  },
  {
    step: '07',
    number: 'Step 07',
    title: 'Slow Setting & Artisanal Cut',
    gujaratiTitle: 'મોહનથાળ તૈયાર',
    summary: 'Resting overnight at room temperature before slicing into regal squares.',
    details: 'The confection rests undisturbed for 6 to 8 hours to allow the ghee to crystallize softly. Master artisans score the sheet with sharp blade rulers into uniform traditional diamond or square portions, ready to be packaged fresh.',
    duration: '6 - 8 hours',
    craftSecret: 'Never chilled in a refrigerator, keeping the natural room-temperature crumb soft and tender.',
  },
];
