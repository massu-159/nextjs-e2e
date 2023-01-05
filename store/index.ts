import { Task } from '@prisma/client'
import create from 'zustand/react'

type EditedTask = Omit<Task, 'createdAt' | 'updatedAt' | 'userId'>

type State = {
  editedTask: EditedTask
  updatedEditedTask: (payload: EditedTask) => void
  resetEditedTask: () => void
}

const useStore = create<State>((set) => ({
  editedTask: { id: '', title: '', completed: false },
  updatedEditedTask: (payload) =>
    set({
      editedTask: payload,
    }),
  resetEditedTask: () =>
    set({
      editedTask: { id: '', title: '', completed: false },
    }),
}))

export default useStore