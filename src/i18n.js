import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      description1:
        "Alarkan General Trading FZC (Dubai Free Zone company) is a leading name in the Auto Spare parts world, with over 22 years of experience as a prominent distributor and supplier of genuine auto spare parts and accessories.",
      description2:
        "Internationally – the motor vehicle spare parts business has achieved an enormous transformation. In UAE, it began as a business to meet domestic requirements and export to some of the African countries.",
      description3:
        "Today, the Dubai Auto spare parts business has entirely altered the universal marketing and calls as the hub for re-export business.",
      description4:
        "Alarkan General Trading FZE is one of the key participants in this business boom and has got a long-lasting reputation and dignity in this field.",
      description5: "We have our OWN warehouse located in the Free Zone(Dubai)",
      description6: "With thousands of parts available 24/7.",
      description7:
        "Spare part for any cars from Japan, South Korea, USA, and Europe.",
      description8:
        "The wide range of articles original and aftermarket are ready to send just one click away.",
      description9: "All kinds of financial instruments.",
      description10: "You can use any currency and options to pay",
      description24: "About Us",
      description25: "Introduction",

      //next page
      description11: "Do you need spare parts delivered to your place?",
      description12:
        "We will organize a better and more convenient delivery way for you.",
      description13: "Delivery to any part of the world?",
      description14:
        "We have a robust and experienced logistic team and shipping agents around the world, air delivery or delivery by sea.",

      //next page
      description15:
        "Our customers have come to know us as the best place to buy auto parts online.",
      description16: "Security",
      description17:
        "We use state-of-the-art encryption. Your data is always safe with us.",
      description18: "Fast Delivery",
      description19: "Get the parts whenever you need them.",
      description20: "Reliability",
      description21:
        "Al Arkan is a reliable partner in sourcing quality OEM parts.",
      description22: "Competitive Prices",
      description23:
        "We have the parts you need at the most competitive prices.",

      //headerMenu
      description26: "Search",
      description27: "Cart",
      description28: "Orders",
      description29: "Dispatch",
      description30: "Balance",
      description31: "About Us",
      offers: "Offers",
      login: "Login",
      register: "Register",
      howto: "How To",

      //footer
      contact_us: "Contact Us",
      home: "Home",
      about_us: "About Us",
      privacy_policy: "Privacy Policy",
      contact_number: "+971 56 509 8534",
      follow_us_by: "Follow us by",
      logout: "LOGOUT",

      // Search page
      by_part_number: "By Part Number",
      by_excel_file: "By Excel File",
      to_cart: "To Cart",
      export: "Export",
      upload: "Upload",
      max_days: "Max days",
      template: "Template",
      demo_prices_log_in:
        "YOU SEE DEMO PRICES. TO GET ACTUAL ONES, KINDLY LOG IN",
      demo_prices_complete_registration:
        "YOU SEE DEMO PRICES. TO GET ACTUAL ONES, KINDLY COMPLETE REGISTRATION, CONTACTING US AT ",
      for_order: "To Order",

      // Balance page
      cannot_export_invoice: "Cannot export invoice due to the error",
      start_date: "Start Date",
      end_date: "End Date",
      show: "Show",
      topup_online: "TopUp Online",
      bank_transfer: "Bank Transfer",
      document: "document",
      debit: "Debit",
      credit: "Credit",

      // Basket page
      cannot_select_item: "Cannot select item(s) due to the error",
      cannot_change_quantity: "Cannot change quantity due to the error",
      cannot_apply_changes: "Cannot apply changes due to the error",
      cannot_order_selected: "Cannot order selected due to the error",
      cannot_delete_selected: "Cannot delete selected due to the error",
      order: "Order",
      remove: "Remove",
      order_accepted:
        "Your order № {{orderId}} in amount of {{currency}}{{amount}} is accepted.",
      order_not_accepted:
        "Your order not accepted due to the error (code = {{orderId}})",
      activate_account: "Please contact us to activate your account",
      insufficient_funds: "Insufficient funds, please check your balance",
      no_items: "No items for order",

      // Orders page
      part_number: "part number",
      order_number: "order number",
      reference: "reference",
      all: "all",

      // Password reset page
      submit: "Submit",
      new_password: "NEW PASSWORD",

      // Shipments page
      cannot_update_shipment_date:
        "Cannot update shipment date due to the error",

      // Balance topup dialog
      amount_with_currency: "AMOUNT ({{currency}})",
      charge: "CHARGE: {{percent}}% + {{fixed}} {{currency}}",
      topup: "TOP UP",

      // Balance total table
      balance_with_currency: "Balance ({{currency}})",
      in_orders: "In Orders",
      in_cart: "In Cart",
      pay_for_cart: "Pay for Cart",
      ready_to_ship: "Ready to Ship",
      pay_to_ship: "Pay to Ship",

      // Basket table
      brand: "Brand",
      price_with_currency: "Price ({{currency}})",
      quantity: "Quantity",
      total_with_currency: "Total ({{currency}})",
      weight_kg: "Weight (kg)",
      booking: "Booking",
      delivery: "Delivery",
      description: "Description",

      // Basket total table
      to_order: "To Order",
      available_for_order: "Available for Order",
      pay_for_order: "Pay for Order",
      items: "Items",

      // Captcha
      captcha_field_placeholder: "ENTER TEXT FROM AN IMAGE ABOVE",

      // Catalog table
      offer: "Offer",
      download: "Download",
      lines: "Lines",
      updated: "Updated",

      // Log In dialog
      email: "email",
      password: "password",
      forgot_password: "Forgot password?",
      reset_link_sent: "Reset link is sent to your email",
      log_in: "LOG IN",

      // Orders table
      date: "Date",
      order_price: "Order Price",
      sale_price: "Sale Price",
      ordered: "Ordered",
      purchased: "Purchased",
      shipped: "Shipped",
      refused: "Refused",
      state_date: "State Date",

      // Search input
      search_input_placeholder: "Search...",

      // Search table
      substituted: "Substituted",
      days: "Days",
      available: "Available",
      volume_kg: "Volume (kg)",
      comment: "Comment",
      n_a: "N/A",

      // Shipment date dialog
      enabled: "Enabled",

      // Shipment box table
      row_id: "Row ID",

      // Shipment table
      place: "place",
      length_m: "Length (m)",
      height_m: "Height (m)",
      width_m: "Width (m)",
      value_with_currency: "Value ({{currency}})",

      // Shipment total table
      places: "Places",
      volume_m3: "Volume (㎥)",
      schedule: "Schedule",

      // Sign up dialog
      company_name: "company name",
      contact_phone: "contact phone",
      confirm_password: "confirm password",
      sign_up: "sign up",

      //Manuals page
      tab_register: "register",
      tab_quotations: "make quotations",
      tab_offers: "download offers",
      tab_api: "use API"
    }
  },
  ar: {
    translation: {
      description1:
        "شركة الأركان للتجارة العامة (دبي المنطقة الحرة) هي شركة رائدة في عالم قطع غيار السيارات , مع اكثر من  عاما من الخبرة في توزيع وتوريد قطع غيار واكسسوارات السيارات الأصلية",
      description2:
        "شركة الأركان للتجارة العامة (دبي المنطقة الحرة) هي شركة رائدة في عالم قطع غيار السيارات , مع اكثر من  عاما من الخبرة في توزيع وتوريد قطع غيار واكسسوارات السيارات الأصلية",
      description3:
        "اما اليوم- استطاعت دبي الارتقاء في مجال قطع غيارالسيارت كما استحوذت على مركز متقدم في التسويق العالمي واصبحت محورا اساسيا في اعمال الاستيراد واعادة التصدير .",
      description4:
        "شركة الاركان للتجارة العامة (دبي المنطقة الحرة) هي واحدة من المشاركين الرئيسيين في تحقيق هذا الازدهار في تجارة قطع غيار السيارات وتمتلك سمعة طيبة وموثوقية عالية في هذا المجال.",
      description5:
        "لدينا مستودعنا الخاص الواقع في المنطقة الحرة (دبي) والذي يحتوي على الالاف من القطع المتوفرة على مدار 24/7.",
      description6:
        "- يتوفرلدينا كل قطع غيار السيارات اليابانية الكورية الجنوبية ,الولايات المتحدة الامريكية والاوربية.",
      description7:
        "شركة الاركان للتجارة العامة (دبي المنطقة الحرة) هي واحدة من المشاركين الرئيسيين في تحقيق هذا الازدهار في تجارة قطع غيار السيارات وتمتلك سمعة طيبة وموثوقية عالية في هذا المجال.",
      description8:
        "شركة الاركان للتجارة العامة (دبي المنطقة الحرة) هي واحدة من المشاركين الرئيسيين في تحقيق هذا الازدهار في تجارة قطع غيار السيارات وتمتلك سمعة طيبة وموثوقية عالية في هذا المجال.",
      description9:
        "شركة الاركان للتجارة العامة (دبي المنطقة الحرة) هي واحدة من المشاركين الرئيسيين في تحقيق هذا الازدهار في تجارة قطع غيار السيارات وتمتلك سمعة طيبة وموثوقية عالية في هذا المجال.",
      description10:
        "شركة الاركان للتجارة العامة (دبي المنطقة الحرة) هي واحدة من المشاركين الرئيسيين في تحقيق هذا الازدهار في تجارة قطع غيار السيارات وتمتلك سمعة طيبة وموثوقية عالية في هذا المجال.",
      description24: "معلومات عنا",
      description25: "المقدمة",

      // next page
      description11: "هل تحتاج لتوصيل قطع الغيار الى موقعك؟",
      description12:
        "سوف نقوم بتنظيم الطريقة الافضل والانسب لايصال كل ما تحتاج",
      description13: "امكانية التوصيل الى اي مكان في العالم؟",
      description14:
        "لدينا فريق لوجستي قوي وذو خبرة عالية ووكلاء شحن حول العالم ،سواء في التوصيل الجوي أو التسليم عن طريق البحر",

      //next page
      description15:
        "أصبح عملاؤنا يعرفوننا كأفضل اختيار لشراء قطع غيار السيارات عبر الإنترنت.",
      description16: "حماية وامان",
      description17: "نستخدم أحدث تقنيات التشفير. بياناتك آمنة دائمًا معنا.",
      description18: "توصيل سريع",
      description19: "احصل على ماتحتاج من قطع متى احتجت إليها.",
      description20: "مصداقية",
      description21:
        "شركة الأركان شريك موثوق في توريد قطع غيار OEM عالية الجودة.",
      description22: "أسعار منافسة",
      description23: "لدينا الأجزاء التي تحتاجها بأسعار تنافسية.",

      //headerMenu
      description26: "بحث",
      description27: "عربة التسوق",
      description28: "الطلب",
      description29: "شحنة",
      description30: "الرصيد",
      description31: "عنا",
      login: "تسجيل دخول",
      register: "مستخدم جديد",
      logout: "خروج",
      offers: "عروض",
      howto: "كيف",

      //footer
      contact_us: "اتصل بنا",
      home: "الصفحة",
      about_us: "عنا",
      privacy_policy: "سياسة الخصوصي",
      contact_number: "+971 56 509 8534",
      follow_us_by: "تابعونا على",

      // TODO translate below
      // Search page
      by_part_number: "حسب رقم القطعة",
      by_excel_file: "  excel بواسطة ملف ",
      to_cart: "الى السلة",
      export: "تصدير",
      upload: "تحميل",
      max_days: "العدد الاقصى للايام",
      template: "نموذج",
      demo_prices_log_in:
          "انت ترى اسعارا تجريبية . للحصول على الاسعار الفعلية يرجى تسجيل الدخول",
      demo_prices_complete_registration:
          "انت ترى اسعارا تجريبية .للحصول على الاسعار الفعلية ، يرجى إكمال التسجيل والإتصال بنا على ",
      for_order: "للطلب",

      // Balance page
      cannot_export_invoice: "لا يمكن إصدار الفاتورة بسبب الخطأ",
      start_date: "تاريخ البدء",
      end_date: "تاريخ الانتهاء",
      show: "إظهار",
      topup_online: "اشحن رصيدك عبر الإنترنت",
      bank_transfer: "حوالة بنكية",
      document: "وثيقة",
      debit: "بطاقة مدين",
      credit: "بطاقة دائن",

      // Basket page
      cannot_select_item: "لا يمكن تحديد العنصر (العناصر) بسبب الخطأ",
      cannot_change_quantity: "لا يمكن تغيير الكمية بسبب الخطأ",
      cannot_apply_changes: "لا يمكن تطبيق التغييرات بسبب الخطأ",
      cannot_order_selected: "للا يمكن طلب المحدد بسبب خطأ",
      cannot_delete_selected: "لا يمكن حذف المحدد بسبب الخطأ",
      order: "الطلب",
      remove: "إزالة",
      order_accepted:
          "طلبك № {{orderId}} بمبلغ وقدره {{currency}}{{amount}} تم قبول.",
      order_not_accepted:
          "لم يتم قبول الطلب بسبب خطآ (كود = {{orderId}})",
      activate_account: "يرجى الاتصال بنا لتفعيل حسابك",
      insufficient_funds: "أموال غير كافية ، يرجى التحقق من رصيدك",
      no_items: "القطع المطلوبة غير متوفرة",

      // Orders page
      part_number: "رقم القطعة",
      order_number: "رقم الطلب",
      reference: "مرجع",
      all: "لكل",

      // Password reset page
      submit: "إرسال",
      new_password: "كلمة سر جديدة",

      // Shipments page
      cannot_update_shipment_date:
          "لا يمكن تحديث تاريخ الشحن بسبب الخطأ",

      // Balance topup dialog
      amount_with_currency: "االمبلغ({{currency}})",
      charge: "تكلفة اضافية: {{percent}}% + {{fixed}} {{currency}}",
      topup: "تعبئة الرصيد",

      // Balance total table
      balance_with_currency: "({{currency}}) الرصيد",
      in_orders: "تحت الطلب",
      in_cart: "في العربة",
      pay_for_cart: "الدفع للسلة",
      ready_to_ship: "جاهزة للشحن",
      pay_to_ship: "الدفع للشحن",

      // Basket table
      brand: "العلامة التجارية",
      price_with_currency: "({{currency}}) السعر",
      quantity: "الكمية",
      total_with_currency: "({{currency}}) المجموع",
      weight_kg: "الوزن (ك غ)",
      booking: "الحجز",
      delivery: "التوصيل",
      description: "الوصف",

      // Basket total table
      to_order: "للطلب",
      available_for_order: "متاح للطلب",
      pay_for_order: "الدفع للطلب",
      items: "القطع",

      // Captcha
      captcha_field_placeholder: "أدخل نصًا من الصورة أعلاه",

      // Catalog table
      offer: "عرض",
      download: "تحميل",
      lines: "خطوط",
      updated: "تحديث",

      // Log In dialog
      email: "البريد الالكتروني",
      password: "كلمة السر",
      forgot_password: "هل نسيت كلمة السر?",
      reset_link_sent: "تم ارسال رابط اعادة ضبط كلمة السر",
      log_in: "تسجيل دخول",

      // Orders table
      date: "التاريخ",
      order_price: "سعر الطلب",
      sale_price: "سعر البيع",
      ordered: "تم الطلب",
      purchased: "تم الشراء",
      shipped: "تم الشحن",
      refused: "تم الرفض",
      state_date: "تاريخ الولاية",

      // Search input
      search_input_placeholder:"بحث...",

      // Search table
      substituted: "استبدل",
      days: "الايام",
      available: "متاح",
      volume_kg: "الحجم (ك غ)",
      comment: "تعليق",
      n_a: "غير متوفر",

      // Shipment date dialog
      enabled: "تمكين",

      // Shipment box table
      row_id: "معرف الصف",

      // Shipment table
      place: "الموقع",
      length_m: "الطول (م)",
      height_m: "العرض (م)",
      width_m: "الوزن (م)",
      value_with_currency: "({{currency}}) القيمة",

      // Shipment total table
      places: "المواقع",
      volume_m3: "الحجم (م)",
      schedule: "الجدول",

      // Sign up dialog
      company_name: "اسم الشركة",
      contact_phone: "رقم الهاتف",
      confirm_password: "تأكيد كلمة السر",
      sign_up: "التسجيل",

      //Manuals page
      tab_register: "تسجيل",
      tab_quotations: "لجعل الاقتباسات",
      tab_offers: "لتنزيل العروض",
      tab_api: "لاستخدام API"
    }
  },
  ru: {
    translation: {
      // TODO translate below
      description1:
        "Alarkan General Trading FZC (компания в свободной зоне Дубая) — ведущее имя в мире автозапчастей с более чем 22-летним опытом работы в качестве известного дистрибьютора и поставщика оригинальных автозапчастей и аксессуаров..",
      description2:
        "На международном уровне бизнес запасных частей для автомобилей претерпел огромные изменения. В ОАЭ это началось как бизнес для удовлетворения внутренних потребностей и экспорта в некоторые африканские страны.",
      description3:
        "Сегодня бизнес автозапчастей в Дубае полностью изменил универсальный маркетинг и стал центром реэкспортного бизнеса.",
      description4:
        "Alarkan General Trading FZE является одним из ключевых участников этого делового бума и имеет давнюю репутацию и достоинство в этой области..",
      description5: "Собственный склад в свободной экономической зоне (Дубай, ОАЭ)",
      description6: "С тысячами запасных частей, доступных 24/7.",
      description7:
        "Запасные части к любым автомобилям из Японии, Южной Кореи, США и Европы.",
      description8:
        "Широчайший ассортимент оригинальных и афтемаркетных запчастей готовы к отправке всего в одном клике от вас.",
      description9: "Различные методы оплаты.",
      description10: "Вы можете использовать удобчные вам способы и валюты оплаты",
      description24: "О нас",
      description25: "Введение",

      //next page
      description11: "Нужно доставить до вас ваши заказы?",
      description12:
        "Мы организуем наилучший и наиболее удобный способ доставки до вас.",
      description13: "Доставка в любую точку мира?",
      description14:
        "Слаженная команда логистики и сеть транспортных агентов по всему миру, доставка авиа и морем.",

      //next page
      description15:
        "Наши клиенты знают нас, как лучший онлайн-магазин запчастей.",
      description16: "Безопасность",
      description17:
        "Мы используем современные методы защиты и шифрования информации. Ваши данные всегда в безопасности с нами.",
      description18: "Быстрая доставка",
      description19: "Получите детали, когда они нужны вам.",
      description20: "Надежность",
      description21:
        "Al Arkan - надежный поставщик OEM-запчастей.",
      description22: "Конкурентоспособные цены",
      description23:
        "У нас есть любые нужные вам автозапчасти по конкуретоспособным ценам.",

      //headerMenu
      description26: "Поиск",
      description27: "Корзина",
      description28: "Заказы",
      description29: "Отправка",
      description30: "Баланс",
      description31: "О нас",
      offers: "Прайсы",
      login: "Войти",
      register: "Регистрация",
      howto: "Инструкции",

      //footer
      contact_us: "Напишите нам",
      home: "Home",
      about_us: "o нас",
      privacy_policy: "Политики",
      contact_number: "+971 56 509 8534",
      follow_us_by: "СоцСети",
      logout: "Выйти",

      // Search page
      by_part_number: "Поиск по номеру",
      by_excel_file: "Проценка файлом",
      to_cart: "В корзину",
      export: "Экспорт",
      upload: "Загрузить",
      max_days: "Не позднее",
      template: "Шаблон",
      demo_prices_log_in:
        "ВЫ ВИДИТЕ ДЕМО-ЦЕНЫ. ЧТОБЫ УВИДЕТЬ АКТУАЛЬНЫЕ, АВТОРИЗУЙТЕСЬ",
      demo_prices_complete_registration:
        "ВЫ ВИДИТЕ ДЕМО-ЦЕНЫ. ЧТОБЫ УВИДЕТЬ АКТУАЛЬНЫЕ, ЗАВЕРШИТЕ РЕГИСТРАЦИЮ, СВЯЗАВШИСЬ С НАМИ ",
      for_order: "ЗАКАЗ",

      // Balance page
      cannot_export_invoice: "Ошибка выгрузки документа",
      start_date: "С",
      end_date: "ПО",
      show: "Показать",
      topup_online: "Пополнить картой",
      bank_transfer: "Банковский перевод",
      document: "Документ",
      debit: "Дебет",
      credit: "Кредит",

      // Basket page
      cannot_select_item: "Ошибка при выборе позиций в заказ",
      cannot_change_quantity: "Ошибка изменения количества",
      cannot_apply_changes: "Ошибка подтверждения изменений",
      cannot_order_selected: "Ошибка размещения заказа",
      cannot_delete_selected: "Ошибка при удалении",
      order: "Заказ",
      remove: "Убрать",
      order_accepted:
        "Ваш заказ № {{orderId}} в сумме {{currency}}{{amount}} принят.",
      order_not_accepted:
        "Ваш заказ не принят, код ошибки (code = {{orderId}})",
      activate_account: "Свяжитесь с нами для активации аккаунта",
      insufficient_funds: "Недостаточно средств на балансе",
      no_items: "Не выбраны позиции в заказ",

      // Orders page
      part_number: "Номер детали",
      order_number: "Номер заказа",
      reference: "Референс",
      all: "Все",

      // Password reset page
      submit: "Сменить",
      new_password: "НОВЫЙ ПАРОЛЬ",

      // Shipments page
      cannot_update_shipment_date:
        "Ошибка изменения даты отгрузки",

      // Balance topup dialog
      amount_with_currency: "СУММА ({{currency}})",
      charge: "КОМИССИЯ: {{percent}}% + {{fixed}} {{currency}}",
      topup: "ПОПОЛНИТЬ",

      // Balance total table
      balance_with_currency: "Баланс ({{currency}})",
      in_orders: "В работе",
      in_cart: "В корзине",
      pay_for_cart: "Оплатить до корзины",
      ready_to_ship: "К отгрузке",
      pay_to_ship: "Оплатить к отгрузке",

      // Basket table
      brand: "Марка",
      price_with_currency: "Цена ({{currency}})",
      quantity: "Количество",
      total_with_currency: "Сумма ({{currency}})",
      weight_kg: "Вес (кг)",
      booking: "Букинг",
      delivery: "Доставка",
      description: "Описание",

      // Basket total table
      to_order: "К заказу",
      available_for_order: "Доступно к заказу",
      pay_for_order: "Оплатить к заказу",
      items: "Позиций",

      // Captcha
      captcha_field_placeholder: "ВВЕДИТЕ СИМВОЛЫ НА КАРТИНКЕ",

      // Catalog table
      offer: "Прайс",
      download: "Скачать",
      lines: "Строк",
      updated: "Обновлено",

      // Log In dialog
      email: "email",
      password: "пароль",
      forgot_password: "Забыли пароль?",
      reset_link_sent: "Ссылка для сброса пароля отправлена вам на почту",
      log_in: "ВОЙТИ",

      // Orders table
      date: "Дата",
      order_price: "Цена заказа",
      sale_price: "Цена продажи",
      ordered: "В работе",
      purchased: "Закуплено",
      shipped: "Отгружено",
      refused: "Отказано",
      state_date: "Дата состояния",

      // Search input
      search_input_placeholder: "Поиск...",

      // Search table
      substituted: "Замена",
      days: "ETA",
      available: "Наличие",
      volume_kg: "Объем (кг)",
      comment: "Комментарий",
      n_a: "НЕТ",

      // Shipment date dialog
      enabled: "Активно",

      // Shipment box table
      row_id: "Row ID",

      // Shipment table
      place: "Грузоместо",
      length_m: "Длина (м)",
      height_m: "Высота (м)",
      width_m: "Ширина (м)",
      value_with_currency: "Сумма ({{currency}})",

      // Shipment total table
      places: "Грузомест",
      volume_m3: "Объем (㎥)",
      schedule: "Дата отгрузки",

      // Sign up dialog
      company_name: "Наименование компании",
      contact_phone: "Контактный телефон",
      confirm_password: "Подтвердите пароль",
      sign_up: "Регистрация",

      //Manuals page
      tab_register: "Зарегистрироваться",
      tab_quotations: "Проценить",
      tab_offers: "Скачать прайсы",
      tab_api: "Подключиться к API"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("languageCode")
      ? localStorage.getItem("languageCode")
      : "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
