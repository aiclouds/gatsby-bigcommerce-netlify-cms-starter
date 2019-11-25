
export default {
  'default': {
    'storeblog': 'The Store Blog',
    'yourcart': 'Your Cart',
    'contactus': 'Contact Us',
    'yourname': 'Your Name',
    'email': 'Email',
    'message': 'Message',
    'send': 'Send',
    'pagenotfound': 'Page Not Found',
    'lookingtoshop': 'You\'ve hit a page that doesn\'t exist. Looking to shop?',
    'lookaround': 'Take a look around.',
    'products': 'Products',
    'checkout': 'Proceed to Checkout',
    'cartempty': 'Your cart is empty.',
    'item': 'Item',
    'qty': 'Qty',
    'price': 'Price',
    'loadingcart': 'Loading Cart',
    'remove': 'Remove',
    'subtotal': 'Subtotal',
    'addtocart': 'Add to Cart',
    'home': 'Home',
    'aboutus': 'About Us',
    'ourproducts': 'Our Products',
    'admin': 'Admin',
    'about': 'About',
    'blog': 'Blog',
    'contact': 'Contact',
    'cart': 'Cart',
  },
  'fr_FR': {
    'storeblog': 'Le Blog Du Magasin',
    'yourcart': 'Votre Panier',
    'contactus': 'Contactez Nous',
    'yourname': 'Votre Nom',
    'email': 'Email',
    'message': 'Message',
    'send': 'Envoyer',
    'pagenotfound': 'Page non trouvée',
    'lookingtoshop': 'Vous avez frappé une page qui n\'existe pas. Vous cherchez à magasiner?',
    'lookaround': 'Regardez autour de vous.',
    'products': 'Des Produits',
    'checkout': 'Passer À La Caisse',
    'cartempty': 'Votre panier est vide.',
    'item': 'Article',
    'qty': 'Quantité',
    'price': 'Prix',
    'loadingcart': 'Chariot De Chargement',
    'remove': 'Retirer',
    'subtotal': 'Sous total',
    'addtocart': 'Ajouter Au Panier',
    'home': 'Domicile',
    'aboutus': 'À Propos De Nous',
    'ourproducts': 'Nos Produits',
    'admin': 'Admin',
    'about': 'Sur',
    'blog': 'Blog',
    'contact': 'Contact',
    'cart': 'Sac',
  },
  getTranslations: function(locale) {
  	let textObj = this['default']
      
    if (this[locale]) {
      textObj = this[locale]
    }

    return textObj
  }
}
