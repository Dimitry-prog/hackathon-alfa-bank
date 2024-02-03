export type PdpType = {
  id: number;
  goal: string;
  starting_date: string;
  deadline: string;
  user_id: number;
  tasks: Task[];
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

export type Task = {
  id: number;
  title: string;
  starting_date: string;
  deadline: string;
  pdp_id: number;
  type: {
    id: number;
    value: string;
  };
  status: {
    id: number;
    value: string;
  };
};
