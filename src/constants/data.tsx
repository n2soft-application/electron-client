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
import Dashboard from "../pages/dashboard/Dashboard";
import BankingPage from "../pages/example/dashboard/banking";
import IconsPage from "../pages/example/icon/IconsPage";
import MapPage from "../pages/example/map/MapPage";
import ChatPage from "../pages/example/chat/ChatPage";
import TodoPage from "../pages/example/todo/TodoPage";
import Typography from "../pages/example/components/typography/Typography";
import Colors from "../pages/example/components/colors/Colors";
import AlertPage from "../pages/example/components/alert/AlertPage";
import ButtonPage from "../pages/example/components/button/ButtonPage";
import CardPage from "../pages/example/components/card/CardPage";
import CarouselPage from "../pages/example/components/carousel/CarouselPage";
import DropdownPage from "../pages/example/components/dropdown/DropdownPage";
import ImagePage from "../pages/example/components/image/ImagePage";
import ModalPage from "../pages/example/components/modal/ModalPage";
import ProgressPage from "../pages/example/components/progress/ProgressPage";
import PlaceholderPage from "../pages/example/components/placeholder/PlaceholderPage";
import AccordionPage from "../pages/example/components/accordion/AccordionPage";
import BadgePage from "../pages/example/components/badge/BadgePage";
import PaginationPage from "../pages/example/components/pagination/PaginationPage";
import VideoPage from "../pages/example/components/video/VideoPage";
import TooltipPage from "../pages/example/components/tooltip/TooltipPage";
import InputPage from "../pages/example/form/InputPage";
import InputGroupPage from "../pages/example/form/InputGroupPage";
import InputLayoutPage from "../pages/example/form/InputLayoutPage";
import FormValidationPage from "../pages/example/form/validation/FormValidationPage";
import FormWizardPage from "../pages/example/form/wizard/FormWizardPage";
import InputMaskPage from "../pages/example/form/InputMaskPage";
import FileInputPage from "../pages/example/form/file/FileInputPage";
import FormRepeaterPage from "../pages/example/form/FormRepeaterPage";
import TextareaPage from "../pages/example/form/TextareaPage";
import CheckboxPage from "../pages/example/form/CheckboxPage";
import RadioButtonPage from "../pages/example/form/RadioButtonPage";
import SwitchPage from "../pages/example/form/SwitchPage";
import SelectPage from "../pages/example/form/select/SelectPage";
import DateTimePickerPage from "../pages/example/form/DateTimePickerPage";
import BasicTablePage from "../pages/example/table/BasicTablePage";
import AppexChartPage from "../pages/example/chart/appex-chart/AppexChartPage";

export type MenuItemType = {
  isHeadr?: boolean;
  title: string;
  icon?: string;
  link?: string;
  element?: React.ComponentType | null;
  badge?: string;
  isOpen?: boolean;
  isHide?: boolean;
  isMultiple?: boolean;
  child?: MenuItemChildType[];
};

export type MenuItemChildType = {
  childtitle?: string;
  childlink?: string;
  childElement?: React.ComponentType | null;
  multi_menu?: MenuItemChildMultiType[];
};

export type MenuItemChildMultiType = {
  multiTitle: string;
  multiLink: string;
  multiElement?: React.ComponentType | null;
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
    link: "#",
    isHide: true,
    child: [
      {
        childtitle: "Analytics Dashboard",
        childlink: "dashboard",
        childElement: null,
      },
      {
        childtitle: "Ecommerce Dashboard",
        childlink: "ecommerce",
        childElement: null,
      },
      {
        childtitle: "Project  Dashbaord",
        childlink: "project",
        childElement: null,
      },
      {
        childtitle: " CRM Dashbaord",
        childlink: "crm",
        childElement: null,
      },
      {
        childtitle: "Banking Dashboard",
        childlink: "banking",
        childElement: BankingPage,
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
    element: ChatPage,
  },

  {
    title: "Email",
    isHide: true,
    icon: "heroicons-outline:mail",
    link: "email",
    element: null,
  },

  {
    title: "Kanban",
    isHide: true,
    icon: "heroicons-outline:view-boards",
    link: "kanban",
    element: null,
  },
  {
    title: "Calender",
    isHide: true,
    icon: "heroicons-outline:calendar",
    link: "calender",
    element: null,
  },

  {
    title: "Todo",
    isHide: true,
    icon: "heroicons-outline:clipboard-check",
    link: "todo",
    element: TodoPage,
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
        childElement: null,
      },
      {
        childtitle: "Project Details",
        childlink: "project-details",
        childElement: null,
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
            multiElement: null,
          },
          {
            multiTitle: "Products Details",
            multiLink: "products/1",
            multiElement: null,
          },

          {
            multiTitle: "Cart",
            multiLink: "cart",
            multiElement: null,
          },
          {
            multiTitle: "Wishlist",
            multiLink: "wishlist",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "Admin App",

        multi_menu: [
          {
            multiTitle: "Orders",
            multiLink: "orders",
            multiElement: null,
            badge: "soon",
          },

          {
            multiTitle: "Add Product",
            multiLink: "add-product",
            multiElement: null,
            badge: "soon",
          },
          {
            multiTitle: "Edit Product",
            multiLink: "edit-product",
            multiElement: null,
            badge: "soon",
          },
          {
            multiTitle: "Customers",
            multiLink: "customers",
            multiElement: null,
            badge: "soon",
          },
          {
            multiTitle: "Sellers",
            multiLink: "sellers",
            multiElement: null,
            badge: "soon",
          },
          {
            multiTitle: "Invoice",
            multiLink: "invoice-ecommerce",
            multiElement: null,
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
        childElement: null,
      },
      {
        childtitle: "Signin Two",
        childlink: "/login2",
        childElement: null,
      },
      {
        childtitle: "Signin Three",
        childlink: "/login3",
        childElement: null,
      },
      {
        childtitle: "Signup One",
        childlink: "/reg",
        childElement: null,
      },
      {
        childtitle: "Signup Two",
        childlink: "/reg2",
        childElement: null,
      },
      {
        childtitle: "Signup Three",
        childlink: "/reg3",
        childElement: null,
      },
      {
        childtitle: "Forget Password One",
        childlink: "/forgot-password",
        childElement: null,
      },
      {
        childtitle: "Forget Password Two",
        childlink: "/forgot-password2",
        childElement: null,
      },
      {
        childtitle: "Forget Password Three",
        childlink: "/forgot-password3",
        childElement: null,
      },
      {
        childtitle: "Lock Screen One",
        childlink: "/lock-screen",
        childElement: null,
      },
      {
        childtitle: "Lock Screen Two",
        childlink: "/lock-screen2",
        childElement: null,
      },
      {
        childtitle: "Lock Screen Three",
        childlink: "/lock-screen3",
        childElement: null,
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
        childElement: null,
      },
      {
        childtitle: "Pricing",
        childlink: "pricing",
        childElement: null,
      },
      // {
      //   childtitle: "Testimonial",
      //   childlink: "testimonial",
      //   childElement: null
      // },
      {
        childtitle: "FAQ",
        childlink: "faq",
        childElement: null,
      },
      {
        childtitle: "Blog",
        childlink: "blog",
        childElement: null,
      },
      {
        childtitle: "Blank page",
        childlink: "blank-page",
        childElement: null,
      },
      {
        childtitle: "Prfoile",
        childlink: "profile",
        childElement: null,
      },
      {
        childtitle: "Settings",
        childlink: "settings",
        childElement: null,
      },
      {
        childtitle: "404 page",
        childlink: "/404",
        childElement: null,
      },

      {
        childtitle: "Coming Soon",
        childlink: "/coming-soon",
        childElement: null,
      },
      {
        childtitle: "Under Maintanance page",
        childlink: "/under-construction",
        childElement: null,
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
        childElement: null,
      },
      {
        childtitle: "Statistic",
        childlink: "statistic",
        childElement: null,
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
        childElement: Typography,
      },
      {
        childtitle: "Colors",
        childlink: "colors",
        childElement: Colors,
      },
      {
        childtitle: "Alert",
        childlink: "alert",
        childElement: AlertPage,
      },
      {
        childtitle: "Button",
        childlink: "button",
        childElement: ButtonPage,
      },
      {
        childtitle: "Card",
        childlink: "card",
        childElement: CardPage,
      },
      {
        childtitle: "Carousel",
        childlink: "carousel",
        childElement: CarouselPage,
      },
      {
        childtitle: "Dropdown",
        childlink: "dropdown",
        childElement: DropdownPage,
      },
      {
        childtitle: "Image",
        childlink: "image",
        childElement: ImagePage,
      },
      {
        childtitle: "Modal",
        childlink: "modal",
        childElement: ModalPage,
      },
      {
        childtitle: "Progress bar",
        childlink: "progress-bar",
        childElement: ProgressPage,
      },
      {
        childtitle: "Placeholder",
        childlink: "placeholder",
        childElement: PlaceholderPage,
      },
      {
        childtitle: "Tab & Accordion",
        childlink: "tab-accordion",
        childElement: AccordionPage,
      },
      {
        childtitle: "Badges",
        childlink: "badges",
        childElement: BadgePage,
      },
      {
        childtitle: "Paginatins",
        childlink: "paginations",
        childElement: PaginationPage,
      },
      {
        childtitle: "Video",
        childlink: "video",
        childElement: VideoPage,
      },
      {
        childtitle: "Tooltip & Popover",
        childlink: "tooltip-popover",
        childElement: TooltipPage,
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
        childElement: InputPage,
      },
      {
        childtitle: "Input group",
        childlink: "input-group",
        childElement: InputGroupPage,
      },
      {
        childtitle: "Input layout",
        childlink: "input-layout",
        childElement: InputLayoutPage,
      },
      {
        childtitle: "Form validation",
        childlink: "form-validation",
        childElement: FormValidationPage,
      },
      {
        childtitle: "Wizard",
        childlink: "form-wizard",
        childElement: FormWizardPage,
      },
      {
        childtitle: "Input mask",
        childlink: "input-mask",
        childElement: InputMaskPage,
      },
      {
        childtitle: "File input",
        childlink: "file-input",
        childElement: FileInputPage,
      },
      {
        childtitle: "Form repeater",
        childlink: "form-repeater",
        childElement: FormRepeaterPage,
      },
      {
        childtitle: "Textarea",
        childlink: "textarea",
        childElement: TextareaPage,
      },
      {
        childtitle: "Checkbox",
        childlink: "checkbox",
        childElement: CheckboxPage,
      },
      {
        childtitle: "Radio button",
        childlink: "radio-button",
        childElement: RadioButtonPage,
      },
      {
        childtitle: "Switch",
        childlink: "switch",
        childElement: SwitchPage,
      },
      {
        childtitle: "Select & Vue select",
        childlink: "select",
        childElement: SelectPage,
      },
      {
        childtitle: "Date time picker",
        childlink: "date-time-picker",
        childElement: DateTimePickerPage,
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
        childElement: BasicTablePage,
      },
      {
        childtitle: "React Table",
        childlink: "react-table",
        childElement: null,
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
        childElement: AppexChartPage,
      },
      {
        childtitle: "Chart js",
        childlink: "chartjs",
        childElement: null,
      },
      {
        childtitle: "Recharts",
        childlink: "recharts",
        childElement: null,
      },
    ],
  },
  {
    title: "Map",
    icon: "heroicons-outline:map",
    link: "map",
    element: MapPage,
  },
  {
    title: "Icons",
    icon: "heroicons-outline:emoji-happy",
    link: "icons",
    element: IconsPage,
  },
  {
    title: "Multi Level",
    icon: "heroicons:share",
    link: "#null",
    child: [
      {
        childtitle: "Level 1.1",
        childlink: "icons",
        childElement: null,
      },
      {
        childtitle: "Level 1.2",
        childlink: "Level-1",
        multi_menu: [
          {
            multiTitle: "Level 2.1",
            multiLink: "Level-2",
            multiElement: null,
          },
          {
            multiTitle: "Level 2.2",
            multiLink: "Level-2.3",
            multiElement: null,
          },
        ],
      },
    ],
  },
];

export const menuItems: MenuItemType[] = [
  {
    title: "메인",
    icon: "heroicons-outline:home",
    isOpen: true,
    isHide: true,
    child: [
      {
        childtitle: "대시보드",
        childlink: "home/dashboard",
        childElement: Dashboard,
      },
    ],
  },
  {
    title: "심사관리",
    icon: "heroicons-outline:building-library",
    isHide: false,
    child: [
      {
        childtitle: "심사진행목록",
        multi_menu: [
          {
            multiTitle: "심사진행목록",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "심사접수진행상태",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "적합성확인목록",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "결재대기목록",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "전자계약대기목록",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "대출등록대기목록",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "심사완료",
        multi_menu: [
          {
            multiTitle: "대출완료목록",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "대출완료(당대환)목록",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "현황조회",
        multi_menu: [
          {
            multiTitle: "대외플랫폼접수현황",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "상담원심사현황",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "심사현황",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "심사부결현황",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "심사첨부파일등록현황",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "기준관리",
        multi_menu: [
          {
            multiTitle: "사전거절(PreScreen)대상",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "심사배정상담원",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "심사배정룰",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "상품별 기준금리관리",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
    ],
  },
  {
    title: "채권관리",
    icon: "heroicons-outline:document-chart-bar",
    isHide: false,
    isMultiple: true,
    child: [
      {
        childtitle: "채권현황",
        multi_menu: [
          {
            multiTitle: "채권현황목록",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "여신거래내역",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "대출완제목록",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "초본열람대상명세",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "방문관리명세",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "채권배정현황(실시간)",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "사고채권",
        multi_menu: [
          {
            multiTitle: "개인회생목록",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "워크아웃목록",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "파산관리명세",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "사망관리명세",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "법무관리목록",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "법원결정문관리명세",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "특수채권",
        multi_menu: [
          {
            multiTitle: "특수채권현황",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "특수채권회수내역",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "조기경보",
        multi_menu: [
          {
            multiTitle: "CIS신용도판단및공공정보",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "CIS대부면체",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "채무불이행정보(신용정보사)",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "KCB연체정보",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "대지급정보",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "주민등록번호변경정보",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "일단위연체관리정보",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "배정관리",
        multi_menu: [
          {
            multiTitle: "채권담당자배덩Rule관리",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "채권팀배정Rule관리",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "채권(엑셀)이수관",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "기준관리",
        multi_menu: [
          {
            multiTitle: "DM양식관리",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
    ],
  },
  {
    title: "업무지원",
    icon: "heroicons-outline:chart-pie",
    isHide: false,
    isMultiple: true,
    child: [
      {
        childtitle: "회계관리",
        multi_menu: [
          {
            multiTitle: "가상계좌발급",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "가상계좌거래명세",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "CMS출금명세(온라인)",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "완제계좌가수금조회",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "이기종시제관리",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "온라인수납관리",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "플랫폼사 수수료정산",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "사후관리",
        multi_menu: [
          {
            multiTitle: "민원내역",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "대출계약철회",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "금리인하요구권",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "제증명신청",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "CMS신청",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "CMS신청(변경)",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "개명신청",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "1:1문의",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "고객관리",
        multi_menu: [
          {
            multiTitle: "본인인증내역",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "고객조회",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "맴버십내역",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "포인트적립내역",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "쿠폰신청내역",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "마케팅동의내역",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "이벤트응모내역",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "추가대출대상자업로드",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "두낫콜현황(중앙회)",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "SMS수신거부(080)",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "경영정보",
        multi_menu: [
          {
            multiTitle: "일일현황",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "일일실적현황",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "중금리공시자료",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "가계대출월보",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "자산건전성",
        multi_menu: [
          {
            multiTitle: "자산건전성분류계산",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "자산건전성분류계산결과",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "자산건전성기초파일업로드",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "사업자휴폐업조회",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "UMS",
        multi_menu: [
          {
            multiTitle: "UMS개별발송",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "UMS발송승인명세",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "UMS발송이력",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "FAX/MO수신이력",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "기준관리(업무)",
        multi_menu: [
          {
            multiTitle: "탬플릿 관리",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "ActionPlan기준",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "ActionPlan실행내역",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "가상팩스번호",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "가상팩스배정이력",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "쿠폰 관리",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "QUPID",
        multi_menu: [
          {
            multiTitle: "서식 정보설정",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "발송 대상명세",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "발송 승인",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "발송 이력",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "발송대상액셀목록",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
    ],
  },

  {
    title: "NPL채권",
    icon: "heroicons-outline:swatch",
    isHide: false,
    isMultiple: true,
    child: [
      {
        childtitle: "기준채권",
        multi_menu: [
          {
            multiTitle: "상품관리",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "매입",
        multi_menu: [
          {
            multiTitle: "매입채권등록",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "매입채권명세",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "상환스케줄/조건표 등록",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "채권",
        multi_menu: [
          {
            multiTitle: "채권명세",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "상환",
        multi_menu: [
          {
            multiTitle: "입금이력",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "신용회복입금등록",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "통계",
        multi_menu: [
          {
            multiTitle: "일마감현황",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "월별 회계처리",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "신정원 개인대출집중",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
    ],
  },
  {
    title: "시스템",
    icon: "heroicons-outline:cog",
    isHide: false,
    isMultiple: true,
    child: [
      {
        childtitle: "코드관리",
        multi_menu: [
          {
            multiTitle: "공통코드",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "메뉴권한",
        multi_menu: [
          {
            multiTitle: "메뉴관리",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "사용자",
        multi_menu: [
          {
            multiTitle: "팀(파트)",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "사용자",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "이력조회",
        multi_menu: [
          {
            multiTitle: "",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "전문관리",
        multi_menu: [
          {
            multiTitle: "",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "배치관리",
        multi_menu: [
          {
            multiTitle: "",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "개인정보파기관리",
        multi_menu: [
          {
            multiTitle: "",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "공공마이데이터",
        multi_menu: [
          {
            multiTitle: "",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
    ],
  },
  {
    title: "기업금융",
    icon: "heroicons-outline:home",
    isHide: false,
    isMultiple: true,
    child: [
      {
        childtitle: "홈",
        multi_menu: [
          {
            multiTitle: "",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "고객관리",
        multi_menu: [
          {
            multiTitle: "고객목록",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "사업관리",
        multi_menu: [
          {
            multiTitle: "사업목록",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "기타안건목록",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "신청관리",
        multi_menu: [
          {
            multiTitle: "신청목록",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "부의목록",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "심의목록",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "심의결과목록",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "승인목록",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "부결목록",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "계좌연결대상목록",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "통합목록",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "계정관리",
        multi_menu: [
          {
            multiTitle: "대출계좌목록",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "유가증권계좌목록",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "DB정보관리",
        multi_menu: [
          {
            multiTitle: "원장조회(여신)",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "원장조회(유가증권)",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "문서관리목록",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "기준항목관리",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "PF현황 엑셀업로드",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "자산건전성 엑셀업로드",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "심의위원회관리",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "리스크평가 엑셀업로드",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "사업유형코드관리",
            multiLink: "",
            multiElement: null,
          },
        ],
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
