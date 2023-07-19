import { environment } from 'src/environments/environment';
import { UserRole } from '../shared/auth.roles';
const adminRoot = environment.adminRoot;

export interface IMenuItem {
  id?: string;
  icon?: string;
  label: string;
  to: string;
  newWindow?: boolean;
  subs?: IMenuItem[];
  roles?: UserRole[];
}

const data: IMenuItem[] = [
  {
    icon: 'iconsminds-line-chart-1',
    label: 'menu.dashboard',
    to: `${adminRoot}/dashboard`,
    roles: [UserRole.Admin, UserRole.Editor],
    subs: [
      {
        icon: 'simple-icon-user',
        label: 'menu.dashboard.courses',
        to: `${adminRoot}/dashboard/courses`,
        // roles: [UserRole.Admin],
      },
      {
        icon: 'simple-icon-notebook',
        label: 'menu.dashboard.students',
        to: `${adminRoot}/dashboard/students`,
        // roles: [UserRole.Admin],
      },
    ],
  },
  {
    icon: 'iconsminds-megaphone',
    label: 'menu.chat-bot',
    to: `${adminRoot}/chat-bot`,
    roles: [UserRole.Admin, UserRole.Editor],
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.sub-menu1',
        to: `${adminRoot}/chat-bot/sub-menu1`,
        roles: [UserRole.Admin],
      },
    ],
  },
  {
    icon: 'iconsminds-library',
    label: 'menu.library',
    to: `${adminRoot}/library`,
    roles: [UserRole.Admin, UserRole.Editor],
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.library',
        to: `${adminRoot}/library/library`,
        roles: [UserRole.Admin],
      },
    ],
  },
  // {
  //   icon: 'iconsminds-air-balloon-1',
  //   label: 'menu.vien',
  //   to: `${adminRoot}/vien`,
  //   roles: [UserRole.Admin, UserRole.Editor],
  //   subs: [
  //     {
  //       icon: 'simple-icon-paper-plane',
  //       label: 'menu.start',
  //       to: `${adminRoot}/vien/start`,
  //       // roles: [UserRole.Admin],
  //     },
  //   ],
  // },
  // {
  //   icon: 'iconsminds-three-arrow-fork',
  //   label: 'menu.second-menu',
  //   to: `${adminRoot}/second-menu`,
  //   // roles: [UserRole.Editor],
  //   subs: [
  //     {
  //       icon: 'simple-icon-paper-plane',
  //       label: 'menu.second',
  //       to: `${adminRoot}/second-menu/second`,
  //     },
  //   ],
  // },
  // {
  //   icon: 'iconsminds-bucket',
  //   label: 'menu.blank-page',
  //   to: `${adminRoot}/blank-page`,
  // },
  // {
  //   icon: 'iconsminds-library',
  //   label: 'menu.docs',
  //   to: 'https://vien-docs.coloredstrategies.com/',
  //   newWindow: true,
  // },
];
export default data;
