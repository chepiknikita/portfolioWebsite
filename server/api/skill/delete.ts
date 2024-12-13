import { deleteSkill, findSkill } from "../../repositories/skills";

export default defineEventHandler(async (event) => {
  const body = await readBody<{ id: number }>(event);
  const skill = await findSkill(body.id);
  //TODO: обработка ошибки
  if (skill) {
    return await deleteSkill(skill.id);
  }
});