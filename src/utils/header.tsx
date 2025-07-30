type NavItem = {
  heading: string;
  [key: string]: any; // allows other optional properties
};


export const getNav = (list: NavItem[], key: string): NavItem | undefined => {
  return list.find((item) => item.heading === key);
};
