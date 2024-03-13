import User1 from "../assets/images/all-img/user.png";
import User2 from "../assets/images/all-img/user2.png";
import User3 from "../assets/images/all-img/user3.png";
import User4 from "../assets/images/all-img/user4.png";
import blackTshirt from "../assets/images/e-commerce/product-card/black-t-shirt.png";
import checkShirt from "../assets/images/e-commerce/product-card/check-shirt.png";
import blackJumper from "../assets/images/e-commerce/product-card/classical-black-tshirt.png";
import grayJumper from "../assets/images/e-commerce/product-card/gray-jumper.png";
import grayTshirt from "../assets/images/e-commerce/product-card/gray-t-shirt.png";
import pinkBlazer from "../assets/images/e-commerce/product-card/pink-blazer.png";
import redTshirt from "../assets/images/e-commerce/product-card/red-t-shirt.png";
import yellowFrok from "../assets/images/e-commerce/product-card/yellow-frok.png";
import yellowJumper from "../assets/images/e-commerce/product-card/yellow-jumper.png";
import file1Img from "../assets/images/icon/file-1.svg";
import file2Img from "../assets/images/icon/pdf-1.svg";
import file4Img from "../assets/images/icon/pdf-2.svg";
import file5Img from "../assets/images/icon/scr-1.svg";
import file3Img from "../assets/images/icon/zip-1.svg";
import meetsImage3 from "../assets/images/svg/dc.svg";
import meetsImage2 from "../assets/images/svg/path.svg";
import {
  default as meetsImage1,
  default as meetsImage4,
} from "../assets/images/svg/sk.svg";

import bkash from "../assets/images/e-commerce/cart-icon/bkash.png";
import fatoorah from "../assets/images/e-commerce/cart-icon/fatoorah.png";
import instamojo from "../assets/images/e-commerce/cart-icon/instamojo.png";
import iyzco from "../assets/images/e-commerce/cart-icon/iyzco.png";
import nagad from "../assets/images/e-commerce/cart-icon/nagad.png";
import ngenious from "../assets/images/e-commerce/cart-icon/ngenious.png";
import payfast from "../assets/images/e-commerce/cart-icon/payfast.png";
import payku from "../assets/images/e-commerce/cart-icon/payku.png";
import paypal from "../assets/images/e-commerce/cart-icon/paypal.png";
import paytm from "../assets/images/e-commerce/cart-icon/paytm.png";
import razorpay from "../assets/images/e-commerce/cart-icon/razorpay.png";
import ssl from "../assets/images/e-commerce/cart-icon/ssl.png";
import stripe from "../assets/images/e-commerce/cart-icon/stripe.png";
import truck from "../assets/images/e-commerce/cart-icon/truck.png";
import vougepay from "../assets/images/e-commerce/cart-icon/vougepay.png";

export type MenuItemType = {
  isHeadr?: boolean;
  title: string;
  icon?: string;
  link?: string;
  badge?: string;
  isOpen?: boolean;
  isHide?: boolean;
  child?: MenuItemChildType[];
};

export type MenuItemChildType = {
  childtitle?: string;
  childlink?: string;
  multi_menu?: MenuItemChildMultiType[];
};

export type MenuItemChildMultiType = {
  multiTitle: string;
  multiLink: string;
  badge?: string;
};

const sampleMenuItems: MenuItemType[] = [
  {
    isHeadr: true,
    title: "menu",
  },

  {
    title: "Dashboard",
    icon: "heroicons-outline:home",
    isOpen: true,
    isHide: true,
    child: [
      {
        childtitle: "Analytics Dashboard",
        childlink: "dashboard",
      },
      {
        childtitle: "Ecommerce Dashboard",
        childlink: "ecommerce",
      },
      {
        childtitle: "Project  Dashbaord",
        childlink: "project",
      },
      {
        childtitle: " CRM Dashbaord",
        childlink: "crm",
      },
      {
        childtitle: "Banking Dashboard",
        childlink: "banking",
      },
    ],
  },
  {
    title: "changelog",
    icon: "heroicons:arrow-trending-up",
    link: "changelog",
    isHide: false,
    badge: "1.0.0",
  },
  {
    isHeadr: true,
    title: "apps",
  },

  {
    title: "Chat",
    isHide: true,
    icon: "heroicons-outline:chat",
    link: "chat",
  },

  {
    title: "Email",
    isHide: true,
    icon: "heroicons-outline:mail",
    link: "email",
  },

  {
    title: "Kanban",
    isHide: true,
    icon: "heroicons-outline:view-boards",
    link: "kanban",
  },
  {
    title: "Calender",
    isHide: true,
    icon: "heroicons-outline:calendar",
    link: "calender",
  },

  {
    title: "Todo",
    isHide: true,
    icon: "heroicons-outline:clipboard-check",
    link: "todo",
  },

  {
    title: "Projects",
    icon: "heroicons-outline:document",
    link: "#",
    isHide: true,
    child: [
      {
        childtitle: "Projects",
        childlink: "projects",
      },
      {
        childtitle: "Project Details",
        childlink: "project-details",
      },
    ],
  },
  {
    title: "Ecommerce",
    icon: "heroicons:shopping-bag",
    link: "#",
    child: [
      {
        childtitle: "User App",

        multi_menu: [
          {
            multiTitle: "Products",
            multiLink: "products",
          },
          {
            multiTitle: "Products Details",
            multiLink: "products/1",
          },

          {
            multiTitle: "Cart",
            multiLink: "cart",
          },
          {
            multiTitle: "Wishlist",
            multiLink: "wishlist",
          },
        ],
      },
      {
        childtitle: "Admin App",

        multi_menu: [
          {
            multiTitle: "Orders",
            multiLink: "orders",
            badge: "soon",
          },

          {
            multiTitle: "Add Product",
            multiLink: "add-product",
            badge: "soon",
          },
          {
            multiTitle: "Edit Product",
            multiLink: "edit-product",
            badge: "soon",
          },
          {
            multiTitle: "Customers",
            multiLink: "customers",
            badge: "soon",
          },
          {
            multiTitle: "Sellers",
            multiLink: "sellers",
            badge: "soon",
          },
          {
            multiTitle: "Invoice",
            multiLink: "invoice-ecommerce",
            badge: "soon",
          },
        ],
      },
    ],
  },
  {
    isHeadr: true,
    title: "Pages",
  },
  {
    title: "Authentication",
    icon: "heroicons-outline:lock-closed",
    link: "#",
    child: [
      {
        childtitle: "Signin One",
        childlink: "/",
      },
      {
        childtitle: "Signin Two",
        childlink: "/login2",
      },
      {
        childtitle: "Signin Three",
        childlink: "/login3",
      },
      {
        childtitle: "Signup One",
        childlink: "/reg",
      },
      {
        childtitle: "Signup Two",
        childlink: "/reg2",
      },
      {
        childtitle: "Signup Three",
        childlink: "/reg3",
      },
      {
        childtitle: "Forget Password One",
        childlink: "/forgot-password",
      },
      {
        childtitle: "Forget Password Two",
        childlink: "/forgot-password2",
      },
      {
        childtitle: "Forget Password Three",
        childlink: "/forgot-password3",
      },
      {
        childtitle: "Lock Screen One",
        childlink: "/lock-screen",
      },
      {
        childtitle: "Lock Screen Two",
        childlink: "/lock-screen2",
      },
      {
        childtitle: "Lock Screen Three",
        childlink: "/lock-screen3",
      },
    ],
  },
  {
    title: "Utility",
    icon: "heroicons-outline:view-boards",
    link: "#",
    isHide: false,
    child: [
      {
        childtitle: "Invoice",
        childlink: "invoice",
      },
      {
        childtitle: "Pricing",
        childlink: "pricing",
      },
      // {
      //   childtitle: "Testimonial",
      //   childlink: "testimonial",
      // },
      {
        childtitle: "FAQ",
        childlink: "faq",
      },
      {
        childtitle: "Blog",
        childlink: "blog",
      },
      {
        childtitle: "Blank page",
        childlink: "blank-page",
      },
      {
        childtitle: "Prfoile",
        childlink: "profile",
      },
      {
        childtitle: "Settings",
        childlink: "settings",
      },
      {
        childtitle: "404 page",
        childlink: "/404",
      },

      {
        childtitle: "Coming Soon",
        childlink: "/coming-soon",
      },
      {
        childtitle: "Under Maintanance page",
        childlink: "/under-construction",
      },
    ],
  },
  {
    isHeadr: true,
    title: "Elements",
  },
  {
    title: "Widgets",
    icon: "heroicons-outline:view-grid-add",
    link: "#",
    child: [
      {
        childtitle: "Basic",
        childlink: "basic",
      },
      {
        childtitle: "Statistic",
        childlink: "statistic",
      },
    ],
  },
  {
    title: "Components",
    icon: "heroicons-outline:collection",
    link: "#",
    child: [
      {
        childtitle: "Typography",
        childlink: "typography",
      },
      {
        childtitle: "Colors",
        childlink: "colors",
      },
      {
        childtitle: "Alert",
        childlink: "alert",
      },
      {
        childtitle: "Button",
        childlink: "button",
      },
      {
        childtitle: "Card",
        childlink: "card",
      },
      {
        childtitle: "Carousel",
        childlink: "carousel",
      },
      {
        childtitle: "Dropdown",
        childlink: "dropdown",
      },
      {
        childtitle: "Image",
        childlink: "image",
      },
      {
        childtitle: "Modal",
        childlink: "modal",
      },
      {
        childtitle: "Progress bar",
        childlink: "progress-bar",
      },
      {
        childtitle: "Placeholder",
        childlink: "placeholder",
      },
      {
        childtitle: "Tab & Accordion",
        childlink: "tab-accordion",
      },
      {
        childtitle: "Badges",
        childlink: "badges",
      },
      {
        childtitle: "Paginatins",
        childlink: "paginations",
      },
      {
        childtitle: "Video",
        childlink: "video",
      },
      {
        childtitle: "Tooltip & Popover",
        childlink: "tooltip-popover",
      },
    ],
  },
  {
    title: "Forms",
    icon: "heroicons-outline:clipboard-list",
    link: "#",
    child: [
      {
        childtitle: "Input",
        childlink: "input",
      },
      {
        childtitle: "Input group",
        childlink: "input-group",
      },
      {
        childtitle: "Input layout",
        childlink: "input-layout",
      },
      {
        childtitle: "Form validation",
        childlink: "form-validation",
      },
      {
        childtitle: "Wizard",
        childlink: "form-wizard",
      },
      {
        childtitle: "Input mask",
        childlink: "input-mask",
      },
      {
        childtitle: "File input",
        childlink: "file-input",
      },
      {
        childtitle: "Form repeater",
        childlink: "form-repeater",
      },
      {
        childtitle: "Textarea",
        childlink: "textarea",
      },
      {
        childtitle: "Checkbox",
        childlink: "checkbox",
      },
      {
        childtitle: "Radio button",
        childlink: "radio-button",
      },
      {
        childtitle: "Switch",
        childlink: "switch",
      },
      {
        childtitle: "Select & Vue select",
        childlink: "select",
      },
      {
        childtitle: "Date time picker",
        childlink: "date-time-picker",
      },
    ],
  },
  {
    title: "Table",
    icon: "heroicons-outline:table",
    link: "#",
    child: [
      {
        childtitle: "Basic Table",
        childlink: "table-basic",
      },
      {
        childtitle: "React Table",
        childlink: "react-table",
      },
    ],
  },
  {
    title: "Chart",
    icon: "heroicons-outline:chart-bar",
    link: "#",
    child: [
      {
        childtitle: "Apex chart",
        childlink: "appex-chart",
      },
      {
        childtitle: "Chart js",
        childlink: "chartjs",
      },
      {
        childtitle: "Recharts",
        childlink: "recharts",
      },
    ],
  },
  {
    title: "Map",
    icon: "heroicons-outline:map",
    link: "map",
  },
  {
    title: "Icons",
    icon: "heroicons-outline:emoji-happy",
    link: "icons",
  },
  {
    title: "Multi Level",
    icon: "heroicons:share",
    link: "#null",
    child: [
      {
        childtitle: "Level 1.1",
        childlink: "icons",
      },
      {
        childtitle: "Level 1.2",
        childlink: "Level-1",
        multi_menu: [
          {
            multiTitle: "Level 2.1",
            multiLink: "Level-2",
          },
          {
            multiTitle: "Level 2.2",
            multiLink: "Level-2.3",
          },
        ],
      },
    ],
  },
];

export const menuItems: MenuItemType[] = [
  {
    isHeadr: true,
    title: "홈",
  },
  {
    title: "메인",
    icon: "heroicons-outline:home",
    isHide: false,
    child: [
      {
        childtitle: "대시보드",
        childlink: "home/dashboard",
      },
    ],
  },
  {
    isHeadr: true,
    title: "신용심사",
  },
  {
    title: "신용심사",
    icon: "heroicons-outline:building-library",
    isHide: false,
    child: [
      {
        childtitle: "심사진행목록",
        childlink: "",
      },
      {
        childtitle: "심사접수진행상태",
        childlink: "",
      },
      {
        childtitle: "적합성확인목록",
        childlink: "",
      },
      {
        childtitle: "결재대기목록",
        childlink: "",
      },
      {
        childtitle: "전자계약대기목록",
        childlink: "",
      },
      {
        childtitle: "대출등록대기목록",
        childlink: "",
      },
    ],
  },
  {
    title: "심사완료",
    icon: "heroicons-outline:building-office-2",
    isHide: false,
    child: [
      {
        childtitle: "대출완료목록",
        childlink: "",
      },
      {
        childtitle: "대출완료(당대환)목록",
        childlink: "",
      },
    ],
  },
  {
    title: "현황조회",
    icon: "heroicons-outline:building-office",
    isHide: false,
    child: [
      {
        childtitle: "대외플랫폼접수현황",
        childlink: "",
      },
      {
        childtitle: "상담원심사현황",
        childlink: "",
      },
      {
        childtitle: "심사현황",
        childlink: "",
      },
      {
        childtitle: "심사부결현황",
        childlink: "",
      },
      {
        childtitle: "심사첨부파일등록현황",
        childlink: "",
      },
    ],
  },
  {
    title: "기준관리(심사)",
    icon: "heroicons-outline:building-storefront",
    isHide: false,
    child: [
      {
        childtitle: "사전거절(PreScreen)대상",
        childlink: "",
      },
      {
        childtitle: "심사배정상담원",
        childlink: "",
      },
      {
        childtitle: "심사배정룰",
        childlink: "",
      },
      {
        childtitle: "상품별 기준금리관리",
        childlink: "",
      },
    ],
  },
  {
    isHeadr: true,
    title: "채권관리",
  },
  {
    title: "채권현황",
    icon: "heroicons-outline:document-chart-bar",
    isHide: false,
    child: [
      {
        childtitle: "채권현황목록",
        childlink: "",
      },
      {
        childtitle: "여신거래내역",
        childlink: "",
      },
      {
        childtitle: "대출완제목록",
        childlink: "",
      },
      {
        childtitle: "초본열람대상명세",
        childlink: "",
      },
      {
        childtitle: "방문관리명세",
        childlink: "",
      },
      {
        childtitle: "채권배정현황(실시간)",
        childlink: "",
      },
    ],
  },
  {
    title: "사고채권",
    icon: "heroicons-outline:document-minus",
    isHide: false,
    child: [
      {
        childtitle: "개인회생목록",
        childlink: "",
      },
      {
        childtitle: "워크아웃목록",
        childlink: "",
      },
      {
        childtitle: "파산관리명세",
        childlink: "",
      },
      {
        childtitle: "사망관리명세",
        childlink: "",
      },
      {
        childtitle: "법무관리목록",
        childlink: "",
      },
      {
        childtitle: "법원결정문관리명세",
        childlink: "",
      },
    ],
  },
  {
    title: "특수채권",
    icon: "heroicons-outline:document-text",
    isHide: false,
    child: [
      {
        childtitle: "특수채권현황",
        childlink: "",
      },
      {
        childtitle: "특수채권회수내역",
        childlink: "",
      },
    ],
  },
  {
    title: "조기경보",
    icon: "heroicons-outline:exclamation-circle",
    isHide: false,
    child: [
      {
        childtitle: "CIS신용도판단및공공정보",
        childlink: "",
      },
      {
        childtitle: "CIS대부면체",
        childlink: "",
      },
      {
        childtitle: "채무불이행정보(신용정보사)",
        childlink: "",
      },
      {
        childtitle: "KCB연체정보",
        childlink: "",
      },
      {
        childtitle: "대지급정보",
        childlink: "",
      },
      {
        childtitle: "주민등록번호변경정보",
        childlink: "",
      },
      {
        childtitle: "일단위연체관리정보",
        childlink: "",
      },
    ],
  },
  {
    title: "배정관리",
    icon: "heroicons-outline:user-plus",
    isHide: false,
    child: [
      {
        childtitle: "채권담당자배덩Rule관리",
        childlink: "",
      },
      {
        childtitle: "채권팀배정Rule관리",
        childlink: "",
      },
      {
        childtitle: "채권(엑셀)이수관",
        childlink: "",
      },
    ],
  },
  {
    title: "기준관리(채권)",
    icon: "heroicons-outline:view-columns",
    isHide: false,
    child: [
      {
        childtitle: "DM양식관리",
        childlink: "",
      },
    ],
  },
  {
    isHeadr: true,
    title: "업무지원",
  },
  {
    title: "회계관리",
    icon: "heroicons-outline:chart-pie",
    isHide: false,
    child: [
      {
        childtitle: "가상계좌발급",
        childlink: "",
      },
      {
        childtitle: "가상계좌거래명세",
        childlink: "",
      },
      {
        childtitle: "CMS출금명세(온라인)",
        childlink: "",
      },
      {
        childtitle: "완제계좌가수금조회",
        childlink: "",
      },
      {
        childtitle: "이기종시제관리",
        childlink: "",
      },
      {
        childtitle: "온라인수납관리",
        childlink: "",
      },
      {
        childtitle: "플랫폼사 수수료정산",
        childlink: "",
      },
    ],
  },
  {
    title: "사후관리",
    icon: "heroicons-outline:cube",
    isHide: false,
    child: [
      {
        childtitle: "민원내역",
        childlink: "",
      },
      {
        childtitle: "대출계약철회",
        childlink: "",
      },
      {
        childtitle: "금리인하요구권",
        childlink: "",
      },
      {
        childtitle: "제증명신청",
        childlink: "",
      },
      {
        childtitle: "CMS신청",
        childlink: "",
      },
      {
        childtitle: "CMS신청(변경)",
        childlink: "",
      },
      {
        childtitle: "개명신청",
        childlink: "",
      },
      {
        childtitle: "1:1문의",
        childlink: "",
      },
    ],
  },
  {
    title: "고객관리",
    icon: "heroicons-outline:face-smile",
    isHide: false,
    child: [
      {
        childtitle: "본인인증내역",
        childlink: "",
      },
      {
        childtitle: "고객조회",
        childlink: "",
      },
      {
        childtitle: "맴버십내역",
        childlink: "",
      },
      {
        childtitle: "포인트적립내역",
        childlink: "",
      },
      {
        childtitle: "쿠폰신청내역",
        childlink: "",
      },
      {
        childtitle: "마케팅동의내역",
        childlink: "",
      },
      {
        childtitle: "이벤트응모내역",
        childlink: "",
      },
      {
        childtitle: "추가대출대상자업로드",
        childlink: "",
      },
      {
        childtitle: "두낫콜현황(중앙회)",
        childlink: "",
      },
      {
        childtitle: "SMS수신거부(080)",
        childlink: "",
      },
    ],
  },
  {
    title: "경영정보",
    icon: "heroicons-outline:globe-alt",
    isHide: false,
    child: [
      {
        childtitle: "일일현황",
        childlink: "",
      },
      {
        childtitle: "일일실적현황",
        childlink: "",
      },
      {
        childtitle: "중금리공시자료",
        childlink: "",
      },
      {
        childtitle: "가계대출월보",
        childlink: "",
      },
    ],
  },
  {
    title: "자산건전성",
    icon: "heroicons-outline:home-modern",
    isHide: false,
    child: [
      {
        childtitle: "자산건전성분류계산",
        childlink: "",
      },
      {
        childtitle: "자산건전성분류계산결과",
        childlink: "",
      },
      {
        childtitle: "자산건전성기초파일업로드",
        childlink: "",
      },
      {
        childtitle: "사업자휴폐업조회",
        childlink: "",
      },
    ],
  },
  {
    title: "UMS",
    icon: "heroicons-outline:hashtag",
    isHide: false,
    child: [
      {
        childtitle: "UMS개별발송",
        childlink: "",
      },
      {
        childtitle: "UMS발송승인명세",
        childlink: "",
      },
      {
        childtitle: "UMS발송이력",
        childlink: "",
      },
      {
        childtitle: "FAX/MO수신이력",
        childlink: "",
      },
    ],
  },
  {
    title: "기준관리(업무)",
    icon: "heroicons-outline:home-modern",
    isHide: false,
    child: [
      {
        childtitle: "탬플릿 관리",
        childlink: "",
      },
      {
        childtitle: "ActionPlan기준",
        childlink: "",
      },
      {
        childtitle: "ActionPlan실행내역",
        childlink: "",
      },
      {
        childtitle: "가상팩스번호",
        childlink: "",
      },
      {
        childtitle: "가상팩스배정이력",
        childlink: "",
      },
      {
        childtitle: "쿠폰 관리",
        childlink: "",
      },
    ],
  },
  {
    title: "QUPID",
    icon: "heroicons-outline:truck",
    isHide: false,
    child: [
      {
        childtitle: "서식 정보설정",
        childlink: "",
      },
      {
        childtitle: "발송 대상명세",
        childlink: "",
      },
      {
        childtitle: "발송 승인",
        childlink: "",
      },
      {
        childtitle: "발송 이력",
        childlink: "",
      },
      {
        childtitle: "발송대상액셀목록",
        childlink: "",
      },
    ],
  },
  {
    isHeadr: true,
    title: "NPL채권",
  },
  {
    title: "기준채권",
    icon: "heroicons-outline:swatch",
    isHide: false,
    child: [
      {
        childtitle: "상품관리",
        childlink: "",
      },
    ],
  },
  {
    title: "매입",
    icon: "heroicons-outline:table-cells",
    isHide: false,
    child: [
      {
        childtitle: "매입채권등록",
        childlink: "",
      },
      {
        childtitle: "매입채권명세",
        childlink: "",
      },
      {
        childtitle: "상환스케줄/조건표 등록",
        childlink: "",
      },
    ],
  },
  {
    title: "채권",
    icon: "heroicons-outline:rectangle-stack",
    isHide: false,
    child: [
      {
        childtitle: "채권명세",
        childlink: "",
      },
    ],
  },
  {
    title: "상환",
    icon: "heroicons-outline:newspaper",
    isHide: false,
    child: [
      {
        childtitle: "입금이력",
        childlink: "",
      },
      {
        childtitle: "신용회복입금등록",
        childlink: "",
      },
    ],
  },
  {
    title: "통계",
    icon: "heroicons-outline:scale",
    isHide: false,
    child: [
      {
        childtitle: "일마감현황",
        childlink: "",
      },
      {
        childtitle: "월별 회계처리",
        childlink: "",
      },
      {
        childtitle: "신정원 개인대출집중",
        childlink: "",
      },
    ],
  },
  {
    isHeadr: true,
    title: "시스템",
  },
  {
    title: "코드관리",
    icon: "heroicons-outline:list-bullet",
    isHide: false,
    child: [
      {
        childtitle: "공통코드",
        childlink: "code/common",
      },
    ],
  },
  {
    title: "기준관리(중앙회)",
    icon: "heroicons-outline:inbox",
    isHide: false,
    child: [
      {
        childtitle: "",
        childlink: "",
      },
    ],
  },
  {
    title: "기준관리",
    icon: "heroicons-outline:inbox-stack",
    isHide: false,
    child: [
      {
        childtitle: "",
        childlink: "",
      },
    ],
  },
  {
    title: "신용평가",
    icon: "heroicons-outline:identification",
    isHide: false,
    child: [
      {
        childtitle: "",
        childlink: "",
      },
    ],
  },
  {
    title: "메뉴권한",
    icon: "heroicons-outline:bars-4",
    isHide: false,
    child: [
      {
        childtitle: "메뉴관리",
        childlink: "menu/default",
      },
    ],
  },
  {
    title: "사용자",
    icon: "heroicons-outline:users",
    isHide: false,
    child: [
      {
        childtitle: "팀(파트)",
        childlink: "person/team",
      },
      {
        childtitle: "사용자",
        childlink: "person/default",
      },
    ],
  },
  {
    title: "이력조회",
    icon: "heroicons-outline:queue-list",
    isHide: false,
    child: [
      {
        childtitle: "",
        childlink: "",
      },
    ],
  },
  {
    title: "전문관리",
    icon: "heroicons-outline:folder-open",
    isHide: false,
    child: [
      {
        childtitle: "",
        childlink: "",
      },
    ],
  },
  {
    title: "배치관리",
    icon: "heroicons-outline:cog",
    isHide: false,
    child: [
      {
        childtitle: "",
        childlink: "",
      },
    ],
  },
  {
    title: "개인정보파기관리",
    icon: "heroicons-outline:document-minus",
    isHide: false,
    child: [
      {
        childtitle: "",
        childlink: "",
      },
    ],
  },
  {
    title: "공공마이데이터",
    icon: "heroicons-outline:eye",
    isHide: false,
    child: [
      {
        childtitle: "",
        childlink: "",
      },
    ],
  },

  {
    isHeadr: true,
    title: "온투업",
  },
  {
    title: "고객목록",
    icon: "heroicons-outline:user-group",
    isHide: false,
    child: [
      {
        childtitle: "온투업",
        childlink: "",
      },
    ],
  },
  {
    isHeadr: false,
    title: "기업금융",
  },
  {
    title: "홈",
    icon: "heroicons-outline:home",
    isHide: false,
    child: [
      {
        childtitle: "공지사항",
        childlink: "",
      },
      {
        childtitle: "대시보드",
        childlink: "",
      },
    ],
  },
  {
    title: "고객관리",
    icon: "heroicons-outline:user-group",
    isHide: false,
    child: [
      {
        childtitle: "고객목록",
        childlink: "",
      },
    ],
  },
  {
    title: "사업관리",
    icon: "heroicons-outline:squares-2x2",
    isHide: false,
    child: [
      {
        childtitle: "사업목록",
        childlink: "",
      },
      {
        childtitle: "기타안건목록",
        childlink: "",
      },
    ],
  },
  {
    title: "신청관리",
    icon: "heroicons-outline:clipboard-document",
    isHide: false,
    child: [
      {
        childtitle: "신청목록",
        childlink: "",
      },
      {
        childtitle: "부의목록",
        childlink: "",
      },
      {
        childtitle: "심의목록",
        childlink: "",
      },
      {
        childtitle: "심의결과목록",
        childlink: "",
      },
      {
        childtitle: "승인목록",
        childlink: "",
      },
      {
        childtitle: "부결목록",
        childlink: "",
      },
      {
        childtitle: "계좌연결대상목록",
        childlink: "",
      },
      {
        childtitle: "통합목록",
        childlink: "",
      },
    ],
  },
  {
    title: "계정관리",
    icon: "heroicons-outline:cog-6-tooth",
    isHide: false,
    child: [
      {
        childtitle: "대출계좌목록",
        childlink: "",
      },
      {
        childtitle: "유가증권계좌목록",
        childlink: "",
      },
    ],
  },
  {
    title: "DB정보관리",
    icon: "heroicons-outline:circle-stack",
    isHide: false,
    child: [
      {
        childtitle: "원장조회(여신)",
        childlink: "",
      },
      {
        childtitle: "원장조회(유가증권)",
        childlink: "",
      },
      {
        childtitle: "문서관리목록",
        childlink: "",
      },
      {
        childtitle: "기준항목관리",
        childlink: "",
      },
      {
        childtitle: "PF현황 엑셀업로드",
        childlink: "",
      },
      {
        childtitle: "자산건전성 엑셀업로드",
        childlink: "",
      },
      {
        childtitle: "심의위원회관리",
        childlink: "",
      },
      {
        childtitle: "리스크평가 엑셀업로드",
        childlink: "",
      },
      {
        childtitle: "사업유형코드관리",
        childlink: "",
      },
    ],
  },
];

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  menuItems.push(...sampleMenuItems);
}

export const topMenu: {
  title: string;
  icon: string;
  link?: string;
  child?: { childtitle: string; childlink: string; childicon: string }[];
  megamenu?: {
    megamenutitle: string;
    megamenuicon: string;
    singleMegamenu: { m_childtitle: string; m_childlink: string }[];
  }[];
}[] = [
  {
    title: "Dashboard",
    icon: "heroicons-outline:home",
    link: "/app/home",
    child: [
      {
        childtitle: "Analytics Dashboard",
        childlink: "dashboard",
        childicon: "heroicons:presentation-chart-line",
      },
      {
        childtitle: "Ecommerce Dashboard",
        childlink: "ecommerce",
        childicon: "heroicons:shopping-cart",
      },
      {
        childtitle: "Project  Dashboard",
        childlink: "project",
        childicon: "heroicons:briefcase",
      },
      {
        childtitle: "CRM Dashboard",
        childlink: "crm",
        childicon: "ri:customer-service-2-fill",
      },
      {
        childtitle: "Banking Dashboard",
        childlink: "banking",
        childicon: "heroicons:wrench-screwdriver",
      },
    ],
  },
  {
    title: "App",
    icon: "heroicons-outline:chip",
    link: "/app/home",
    child: [
      {
        childtitle: "Calendar",
        childlink: "calender",
        childicon: "heroicons-outline:calendar",
      },
      {
        childtitle: "Kanban",
        childlink: "kanban",
        childicon: "heroicons-outline:view-boards",
      },
      {
        childtitle: "Todo",
        childlink: "todo",
        childicon: "heroicons-outline:clipboard-check",
      },
      {
        childtitle: "Projects",
        childlink: "projects",
        childicon: "heroicons-outline:document",
      },
    ],
  },
  {
    title: "Pages",
    icon: "heroicons-outline:view-boards",
    link: "/app/home",
    megamenu: [
      {
        megamenutitle: "Authentication",
        megamenuicon: "heroicons-outline:user",
        singleMegamenu: [
          {
            m_childtitle: "Signin One",
            m_childlink: "/",
          },
          {
            m_childtitle: "Signin Two",
            m_childlink: "/login2",
          },
          {
            m_childtitle: "Signin Three",
            m_childlink: "/login3",
          },
          {
            m_childtitle: "Signup One",
            m_childlink: "/register",
          },
          {
            m_childtitle: "Signup Two",
            m_childlink: "/register/register2",
          },
          {
            m_childtitle: "Signup Three",
            m_childlink: "/register/register3",
          },
          {
            m_childtitle: "Forget Password One",
            m_childlink: "/forgot-password",
          },
          {
            m_childtitle: "Forget Password Two",
            m_childlink: "/forgot-password2",
          },
          {
            m_childtitle: "Forget Password Three",
            m_childlink: "/forgot-password3",
          },
          {
            m_childtitle: "Lock Screen One",
            m_childlink: "/lock-screen",
          },
          {
            m_childtitle: "Lock Screen Two",
            m_childlink: "/lock-screen2",
          },
          {
            m_childtitle: "Lock Screen Three",
            m_childlink: "/lock-screen3",
          },
        ],
      },

      {
        megamenutitle: "Components",
        megamenuicon: "heroicons-outline:user",
        singleMegamenu: [
          {
            m_childtitle: "typography",
            m_childlink: "typography",
          },
          {
            m_childtitle: "colors",
            m_childlink: "colors",
          },
          {
            m_childtitle: "alert",
            m_childlink: "alert",
          },
          {
            m_childtitle: "button",
            m_childlink: "button",
          },
          {
            m_childtitle: "card",
            m_childlink: "card",
          },
          {
            m_childtitle: "carousel",
            m_childlink: "carousel",
          },
          {
            m_childtitle: "dropdown",
            m_childlink: "dropdown",
          },
          {
            m_childtitle: "image",
            m_childlink: "image",
          },
          {
            m_childtitle: "modal",
            m_childlink: "modal",
          },
          {
            m_childtitle: "Progress bar",
            m_childlink: "progress-bar",
          },
          {
            m_childtitle: "Placeholder",
            m_childlink: "placeholder",
          },

          {
            m_childtitle: "Tab & Accordion",
            m_childlink: "tab-accordion",
          },
        ],
      },
      {
        megamenutitle: "Forms",
        megamenuicon: "heroicons-outline:user",
        singleMegamenu: [
          {
            m_childtitle: "Input",
            m_childlink: "input",
          },
          {
            m_childtitle: "Input group",
            m_childlink: "input-group",
          },
          {
            m_childtitle: "Input layout",
            m_childlink: "input-layout",
          },
          {
            m_childtitle: "Form validation",
            m_childlink: "form-validation",
          },
          {
            m_childtitle: "Wizard",
            m_childlink: "form-wizard",
          },
          {
            m_childtitle: "Input mask",
            m_childlink: "input-mask",
          },
          {
            m_childtitle: "File input",
            m_childlink: "file-input",
          },
          {
            m_childtitle: "Form repeater",
            m_childlink: "form-repeater",
          },
          {
            m_childtitle: "Textarea",
            m_childlink: "textarea",
          },
          {
            m_childtitle: "Checkbox",
            m_childlink: "checkbox",
          },
          {
            m_childtitle: "Radio button",
            m_childlink: "radio-button",
          },
          {
            m_childtitle: "Switch",
            m_childlink: "switch",
          },
        ],
      },
      {
        megamenutitle: "Utility",
        megamenuicon: "heroicons-outline:user",
        singleMegamenu: [
          {
            m_childtitle: "Invoice",
            m_childlink: "invoice",
          },
          {
            m_childtitle: "Pricing",
            m_childlink: "pricing",
          },

          // {
          //   m_childtitle: "Testimonial",
          //   m_childlink: "testimonial",
          // },
          {
            m_childtitle: "FAQ",
            m_childlink: "faq",
          },
          {
            m_childtitle: "Blank page",
            m_childlink: "blank-page",
          },
          {
            m_childtitle: "Blog",
            m_childlink: "blog",
          },
          {
            m_childtitle: "404 page",
            m_childlink: "/404",
          },
          {
            m_childtitle: "Coming Soon",
            m_childlink: "/coming-soon",
          },
          {
            m_childtitle: "Under Maintanance page",
            m_childlink: "/under-construction",
          },
        ],
      },
    ],
  },

  {
    title: "Widgets",
    icon: "heroicons-outline:view-grid-add",
    link: "form-elements",
    child: [
      {
        childtitle: "Basic",
        childlink: "basic",
        childicon: "heroicons-outline:document-text",
      },
      {
        childtitle: "Statistic",
        childlink: "statistic",
        childicon: "heroicons-outline:document-text",
      },
    ],
  },

  {
    title: "Extra",
    icon: "heroicons-outline:template",

    child: [
      {
        childtitle: "Basic Table",
        childlink: "table-basic",
        childicon: "heroicons-outline:table",
      },
      {
        childtitle: "Advanced table",
        childlink: "table-advanced",
        childicon: "heroicons-outline:table",
      },
      {
        childtitle: "Apex chart",
        childlink: "appex-chart",
        childicon: "heroicons-outline:chart-bar",
      },
      {
        childtitle: "Chart js",
        childlink: "chartjs",
        childicon: "heroicons-outline:chart-bar",
      },
      {
        childtitle: "Map",
        childlink: "map",
        childicon: "heroicons-outline:map",
      },
    ],
  },
];

export const notifications = [
  {
    title: "Your order is placed",
    desc: "Amet minim mollit non deser unt ullamco est sit aliqua.",

    image: User1,
    link: "#",
  },
  {
    title: "Congratulations Darlene  🎉",
    desc: "Won the monthly best seller badge",
    unread: true,
    image: User2,
    link: "#",
  },
  {
    title: "Revised Order 👋",
    desc: "Won the monthly best seller badge",

    image: User3,
    link: "#",
  },
  {
    title: "Brooklyn Simmons",
    desc: "Added you to Top Secret Project group...",

    image: User4,
    link: "#",
  },
];

export const message = [
  {
    title: "Wade Warren",
    desc: "Hi! How are you doing?.....",
    active: true,
    hasnotifaction: true,
    notification_count: 1,
    image: User1,
    link: "#",
  },
  {
    title: "Savannah Nguyen",
    desc: "Hi! How are you doing?.....",
    active: false,
    hasnotifaction: false,
    image: User2,
    link: "#",
  },
  {
    title: "Ralph Edwards",
    desc: "Hi! How are you doing?.....",
    active: false,
    hasnotifaction: true,
    notification_count: 8,
    image: User3,
    link: "#",
  },
  {
    title: "Cody Fisher",
    desc: "Hi! How are you doing?.....",
    active: true,
    hasnotifaction: false,
    image: User4,
    link: "#",
  },
  {
    title: "Savannah Nguyen",
    desc: "Hi! How are you doing?.....",
    active: false,
    hasnotifaction: false,
    image: User2,
    link: "#",
  },
  {
    title: "Ralph Edwards",
    desc: "Hi! How are you doing?.....",
    active: false,
    hasnotifaction: true,
    notification_count: 8,
    image: User3,
    link: "#",
  },
  {
    title: "Cody Fisher",
    desc: "Hi! How are you doing?.....",
    active: true,
    hasnotifaction: false,
    image: User4,
    link: "#",
  },
];

export const favorite = [
  {
    title: "심사진행목록",
  },
  {
    title: "결재대기목록",
  },
  {
    title: "채권현황목록",
  },
  {
    title: "대출완제목록",
  },
  {
    title: "초본열람대상명세",
  },
  {
    title: "상담원심사현황",
  },
];

export const colors = {
  primary: "#4669FA",
  secondary: "#A0AEC0",
  danger: "#F1595C",
  black: "#111112",
  warning: "#FA916B",
  info: "#0CE7FA",
  light: "#425466",
  success: "#50C793",
  "gray-f7": "#F7F8FC",
  dark: "#1E293B",
  "dark-gray": "#0F172A",
  gray: "#68768A",
  gray2: "#EEF1F9",
  "dark-light": "#CBD5E1",
};

export const hexToRGB = (hex: string, alpha: string) => {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
};

export const topFilterLists = [
  {
    name: "Inbox",
    value: "all",
    icon: "uil:image-v",
  },
  {
    name: "Starred",
    value: "fav",
    icon: "heroicons:star",
  },
  {
    name: "Sent",
    value: "sent",
    icon: "heroicons-outline:paper-airplane",
  },

  {
    name: "Drafts",
    value: "drafts",
    icon: "heroicons-outline:pencil-alt",
  },
  {
    name: "Spam",
    value: "spam",
    icon: "heroicons:information-circle",
  },
  {
    name: "Trash",
    value: "trash",
    icon: "heroicons:trash",
  },
];

export const bottomFilterLists = [
  {
    name: "personal",
    value: "personal",
    icon: "heroicons:chevron-double-right",
  },
  {
    name: "Social",
    value: "social",
    icon: "heroicons:chevron-double-right",
  },
  {
    name: "Promotions",
    value: "promotions",
    icon: "heroicons:chevron-double-right",
  },
  {
    name: "Business",
    value: "business",
    icon: "heroicons:chevron-double-right",
  },
];

export const meets = [
  {
    img: meetsImage1,
    title: "Meeting with client",
    date: "01 Nov 2021",
    meet: "Zoom meeting",
  },
  {
    img: meetsImage2,
    title: "Design meeting (team)",
    date: "01 Nov 2021",
    meet: "Skyp meeting",
  },
  {
    img: meetsImage3,
    title: "Background research",
    date: "01 Nov 2021",
    meet: "Google meeting",
  },
  {
    img: meetsImage4,
    title: "Meeting with client",
    date: "01 Nov 2021",
    meet: "Zoom meeting",
  },
];

export const files = [
  {
    img: file1Img,
    title: "Dashboard.fig",
    date: "06 June 2021 / 155MB",
  },
  {
    img: file2Img,
    title: "Ecommerce.pdf",
    date: "06 June 2021 / 155MB",
  },
  {
    img: file3Img,
    title: "Job portal_app.zip",
    date: "06 June 2021 / 155MB",
  },
  {
    img: file4Img,
    title: "Ecommerce.pdf",
    date: "06 June 2021 / 155MB",
  },
  {
    img: file5Img,
    title: "Screenshot.jpg",
    date: "06 June 2021 / 155MB",
  },
];

// ecommarce data

export const products = [
  {
    img: blackJumper,
    category: "men",
    name: "Classical Black T-Shirt Classical Black T-Shirt",
    subtitle: "The best cotton black branded shirt.",
    desc: "The best cotton black branded shirt. The best cotton black branded shirt. The best cotton black branded shirt. The best cotton black branded shirt. The best cotton black branded shirt.",
    rating: "4.8",
    price: 489,
    oldPrice: "$700",
    percent: "40%",
    brand: "apple",
  },
  {
    img: blackTshirt,
    category: "men",
    name: "Classical Black T-Shirt",
    subtitle: "The best cotton black branded shirt.",
    desc: "The best cotton black branded shirt",
    rating: "4.8",
    price: 20,
    oldPrice: "$700",
    percent: "40%",
    brand: "apex",
  },
  {
    img: checkShirt,
    category: "women",
    name: "Classical Black T-Shirt",
    subtitle: "The best cotton black branded shirt.",
    desc: "The best cotton black branded shirt",
    rating: "4.8",
    price: 120,
    oldPrice: "$700",
    percent: "40%",
    brand: "easy",
  },
  {
    img: grayJumper,
    category: "women",
    name: "Classical Black T-Shirt",
    subtitle: "The best cotton black branded shirt.",
    desc: "The best cotton black branded shirt",
    rating: "4.8",
    price: 70,
    oldPrice: "$700",
    percent: "40%",
    brand: "pixel",
  },
  {
    img: grayTshirt,
    category: "baby",
    name: "Classical Black T-Shirt",
    subtitle: "The best cotton black branded shirt.",
    desc: "The best cotton black branded shirt",
    rating: "4.8",
    price: 30,
    oldPrice: "$700",
    percent: "40%",
    brand: "apex",
  },
  {
    img: pinkBlazer,
    category: "women",
    name: "Classical Black T-Shirt",
    subtitle: "The best cotton black branded shirt.",
    desc: "The best cotton black branded shirt",
    rating: "4.8",
    price: 40,
    oldPrice: "$700",
    percent: "40%",
    brand: "apple",
  },
  {
    img: redTshirt,
    category: "women",
    name: "Classical Black T-Shirt",
    subtitle: "The best cotton black branded shirt.",
    desc: "The best cotton black branded shirt",
    rating: "4.8",
    price: 90,
    oldPrice: "$700",
    percent: "40%",
    brand: "easy",
  },
  {
    img: yellowFrok,
    category: "women",
    name: "Classical Black T-Shirt",
    subtitle: "The best cotton black branded shirt.",
    desc: "The best cotton black branded shirt",
    rating: "4.8",
    price: 80,
    oldPrice: "$700",
    percent: "40%",
    brand: "pixel",
  },
  {
    img: yellowJumper,
    category: "furniture",
    name: "Classical Black T-Shirt",
    subtitle: "The best cotton black branded shirt.",
    desc: "The best cotton black branded shirt",
    rating: "4.8",
    price: 20,
    oldPrice: "$700",
    percent: "40%",
    brand: "samsung",
  },
];

export const categories = [
  { label: "All", value: "all", count: "9724" },
  { label: "Men", value: "men", count: "1312" },
  { label: "Women", value: "women", count: "3752" },
  { label: "Child", value: "child", count: "985" },
  { label: "Baby", value: "baby", count: "745" },
  { label: "Footwear", value: "footwear", count: "1280" },
  { label: "Furniture", value: "furniture", count: "820" },
  { label: "Mobile", value: "mobile", count: "2460" },
];

export const brands = [
  { label: "Apple", value: "apple", count: "9724" },
  { label: "Apex", value: "apex", count: "1312" },
  { label: "Easy", value: "easy", count: "3752" },
  { label: "Pixel", value: "pixel", count: "985" },
  { label: "Samsung", value: "samsung", count: "2460" },
];

export const price = [
  {
    label: "$0 - $199",
    value: {
      min: 0,
      max: 199,
    },
    count: "9724",
  },
  {
    label: "$200 - $449",
    value: {
      min: 200,
      max: 499,
    },
    count: "1312",
  },
  {
    label: "$450 - $599",
    value: {
      min: 450,
      max: 599,
    },
    count: "3752",
  },
  {
    label: "$600 - $799",
    value: {
      min: 600,
      max: 799,
    },
    count: "985",
  },
  {
    label: "$800 & Above",
    value: {
      min: 800,
      max: 1000,
    },
    count: "745",
  },
];

export const ratings = [
  { name: 5, value: 5, count: "9724" },
  { name: 4, value: 4, count: "1312" },
  { name: 3, value: 3, count: "3752" },
  { name: 2, value: 2, count: "985" },
  { name: 1, value: 1, count: "2460" },
];

export const selectOptions = [
  {
    value: "option1",
    label: "Option 1",
  },
  {
    value: "option2",
    label: "Option 2",
  },
  {
    value: "option3",
    label: "Option 3",
  },
];
export const selectCategory = [
  {
    value: "option1",
    label: "Top Rated",
  },
  {
    value: "option2",
    label: "Option 2",
  },
  {
    value: "option3",
    label: "Option 3",
  },
];

export const payments = [
  {
    img: bkash,
    value: "bkash",
  },
  {
    img: fatoorah,
    value: "fatoorah",
  },
  {
    img: instamojo,
    value: "instamojo",
  },
  {
    img: iyzco,
    value: "iyzco",
  },
  {
    img: nagad,
    value: "nagad",
  },
  {
    img: ngenious,
    value: "ngenious",
  },

  {
    img: payfast,
    value: "payfast",
  },
  {
    img: payku,
    value: "payku",
  },
  {
    img: paypal,
    value: "paypal",
  },
  {
    img: paytm,
    value: "paytm",
  },
  {
    img: razorpay,
    value: "razorpay",
  },
  {
    img: ssl,
    value: "ssl",
  },
  {
    img: stripe,
    value: "stripe",
  },
  {
    img: truck,
    value: "truck",
  },
  {
    img: vougepay,
    value: "vougepay",
  },
];
