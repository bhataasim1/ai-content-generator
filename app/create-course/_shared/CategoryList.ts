type CategoryListType = {
  id: number;
  name: string;
  icon: string;
  prompt: string;
};

export const categoryList: CategoryListType[] = [
  {
    id: 1,
    name: "Programming",
    icon: "https://plus.unsplash.com/premium_vector-1682299635821-ba03e8c5a94d?q=80&w=3580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    prompt: "development",
  },
  {
    id: 2,
    name: "Business",
    icon: "https://plus.unsplash.com/premium_vector-1710425435145-7f4f0b49edcf?q=80&w=3410&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    prompt: "business",
  },
  {
    id: 3,
    name: "Finance & Accounting",
    icon: "https://plus.unsplash.com/premium_vector-1705741561303-b811bea523bc?q=80&w=3600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    prompt: "finance",
  },
];
