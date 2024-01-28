export type PdpType = {
  id: number;
  goal: string;
  deadline: string;
  user_id: number;
  tasks: null;
  done: number;
  total: number;
};

export type UpdatePdpType = {
  pdpId: number;
  body: {
    goal: string;
    deadline: string;
  };
};
