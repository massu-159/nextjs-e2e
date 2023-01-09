import React, { Suspense } from 'react'
import Spinner from '../components/spinner'
import TaskEdit from '../components/task-edit'
import TaskList from '../components/task-list'

export default function TaskCrudLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="flex">
      <aside className={`h-[calc(100vh-64px)] w-1/4 bg-gray-200`}>
        <TaskEdit></TaskEdit>
        <Suspense fallback={<Spinner></Spinner>}>
          {/* @ts-expect-error Async Server Component */}
          <TaskList></TaskList>
        </Suspense>
      </aside>
      <main className="flex flex-1 justify-center">{children}</main>
    </section>
  )
}
