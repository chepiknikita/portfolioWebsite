import { Skill } from "@prisma/client";
import prisma from "~/prisma/client";

export async function getSkills() {
  return await prisma.skill.findMany();
}

export async function createSkill(data: any) {
  return await prisma.skill.create({
    data: {
      title: data.title,
      content: data.content,
    },
  });
}

export async function editSkill(data: any) {
  return await prisma.skill.update({
    where: {
      id: data.id,
    },
    data: {
      title: data.title,
      content: data.content,
    },
  });
}

export async function deleteSkill(skillId: number) {
  return await prisma.skill.delete({
    where: {
      id: skillId,
    },
  });
}

export async function findSkill(id: number): Promise<Skill | null> {
  return await prisma.skill.findUnique({
    where: {
      id: id,
    },
  });
}
