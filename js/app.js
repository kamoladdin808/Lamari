const P1 = "img/p1.jpg";
const P2 = "img/p2.jpg";
const P3 = "img/p3.jpg";
const P4 = "img/p4.jpg";
const P5 = "img/p5.jpg";
const P6 = "img/p6.jpg";

const MENU = {
  'sets': [
    { id: 'set_for_two', name: { ru: 'Сет для двоих', uz: 'Ikki kishilik set' }, desc: { ru: 'Ассорти брускетт, два горячих блинчика на выбор и чайник чая', uz: "Bruskettalar assortisi, tanlov bo'yicha ikkita issiq quymoq va choynak choy" }, weight: '750 г', price: 2685000, badge: '', img: P1 },
    { id: 'weekend_set', name: { ru: 'Сет "Выходного дня"', uz: '"Dam olish kuni" seti' }, desc: { ru: 'Бенедикт с лососем, большой английский завтрак, два капучино и круассаны', uz: "Qizil baliqli Benedikt, katta inglizcha nonushta, ikkita kapuchino va kruassanlar" }, weight: '1100 г', price: 3190000, badge: 'HIT', img: P3 }
  ],
  'coffee': [
    { id: 'flat_white', name: { ru: 'Флэт уайт', uz: 'Flet uayt' }, desc: { ru: 'Двойной эспрессо с нежной молочной пеной', uz: "Mayin sut ko'pigi bilan quyuq espresso" }, weight: '250 мл', price: 28000, badge: '', img: P2 },
    { id: 'cappuccino', name: { ru: 'Капучино', uz: 'Kapuchino' }, desc: { ru: 'Классический кофейный напиток на основе эспрессо и молока', uz: "Espresso va sut asosidagi klassik kofe ichimligi" }, weight: '300 мл', price: 24000, badge: '', img: P5 },
    { id: 'nut_raf', name: { ru: 'Раф ореховый', uz: "Yong'oqli raf" }, desc: { ru: 'Нежный кофейно-сливочный напиток с натуральным ореховым сиропом', uz: "Tabiiy yong'oq siropi bilan mayin qaymoqli kofe ichimligi" }, weight: '350 мл', price: 32000, badge: 'NEW', img: P4 }
  ],
  'bakery': [
    { id: 'croissant_classic', name: { ru: 'Круассан классик', uz: 'Klassik kruassan' }, desc: { ru: 'Хрустящий французский круассан на натуральном сливочном масле', uz: "Tabiiy sariyog'da tayyorlangan qarsildoq fransuz kruassani" }, weight: '90 г', price: 22000, badge: '', img: P3 },
    { id: 'chocolate_babka', name: { ru: 'Бабка шоколадная', uz: 'Shokoladli babka' }, desc: { ru: 'Традиционная витая булочка с начинкой из темного шоколада', uz: "To'q shokolad bilan to'ldirilgan an'anaviy bulochka" }, weight: '150 г', price: 26000, badge: 'NEW', img: P6 }
  ],
  'desserts': [
    { id: 'tiramisu', name: { ru: 'Тирамису', uz: 'Tiramisu' }, desc: { ru: 'Нежный десерт с маскарпоне, савоярди и вкусом натурального эспрессо', uz: "Maskarpone, savoyardi va tabiiy espresso ta'miga ega mayin desert" }, weight: '140 г', price: 35000, badge: '', img: P4 },
    { id: 'cheesecake_ny', name: { ru: 'Чизкейк Нью-Йорк', uz: 'Nyu-York cheesecake' }, desc: { ru: 'Классический запеченный чизкейк на песочной основе', uz: "Uvoq xamirdan tayyorlangan klassik pishirilgan chizkeyk" }, weight: '160 г', price: 32000, badge: '', img: P1 }
  ],
  'breakfasts': [
    { id: 'avocado_toast', name: { ru: 'Авокадо тост', uz: 'Avokado tost' }, desc: { ru: 'Хрустящий тартин, спелый гуакамоле, яйцо пашот, черри и микрозелень', uz: "Qarsildoq tartin, pishgan guakamole, pashot tuxumi, cherri va mikroko'katlar" }, weight: '220 г', price: 42000, badge: 'HIT', img: P6 },
    { id: 'truffle_omelette', name: { ru: 'Омлет с трюфелем', uz: 'Tryufelli omlet' }, desc: { ru: 'Пышный омлет с добавлением ароматной трюфельной пасты и пармезана', uz: "Xushbo'y tryufel pastasi va parmezan qo'shilgan yam-yashil omlet" }, weight: '200 г', price: 38000, badge: 'NEW', img: P5 }
  ]
};

const CAT_NAMES = {
  'sets': { ru: 'Сеты', uz: 'Setlar' },
  'coffee': { ru: 'Кофе', uz: 'Kofe' },
  'bakery': { ru: 'Выпечка', uz: 'Pishiriqlar' },
  'desserts': { ru: 'Десерты', uz: 'Desertlar' },
  'breakfasts': { ru: 'Завтраки', uz: 'Nonushta' }
};

const CATS = Object.keys(MENU);

// Инициализация языка и текущего блюда из параметров URL (Deep Linking)
const urlParams = new URLSearchParams(window.location.search);
const catParam = urlParams.get('cat');
const dishParam = parseInt(urlParams.get('dish'), 10);
const langParam = urlParams.get('lang');

let curLang = (langParam === 'ru' || langParam === 'uz') ? langParam : 'ru';
let curCat = (catParam && MENU[catParam]) ? catParam : CATS[0];
let curIdx = (!isNaN(dishParam) && dishParam >= 0 && dishParam < MENU[curCat].length) ? dishParam : 0;
let showingA = true;
const cart = {}; // itemId -> {qty, price, name: {ru, uz}, img}

try {
  const savedCart = localStorage.getItem('lamari_cart');
  if (savedCart) {
    Object.assign(cart, JSON.parse(savedCart));
  }
} catch (e) {
  console.error("Ошибка парсинга корзины из localStorage:", e);
}

function money(n){ return n.toLocaleString('ru-RU') + ' сум'; }

const imgA = document.getElementById('imgA');
const imgB = document.getElementById('imgB');
const dishCat = document.getElementById('dishCat');
const dishTitle = document.getElementById('dishTitle');
const dishBadge = document.getElementById('dishBadge');
const dishDesc = document.getElementById('dishDesc');
const pillLabel = document.getElementById('pillLabel');
const addBtn = document.getElementById('addBtn');
const tabsEl = document.getElementById('tabs');
const dotsEl = document.getElementById('dots');
const toastEl = document.getElementById('toast');
const cartBadge = document.getElementById('cartBadge');
const cartChip = document.getElementById('cartChip');
const cartOverlay = document.getElementById('cartOverlay');
const cartDrawer = document.getElementById('cartDrawer');
const cartList = document.getElementById('cartList');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');

const descOverlay = document.getElementById('descOverlay');
const descModal = document.getElementById('descModal');
const descModalTitle = document.getElementById('descModalTitle');
const descModalText = document.getElementById('descModalText');
const descModalWeight = document.getElementById('descModalWeight');
const dishMoreBtn = document.getElementById('dishMoreBtn');
const dishMoreText = document.getElementById('dishMoreText');
const closeDescBtn = document.getElementById('closeDesc');

const tabsViewport = document.querySelector('.tabs-viewport');

let advanceTimer = null;

// Настройка переключателя языков (Десктоп)
const langRuBtn = document.getElementById('langRu');
const langUzBtn = document.getElementById('langUz');

// Настройка переключателя языков (Мобильный / Модалка)
const langMobileBtn = document.getElementById('langMobileBtn');
const langOverlay = document.getElementById('langOverlay');
const langModal = document.getElementById('langModal');
const langModalTitle = document.getElementById('langModalTitle');
const closeLangBtn = document.getElementById('closeLang');
const btnSelectRu = document.getElementById('btnSelectRu');
const btnSelectUz = document.getElementById('btnSelectUz');

langRuBtn.onclick = () => setLanguage('ru');
langUzBtn.onclick = () => setLanguage('uz');

btnSelectRu.onclick = () => { setLanguage('ru'); closeLangModal(); };
btnSelectUz.onclick = () => { setLanguage('uz'); closeLangModal(); };

function openLangModal() {
  langModal.style.transform = '';
  langOverlay.style.opacity = '';
  langOverlay.classList.add('open');
  langModal.classList.add('open');
  clearTimeout(advanceTimer);
}

function closeLangModal() {
  langOverlay.classList.remove('open');
  langModal.classList.remove('open');
  setTimeout(() => {
    langModal.style.transform = '';
    langOverlay.style.opacity = '';
  }, 350);
  startAdvanceTimer(curCat, curIdx);
}

function setLanguage(lang) {
  if (curLang === lang) return;
  curLang = lang;
  
  // Обновляем десктоп
  langRuBtn.classList.toggle('active', lang === 'ru');
  langUzBtn.classList.toggle('active', lang === 'uz');
  
  // Обновляем мобильный триггер
  langMobileBtn.textContent = lang.toUpperCase();
  
  // Обновляем кнопки в модалке
  btnSelectRu.classList.toggle('active', lang === 'ru');
  btnSelectUz.classList.toggle('active', lang === 'uz');
  
  setDish(curCat, curIdx);
  renderTabs();
  updateCartUI();
  translateStaticUI();
}

function translateStaticUI() {
  const cartTitle = document.getElementById('cartTitle');
  const cartTotalLabel = document.getElementById('cartTotalLabel');
  
  if (curLang === 'ru') {
    cartTitle.innerHTML = 'Корзина <button id="closeCart">✕</button>';
    cartTotalLabel.textContent = 'Итого';
    checkoutBtn.textContent = 'Очистить заказ';
    dishMoreText.textContent = 'Детали';
    langModalTitle.textContent = 'Выберите язык';
  } else {
    cartTitle.innerHTML = 'Savat <button id="closeCart">✕</button>';
    cartTotalLabel.textContent = 'Jami';
    checkoutBtn.textContent = 'Savatni tozalash';
    dishMoreText.textContent = 'Batafsil';
    langModalTitle.textContent = 'Tilni tanlang';
  }
  document.getElementById('closeCart').onclick = closeCart;
}

function setDish(cat, idx){
  curCat = cat; curIdx = idx;
  const d = MENU[cat][idx];
  const incoming = showingA ? imgB : imgA;
  const outgoing = showingA ? imgA : imgB;
  incoming.src = d.img;
  incoming.classList.add('active');
  outgoing.classList.remove('active');
  showingA = !showingA;

  dishCat.textContent = CAT_NAMES[cat][curLang];
  dishTitle.textContent = d.name[curLang];
  
  // Установка бейджа
  if (d.badge) {
    dishBadge.textContent = d.badge;
    dishBadge.style.display = 'inline-block';
  } else {
    dishBadge.style.display = 'none';
  }

  // Установка описания и веса
  dishDesc.textContent = `${d.desc[curLang]} · ${d.weight}`;

  updateCartUI();

  // Обновление URL без перезагрузки (Deep Linking)
  const newUrl = `${window.location.pathname}?cat=${cat}&dish=${idx}&lang=${curLang}`;
  window.history.replaceState(null, '', newUrl);

  renderDots(cat, idx);
  renderTabs();
}

function renderDots(cat, idx){
  dotsEl.innerHTML = '';
  MENU[cat].forEach((_,i)=>{
    const s = document.createElement('div');
    s.className = 'seg' + (i<idx ? ' done' : i===idx ? ' active' : '');
    s.innerHTML = '<i></i>';
    dotsEl.appendChild(s);
  });
  startAdvanceTimer(cat, idx);
}

function startAdvanceTimer(cat, idx){
  clearTimeout(advanceTimer);
  advanceTimer = setTimeout(()=>{
    const items = MENU[cat];
    setDish(cat, (idx+1) % items.length);
  }, 4500);
}

function getCategoryCount(catKey) {
  let count = 0;
  MENU[catKey].forEach(dish => {
    if (cart[dish.id]) {
      count += cart[dish.id].qty;
    }
  });
  return count;
}

function renderTabs(){
  tabsEl.innerHTML = '';
  CATS.forEach(cat=>{
    const t = document.createElement('div');
    t.className = 'cat-tab' + (cat===curCat ? ' active':'');
    
    const count = getCategoryCount(cat);
    if (count > 0) {
      t.innerHTML = `${CAT_NAMES[cat][curLang]} <span class="tab-badge">${count}</span>`;
    } else {
      t.textContent = CAT_NAMES[cat][curLang];
    }
    
    t.onclick = ()=>{
      if(cat!==curCat) setDish(cat, 0);
      centerTab(t);
    };
    tabsEl.appendChild(t);
  });
  requestAnimationFrame(()=>{
    const activeTab = tabsEl.querySelector('.cat-tab.active');
    if(activeTab) centerTab(activeTab, false);
  });
}

let tabsOffset = 0, tabsMin = 0, tabsMax = 0;

function computeTabsBounds(){
  const trackW = tabsEl.scrollWidth;
  const viewW = tabsViewport.clientWidth;
  if(trackW <= viewW){
    tabsMin = tabsMax = (viewW - trackW) / 2;
  } else {
    tabsMax = 0;
    tabsMin = viewW - trackW;
  }
}

function setTabsOffset(x, animate=true){
  computeTabsBounds();
  x = Math.max(tabsMin, Math.min(tabsMax, x));
  tabsOffset = x;
  tabsEl.style.transition = animate ? '' : 'none';
  tabsEl.style.transform = `translateX(${x}px)`;
  if(!animate) requestAnimationFrame(()=>{ tabsEl.style.transition = ''; });
}

function centerTab(tabEl, animate=true){
  computeTabsBounds();
  const viewW = tabsViewport.clientWidth;
  const target = -(tabEl.offsetLeft - (viewW - tabEl.offsetWidth)/2);
  setTabsOffset(target, animate);
}

let dragStartX = null, dragStartOffset = 0, dragging = false;
tabsViewport.addEventListener('touchstart', e=>{
  dragStartX = e.touches[0].clientX; dragStartOffset = tabsOffset; dragging = true;
  clearTimeout(advanceTimer);
}, {passive:true});
tabsViewport.addEventListener('touchmove', e=>{
  if(!dragging) return;
  const dx = e.touches[0].clientX - dragStartX;
  setTabsOffset(dragStartOffset + dx, false);
}, {passive:true});
tabsViewport.addEventListener('touchend', ()=>{ dragging = false; startAdvanceTimer(curCat, curIdx); });

tabsViewport.addEventListener('mousedown', e=>{
  dragStartX = e.clientX; dragStartOffset = tabsOffset; dragging = true;
  clearTimeout(advanceTimer); e.preventDefault();
});
window.addEventListener('mousemove', e=>{
  if(!dragging) return;
  setTabsOffset(dragStartOffset + (e.clientX - dragStartX), false);
});
window.addEventListener('mouseup', ()=>{ if(dragging){ dragging = false; startAdvanceTimer(curCat, curIdx); } });

let touchX = null;
const swipeZone = document.getElementById('swipeZone');
swipeZone.addEventListener('touchstart', e=>{ touchX = e.touches[0].clientX; });
swipeZone.addEventListener('touchend', e=>{
  if(touchX===null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  const items = MENU[curCat];
  if(Math.abs(dx) > 50){
    let next = curIdx + (dx < 0 ? 1 : -1);
    next = (next + items.length) % items.length;
    setDish(curCat, next);
  }
  touchX = null;
});
swipeZone.addEventListener('click', e=>{
  const rect = swipeZone.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const items = MENU[curCat];
  let next = curIdx + (x < rect.width*0.35 ? -1 : 1);
  next = (next + items.length) % items.length;
  setDish(curCat, next);
});

function addToCart(itemId, qtyDelta, ctx){
  const d = ctx || MENU[curCat].find(item => item.id === itemId);
  if(!cart[itemId]) cart[itemId] = { qty:0, price:d.price, name:d.name, img:d.img };
  cart[itemId].qty += qtyDelta;
  if(cart[itemId].qty <= 0) delete cart[itemId];
  
  // Сохраняем в localStorage
  localStorage.setItem('lamari_cart', JSON.stringify(cart));
  
  updateCartUI();
  if(qtyDelta > 0) {
    cartChip.classList.remove('pop');
    void cartChip.offsetWidth;
    cartChip.classList.add('pop');
  }
}

function updateCartUI(){
  let count = 0, sum = 0;
  Object.values(cart).forEach(c=>{ count += c.qty; sum += c.qty*c.price; });
  cartBadge.textContent = count;
  cartBadge.style.display = count>0 ? 'flex' : 'none';
  
  // Обновление состояния и текста кнопки добавления
  const currentDish = MENU[curCat][curIdx];
  const cartItem = cart[currentDish.id];
  if (cartItem) {
    addBtn.classList.add('added');
    const itemsText = curLang === 'ru' ? 'шт в корзине' : 'ta savatda';
    pillLabel.textContent = `${cartItem.qty} ${itemsText}`;
  } else {
    addBtn.classList.remove('added');
    const inCartText = curLang === 'ru' ? 'В корзину' : 'Savatga';
    pillLabel.textContent = `${inCartText} · ${money(currentDish.price)}`;
  }
  
  cartTotal.textContent = money(sum);
  checkoutBtn.disabled = count===0;
  renderCartList();
  renderTabs();
}

function renderCartList(){
  const itemIds = Object.keys(cart);
  if(itemIds.length===0){
    const emptyText = curLang === 'ru' ? 'Корзина пуста — выберите блюдо' : 'Savat bo\'sh — taom tanlang';
    cartList.innerHTML = `<div class="empty-cart">${emptyText}</div>`;
    return;
  }
  cartList.innerHTML = '';
  itemIds.forEach((itemId, idx)=>{
    const c = cart[itemId];
    const row = document.createElement('div');
    row.className = 'cart-row';
    row.style.animationDelay = (idx * 0.05) + 's';
    row.innerHTML = `
      <img src="${c.img}" alt="">
      <div class="cr-info">
        <div class="cr-name">${c.name[curLang]}</div>
        <div class="cr-price">${money(c.price)} × ${c.qty} = ${money(c.price*c.qty)}</div>
      </div>
      <div class="cr-qty">
        <button data-act="minus">−</button>
        <span>${c.qty}</span>
        <button data-act="plus">+</button>
      </div>`;
    row.querySelector('[data-act="minus"]').onclick = ()=> addToCart(itemId,-1,c);
    row.querySelector('[data-act="plus"]').onclick = ()=> addToCart(itemId,1,c);
    cartList.appendChild(row);
  });
}

addBtn.addEventListener('click', (e)=>{
  const d = MENU[curCat][curIdx];
  const cartItem = cart[d.id];
  
  if (!cartItem) {
    addToCart(d.id, 1, d);
    showAddToast(d);
  } else {
    if (e.target.closest('#pillMinus')) {
      addToCart(d.id, -1, d);
      e.stopPropagation();
    } else if (e.target.closest('#pillPlus')) {
      addToCart(d.id, 1, d);
      showAddToast(d);
      e.stopPropagation();
    }
  }
});

function showAddToast(d) {
  const toastText = curLang === 'ru' ? 'добавлен' : 'qo\'shildi';
  toastEl.textContent = `${d.name[curLang]} ${toastText} · ×${cart[d.id].qty}`;
  toastEl.classList.add('show');
  clearTimeout(window._t);
  window._t = setTimeout(()=> toastEl.classList.remove('show'), 1400);
}

function openCart(){
  cartDrawer.style.transform = '';
  cartOverlay.style.opacity = '';
  cartOverlay.classList.add('open');
  cartDrawer.classList.add('open');
}
function closeCart(){
  cartOverlay.classList.remove('open');
  cartDrawer.classList.remove('open');
  setTimeout(() => {
    cartDrawer.style.transform = '';
    cartOverlay.style.opacity = '';
  }, 350);
}
cartChip.addEventListener('click', openCart);
cartOverlay.addEventListener('click', closeCart);
document.getElementById('closeCart').addEventListener('click', closeCart);
checkoutBtn.addEventListener('click', ()=>{
  Object.keys(cart).forEach(k => delete cart[k]);
  localStorage.removeItem('lamari_cart');
  updateCartUI();
  closeCart();
  const clearedText = curLang === 'ru' ? 'Корзина очищена' : 'Savat tozalandi';
  toastEl.textContent = clearedText;
  toastEl.classList.add('show');
  clearTimeout(window._t);
  window._t = setTimeout(()=> toastEl.classList.remove('show'), 1400);
});

function openDesc(){
  const d = MENU[curCat][curIdx];
  descModalTitle.textContent = d.name[curLang];
  descModalText.textContent = d.desc[curLang];
  descModalWeight.textContent = d.weight;
  descModal.style.transform = '';
  descOverlay.style.opacity = '';
  descOverlay.classList.add('open');
  descModal.classList.add('open');
  clearTimeout(advanceTimer);
}
function closeDesc(){
  descOverlay.classList.remove('open');
  descModal.classList.remove('open');
  setTimeout(() => {
    descModal.style.transform = '';
    descOverlay.style.opacity = '';
  }, 350);
  startAdvanceTimer(curCat, curIdx);
}
dishMoreBtn.addEventListener('click', openDesc);
descOverlay.addEventListener('click', closeDesc);
closeDescBtn.addEventListener('click', closeDesc);

langMobileBtn.addEventListener('click', openLangModal);
langOverlay.addEventListener('click', closeLangModal);
closeLangBtn.addEventListener('click', closeLangModal);

cartChip.addEventListener('animationend', () => cartChip.classList.remove('pop'));

const shareDishBtn = document.getElementById('shareDish');
shareDishBtn.addEventListener('click', async () => {
  const d = MENU[curCat][curIdx];
  const shareUrl = window.location.href;
  const shareTitle = d.name[curLang];
  const shareText = curLang === 'ru' 
    ? `Посмотри какое вкусное блюдо в La Mari: ${d.name[curLang]}` 
    : `La Mari'dagi ajoyib taomni ko'ring: ${d.name[curLang]}`;
    
  if (navigator.share) {
    try {
      await navigator.share({
        title: shareTitle,
        text: shareText,
        url: shareUrl
      });
    } catch (err) {
      console.log('Пользователь отменил шеринг');
    }
  } else {
    try {
      await navigator.clipboard.writeText(shareUrl);
      const copyText = curLang === 'ru' ? 'Ссылка скопирована!' : 'Havola nusxalandi!';
      toastEl.textContent = copyText;
      toastEl.classList.add('show');
      clearTimeout(window._t);
      window._t = setTimeout(()=> toastEl.classList.remove('show'), 1400);
    } catch (err) {
      console.error('Не удалось скопировать ссылку', err);
    }
  }
});

function makeDraggable(modalEl, handleEl, overlayEl, closeFn, scrollContainerEl = null) {
  let startY = 0;
  let currentY = 0;
  let isDragging = false;
  
  function onTouchStart(e) {
    if (scrollContainerEl && scrollContainerEl.scrollTop > 0) return;
    startY = e.touches[0].clientY;
    isDragging = false;
    modalEl.style.transition = 'none';
    overlayEl.style.transition = 'none';
  }
  
  function onTouchMove(e) {
    const clientY = e.touches[0].clientY;
    const diffY = clientY - startY;
    
    if (diffY > 0) {
      if (scrollContainerEl && scrollContainerEl.scrollTop > 0) return;
      if (!isDragging) {
        isDragging = true;
        clearTimeout(advanceTimer);
      }
      currentY = diffY;
      modalEl.style.transform = `translateY(${diffY}px)`;
      
      const progress = Math.max(0, 1 - (diffY / 320));
      overlayEl.style.opacity = progress;
      
      if (e.cancelable) e.preventDefault();
    }
  }
  
  function onTouchEnd() {
    if (!isDragging) {
      modalEl.style.transition = '';
      overlayEl.style.transition = '';
      return;
    }
    isDragging = false;
    modalEl.style.transition = '';
    overlayEl.style.transition = '';
    
    if (currentY > 80) {
      closeFn();
    } else {
      modalEl.style.transform = '';
      overlayEl.style.opacity = '';
      if (modalEl === descModal) {
        startAdvanceTimer(curCat, curIdx);
      }
    }
    currentY = 0;
  }
  
  handleEl.addEventListener('touchstart', onTouchStart, { passive: true });
  handleEl.addEventListener('touchmove', onTouchMove, { passive: false });
  handleEl.addEventListener('touchend', onTouchEnd, { passive: true });
  
  modalEl.addEventListener('touchstart', onTouchStart, { passive: true });
  modalEl.addEventListener('touchmove', onTouchMove, { passive: false });
  modalEl.addEventListener('touchend', onTouchEnd, { passive: true });
}

makeDraggable(descModal, document.querySelector('.desc-modal-handle'), descOverlay, closeDesc);
makeDraggable(cartDrawer, document.querySelector('.drawer-handle'), cartOverlay, closeCart, cartList);
makeDraggable(langModal, document.querySelector('.lang-modal-handle'), langOverlay, closeLangModal);

setDish(curCat, curIdx);
renderTabs();
updateCartUI();

function setVH(){ document.documentElement.style.setProperty('--vh', (window.innerHeight*0.01)+'px'); }
setVH();
window.addEventListener('resize', ()=>{
  setVH();
  const activeTab = tabsEl.querySelector('.cat-tab.active');
  if(activeTab) centerTab(activeTab, false);
});

window.addEventListener('load', ()=>{
  setTimeout(()=>{
    document.getElementById('preloader').classList.add('hide');
  }, 1900);
});
