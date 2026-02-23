/* =========================================================
   Camalaniugan FoodHub — Cart & Site Logic (Vanilla JS)
   Profit Development Program · E-Commerce Platform
   Author: GitHub Copilot (Academic Research Prototype)
   ========================================================= */

'use strict';

/* ── Restaurant Directory ── */
const RESTAURANTS = [
  { id:'juvals', name:"Juval's Grill and Restaurant", tagline:'Grilled Filipino Favorites & Wood-Fired Pizza', cuisine:'Filipino · Grill · Pizza', location:'Camalaniugan, Cagayan', hours:'10:00 AM – 9:00 PM', image:'https://scontent.fmnl8-4.fna.fbcdn.net/v/t39.30808-6/591854444_122096263521149193_2403437372939381505_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeE-ezIoYn9bnCTy7MW4uel1FZ_Gi1AK3KcVn8aLUArcp_bFMX-1gMwIOJnGZffzLK7t4__HvF8lmIKOgMGtPVEr&_nc_ohc=JnyHZrKZzfUQ7kNvwFhRaRI&_nc_oc=Adk9nS5Ac9_jA77L-iz7u8-64Xz8yOcmm1Zs2e8mBhCiFR5Po-3ME2MBGG2Nsu2zddU&_nc_zt=23&_nc_ht=scontent.fmnl8-4.fna&_nc_gid=sVKg1sN7EPD1YKxucBZRQg&oh=00_Afubeg9PGgGJ6iUI05uf8y_tzuWO_a3ZzvswB7Yfy2maKw&oe=69A23A7C', facebook:'https://www.facebook.com/people/Juvals-Grill-and-Restaurant/61584475798762/', rating:4.8, featured:true },
  { id:'alfresco', name:'Alfresco Pizzeria & Bistro', tagline:'Handcrafted Pizza, Pasta & Signature Coffee', cuisine:'Italian · Pizza · Coffee', location:'Balai Isabel, Camalaniugan', hours:'10:00 AM – 9:00 PM', image:'https://scontent.fmnl8-5.fna.fbcdn.net/v/t39.30808-6/496005364_30376102745322037_2337814367013327078_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeG998O0tulQynJbqVSFB9PrDHwkqsOSgpEMfCSqw5KCkco-Zi1VSLC3puoGS-WxwTFrQuv_aq0izzLC5ghLooDW&_nc_ohc=z7CsgZDhVt8Q7kNvwEmU6Zz&_nc_oc=Adl_opvnxdFL0DnJswmnE6YiJqbjxXAFr15JEn3lx3eo9S7UBs91Ciy0azbqGFA5t5I&_nc_zt=23&_nc_ht=scontent.fmnl8-5.fna&_nc_gid=9PD-6Vm1T6NNOhucMdE47g&oh=00_Aft8LVkCqKqb8MsM9fEVqlHxiiKKcbq7gGYm_3aKiRAq6w&oe=69A2442C', facebook:'https://www.facebook.com/people/Alfresco-Pizzeria-Bistro-at-Balai-Isabel-Camalaniugan-Branch/61576321915642/', rating:4.9, featured:true },
  { id:'korean-kanto', name:'Korean N Kanto Eats', tagline:'Eggs · Noodles · Comfort Food', cuisine:'Korean · Silog · Street Food', location:'Bulala, Camalaniugan', hours:'8:00 AM – 7:00 PM', image:'https://scontent.fmnl8-4.fna.fbcdn.net/v/t39.30808-6/593922198_25695081370097444_5681901099331329241_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeHs8O1bs3-PoGP64vJMR5MHsazTPmWLYnmxrNM-ZYtieRU5c83FkIGcdG4KLyS3hJV4A108HR2NAFYA3UQX-Y6-&_nc_ohc=XPGmuY8zQcsQ7kNvwFymjPr&_nc_oc=AdlMIYWQ8IG-c11jNINLDsv1UZtSViTJeoHUFeJW5kRXWnWWodsF0Zu0R4i3itCi_8o&_nc_zt=23&_nc_ht=scontent.fmnl8-4.fna&_nc_gid=IDzV0QwcA5RbPwuXii55zQ&oh=00_AfvIe5gfXi4Q5ouw1ZIaEH9aXTETTaJlLSXHv2jx4Qm8Aw&oe=69A23A7E', facebook:'https://www.facebook.com/people/Korean-N-Kanto-Eats/61584824992063/', rating:4.7, featured:true },
  { id:'agus-cafe', name:'Agus Café', tagline:'Premium Coffee & Hearty Homemade Meals', cuisine:'Café · Pasta · Breakfast', location:'Bulala, Camalaniugan', hours:'10:00 AM – 8:00 PM', image:'https://scontent.fmnl8-1.fna.fbcdn.net/v/t39.30808-6/589774910_122104771221101659_730019603725275480_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeESRK2rLygjdE_CibI3GGgN7vPTC9mZDo3u89ML2ZkOjYRlarfv--dCWUQOQwlIYSOupr5CSw6FoPONdleINQQ1&_nc_ohc=LJCcvItp3x4Q7kNvwGCgPUY&_nc_oc=AdmEfFVa2eLGvXYbXn82tpsVcrJnh14523ihIkhNH1M5oa3EeX60oDpOiFsjJdnsVNI&_nc_zt=23&_nc_ht=scontent.fmnl8-1.fna&_nc_gid=foJPhd3x2ESd3CXgOsZocg&oh=00_AftDD3kjQMgAiv_idwFAt-cBaEz7iFLN_wci87crK7gS8Q&oe=69A23417', facebook:'https://www.facebook.com/TheAgusCafe', rating:4.8, featured:true },
  { id:'28th-hangout', name:'28th Hangout & Korean Grill', tagline:'Korean Chicken Wings & Grill Bar', cuisine:'Korean · Wings · Grill', location:'Town Center, Aparri', hours:'11:00 AM – 10:00 PM', image:'https://scontent.fmnl8-1.fna.fbcdn.net/v/t39.30808-6/418110793_385760433972572_617169280432966099_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeF-ywZiih5-wTsBhynxPxe3nutCU1PkMzae60JTU-QzNmrPNuZ_nrAM5Hi-ZBdbI53y0kQ1rR7pdFo4TWNay7Zu&_nc_ohc=PO4thqz9GPYQ7kNvwHbFech&_nc_oc=AdmkKn1JpVCMRnLj6oLLvEsRtfxL-x4Cd4ZsXr5jHALwMlTT0XMJ3YHapAcsIkbEJi4&_nc_zt=23&_nc_ht=scontent.fmnl8-1.fna&_nc_gid=5r6fRFWlwH6ixUkuudmFeQ&oh=00_Afsf7bPx31DLWHN_TBksbDaDRYgeaNGsf4QLb7sOxEtbHg&oe=69A21352', facebook:'https://www.facebook.com/Hangout.RestoBar.Aparri', rating:4.6, featured:true },
  { id:'mang-mar', name:"Mang Mar's Pancit Cabagan", tagline:'Authentic Pancit Cabagan & Inasal', cuisine:'Filipino · Pancit · Inasal', location:'Camalaniugan, Cagayan', hours:'9:00 AM – 7:00 PM', image:'https://scontent.fmnl8-4.fna.fbcdn.net/v/t1.6435-9/185054916_500736467947758_1370120597519680116_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeEMxyZwLdL5caIHt4ymzqeeCQpvWlcYw5UJCm9aVxjDlV0J5YZadwfTuAP7QLivyYmIlZYbYOW9IPUBepdp71sz&_nc_ohc=uoUAFTCx74wQ7kNvwHQXbek&_nc_oc=Adn0A3omsjRdL81GJG62iqL5N1mmo-RIKMk24zKuTcIohjXD4QDgAb8leTiESLaD4_E&_nc_zt=23&_nc_ht=scontent.fmnl8-4.fna&_nc_gid=EDeZqFma0958daGyheTWTQ&oh=00_AfsbyVadyGEv7gXmUHn9ZDKALG4kBaG9t0KHPVd4rmtRlA&oe=69C3B374', facebook:'https://www.facebook.com/geraldanthony.galingana.9', rating:4.7, featured:true },
  { id:'big-brew', name:'Big Brew', tagline:'Coffee, Milk Tea & Refreshing Fruit Teas', cuisine:'Coffee · Milk Tea · Fruit Tea', location:'Camalaniugan, Cagayan', hours:'9:00 AM – 8:00 PM', image:'https://scontent.fmnl8-6.fna.fbcdn.net/v/t39.30808-6/610796140_1157276849789623_3858773216859885673_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeHiWK1ushl4zG_mN5hgRZWZ-fYEuc0t6YD59gS5zS3pgNPVY-nn3-qAOoIxRsZQ6thBAPhR9RDYAVjYwfEEdK1x&_nc_ohc=qZBmvgH3DKMQ7kNvwFGGp0D&_nc_oc=AdnOt1yoBNzqMIsI1xwNZQQfMhpqpz_rE-2bDgnh7UC5w1y1A-ebKNlhNTh1n8Mxbck&_nc_zt=23&_nc_ht=scontent.fmnl8-6.fna&_nc_gid=rIZJKUQf00F1J9inabDmNQ&oh=00_AfsnpRBSgPRUbijulW6ZFdUNrNoWbMOGxGaNxHnEQrOm0Q&oe=69A23E15', facebook:'https://www.facebook.com/BigBrewOfficial', rating:4.5, featured:true },
  { id:'juanas', name:'Juanas Food Hub', tagline:'Home-Cooked Filipino Comfort Dishes', cuisine:'Filipino · Ulam · Home-style', location:'Camalaniugan, Cagayan', hours:'10:00 AM – 7:00 PM', image:'https://scontent.fmnl8-6.fna.fbcdn.net/v/t39.30808-6/452195525_122095449266444407_1008631582361100659_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeFG_d87oqftqf-0WIx8cB_uBzatOqEdyKYHNq06oR3Ipjmam_ckrfjiYitOf0j_mEQo921uOZOK-ocxwHB8XBtL&_nc_ohc=-mrf37hgJaoQ7kNvwHu4Qjb&_nc_oc=AdmBtUXtfuP4iuYTXFQPjQQhFmSSMYyJRMEl2ROQ2eqQRb-5opBH_za6UMH1Z21tMHg&_nc_zt=23&_nc_ht=scontent.fmnl8-6.fna&_nc_gid=4XY6eEp4_YLE6bYqWc0Njg&oh=00_AfsyuuvRDaKrBuF9Oy3x0Yh7IY9bm7hJ4kQg7rTccic2mQ&oe=69A2389E', facebook:'https://www.facebook.com/profile.php?id=61563332216084', rating:4.6, featured:true },
];

/* ── Product Catalog (Best Sellers per Restaurant) ── */
const PRODUCTS = [
  /* ── Juval's Grill and Restaurant ── */
  { id:1, name:'Crispy Pata', restaurant:'juvals', category:'Filipino Grill', price:350, originalPrice:null, badge:'Bestseller', rating:4.9, reviews:214, description:"Deep-fried pork leg cooked until the skin is perfectly crispy and golden, while the meat stays tender and juicy inside. Served with a spiced soy-vinegar dipping sauce. A crowd-favorite at Juval's.", image:'https://www.shutterstock.com/image-photo/photo-freshly-cooked-filipino-food-600nw-2226459993.jpg', tags:['Pork','Deep-Fried','Signature'], available:true, featured:true },
  { id:2, name:'Sinigang na Baboy', restaurant:'juvals', category:'Filipino Grill', price:330, originalPrice:null, badge:null, rating:4.8, reviews:178, description:'A sour and savory pork soup simmered with tamarind, tomatoes, kangkong, radish, and string beans. A classic Filipino comfort dish that warms the soul.', image:'https://www.kawalingpinoy.com/wp-content/uploads/2013/01/sinigang-baboy-7.jpg', tags:['Pork','Soup','Sour'], available:true, featured:true },
  { id:3, name:'Fried Chicken (Whole)', restaurant:'juvals', category:'Filipino Grill', price:420, originalPrice:null, badge:null, rating:4.7, reviews:156, description:'A whole chicken marinated in a secret blend of Filipino spices, deep-fried to a beautiful golden crisp. Juicy and flavorful — perfect for family sharing.', image:'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=600&q=80', tags:['Chicken','Whole','Family Size'], available:true, featured:false },
  { id:4, name:'Don Jose Hawaiian Pizza', restaurant:'juvals', category:'Filipino Grill', price:470, originalPrice:570, badge:'Best Value', rating:4.8, reviews:198, description:"Hand-tossed 12-inch pizza by Don Jose with sweet pineapple, savory ham, mozzarella cheese and rich tomato sauce. Freshly baked in Juval's wood-fired oven.", image:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80', tags:['Pizza','12-inch','Don Jose'], available:true, featured:true },

  /* ── Alfresco Pizzeria & Bistro ── */
  { id:5, name:'Alfresco Margherita Pizza', restaurant:'alfresco', category:'Pizza & Pasta', price:350, originalPrice:null, badge:'Signature', rating:4.9, reviews:245, description:'Classic Italian Margherita with San Marzano-style tomato sauce, fresh mozzarella, basil, and extra-virgin olive oil on a hand-stretched thin crust.', image:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80', tags:['Pizza','Italian','Classic'], available:true, featured:true },
  { id:6, name:'Creamy Carbonara', restaurant:'alfresco', category:'Pizza & Pasta', price:280, originalPrice:null, badge:'Popular', rating:4.8, reviews:189, description:"Rich and creamy pasta tossed with crispy bacon, parmesan, egg yolk, and freshly cracked black pepper. A bistro-style classic at Alfresco.", image:'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=600&q=80', tags:['Pasta','Creamy','Italian'], available:true, featured:true },
  { id:7, name:'Alfresco Signature Coffee', restaurant:'alfresco', category:'Pizza & Pasta', price:150, originalPrice:null, badge:null, rating:4.7, reviews:312, description:"A rich, medium-roast coffee blend carefully crafted by Alfresco's baristas. Smooth with notes of caramel and dark chocolate. Available hot or iced.", image:'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80', tags:['Coffee','Hot/Iced','Signature Blend'], available:true, featured:false },

  /* ── Korean N Kanto Eats ── */
  { id:8, name:'Cornsilog', restaurant:'korean-kanto', category:'Korean Silog', price:99, originalPrice:null, badge:'Bestseller', rating:4.8, reviews:267, description:'Golden corned beef served sizzling-hot with garlic fried rice and a perfectly fried egg. A hearty Filipino-Korean fusion breakfast staple at Korean N Kanto Eats.', image:'https://www.shutterstock.com/image-photo/cornsilog-short-term-corned-beef-600nw-1869145681.jpg', tags:['Silog','Corned Beef','Breakfast'], available:true, featured:true },
  { id:9, name:'Hotsilog', restaurant:'korean-kanto', category:'Korean Silog', price:99, originalPrice:null, badge:null, rating:4.7, reviews:198, description:'Savory hotdog sliced and pan-fried until caramelized, paired with garlic fried rice and a sunny-side-up egg. Quick, affordable, and satisfying.', image:'https://bxtra.ph/images/thumbs/001/0012417_cheesy-hotsilog.jpeg', tags:['Silog','Hotdog','Affordable'], available:true, featured:false },
  { id:10, name:'Bacsilog', restaurant:'korean-kanto', category:'Korean Silog', price:99, originalPrice:null, badge:null, rating:4.6, reviews:145, description:'Crispy bacon strips cooked to perfection, served with garlic fried rice and a fried egg. Simple, delicious comfort food from the streets of Bulala.', image:'https://kitchenangel.com.ph/wp-content/uploads/2024/09/Bacsilog.png', tags:['Silog','Bacon','Comfort Food'], available:true, featured:false },
  { id:11, name:'Ka Noodles', restaurant:'korean-kanto', category:'Korean Silog', price:85, originalPrice:null, badge:'New', rating:4.5, reviews:89, description:'Korean-style stir-fried noodles tossed with vegetables, a savory-sweet sauce, and your choice of egg or meat topping. A kanto comfort classic.', image:'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80', tags:['Noodles','Korean','Street Food'], available:true, featured:true },

  /* ── Agus Café ── */
  { id:12, name:'Charlie Chan Pasta', restaurant:'agus-cafe', category:'Café Meals', price:250, originalPrice:null, badge:'Bestseller', rating:4.9, reviews:203, description:"A bold, spicy Asian-inspired pasta tossed in garlic sauce with tender chicken and mushrooms, finished with a satisfying kick. Agus Café's signature pasta.", image:'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=600&q=80', tags:['Pasta','Spicy','Asian-Inspired'], available:true, featured:true },
  { id:13, name:'Chicken Alfredo', restaurant:'agus-cafe', category:'Café Meals', price:250, originalPrice:null, badge:null, rating:4.8, reviews:178, description:'Silky, house-style Alfredo sauce enveloping al dente fettuccine, crowned with tender sliced chicken for a rich and indulgent comfort dish.', image:'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=600&q=80', tags:['Pasta','Creamy','Comfort Food'], available:true, featured:false },
  { id:14, name:'Spaghetti Meatballs', restaurant:'agus-cafe', category:'Café Meals', price:230, originalPrice:null, badge:null, rating:4.7, reviews:145, description:'Classic spaghetti in slow-simmered tomato sauce, paired with juicy, well-seasoned meatballs. A timeless, hearty favorite at Agus Café.', image:'https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?auto=format&fit=crop&w=600&q=80', tags:['Pasta','Meatballs','Classic'], available:true, featured:true },
  { id:15, name:'Agus Premium Brewed Coffee', restaurant:'agus-cafe', category:'Café Meals', price:120, originalPrice:null, badge:'Signature', rating:4.9, reviews:389, description:"Camalaniugan's premium single-origin coffee, slow-dripped to perfection. Rich aroma with deep, chocolatey undertones. The reason locals keep coming back.", image:'https://wildflourtogo.com/cdn/shop/products/37-BrewedCoffee_f4672004-efa4-4282-9a97-8d4104472b5c.jpg?v=1632295458', tags:['Coffee','Premium','Local Beans'], available:true, featured:true },

  /* ── 28th Hangout & Korean Grill House ── */
  { id:16, name:'Korean Chicken Wings (4pcs)', restaurant:'28th-hangout', category:'Korean Grill', price:125, originalPrice:null, badge:'Bestseller', rating:4.8, reviews:312, description:'4 pieces of crispy-fried chicken wings glazed in your choice of sauce — Buffalo, Honey Butter, Sweet Chili, Garlic Parmesan, or K-Pop Spicy. Served with rice.', image:'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80', tags:['Wings','Korean','4 Pieces w/ Rice'], available:true, featured:true },
  { id:17, name:'Honey Butter Wings', restaurant:'28th-hangout', category:'Korean Grill', price:125, originalPrice:null, badge:'Popular', rating:4.7, reviews:198, description:'Sweet and buttery glazed chicken wings with a hint of honey, fried to a golden crunch. Paired with steamed rice. A Korean grill house signature.', image:'https://feedgrump.com/wp-content/uploads/2023/03/honey-butter-wings-feature.jpg', tags:['Wings','Honey Butter','Sweet'], available:true, featured:false },
  { id:18, name:'Garlic Parmesan Wings', restaurant:'28th-hangout', category:'Korean Grill', price:125, originalPrice:null, badge:null, rating:4.6, reviews:167, description:'Crispy chicken wings tossed in a savory garlic-parmesan butter sauce. Rich, aromatic, and utterly addictive. Served with rice at the 28th Hangout.', image:'https://hips.hearstapps.com/del.h-cdn.co/assets/16/39/1474920925-delish-parmesan-garlic-wings.jpg?crop=0.979xw:0.653xh;0.0128xw,0.0929xh&resize=1200:*', tags:['Wings','Garlic','Parmesan'], available:true, featured:false },

  /* ── Mang Mar's Pancit Cabagan ── */
  { id:19, name:'Pancit Cabagan Super Overload', restaurant:'mang-mar', category:'Pancit & Inasal', price:110, originalPrice:null, badge:'Bestseller', rating:4.9, reviews:278, description:"Mang Mar's signature super overloaded pancit Cabagan — packed with egg, vegetables, and a generous serving of savory toppings. A Cagayan Valley favorite.", image:'https://kusinasecrets.com/wp-content/uploads/2024/12/u3317447599_httpss.mj_.runyKR_c_HLth4_top_down_view_of_Homesty_82a8e1e6-ec9a-4624-add5-a67f710d83a0_0-500x500.jpg', tags:['Pancit','Overloaded','Cagayan'], available:true, featured:true },
  { id:20, name:'Pancit with Inasal', restaurant:'mang-mar', category:'Pancit & Inasal', price:185, originalPrice:null, badge:'Signature', rating:4.8, reviews:234, description:'Their best combo — a serving of savory pancit Cabagan topped with smoky, char-grilled chicken inasal. The flavors of Cagayan in every bite.', image:'https://jayjs.com/cdn/shop/files/CHICKENINASALPLATE_grande.jpg?v=1747389172', tags:['Pancit','Inasal','Combo'], available:true, featured:true },
  { id:21, name:'Family Tray with Inasal', restaurant:'mang-mar', category:'Pancit & Inasal', price:520, originalPrice:null, badge:'Family Size', rating:4.9, reviews:156, description:'A large family tray of pancit Cabagan with inasal, good for 8 persons. Perfect for celebrations, reunions, and family gatherings.', image:'https://www.manginasal.ph/wp-content/uploads/2023/09/Pork-BBQ-and-Chicken-Inasal-Family-Fiesta.png', tags:['Family Tray','Good for 8','Party'], available:true, featured:false },

  /* ── Big Brew ── */
  { id:22, name:'Okinawa Milk Tea', restaurant:'big-brew', category:'Beverages', price:39, originalPrice:null, badge:'Bestseller', rating:4.8, reviews:367, description:'Rich and roasty Okinawa brown sugar milk tea made with premium black tea, fresh milk, and a caramelized brown sugar syrup. Served with chewy tapioca pearls.', image:'https://images.deliveryhero.io/image/fd-ph/products/66880892.jpg?width=%s', tags:['Milk Tea','Okinawa','Brown Sugar'], available:true, featured:true },
  { id:23, name:'Wintermelon Milk Tea', restaurant:'big-brew', category:'Beverages', price:39, originalPrice:null, badge:'Popular', rating:4.7, reviews:298, description:'A smooth and subtly sweet wintermelon-flavored milk tea blended with fresh milk and premium black tea. Naturally refreshing with chewy tapioca pearls.', image:'https://images.deliveryhero.io/image/fd-ph/products/41748651.jpg?width=%s', tags:['Milk Tea','Wintermelon','Classic'], available:true, featured:true },
  { id:24, name:'Lychee Fruit Tea', restaurant:'big-brew', category:'Beverages', price:39, originalPrice:null, badge:'Refreshing', rating:4.6, reviews:195, description:"Sweet and floral lychee fruit tea blended with jasmine green tea and nata de coco. Light, aromatic, and perfect for Cagayan's warm afternoons.", image:'https://images.deliveryhero.io/image/fd-ph/Products/21862479.jpg?width=%s', tags:['Fruit Tea','Lychee','Refreshing'], available:true, featured:false },
  { id:25, name:'Mocha Coffee', restaurant:'big-brew', category:'Beverages', price:39, originalPrice:null, badge:null, rating:4.7, reviews:256, description:"A rich espresso blended with chocolate syrup and steamed milk, topped with whipped cream. The perfect balance of coffee and chocolate — Big Brew's signature mocha.", image:'https://images.deliveryhero.io/image/fd-ph/LH/oang-listing.jpg', tags:['Coffee','Mocha','Chocolate'], available:true, featured:false },

  /* ── Juanas Food Hub ── */
  { id:26, name:'Adobo (Pork & Chicken)', restaurant:'juanas', category:'Filipino Ulam', price:150, originalPrice:null, badge:'Bestseller', rating:4.9, reviews:298, description:"The quintessential Filipino dish — tender pork and chicken braised in soy sauce, vinegar, garlic, and bay leaves. Juanas' recipe is a family heirloom.", image:'https://www.eatingwell.com/thmb/YrI10pp9V6quKr98nscc_XFQ02g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/5147351-a7e0a28fde814b40bdcc67075e933b96.jpg', tags:['Adobo','Pork & Chicken','Classic'], available:true, featured:true },
  { id:28, name:'Caldereta', restaurant:'juanas', category:'Filipino Ulam', price:200, originalPrice:null, badge:'Popular', rating:4.7, reviews:167, description:'A hearty tomato-based stew made with tender beef, potatoes, carrots, bell peppers, and liver spread. Rich, savory, and deeply satisfying.', image:'https://urbanblisslife.com/wp-content/uploads/2022/01/filipino-beef-caldereta-FEATURE.jpg', tags:['Beef','Stew','Hearty'], available:true, featured:false },
  { id:29, name:'Kare-Kare', restaurant:'juanas', category:'Filipino Ulam', price:220, originalPrice:null, badge:null, rating:4.8, reviews:145, description:'A rich peanut-based stew with oxtail, tripe, and vegetables — eggplant, string beans, and banana blossom. Served with bagoong (shrimp paste).', image:'https://www.unileverfoodsolutions.com.ph/dam/global-ufs/mcos/SEA/calcmenu/recipes/PH-recipes/red-meats-&-red-meat-dishes/kare-kare/kare-kare-main.jpg', tags:['Kare-Kare','Peanut','Oxtail'], available:true, featured:false },
];

/* ── Cart Storage Key ── */
const CART_KEY = 'cfh_cart';

/* ── Cart Utilities ── */
const Cart = {
  get() {
    try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
    catch { return []; }
  },

  save(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    Cart.updateBadge();
  },

  count() {
    return Cart.get().reduce((sum, i) => sum + i.qty, 0);
  },

  total() {
    return Cart.get().reduce((sum, i) => sum + i.price * i.qty, 0);
  },

  add(productId, qty = 1) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const cart = Cart.get();
    const existing = cart.find(i => i.id === productId);

    if (existing) {
      existing.qty += qty;
    } else {
      const resto = RESTAURANTS.find(r => r.id === product.restaurant);
      cart.push({
        id:         product.id,
        name:       product.name,
        category:   product.category,
        restaurant: resto ? resto.name : '',
        price:      product.price,
        image:      product.image,
        qty,
      });
    }
    Cart.save(cart);
    showToast(`"${product.name}" added to cart!`, '🛒');
  },

  remove(productId) {
    const cart = Cart.get().filter(i => i.id !== productId);
    Cart.save(cart);
  },

  updateQty(productId, qty) {
    if (qty < 1) { Cart.remove(productId); return; }
    const cart = Cart.get();
    const item = cart.find(i => i.id === productId);
    if (item) { item.qty = qty; Cart.save(cart); }
  },

  clear() {
    localStorage.removeItem(CART_KEY);
    Cart.updateBadge();
  },

  updateBadge() {
    document.querySelectorAll('.cart-count').forEach(el => {
      const c = Cart.count();
      el.textContent = c;
      el.style.display = c > 0 ? 'flex' : 'none';
    });
  },
};

/* ── Toast Notification ── */
function showToast(message, icon = '✅') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-item';
  toast.innerHTML = `<span class="toast-icon">${icon}</span><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('fade-out');
    toast.addEventListener('animationend', () => toast.remove(), { once: true });
  }, 3200);
}

/* ── Hamburger Menu Toggle ── */
function initHamburger() {
  const btn  = document.getElementById('hamburger-btn');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    menu.classList.toggle('open');
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      btn.classList.remove('open');
      menu.classList.remove('open');
    }
  });
}

/* ── Mark Active Nav Link ── */
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* ── Currency Formatter ── */
function formatCurrency(amount) {
  return '₱' + parseFloat(amount).toLocaleString('en-PH', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

/* ── Generate Order ID ── */
function generateOrderId() {
  const prefix = 'CFH';
  const ts     = Date.now().toString(36).toUpperCase();
  const rand   = Math.random().toString(36).substring(2, 5).toUpperCase();
  return `${prefix}-${ts}-${rand}`;
}

/* ── Helper: Get Restaurant Info ── */
function getRestaurant(id) {
  return RESTAURANTS.find(r => r.id === id) || null;
}

/* ── Cart Page Renderer ── */
function renderCartPage() {
  const wrap = document.getElementById('cart-items-wrap');
  if (!wrap) return;

  const cart = Cart.get();

  if (cart.length === 0) {
    wrap.innerHTML = `
      <div class="empty-state">
        <div class="icon">🛒</div>
        <h3>Your cart is empty</h3>
        <p>Looks like you haven't added anything yet. Browse our partner restaurants and discover delicious meals!</p>
        <a href="products.html" class="btn-primary-custom" style="margin-top:24px;display:inline-flex;">
          Browse Menu
        </a>
      </div>`;
    updateCartSummary(0, 0);
    return;
  }

  wrap.innerHTML = `
    <table class="cart-table" id="cart-table">
      <thead>
        <tr>
          <th colspan="2">Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        ${cart.map(item => `
          <tr data-id="${item.id}">
            <td style="width:70px">
              <img src="${item.image}" class="item-img" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=100&q=60'">
            </td>
            <td>
              <div class="item-name">
                <a href="product-detail.html?id=${item.id}" style="color:var(--brown-dark)">${item.name}</a>
              </div>
              <div class="item-cat">${item.restaurant || item.category}</div>
            </td>
            <td>${formatCurrency(item.price)}</td>
            <td>
              <div class="qty-selector">
                <button onclick="changeCartQty(${item.id}, -1)">−</button>
                <input type="number" value="${item.qty}" min="1"
                  onchange="setCartQty(${item.id}, this.value)" />
                <button onclick="changeCartQty(${item.id}, 1)">+</button>
              </div>
            </td>
            <td style="font-weight:700;color:var(--primary)">${formatCurrency(item.price * item.qty)}</td>
            <td>
              <button class="remove-btn" title="Remove item" onclick="removeCartItem(${item.id})">✕</button>
            </td>
          </tr>
        `).join('')}
      </tbody>
    </table>`;

  const subtotal  = Cart.total();
  const shipping  = subtotal >= 500 ? 0 : 50;
  updateCartSummary(subtotal, shipping);
}

function changeCartQty(id, delta) {
  const cart = Cart.get();
  const item = cart.find(i => i.id === id);
  if (!item) return;
  const newQty = item.qty + delta;
  if (newQty < 1) { Cart.remove(id); }
  else { Cart.updateQty(id, newQty); }
  renderCartPage();
}

function setCartQty(id, value) {
  const qty = parseInt(value, 10);
  if (isNaN(qty) || qty < 1) { Cart.remove(id); }
  else { Cart.updateQty(id, qty); }
  renderCartPage();
}

function removeCartItem(id) {
  Cart.remove(id);
  renderCartPage();
  showToast('Item removed from cart.', '🗑️');
}

function updateCartSummary(subtotal, shipping) {
  const el = id => document.getElementById(id);
  const total = subtotal + shipping;

  if (el('summary-subtotal'))  el('summary-subtotal').textContent  = formatCurrency(subtotal);
  if (el('summary-shipping'))  el('summary-shipping').textContent  = shipping === 0 ? 'FREE' : formatCurrency(shipping);
  if (el('summary-total'))     el('summary-total').textContent     = formatCurrency(total);
  if (el('checkout-total-val')) el('checkout-total-val').textContent = formatCurrency(total);

  // Store total for checkout page
  sessionStorage.setItem('cfh_order_subtotal', subtotal);
  sessionStorage.setItem('cfh_order_shipping', shipping);
  sessionStorage.setItem('cfh_order_total',    total);
}

/* ── Products Page Renderer ── */
function renderProductsPage() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;
  renderProductCards(grid, PRODUCTS);

  // Restaurant filter pills
  document.querySelectorAll('.category-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const cat = pill.dataset.category;
      let filtered;
      if (cat === 'all') {
        filtered = PRODUCTS;
      } else {
        filtered = PRODUCTS.filter(p => p.restaurant === cat);
      }
      renderProductCards(grid, filtered);
    });
  });

  // Check if URL has a restaurant pre-filter
  const params = new URLSearchParams(window.location.search);
  const restoFilter = params.get('restaurant');
  if (restoFilter) {
    const pill = document.querySelector(`.category-pill[data-category="${restoFilter}"]`);
    if (pill) {
      pill.click();
    }
  }
}

function renderProductCards(container, products) {
  if (products.length === 0) {
    container.innerHTML = `<div class="col-12"><div class="empty-state">
      <div class="icon">🍽️</div><h3>No products found</h3>
      <p>Try selecting a different restaurant or category.</p></div></div>`;
    return;
  }
  container.innerHTML = products.map(p => {
    const resto = getRestaurant(p.restaurant);
    return `
    <div class="col-md-6 col-lg-4 col-xl-3 fade-in-up">
      <div class="product-card" onclick="location.href='product-detail.html?id=${p.id}'">
        <div class="card-img-wrap">
          <img src="${p.image}" alt="${p.name}" loading="lazy"
            onerror="this.src='https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=400&q=60'">
          ${p.badge ? `<span class="badge-tag ${p.badge === 'Bestseller' ? 'bestseller' : p.badge === 'New' ? 'new-item' : ''}">${p.badge}</span>` : ''}
          <button class="wishlist-btn" onclick="event.stopPropagation(); showToast('Added to wishlist!', '❤️')" title="Add to wishlist">♡</button>
        </div>
        <div class="card-body">
          <div class="card-category">${resto ? resto.name : p.category}</div>
          <div class="card-title">${p.name}</div>
          <div class="card-desc">${p.description.slice(0, 90)}…</div>
          <div class="card-footer-row">
            <div>
              <div class="price">${formatCurrency(p.price)}</div>
              ${p.originalPrice ? `<div class="price-old">${formatCurrency(p.originalPrice)}</div>` : ''}
            </div>
            <button class="btn-add-cart" onclick="event.stopPropagation(); Cart.add(${p.id})">
              + Cart
            </button>
          </div>
        </div>
      </div>
    </div>`;
  }).join('');
}

/* ── Product Detail Page ── */
function renderProductDetail() {
  const wrap = document.getElementById('product-detail-wrap');
  if (!wrap) return;

  const params = new URLSearchParams(window.location.search);
  const id     = parseInt(params.get('id'), 10);
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    wrap.innerHTML = `<div class="empty-state"><div class="icon">😕</div>
      <h3>Product not found</h3>
      <a href="products.html" class="btn-primary-custom" style="margin-top:16px;display:inline-flex;">Back to Menu</a>
    </div>`;
    return;
  }

  const resto = getRestaurant(product.restaurant);
  document.title = `${product.name} — ${resto ? resto.name : 'Camalaniugan FoodHub'}`;

  const stars = '★'.repeat(Math.floor(product.rating)) + (product.rating % 1 >= 0.5 ? '½' : '');

  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id && p.restaurant === product.restaurant).slice(0, 4);

  wrap.innerHTML = `
    <div class="row g-5 align-items-start">
      <div class="col-lg-6">
        <div class="product-gallery">
          <img src="${product.image}" class="main-img" alt="${product.name}"
            onerror="this.src='https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=600&q=60'">
        </div>
      </div>

      <div class="col-lg-6">
        <div class="product-detail-info">
          ${resto ? `<a href="products.html?restaurant=${resto.id}" style="display:inline-flex;align-items:center;gap:6px;font-size:0.8rem;font-weight:700;color:var(--primary);margin-bottom:8px;text-decoration:none;"><i class="bi bi-shop"></i> ${resto.name}</a>` : ''}
          <div class="category-label">${product.category}</div>
          <h1>${product.name}</h1>
          <div class="rating">
            <span class="stars">${'★'.repeat(5)}</span>
            <span>${product.rating} (${product.reviews} reviews)</span>
          </div>
          <div class="price-block">
            <span class="price-big">${formatCurrency(product.price)}</span>
            ${product.originalPrice ? `<span class="price-old-big">${formatCurrency(product.originalPrice)}</span>` : ''}
          </div>
          <p class="desc">${product.description}</p>

          <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:20px;">
            ${product.tags.map(t => `<span style="background:var(--cream-dark);color:var(--brown-mid);font-size:0.73rem;font-weight:700;letter-spacing:0.5px;padding:4px 12px;border-radius:20px;">${t}</span>`).join('')}
          </div>

          <div class="divider"></div>

          <div class="add-cart-section">
            <div class="qty-selector">
              <button onclick="detailDecQty()">−</button>
              <input type="number" id="detail-qty" value="1" min="1">
              <button onclick="detailIncQty()">+</button>
            </div>
            <button class="btn-primary-custom" onclick="detailAddToCart(${product.id})">
              🛒 Add to Cart
            </button>
            <button class="btn-secondary-custom" onclick="showToast('Added to wishlist!','❤️')">
              ♡
            </button>
          </div>

          <div style="margin-top:20px;padding:16px;background:var(--cream);border-radius:var(--radius-sm);border:1px solid var(--border);">
            <div style="display:flex;gap:24px;flex-wrap:wrap;">
              <div style="font-size:0.8rem;color:var(--text-light);">🚚 <strong>Free delivery</strong> on ₱500+</div>
              <div style="font-size:0.8rem;color:var(--text-light);">� <strong>Freshly cooked</strong> to order</div>
              <div style="font-size:0.8rem;color:var(--text-light);">📦 <strong>Secure</strong> packaging</div>
            </div>
          </div>

          ${resto ? `
          <div style="margin-top:16px;padding:16px;background:var(--white);border-radius:var(--radius-sm);border:1px solid var(--border);">
            <div style="display:flex;align-items:center;gap:12px;">
              <img src="${resto.image}" style="width:48px;height:48px;border-radius:50%;object-fit:cover;" alt="${resto.name}">
              <div>
                <strong style="font-size:0.88rem;color:var(--brown-dark);">${resto.name}</strong>
                <div style="font-size:0.75rem;color:var(--text-muted);">${resto.location} · ${resto.hours}</div>
              </div>
            </div>
          </div>` : ''}
        </div>
      </div>
    </div>

    ${relatedProducts.length > 0 ? `
    <div class="mt-5 pt-4" style="border-top:1px solid var(--border)">
      <h4 style="font-size:1.2rem;margin-bottom:28px;">More from ${resto ? resto.name : 'this restaurant'}</h4>
      <div class="row g-4">
        ${relatedProducts.map(p => `
          <div class="col-sm-6 col-lg-3">
            <div class="product-card" onclick="location.href='product-detail.html?id=${p.id}'">
              <div class="card-img-wrap">
                <img src="${p.image}" alt="${p.name}" loading="lazy"
                  onerror="this.src='https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=400&q=60'">
              </div>
              <div class="card-body">
                <div class="card-category">${p.category}</div>
                <div class="card-title">${p.name}</div>
                <div class="card-footer-row">
                  <div class="price">${formatCurrency(p.price)}</div>
                  <button class="btn-add-cart" onclick="event.stopPropagation();Cart.add(${p.id})">+ Cart</button>
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>` : ''}
  `;
}

function detailIncQty() {
  const inp = document.getElementById('detail-qty');
  inp.value = parseInt(inp.value || 1) + 1;
}
function detailDecQty() {
  const inp = document.getElementById('detail-qty');
  const val = parseInt(inp.value || 1);
  if (val > 1) inp.value = val - 1;
}
function detailAddToCart(id) {
  const qty = parseInt(document.getElementById('detail-qty')?.value || 1, 10);
  Cart.add(id, qty);
}

/* ── Checkout Page Logic ── */
function initCheckoutPage() {
  const form = document.getElementById('checkout-form');
  if (!form) return;

  // Pre-populate summary
  const cart = Cart.get();
  const tbody = document.getElementById('checkout-items');
  if (tbody && cart.length > 0) {
    tbody.innerHTML = cart.map(item => `
      <tr>
        <td style="padding:10px 0;font-size:0.88rem;color:var(--text)">${item.name} <span style="color:var(--text-muted)">× ${item.qty}</span></td>
        <td style="padding:10px 0;text-align:right;font-weight:700;font-size:0.9rem;color:var(--primary)">${formatCurrency(item.price * item.qty)}</td>
      </tr>
    `).join('');
  }

  const subtotal = parseFloat(sessionStorage.getItem('cfh_order_subtotal') || Cart.total());
  const shipping = subtotal >= 500 ? 0 : 50;
  const total    = subtotal + shipping;

  const elSub  = document.getElementById('checkout-sub');
  const elShip = document.getElementById('checkout-ship');
  const elTot  = document.getElementById('checkout-total');

  if (elSub)  elSub.textContent  = formatCurrency(subtotal);
  if (elShip) elShip.textContent = shipping === 0 ? 'FREE' : formatCurrency(shipping);
  if (elTot)  elTot.textContent  = formatCurrency(total);

  // Payment option selection
  document.querySelectorAll('.payment-option').forEach(opt => {
    opt.addEventListener('click', () => {
      document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      opt.querySelector('input[type="radio"]').checked = true;
    });
  });

  form.addEventListener('submit', e => {
    e.preventDefault();

    const data = new FormData(form);
    const name    = data.get('fullname')?.trim();
    const address = data.get('address')?.trim();
    const phone   = data.get('phone')?.trim();
    const payment = data.get('payment');

    if (!name || !address || !phone || !payment) {
      showToast('Please fill in all required fields.', '⚠️'); return;
    }
    if (Cart.get().length === 0) {
      showToast('Your cart is empty!', '⚠️'); return;
    }

    // Save order data for confirmation page
    const orderId = generateOrderId();
    const orderData = {
      id: orderId,
      name, address, phone, payment,
      total: formatCurrency(total),
      items: cart.length,
      date: new Date().toLocaleDateString('en-PH', { year:'numeric', month:'long', day:'numeric' }),
    };
    sessionStorage.setItem('cfh_order', JSON.stringify(orderData));
    Cart.clear();
    window.location.href = 'order-confirmation.html';
  });
}

/* ── Order Confirmation Page ── */
function renderConfirmationPage() {
  const wrap = document.getElementById('confirmation-wrap');
  if (!wrap) return;

  const order = JSON.parse(sessionStorage.getItem('cfh_order') || '{}');

  if (!order.id) {
    wrap.innerHTML = `<div class="empty-state">
      <div class="icon">🤔</div>
      <h3>No order found</h3>
      <p>It seems you arrived here directly.</p>
      <a href="index.html" class="btn-primary-custom" style="margin-top:16px;display:inline-flex;">Go Home</a>
    </div>`;
    return;
  }

  const paymentLabel = { cod: 'Cash on Delivery', gcash: 'GCash', maya: 'Maya' }[order.payment] || order.payment;

  wrap.innerHTML = `
    <div class="confirm-card">
      <div class="confirm-icon">✓</div>
      <span style="font-size:0.78rem;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--secondary);">Order Confirmed</span>
      <h1 style="margin-top:12px;">Salamat, ${order.name.split(' ')[0]}! 🎉</h1>
      <p style="color:var(--text-light);font-size:0.9rem;max-width:440px;margin:0 auto 12px;">
        Your order has been received and is being prepared with love by our partner restaurant.
        We'll notify you once it's on the way!
      </p>
      <div class="order-id-badge">Order #${order.id}</div>

      <div class="confirm-detail-grid">
        <div class="confirm-detail-item">
          <div class="label">Date Ordered</div>
          <div class="value">${order.date}</div>
        </div>
        <div class="confirm-detail-item">
          <div class="label">Order Total</div>
          <div class="value" style="color:var(--primary)">${order.total}</div>
        </div>
        <div class="confirm-detail-item">
          <div class="label">Payment Method</div>
          <div class="value">${paymentLabel}</div>
        </div>
        <div class="confirm-detail-item">
          <div class="label">Deliver To</div>
          <div class="value" style="white-space:normal">${order.address}</div>
        </div>
      </div>

      <div style="background:var(--cream);border-radius:var(--radius-sm);padding:16px 20px;margin-bottom:28px;text-align:left;border:1px solid var(--border)">
        <strong style="font-size:0.82rem;display:block;margin-bottom:8px;color:var(--brown-mid)">What's next?</strong>
        <ol style="padding-left:18px;font-size:0.83rem;color:var(--text-light);line-height:1.9">
          <li>Our partner restaurant confirms your order within 30 minutes</li>
          <li>Your meal is freshly prepared just for you</li>
          <li>Order is dispatched via our local delivery partner</li>
          <li>Enjoy your delicious Camalaniugan treats!</li>
        </ol>
      </div>

      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
        <a href="index.html" class="btn-primary-custom">Back to Home</a>
        <a href="products.html" class="btn-secondary-custom">Continue Shopping</a>
      </div>
    </div>
  `;
}

/* ── Featured Restaurants on Home ── */
function renderRestaurants() {
  const grid = document.getElementById('restaurants-grid');
  if (!grid) return;
  const featured = RESTAURANTS.filter(r => r.featured).slice(0, 8);
  grid.innerHTML = featured.map(r => `
    <div class="col-sm-6 col-lg-3 fade-in-up">
      <a href="products.html?restaurant=${r.id}" class="resto-card">
        <div class="resto-img-wrap">
          <img src="${r.image}" alt="${r.name}" loading="lazy"
            onerror="this.src='https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=400&q=60'">
          <div class="resto-rating"><span>★</span> ${r.rating}</div>
        </div>
        <div class="resto-body">
          <h3 class="resto-name">${r.name}</h3>
          <p class="resto-cuisine">${r.cuisine}</p>
          <div class="resto-meta">
            <span><i class="bi bi-geo-alt"></i> ${r.location}</span>
          </div>
        </div>
      </a>
    </div>
  `).join('');
}

/* ── Featured Products on Home ── */
function renderFeaturedProducts() {
  const grid = document.getElementById('featured-grid');
  if (!grid) return;
  const featured = PRODUCTS.filter(p => p.featured).slice(0, 8);
  renderProductCards(grid, featured);
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  Cart.updateBadge();
  initHamburger();
  setActiveNav();
  renderRestaurants();
  renderFeaturedProducts();
  renderProductsPage();
  renderProductDetail();
  renderCartPage();
  initCheckoutPage();
  renderConfirmationPage();
});
