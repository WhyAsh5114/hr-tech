import { employeeData } from "$lib/data";

export const load = async ({ parent, url }) => {
  const { employeeData: hiringEmployees } = await parent();
  const currentEmployees = employeeData;

  return {
    currentEmployees,
    hiringEmployees,
    toEmail: url.searchParams.get("to") ?? undefined,
    toName: url.searchParams.get("name") ?? undefined,
  };
};
