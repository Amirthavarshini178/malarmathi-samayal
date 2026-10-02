// Each item points to its own named local image asset. Replace an SVG in
// src/assets/products/ with the final product photo without changing the UI.
const productImages = import.meta.glob('../assets/products/{sweets,snacks,pickles,podi}/*.svg', {
  eager: true,
  import: 'default',
  query: '?url',
});

const image = (category, filename) => productImages[`../assets/products/${category}/${filename}.svg`];
const quantities = ['250g', '500g', '1kg'];
const prices = Object.fromEntries(quantities.map((quantity) => [quantity, null]));

const catalogue = {
  Sweets: [
    { id: 'laddu', name: 'Laddu', description: 'Soft, festive bites made in the traditional style.', image: image('sweets', 'laddu') },
    { id: 'mysore-pak', name: 'Mysore Pak', description: 'A rich classic with a delicate, crumbly texture.', image: image('sweets', 'mysore-pak') },
    { id: 'adhirasam', name: 'Adhirasam', description: 'A beloved Tamil sweet with a deep jaggery note.', image: image('sweets', 'adhirasam') },
    { id: 'coconut-burfi', name: 'Coconut Burfi', description: 'A tender coconut sweet for every occasion.', image: image('sweets', 'coconut-burfi') },
    { id: 'kadalai-urundai', name: 'Kadalai Urundai', description: 'Crunchy roasted peanut and jaggery balls.', image: image('sweets', 'kadalai-urundai') },
    { id: 'ellu-urundai', name: 'Ellu Urundai', description: 'Toasty sesame and jaggery in a traditional bite.', image: image('sweets', 'ellu-urundai') },
    { id: 'thengai-burfi', name: 'Thengai Burfi', description: 'Traditional coconut sweet with a soft bite.', image: image('sweets', 'thengai-burfi') },
  ],
  Snacks: [
    { id: 'murukku', name: 'Murukku', description: 'Golden, crisp spirals with a satisfying crunch.', image: image('snacks', 'murukku') },
    { id: 'thenkuzhal', name: 'Thenkuzhal', description: 'Light, delicate and crisp traditional snack.', image: image('snacks', 'thenkuzhal') },
    { id: 'mixture', name: 'Mixture', description: 'A savoury mix of crunchy, spiced favourites.', image: image('snacks', 'mixture') },
    { id: 'kara-sev', name: 'Kara Sev', description: 'Crunchy savoury strands with a gentle kick.', image: image('snacks', 'kara-sev') },
    { id: 'ribbon-pakoda', name: 'Ribbon Pakoda', description: 'Crisp ribbons seasoned with traditional spices.', image: image('snacks', 'ribbon-pakoda') },
    { id: 'thattai', name: 'Thattai', description: 'A crisp, savoury tea-time classic.', image: image('snacks', 'thattai') },
    { id: 'seedai', name: 'Seedai', description: 'Bite-sized, crunchy traditional snack.', image: image('snacks', 'seedai') },
    { id: 'nippattu', name: 'Nippattu', description: 'A crisp, savoury snack with a satisfying bite.', image: image('snacks', 'nippattu') },
    { id: 'banana-chips', name: 'Banana Chips', description: 'Thin, crisp banana slices.', image: image('snacks', 'banana-chips') },
    { id: 'tapioca-chips', name: 'Tapioca Chips', description: 'Crisp slices with a savoury finish.', image: image('snacks', 'tapioca-chips') },
  ],
  Pickles: [
    { id: 'mango-pickle', name: 'Mango Pickle', description: 'Tangy mango with a traditional spice blend.', image: image('pickles', 'mango-pickle') },
    { id: 'lemon-pickle', name: 'Lemon Pickle', description: 'Bright citrus and warming spices.', image: image('pickles', 'lemon-pickle') },
    { id: 'garlic-pickle', name: 'Garlic Pickle', description: 'A bold, savoury pickle for everyday meals.', image: image('pickles', 'garlic-pickle') },
    { id: 'tomato-thokku', name: 'Tomato Thokku', description: 'Slow-cooked tomato relish with homestyle flavour.', image: image('pickles', 'tomato-thokku') },
    { id: 'poondu-thokku', name: 'Poondu Thokku', description: 'Rich garlic thokku, full of savoury flavour.', image: image('pickles', 'poondu-thokku') },
    { id: 'gongura', name: 'Gongura', description: 'A tangy leafy classic, prepared traditionally.', image: image('pickles', 'gongura') },
    { id: 'mixed-vegetable-pickle', name: 'Mixed Vegetable Pickle', description: 'A traditional pickle made with mixed vegetables.', image: image('pickles', 'mixed-vegetable-pickle') },
  ],
  Podi: [
    { id: 'idli-podi', name: 'Idli Podi', description: 'A classic table-side companion for idli and dosa.', image: image('podi', 'idli-podi') },
    { id: 'curry-leaf-podi', name: 'Curry Leaf Podi', description: 'Fragrant curry leaves with roasted spices.', image: image('podi', 'curry-leaf-podi') },
    { id: 'paruppu-podi', name: 'Paruppu Podi', description: 'Comforting roasted lentil powder.', image: image('podi', 'paruppu-podi') },
    { id: 'garlic-podi', name: 'Garlic Podi', description: 'A savoury roasted blend with garlic.', image: image('podi', 'garlic-podi') },
    { id: 'sesame-podi', name: 'Sesame Podi', description: 'Nutty sesame with traditional seasoning.', image: image('podi', 'sesame-podi') },
    { id: 'peanut-podi', name: 'Peanut Podi', description: 'Roasted peanuts blended with spices.', image: image('podi', 'peanut-podi') },
    { id: 'flaxseed-podi', name: 'Flaxseed Podi', description: 'Flaxseed with a traditional spice blend.', image: image('podi', 'flaxseed-podi') },
  ],
};

export const products = Object.entries(catalogue).flatMap(([category, items]) => items.map((product, index) => ({
  ...product,
  category,
  ingredients: null,
  images: [product.image],
  prices,
  availableQuantities: quantities,
  sizes: quantities.map((quantity) => [quantity, null]),
  featured: index === 0,
  popular: index < 2,
  tag: index === 0 ? 'Customer favourite' : null,
})));

export const categoryImages = {
  Sweets: productImages['../assets/products/sweets/sweets-category.svg'],
  Snacks: productImages['../assets/products/snacks/snacks-category.svg'],
  Pickles: productImages['../assets/products/pickles/pickles-category.svg'],
  Podi: productImages['../assets/products/podi/podi-category.svg'],
};
