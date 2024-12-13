
import { createSkill } from "../../repositories/skills";

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  return await createSkill(body);
});