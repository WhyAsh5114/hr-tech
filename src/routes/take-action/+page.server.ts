import { employeeData } from "$lib/data";

export const load = async ({ parent }) => {
  const { employeeData: hiringEmployees } = await parent();
  const currentEmployees = employeeData;

  return { currentEmployees, hiringEmployees };
};
