import type { Tarefa } from "@/types/Tarefa";

export function diffTarefas(oldList: Tarefa[], newList: Tarefa[]) {
    const oldMap = new Map(oldList.filter(t => t.id).map(t => [t.id!, t]))
    const newMap = new Map(newList.filter(t => t.id).map(t => [t.id!, t]))

    const toCreate = newList.filter(t => !t.id);
    const toUpdate = newList.filter(t => t.id && JSON.stringify(t) !== JSON.stringify(oldMap.get(t.id!)));
    const toDelete = oldList.filter(t => t.id && !newMap.has(t.id!));

    return { toCreate, toUpdate, toDelete };
};
