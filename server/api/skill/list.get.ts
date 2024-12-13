import { getSkills } from "../../repositories/skills";

export default defineEventHandler(async () => {
  return await getSkills();
});