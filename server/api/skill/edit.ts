import { editSkill, findSkill } from "../../repositories/skills";

export default defineEventHandler(async (event) => {
  const body = await readBody<{ id: number, title: string, content: string[] }>(event);
  const skill = await findSkill(body.id);
  if (skill) {
    skill.title = body.title;
    skill.content = body.content;
  }
  return await editSkill(skill);
});